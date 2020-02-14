import React from 'react';
import '../headliner.styles.css';

const StatusIsLive = () => {
	return (
		<div className="live-indicator-container">
			<div className="live-indicator-div">
				<p className="live-indicator" style={{ textTransform: 'uppercase' }}>
					LIVE
				</p>
			</div>
		</div>
	);
};

export default StatusIsLive;
