import React from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Headliner from '../headliner/headliner';
import Recommended from '../recommended-section/recommended';
import RecommendedCategoryChatting from '../recommended-category/recommended-category-chatting';
import ComponentSeparator from './component-separators/component-separator';
import SecondSeparator from './component-separators/second-separator';
import ThirdSeparator from './component-separators/third-separator';
import Categories from '../category-section/categories';
import RecommendedCategoryFortnite from '../recommended-category/recommended-category-fortnite';
import RecommendedCategoryEscape from '../recommended-category/recommended-category-escape';
import FourthSeparator from './component-separators/fourth-separator';
import FifthSeparator from './component-separators/fifth-separator';

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
			<RecommendedCategoryChatting />
			<ThirdSeparator />
			<RecommendedCategoryFortnite />
			<FourthSeparator />
			<RecommendedCategoryEscape />
			<FifthSeparator />
		</>
	);
};

export default Dashboard;
