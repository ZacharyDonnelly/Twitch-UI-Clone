import React from 'react';
import Apex from '../../assets/images/Apex Legends-188x250.jpg';
import Just from '../../assets/images/Just Chatting-188x250.jpg';
import Fort from '../../assets/images/Fortnite-188x250.jpg';
import League from '../../assets/images/League of Legends-188x250.jpg';
import Escape from '../../assets/images/Escape From Tarkov-188x250.jpg';
import Mine from '../../assets/images/Minecraft-188x250.jpg';
import COD from '../../assets/images/Call of Duty_ Modern Warfare-188x250.jpg';
import CS from '../../assets/images/Counter-Strike_ Global Offensive-188x250.jpg';
import GTA from '../../assets/images/Grand Theft Auto V-188x250.jpg';
import Rainbow from "../../assets/images/Tom Clancy's Rainbow Six_ Siege-188x250.jpg";
import CategoryTemplate from './category-template';
import './categories.styles.css';

const Categories = () => {
	return (
		<div className="categories-div">
			<div className="category-header-div">
				<p className="category-header-text">
					<span className="category-span">Recommended</span>
					<strong className="category-purple">categories</strong>
				</p>
			</div>
			<div className="categories-inner-div">
				<CategoryTemplate img={Just} category="Just Chatting" viewers="146" />
				<CategoryTemplate img={Fort} category="Fortnite" viewers="89.1" />
				<CategoryTemplate
					img={Escape}
					category="Escape From Tarkov"
					viewers="80.2"
				/>
				<CategoryTemplate
					img={League}
					category="League of Legends"
					viewers="52.1"
				/>
				<CategoryTemplate img={Apex} category="Apex Legends" viewers="35.9" />
				<CategoryTemplate img={Mine} category="Minecraft" viewers="10.8" />
				<CategoryTemplate
					img={COD}
					category="Call of Duty: Modern Warfare"
					viewers="28.4"
				/>
				<CategoryTemplate
					img={CS}
					category="Counter-Strike: Global Offensive"
					viewers="41.7"
				/>
				<CategoryTemplate
					img={GTA}
					category="Grand Theft Auto V"
					viewers="67.4"
				/>
				<CategoryTemplate
					img={Rainbow}
					category="Tom Clancy's Rainbow Six Siege"
					viewers="7.6"
				/>
			</div>
		</div>
	);
};

export default Categories;
