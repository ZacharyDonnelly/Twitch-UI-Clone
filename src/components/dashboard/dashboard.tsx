import React from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Headliner from '../headliner/headliner';
import Recommended from '../recommended-section/recommended';
import RecommendedCategory from '../recommended-category/recommended-category';
import ComponentSeparator from './component-seperators/component-seperators';
import SecondSeparator from './component-seperators/second-seperator';
import Categories from '../category-section/categories';

const Dashboard = () => {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Headliner />
			<Recommended />
			<ComponentSeparator />
			<Categories />
			<SecondSeparator />
			<RecommendedCategory />
		</>
	);
};

export default Dashboard;
