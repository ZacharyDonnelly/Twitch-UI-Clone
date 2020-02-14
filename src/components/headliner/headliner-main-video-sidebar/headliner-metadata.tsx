import React from 'react';
import MetaImage from '../../../assets/images/metadata-img.png';
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
						<a
							className="metadata-button-text"
							data-a-target="English"
							aria-label="English"
							href="/directory/all/tags/6ea6bca4-4712-4ab9-a906-e3336a9d8039">
							<div className="metadata-text-holder">English</div>
						</a>
					</div>
					<div className="metadata-button-inner inner-two">
						<a
							className="metadata-button-text text-two"
							data-a-target="English"
							aria-label="English"
							href="/directory/all/tags/6ea6bca4-4712-4ab9-a906-e3336a9d8039">
							<div className="metadata-text-holder">Meme Runs</div>
						</a>
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
