import React from 'react';
import FortniteSmallOne from '../../assets/images/fortnite-small-one.png';
import FortniteSmallTwo from '../../assets/images/fortnite-small-two.png';
import FortniteSmallThree from '../../assets/images/fortnite-small-three.png';
import FortniteSmallFour from '../../assets/images/fortnite-small-four.png';
import FortniteSmallFive from '../../assets/images/fortnite-small-five.png';
import FortniteOne from '../../assets/images/fortnite-one.jpg';
import FortniteTwo from '../../assets/images/fortnite-two.jpg';
import FortniteThree from '../../assets/images/fortnite-three.jpg';
import FortniteFour from '../../assets/images/fortnite-four.jpg';
import FortniteFive from '../../assets/images/fortnite-five.jpg';
import RecommendedCard from '../recommended-section/recommended-card-template/recommended-card-template';
import '../recommended-section/recommended.styles.css';

const RecommendedCategoryFortnite = () => (
	<div className="recommended-outter-three">
		<div className="suggested-header-div">
			<p className="suggested-header-container">
				<span className="recommended-span">Recommended</span>
				<span className="recommended-purple">Fortnite</span>
				<span className="recommended-live">channels</span>
			</p>
		</div>
		<div className="recommended-inner-margin">
			<RecommendedCard
				title="SQUADS!"
				user="daktotaz"
				small={FortniteSmallOne}
				large={FortniteOne}
			/>
			<RecommendedCard
				title="EU PS4 CUP | CODE CHAP #AD"
				user="Chap"
				small={FortniteSmallTwo}
				large={FortniteTwo}
			/>
			<RecommendedCard
				title="No change of plans :)"
				user="72hrs"
				small={FortniteSmallThree}
				large={FortniteThree}
			/>
			<RecommendedCard
				title="TORNEO $1.000.000 PS4 CON SKIN EXCLUSIVA"
				user="TheGrefg"
				small={FortniteSmallFour}
				large={FortniteFour}
			/>
			<RecommendedCard
				title="Squads w/ DK Corinna and Hippie | !vlog"
				user="Symfuhny"
				small={FortniteSmallFive}
				large={FortniteFive}
			/>
		</div>
	</div>
);

export default RecommendedCategoryFortnite;
