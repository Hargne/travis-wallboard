import React from 'react';
import { inject, observer } from 'mobx-react';
import { ViewWrapper, Auth, Grid } from 'components';

import Repository from './components/Repository';

const Dashboard = inject((store) => ({
	authStore: store.rootStore.auth,
}))(observer(({ authStore }) => {
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
			{!authStore.accessToken && (
				<Grid.Row>
					<Grid.Column />
					<Grid.Column flex={2}>
						<Auth />
					</Grid.Column>
					<Grid.Column />
				</Grid.Row>
			)}
			{authStore.accessToken && (
				<>
					{repositories.map((repo, i) => (
						<Repository
							key={i}
							id={repo.id}
							branches={repo.branches}
						/>
					))}
				</>
			)}
		</ViewWrapper>
	);
}));

export default Dashboard;
