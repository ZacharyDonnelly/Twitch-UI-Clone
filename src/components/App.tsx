import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Directory from './Directory';

const App = () => (
	<BrowserRouter>
		<Route exact path="/" component={Dashboard} />
		<Route exact path="/directory" component={Directory} />
	</BrowserRouter>
);

export default App;
