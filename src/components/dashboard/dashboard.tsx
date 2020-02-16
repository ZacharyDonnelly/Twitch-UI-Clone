import React from 'react';
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import Headliner from '../headliner/headliner';
import Recommended from '../recommended-section/recommended';
import RecommendedCategory from '../recommended-category/recommended-category';
import ComponentSeparator from './component-seperators/component-seperators';
import SecondSeparator from './component-seperators/second-seperator';
import ThirdSeperator from './component-seperators/third-seperator';
import Categories from '../category-section/categories';
import RecommendedCategoryTwo from '../recommended-category/recommended-category-two';
import RecommendedThree from '../recommended-category/recommended-category-three';
import FourthSeparator from './component-seperators/fourth-seperator';
import FifthSeperator from './component-seperators/fifth-seperator';

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
			<ThirdSeperator />
			<RecommendedCategoryTwo />
			<FourthSeparator />
			<RecommendedThree />
			<FifthSeperator />
		</>
	);
};

export default Dashboard;
