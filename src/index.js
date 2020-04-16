import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import GlobalStyle from './base-styles.js';

const customHistory = createBrowserHistory();

const render = () => {
	ReactDOM.render(
		<Router history={customHistory}>
			<App />
		</Router>
		, document.getElementById("app")
	);
}

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    render();
  }, false);
} else {
  render();
}