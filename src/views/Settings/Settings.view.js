import React from 'react';
import { inject, observer } from 'mobx-react';
import { ViewWrapper, Heading, Grid } from 'components';

const Settings = inject((store) => ({
	authStore: store.rootStore.auth,
}))(observer(({ authStore }) => {
	return (
		<ViewWrapper>
			<>
				<Heading size="h1">
					Settings
				</Heading>
			</>
		</ViewWrapper>
	);
}));

export default Settings;
