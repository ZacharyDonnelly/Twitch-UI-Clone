import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';

const App = () => (
	<BrowserRouter>
		<Route exact path="/" component={Navbar} />
	</BrowserRouter>
);

export default App;
