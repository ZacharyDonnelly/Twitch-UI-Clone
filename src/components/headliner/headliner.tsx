import React from 'react';
import Right from '../../assets/images/headliner-right-backup.png';
import Left from '../../assets/images/headliner-left-backup.png';
import RightTwo from '../../assets/images/headliner-right.jpg';
import LeftTwo from '../../assets/images/headliner-left.jpg';
import HeadlinerCarousel from './headliner-carousel/headliner-carousel';
import './headliner.styles.css';

const Headliner = () => {
	return (
		<>
			<HeadlinerCarousel />
			<div className="headliner-outter">
				<div className="headliner-div">
					<div className="headliner-container">
						<img src={Right} alt="Coke" className="headliner-right" />
						<img src={Left} alt="Coke" className="headliner-left" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Headliner;
