import React from 'react';
import TarkovSmallOne from '../../assets/images/tarkov-small-one.png';
import TarkovSmallTwo from '../../assets/images/tarkov-small-two.png';
import TarkovSmallThree from '../../assets/images/tarkov-small-three.png';
import TarkovSmallFour from '../../assets/images/tarkov-small-four.jpg';
import TarkovSmallFive from '../../assets/images/tarkov-small-five.png';
import TarkovOne from '../../assets/images/tarkov-one.jpg';
import TarkovTwo from '../../assets/images/tarkov-two.jpg';
import TarkovThree from '../../assets/images/tarkov-three.jpg';
import TarkovFour from '../../assets/images/tarkov-four.jpg';
import TarkovFive from '../../assets/images/tarkov-five.jpg';
import RecommendedCard from '../recommended-section/recommended-card-template/recommended-card-template';

import '../recommended-section/recommended.styles.css';

const RecommendedCategoryEscape = () => (
	<div className="recommended-outter-four">
		<div className="suggested-header-div">
			<p className="suggested-header-container">
				<span className="recommended-span">Recommended</span>
				<span className="recommended-purple">Escape From Tarkov</span>
				<span className="recommended-live">channels</span>
			</p>
		</div>
		<div className="recommended-inner-margin">
			<RecommendedCard
				title="[RU] 70 lvl Aggressive Game | !FragMovie"
				user="QuattroAce"
				small={TarkovSmallOne}
				large={TarkovOne}
			/>
			<RecommendedCard
				title="!ms MEDIA SHARE SH*TSHOW SUNDAY | 5000+ hrs | !vid [IRELAND]"
				user="TweaK"
				small={TarkovSmallTwo}
				large={TarkovTwo}
			/>
			<RecommendedCard
				title="dividing the undivided"
				user="DrLupo"
				small={TarkovSmallThree}
				large={TarkovThree}
			/>
			<RecommendedCard
				title="#CollegeTuitionStream | 3,000+ Hours of Tarkov memery | 'I'm just a broke ass kid"
				user="SenseiScav"
				small={TarkovSmallFour}
				large={TarkovFour}
			/>
			<RecommendedCard
				title="Escape From Tarkov: Duos w/ @ChickePrism!! Shoot, Loot, and SCOOT! // LET'S GET SOME! //  designbyhumans.com/shop/sheriffeli"
				user="SheriffEli"
				small={TarkovSmallFive}
				large={TarkovFive}
			/>
		</div>
	</div>
);

export default RecommendedCategoryEscape;
