import React from 'react';
import Right from '../../assets/images/headliner-right.jpg';
import Left from '../../assets/images/headliner-left.jpg';
import './headliner.styles.css';
import HeadlinerCarousel from './headliner-carousel/headliner-carousel';

const Headliner = () => {
	return (
		<>
			<HeadlinerCarousel />
			<div className="headliner-outter">
				<div className="headliner-div">
					<div className="headliner-container">
						<img src={Left} alt="Coke" className="headliner-left" />
						<img src={Right} alt="Coke" className="headliner-right" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Headliner;
