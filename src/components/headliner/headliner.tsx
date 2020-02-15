import React from 'react';
import RightPic from '../../assets/images/headliner-right-ad.png';
import LeftPic from '../../assets/images/headliner-left-ad.png';
import HeadlinerCarousel from './headliner-carousel/headliner-carousel';
import './headliner.styles.css';

const Headliner = () => {
	return (
		<>
			<HeadlinerCarousel />
			<div className="headliner-outter">
				<div className="headliner-div">
					<div className="headliner-container">
						<img src={RightPic} alt="Coke" className="headliner-right" />
						<img src={LeftPic} alt="Coke" className="headliner-left" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Headliner;
