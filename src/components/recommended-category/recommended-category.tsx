import React from 'react';
import ChattingSmallOne from '../../assets/images/chatting-small-one.jpg';
import ChattingSmallTwo from '../../assets/images/chatting-small-two.png';
import ChattingSmallThree from '../../assets/images/chatting-small-three.png';
import ChattingSmallFour from '../../assets/images/chatting-small-four.png';
import ChattingSmallFive from '../../assets/images/chatting-small-five.png';
import ChattingOne from '../../assets/images/chatting-one.jpg';
import ChattingTwo from '../../assets/images/chatting-two.jpg';
import ChattingThree from '../../assets/images/chatting-three.jpg';
import ChattingFour from '../../assets/images/chatting-four.jpg';
import ChattingFive from '../../assets/images/chatting-five.jpg';
import RecommendedCard from '../recommended-section/recommended-card-template/recommended-card-template';
import '../recommended-section/recommended.styles.css';

const RecommendedCategory = () => (
	<div className="recommended-outter-two">
		<div className="suggested-header-div">
			<p className="suggested-header-container">
				<span className="recommended-span">Recommended</span>
				<span className="recommended-purple">Just Chatting</span>
				<span className="recommended-live">channels</span>
			</p>
		</div>
		<div className="recommended-inner-margin">
			<RecommendedCard
				title="Numero Uno"
				user="MontanaBlack88"
				small={ChattingSmallOne}
				large={ChattingOne}
			/>
			<RecommendedCard
				title="@Greekgodx on Twitter"
				user="Greekgodx"
				small={ChattingSmallTwo}
				large={ChattingTwo}
			/>
			<RecommendedCard
				title="24/7 Daily Game Deals / Giveaway ( RTX 2070 )"
				user="allkeyshop_tv"
				small={ChattingSmallThree}
				large={ChattingThree}
			/>
			<RecommendedCard
				title="Wie bydde? !discord !prime !sub !highlight !realtalk"
				user="INSCOPE21TV"
				small={ChattingSmallFour}
				large={ChattingFour}
			/>
			<RecommendedCard
				title="🧡 LONG STREAM TODAY!"
				user="Alinity"
				small={ChattingSmallFive}
				large={ChattingFive}
			/>
		</div>
	</div>
);

export default RecommendedCategory;
