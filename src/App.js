import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'style/global.style';

import Dashboard from 'views/Dashboard/Dashboard.view';

function App() {
	return (
		<Router>
			<div style={{ height: '100%' }}>
				<GlobalStyle />
				<Switch>
					<Route
						exact
						path="/"
						component={Dashboard}
					/>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
