import React from 'react';
import './recommended.styles.css';
import RecommendedCard from './recommended-card-template/recommended-card-template';

const Recommended = () => {
	return (
		<div className="recommended-outter">
			<div className="suggested-header-div">
				<p className="suggested-header-container">
					<span className="recommended-span">Recommended</span>
					<span className="recommended-live">live channels</span>
				</p>
			</div>
			<div className="recommended-inner-margin">
				<RecommendedCard />
			</div>
		</div>
	);
};

export default Recommended;
