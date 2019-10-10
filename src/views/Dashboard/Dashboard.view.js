import React from 'react';
import { inject, observer } from 'mobx-react';
import { ViewWrapper, Auth, Grid } from 'components';

import Repository from './components/Repository';

const Dashboard = inject((store) => ({
	authStore: store.rootStore.auth,
}))(observer(({ authStore }) => (
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
			<Repository
				id="2228645"
			/>
		)}
	</ViewWrapper>
)));

export default Dashboard;
