import React from 'react';
import { inject, observer } from 'mobx-react';
import { ViewWrapper } from 'components';

import Repository from './components/Repository';

const Dashboard = inject((store) => ({
	authStore: store.rootStore.auth,
}))(observer(() => {
	const repositories = [
		{
			id: '2228645',
		},
		{
			id: '3272781',
			branches: ['master', 'qa', 'prod'],
		},
		{
			id: '9768380',
			branches: ['master', 'qa', 'prod'],
		},
	];

	return (
		<ViewWrapper>
			<>
				{repositories.map((repo, i) => (
					<Repository
						key={i}
						id={repo.id}
						branches={repo.branches}
					/>
				))}
			</>
		</ViewWrapper>
	);
}));

export default Dashboard;
