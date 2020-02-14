import React from 'react';
import Player1 from '../../../../assets/images/Video-Player-Preview-1.jpg';
import Player2 from '../../../../assets/images/Video-Player-Preview-2.jpg';
import Player3 from '../../../../assets/images/Video-Player-Preview-3.jpg';
import Player4 from '../../../../assets/images/Video-Player-Preview-4.jpg';
import HeadlinerPreview from '../headliner-previews/headliner-preview-template';
import HeadlinerFullSVG from '../../headliner-video-svg/headliner-full-svg/headliner-full-svg';
import HeadlinerPlaySVG from '../../headliner-video-svg/headliner-play-svg/headliner-play-svg';
import HeadlinerVolumeSVG from '../../headliner-video-svg/headliner-volume-svg';
import HeadlinerSettingsSVG from '../../headliner-video-svg/headliner-settings-svg/headliner-settings-svg';
import '../../headliner.styles.css';
import HeadlinerPlayLargeSVG from '../../headliner-video-svg/headliner-play-svg/headliner-playLarge-svg';
import StatusIsLive from '../../status-is-live-indicator/StatusIsLive';

const HeadlinerVideos = () => {
	return (
		<div className="headliner-main-videos">
			<div className="video-previews-one">
				<HeadlinerPreview image={Player2} alt="Preview Image" />
			</div>
			<div className="video-previews-two">
				<HeadlinerPreview image={Player4} alt="Preview Image" />
			</div>
			<div className="video-previews-three">
				<HeadlinerPreview image={Player3} alt="Preview Image" />
			</div>
			<div className="video-previews-four">
				<HeadlinerPreview image={Player1} alt="Preview Image" />
			</div>
			<div className="video-previews-five">
				<StatusIsLive />
				<HeadlinerFullSVG />
				<HeadlinerPlaySVG />
				<HeadlinerPlayLargeSVG />>
				<HeadlinerVolumeSVG />
				<HeadlinerSettingsSVG />
				<HeadlinerPlaySVG />
			</div>
		</div>
	);
};

export default HeadlinerVideos;
