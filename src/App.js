import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import GlobalStyle from 'style/global.style';

import ProtectedRoute from 'hoc-components/ProtectedRoute';

import Dashboard from 'views/Dashboard/Dashboard.view';
import Settings from 'views/Settings/Settings.view';
import Login from 'views/Login/Login.view';

const App = inject((store) => ({
	authStore: store.rootStore.auth,
}))(observer(({ authStore }) => {
	return (
		<Router>
			<div style={{ height: '100%' }}>
				<GlobalStyle />
				<Switch>
					<ProtectedRoute
						exact
						path="/"
						component={Dashboard}
						allowAccess={authStore.isLoggedIn}
						readyToEvaluate
					/>
					<ProtectedRoute
						path="/settings"
						component={Settings}
						allowAccess={authStore.isLoggedIn}
						readyToEvaluate
					/>
					<ProtectedRoute
						path="/login"
						component={Login}
						redirectTo="/"
						allowAccess={!authStore.isLoggedIn}
						readyToEvaluate
					/>
				</Switch>
			</div>
		</Router>
	);
}));

export default App;
