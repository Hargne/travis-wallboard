import { decorate, extendObservable, computed } from 'mobx';
import { createTransformer } from 'mobx-utils';
import axios from 'axios';
import StoreAction, { STATES, props as StoreActionProps } from 'store/storeaction';
import PropTypes from 'prop-types';
import { APIErrorHandler, GenerateHeaders } from 'store/utils';

class ProjectStore {
	constructor(rootStore) {
		this.rootStore = rootStore;
		extendObservable(this, {
			repositoryData: [],
		});

		this.methods = {
			fetchRepositoryBranches: new StoreAction(({ repoId, branches = ['dev', 'qa', 'master'] } = {}) => new Promise((Resolve, Reject) => {
				this.methods.fetchRepositoryBranches.updateState(STATES.LOADING);
				if (!repoId) {
					return Reject();
				}
				return axios.get(`https://api.travis-ci.com/repo/${repoId}/branches`, GenerateHeaders(this.rootStore.getAccessToken()))
					.then((response) => {
						this.methods.fetchRepositoryBranches.updateState(STATES.COMPLETE);
						// Filter out the branches we are looking for
						const filteredBranches = response.data.branches.filter((branch) => branches.includes(branch.name));
						// Find repository
						const repository = this.repositoryData.find((repo) => (repo.id === repoId));
						if (repository) {
							repository.branches = filteredBranches;
						} else {
							this.repositoryData.push({
								id: repoId,
								branches: filteredBranches,
							});
						}
						return Resolve(filteredBranches);
					})
					.catch((apiError) => {
						const errorMsg = APIErrorHandler({
							apiError,
							errorMessages: {
								401: 'Authorization required',
							},
						});
						this.methods.fetchRepositoryBranches.updateState(STATES.ERROR);
						return Reject(errorMsg);
					});
			})),
		};
	}

	get repositoryName() {
		return createTransformer((id) => {
			const repository = this.repositoryData.find((repo) => (repo.id === id));

			if (repository) {
				if (repository.branches.length > 0) {
					return repository.branches[0].repository.name;
				}
			}

			return null;
		});
	}

	get repositoryBranches() {
		return createTransformer((id) => {
			const repository = this.repositoryData.find((repo) => (repo.id === id));
			return repository ? repository.branches : [];
		});
	}
}
decorate(ProjectStore, {
	repositoryName: computed,
	repositoryBranches: computed,
});

export const props = PropTypes.shape({
	repositories: PropTypes.object,
	methods: PropTypes.shape({
		fetchRepositoryBranches: StoreActionProps,
	}),
});

export default ProjectStore;
