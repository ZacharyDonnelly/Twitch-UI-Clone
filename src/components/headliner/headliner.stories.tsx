import React from 'react';
import Right from '../../assets/images/headliner-right.jpg';
import Left from '../../assets/images/headliner-left.jpg';
import Headliner from './headliner';
import './headliner.styles.css';

export default {
	title: 'Headliner',
	component: Headliner,
};

export const HeadlinerStory = () => {
	return (
		<div className="headliner-div">
			<div className="headliner-left">
				<img src={Left} alt="Coke" />
			</div>
			<div className="headliner-right">
				<img src={Right} alt="Coke" />
			</div>
		</div>
	);
};
