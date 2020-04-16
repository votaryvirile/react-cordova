import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';

import Header from '../../components/Header';
import HomePage from '../../containers/HomePage/Loadable';
import Hire from '../../containers/Hire/Loadable';
import About from '../../containers/About/Loadable';
import {
	AppWrapper,
} from './styles';
import GlobalStyle from '../../base-styles.js';

function App() {
	return (
		<AppWrapper>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/hire' component={Hire} />
				<Route exact path='/about' component={About} />
			</Switch>
			<GlobalStyle />
		</AppWrapper>
	);
}

export default App;