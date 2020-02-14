import React from 'react';
import StatusIsLive from '../../headliner/status-is-live-indicator/StatusIsLive';
import MetadataButton from '../../headliner/headliner-main-video-sidebar/metadata-button/metadata-button';

interface Recommended {
	title: string;
	user: string;
	game: string;
	small: string;
	large: string;
}

const RecommendedCard = ({ title, user, game, small, large }: Recommended) => (
	<div className="recommended-card-outter">
		<div className="recommended-card-inner">
			<StatusIsLive />
			<div className="recommended-card-inner-large">
				<img src={large} alt="test" className="recommended-card-large-image" />
			</div>
			<img src={small} alt="test" className="recommended-card-small-image" />
			<div className="card-subheader-div">
				<h3 className="card-subheader">{title}</h3>
			</div>
			<div className="recommended-subtitles">
				<p className="recommended-subtitle-user">{user}</p>
				<p className="recommended-subtitle-game">{game}</p>
			</div>
			<div className="recommended-subtitle-btn">
				<MetadataButton text="English" classes="metadata-button-text" />
			</div>
		</div>
	</div>
);

export default RecommendedCard;
