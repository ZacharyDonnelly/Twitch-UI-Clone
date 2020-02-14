import React from 'react';
import Player1 from '../../../../assets/images/Video-Player-Preview-1.jpg';
import Player2 from '../../../../assets/images/Video-Player-Preview-2.jpg';
import Player3 from '../../../../assets/images/Video-Player-Preview-3.jpg';
import Player4 from '../../../../assets/images/Video-Player-Preview-4.jpg';
import HeadlinerPreview from '../headliner-previews/headliner-preview-template';
import '../../headliner.styles.css';

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
				<HeadlinerPreview alt="Preview Image" />
			</div>
		</div>
	);
};

export default HeadlinerVideos;
