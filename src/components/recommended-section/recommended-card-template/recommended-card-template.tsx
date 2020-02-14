import React from 'react';
import Test from '../../../assets/images/recommended-card-1.png';
import Tester from '../../../assets/images/large-card-1.jpg';

const RecommendedCard = () => (
	<div className="recommended-card-outter">
		<div className="recommended-card-inner">
			<div className="recommended-card-inner-large">
				<img src={Tester} alt="test" className="recommended-card-large-image" />
			</div>
			<img src={Test} alt="test" className="recommended-card-small-image" />
		</div>
	</div>
);

export default RecommendedCard;
