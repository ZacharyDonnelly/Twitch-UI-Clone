import React from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Headliner from '../headliner/headliner';
import Recommended from '../recommended-section/recommended';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Headliner />
			<Recommended />
		</>
	);
};

export default Dashboard;
