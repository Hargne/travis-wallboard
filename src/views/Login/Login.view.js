import React from 'react';
import { ViewWrapper, Auth, Grid } from 'components';

const LoginView = () => (
	<ViewWrapper>
		<Grid.Row>
			<Grid.Column />
			<Grid.Column flex={2}>
				<Auth />
			</Grid.Column>
			<Grid.Column />
		</Grid.Row>
	</ViewWrapper>
);

export default LoginView;
