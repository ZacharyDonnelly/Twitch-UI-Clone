import React from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Headliner from '../headliner/headliner';
import Recommended from '../recommended-section/recommended';
import ComponentSeparator from './component-seperators/component-seperators';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Headliner />
			<Recommended />
			<ComponentSeparator />
		</>
	);
};

export default Dashboard;
