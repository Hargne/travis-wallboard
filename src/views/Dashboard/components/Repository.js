import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { inject, observer } from 'mobx-react';
import { props as projectStoreProps } from 'store/modules/project.store';

import { Heading, Loader } from 'components';
import RepositoryStyle from './Repository.style';

const Repository = inject((store) => ({
	projectStore: store.rootStore.project,
}))(observer(({ id, projectStore }) => {
	const fetchBranches = () => {
		const { run: fetchRepositoryBranches } = projectStore.methods.fetchRepositoryBranches;
		fetchRepositoryBranches({ repoId: id, branches: ['dev', 'qa', 'master'] })
			.catch(() => {});
	};

	useEffect(() => {
		fetchBranches();
	}, []);

	return (
		<>
			{projectStore.methods.fetchRepositoryBranches.isLoading && (
				<Loader />
			)}
			<Heading size="h4">{projectStore.repositoryName(id)}</Heading>
			<RepositoryStyle.BuildContainer>
				{projectStore.repositoryBranches(id).map((build, i) => (
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
	projectStore: projectStoreProps,
};

export default Repository;
