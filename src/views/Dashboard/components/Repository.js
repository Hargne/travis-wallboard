import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { inject, observer } from 'mobx-react';
import { props as repositoryStoreProps } from 'store/modules/repository.store';

import { Heading, Loader } from 'components';
import RepositoryStyle from './Repository.style';

const Repository = inject((store) => ({
	repositoryStore: store.rootStore.repository,
}))(observer(({ id, repositoryStore }) => {
	const fetchBranches = () => {
		const { run: fetchRepositoryBranches } = repositoryStore.methods.fetchRepositoryBranches;
		fetchRepositoryBranches({ repoId: id, branches: ['dev', 'qa', 'master'] })
			.catch(() => {});
	};

	useEffect(() => {
		fetchBranches();
	}, []);

	return (
		<>
			{repositoryStore.methods.fetchRepositoryBranches.isLoading && (
				<Loader />
			)}
			<Heading size="h4">{repositoryStore.repositoryName(id)}</Heading>
			<RepositoryStyle.BuildContainer>
				{repositoryStore.repositoryBranches(id).map((build, i) => (
					<RepositoryStyle.Build state={build.last_build.state} key={i}>
						<RepositoryStyle.BuildBranch>
							{build.name}
						</RepositoryStyle.BuildBranch>
						<div>
							{build.last_build.finished_at}
						</div>
					</RepositoryStyle.Build>
				))}
			</RepositoryStyle.BuildContainer>
		</>
	);
}));

Repository.propTypes = {
	id: PropTypes.string,
	repositoryStore: repositoryStoreProps,
};

export default Repository;
