import React from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Headliner from '../headliner/headliner';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Headliner />
		</>
	);
};

export default Dashboard;
