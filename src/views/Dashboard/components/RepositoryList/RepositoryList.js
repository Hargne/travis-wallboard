import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { inject, observer } from 'mobx-react';
import { props as repositoryStoreProps } from 'store/modules/repository.store';

import { Loader } from 'components';

const Repository = inject((store) => ({
	repositoryStore: store.rootStore.repository,
}))(observer(({ repositoryStore }) => {
	const fetchRepos = () => {
		const { run: fetchRepositories } = repositoryStore.methods.fetchRepositories;
		fetchRepositories()
			.catch(() => {});
	};

	useEffect(() => {
		fetchRepos();
	}, []);

	return (
		<>
			{repositoryStore.methods.fetchRepositories.isLoading && (
				<Loader />
			)}
			<div>
				{repositoryStore.userRepositories.map((repo, i) => (
					<div key={i}>
						<b>{repo.name}</b>
						<div>
							{repo.description && `(${repo.description})`}
						</div>
					</div>
				))}
			</div>
		</>
	);
}));

Repository.propTypes = {
	id: PropTypes.string,
	repositoryStore: repositoryStoreProps,
};

export default Repository;
