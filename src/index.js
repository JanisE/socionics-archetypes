import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter, Route, Switch} from 'react-router-dom';

import './i18n';

ReactDOM.render(
	<HashRouter basename="/">
		<Switch>
			<Route path="/:properties/:relationsFor" component={App} />
			<Route path="/:properties" component={App} />
			<Route path="//:relationsFor" component={App} />
			<Route path="/" component={App} />
		</Switch>
	</HashRouter>,
	document.getElementById('root')
);

registerServiceWorker();
