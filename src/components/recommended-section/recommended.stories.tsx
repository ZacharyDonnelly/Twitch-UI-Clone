import React from 'react';
import Recommended from './recommended';
import './recommended.styles.css';

export default {
	title: 'Recommended',
	component: Recommended,
};

export const RecommendedStory = () => {
	return (
		<>
			<div className="suggested-header-div">
				<p className="suggested-header-container">
					<span className="recommended-span">Recommended</span>
					<span className="recommended-live">live channels</span>
				</p>
			</div>
			<div className="recommended-outter">
				<div className="recommended-inner-margin"></div>
			</div>
		</>
	);
};
