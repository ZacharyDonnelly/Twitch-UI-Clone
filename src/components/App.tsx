import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';

const App = () => (
	<BrowserRouter>
		<Route exact path="/" component={Dashboard} />
	</BrowserRouter>
);

export default App;
