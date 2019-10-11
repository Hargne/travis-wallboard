import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as MobXProvider } from 'mobx-react';
import App from './App';
import Store from './store';
import * as serviceWorker from './serviceWorker';

import '@fortawesome/fontawesome-free/css/all.min.css';

// Setup MobX
const rootStore = new Store();

ReactDOM.render((
	<MobXProvider rootStore={rootStore}>
		<App />
	</MobXProvider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
