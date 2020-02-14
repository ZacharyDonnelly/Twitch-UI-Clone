import React from 'react';
import '../../headliner.styles.css';

type HeadlinerProps = {
	image?: string;
	alt: string;
};

const HeadlinerPreview = ({ image, alt }: HeadlinerProps) => {
	return (
		<div className="headliner-preview-container">
			<div className="headliner-preview">
				<div className="headliner-preview-img-div">
					<img src={image} alt={alt} className="headliner-preview-img" />
				</div>
			</div>
		</div>
	);
};

export default HeadlinerPreview;
