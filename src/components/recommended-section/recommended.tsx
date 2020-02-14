import React from 'react';
import Xq from '../../assets/images/recommended-card-5.png';
import Tim from '../../assets/images/recommended-card-2.png';
import Mercs from '../../assets/images/recommended-card-3.png';
import Rocket from '../../assets/images/recommended-card-4.png';
import Rainbow from '../../assets/images/recommended-card-1.png';
import XqLarge from '../../assets/images/large-card-1.jpg';
import TimLarge from '../../assets/images/large-card-2-440x248.jpg';
import MercsLarge from '../../assets/images/large-card-3.jpg';
import RocketLarge from '../../assets/images/large-card-4.jpg';
import RainbowLarge from '../../assets/images/large-card-5.jpg';
import RecommendedCard from './recommended-card-template/recommended-card-template';
import './recommended.styles.css';

const Recommended = () => {
	return (
		<div className="recommended-outter">
			<div className="suggested-header-div">
				<p className="suggested-header-container">
					<span className="recommended-span">Recommended</span>
					<span className="recommended-live">live channels</span>
				</p>
			</div>
			<div className="recommended-inner-margin">
				<RecommendedCard
					title="MERCH IS OUT, VALENTINES SPECIAL. COOL. W0000000000W"
					user="xQcOW"
					game="Just Chatting"
					small={Xq}
					large={XqLarge}
				/>
				<RecommendedCard
					title="happy valentines day! (@timthetatman) for when i'm live"
					user="TimTheTatman"
					game="Fortnite"
					small={Tim}
					large={TimLarge}
				/>
				<RecommendedCard
					title="JoeJoes Birthday! | @NICKMERCS On All Socials | !Florida !Merch"
					user="NICKMERCS"
					game="Fortnite"
					small={Mercs}
					large={MercsLarge}
				/>
				<RecommendedCard
					title="EU Rival Series | League Play | Week 1"
					user="RocketLeague"
					game="Rocket League"
					small={Rocket}
					large={RocketLarge}
				/>
				<RecommendedCard
					title="Creators Cup Finals – Six Invitational 2020 – Playoffs – Day 6"
					user="Rainbow6"
					game="Tom Clancy's Rainbow Six: Siege"
					small={Rainbow}
					large={RainbowLarge}
				/>
			</div>
		</div>
	);
};

export default Recommended;
