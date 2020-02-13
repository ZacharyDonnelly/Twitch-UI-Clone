import React from 'react';
import Summit from '../../assets/images/summit1g-card.png';
import Tyler from '../../assets/images/loltyler1.png';
import Myth from '../../assets/images/myth-card.png';
import Method from '../../assets/images/method-card.png';
import LCK from '../../assets/images/lck-card.png';
import Dizzy from '../../assets/images/dizzy-card.png';
import MrFresh from '../../assets/images/mrfreshian.png';
import Sneaky from '../../assets/images/sneakylol.-card.png';
import Hasan from '../../assets/images/hasanabi-card.png';
import Lord from '../../assets/images/lord_kebun-card.png';
import './sidebar.styles.css';

const Sidebar = () => {
	return (
		<div className="sidebar-main">
			<div className="sidebar-header-container">
				<h5 className="sidebar-header">Recommended channels</h5>
				<button className="sidebar-arrow-btn">
					<svg
						className="arrow-svg-left"
						width="20px"
						height="20px"
						version="1.1"
						viewBox="0 0 20 20"
						x="0px"
						y="0px">
						<g>
							<path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
						</g>
					</svg>
				</button>
			</div>
			<div className="sidebar-container">
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={Summit} alt="summit 1g" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">summit1g</p>
						<p className="sidebar-card-description">Escape From Tarkov</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">36k</span>
						</div>
					</div>
				</div>
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={Tyler} alt="Tyler" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">loltyler1</p>
						<p className="sidebar-card-description">League of Legends</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">27.3k</span>
						</div>
					</div>
				</div>
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={Myth} alt="Myth" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">Myth</p>
						<p className="sidebar-card-description">Fortnite</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">4.8k</span>
						</div>
					</div>
				</div>
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={Method} alt="Method" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">Method</p>
						<p className="sidebar-card-description">World of Warcraft</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">622</span>
						</div>
					</div>
				</div>
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={LCK} alt="LCK" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">LCK</p>
						<p className="sidebar-card-description">League of Legends</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">11k</span>
						</div>
					</div>
				</div>
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={Dizzy} alt="Dizzy" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">dizzy</p>
						<p className="sidebar-card-description">
							Counter-Strike: Global Offensive
						</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">1.9k</span>
						</div>
					</div>
				</div>
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={MrFresh} alt="MrFresh" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">mrfreshian</p>
						<p className="sidebar-card-description">Fortnite</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">5.1k</span>
						</div>
					</div>
				</div>
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={Sneaky} alt="Sneaky" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">sneakylol</p>
						<p className="sidebar-card-description">Escape From Tarkov</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">5.1k</span>
						</div>
					</div>
				</div>
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={Lord} alt="Lord" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">Lord_Kebun</p>
						<p className="sidebar-card-description">Escape From Tarkov</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">6.6k</span>
						</div>
					</div>
				</div>
				<div className="sidebar-card">
					<figure className="image-container">
						<img className="image-card" src={Hasan} alt="Hasan" />
					</figure>
					<div className="sidebar-card-text">
						<p className="sidebar-card-title">hasanabi</p>
						<p className="sidebar-card-description">Just Chatting</p>
					</div>
					<div className="viewer-count-div">
						<div className="status-div"></div>
						<div className="viewer-count">
							<span className="count">2.9k</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
