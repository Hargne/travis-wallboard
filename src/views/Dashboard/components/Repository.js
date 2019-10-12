import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { inject, observer } from 'mobx-react';
import { props as repositoryStoreProps } from 'store/modules/repository.store';

import { Heading, Loader, Grid } from 'components';

import Style from './Repository.style';
import BranchBuild from './BranchBuild/BranchBuild';

const Repository = inject((store) => ({
	userStore: store.rootStore.user,
	repositoryStore: store.rootStore.repository,
}))(observer(({
	id,
	branches,
	userStore,
	repositoryStore,
}) => {
	const getBranches = () => {
		const { run: fetchRepositoryBranches } = repositoryStore.methods.fetchRepositoryBranches;
		return fetchRepositoryBranches({ repoId: id, branches: branches || ['dev', 'qa', 'master'] })
			.catch(() => {});
	};

	const getLatestBuild = (buildId) => {
		const { run: fetchBuild } = repositoryStore.methods.fetchBuild;
		return fetchBuild({ buildId });
	};

	useEffect(() => {
		getBranches();
	}, []);

	return (
		<Style.Container>
			{repositoryStore.methods.fetchRepositoryBranches.isLoading && (
				<Loader />
			)}
			<Heading
				noMargin
				size="h3"
			>
				{repositoryStore.repositoryName(id)}
			</Heading>
			<Grid.Row>
				{repositoryStore.repositoryBranches(id).map((branch, i) => (
					<Grid.Column flex={0} key={i}>
						<BranchBuild
							key={i}
							id={branch.last_build.id}
							fetchLatestBuild={getLatestBuild}
							refreshInterval={userStore.getRefreshInterval}
						/>
					</Grid.Column>
				))}
			</Grid.Row>
		</Style.Container>
	);
}));

Repository.propTypes = {
	id: PropTypes.string,
	branches: PropTypes.arrayOf(PropTypes.string),
	repositoryStore: repositoryStoreProps,
};

export default Repository;
