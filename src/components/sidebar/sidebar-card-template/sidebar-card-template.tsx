import React from 'react';
import '../sidebar.styles.css';

interface SidebarCard {
	src: string;
	title: string;
	game: string;
	count: string;
}

const SidebarCard = ({ src, title, game, count }: SidebarCard) => (
	<div className="sidebar-card">
		<figure className="image-container">
			<img className="image-card" src={src} alt={title} />
		</figure>
		<div className="sidebar-card-text">
			<p className="sidebar-card-title">{title}</p>
			<p className="sidebar-card-description">{game}</p>
		</div>
		<div className="viewer-count-div">
			<div className="status-div"></div>
			<div className="viewer-count">
				<span className="count">{count}k</span>
			</div>
		</div>
	</div>
);

export default SidebarCard;
