import React from 'react';
import '../../headliner.styles.css';

interface MetaData {
	text: string;
	classes: string;
}

const MetadataButton = ({ classes, text }: MetaData) => (
	<>
		<a
			className={classes}
			data-a-target="English"
			aria-label="English"
			href="/directory/all/tags/6ea6bca4-4712-4ab9-a906-e3336a9d8039">
			<div className="metadata-text-holder">{text}</div>
		</a>
	</>
);

export default MetadataButton;
