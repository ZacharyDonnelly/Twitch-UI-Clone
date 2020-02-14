import React from 'react';
import StatusIsLive from './StatusIsLive';
import '../headliner.styles.css';

export default {
	component: StatusIsLive,
	title: 'StatusIsLive',
};

export const StatusIsLiveStory = () => (
	<div className="live-indicator-container">
		<div className="live-indicator-div">
			<p className="live-indicator">LIVE</p>
		</div>
	</div>
);
