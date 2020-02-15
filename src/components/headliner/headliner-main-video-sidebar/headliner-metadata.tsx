import React from 'react';
import MetaImage from '../../../assets/images/metadata-img.png';
import MetadataButton from './metadata-button/metadata-button';
import '../headliner.styles.css';

const HeadlinerMetadata = () => {
	return (
		<div className="meta-outter">
			<div className="meta-inner">
				<div className="metadata-user-img">
					<img
						className="metadata-img"
						alt="TheNo1Alex Avatar"
						src={MetaImage}
					/>
				</div>
				<div className="metadata-user">
					<p className="metadata-username">TheNo1Alex</p>
					<p className="metadata-game">Wolcen: Lords of Mayhem</p>
					<p className="metadata-viewer">966 viewers</p>
				</div>
				<div className="metadata-buttons">
					<div className="metadata-button-inner">
						<MetadataButton text="English" classes="metadata-button-text" />
					</div>
					<div className="metadata-button-inner inner-two">
						<MetadataButton
							classes="metadata-button-text text-two"
							text="Meme Runs"
						/>
					</div>
				</div>
				<div
					className="metadata-description"
					title="What’s that?” I hear you asking. Games? Check! Cooking? Check! Traveling vlogs? Check! Washing dishes?… Sure, if that's your thing. And many more! So what are you waiting for? JOIN THE CUL-CLUB NOW!">
					What’s that?” I hear you asking. Games? Check! Cooking? Check!
					Traveling vlogs? Check! Washing dishes?… Sure, if that's your thing.
					And many more! So what are you waiting for? JOIN THE CUL-CLUB NOW!
				</div>
			</div>
		</div>
	);
};

export default HeadlinerMetadata;
