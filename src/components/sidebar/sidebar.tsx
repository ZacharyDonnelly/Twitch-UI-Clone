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
import SidebarSuggested from './sidebar-suggested/sidebar-suggested';
import SidebarCard from './sidebar-card-template/sidebar-card-template';
import SidebarSVG from './sidebar-arrow-svg/sidebar-arrow-svg';
import './sidebar.styles.css';

const Sidebar = () => {
	return (
		<div className="sidebar-main">
			<div className="sidebar-header-container">
				<h5 className="sidebar-header">Recommended channels</h5>
				<SidebarSVG />
			</div>
			<div className="sidebar-container">
				<SidebarCard
					src={Summit}
					title="summit1g"
					count="36"
					game="Escape From Tarkov"
				/>
				<SidebarCard
					src={Tyler}
					title="loltyler1"
					count="27.3"
					game="League of Legends"
				/>
				<SidebarCard src={Myth} title="Myth" count="4.8" game="Fortnite" />
				<SidebarCard
					src={Method}
					title="Method"
					count="1"
					game="World of Warcraft"
				/>
				<SidebarCard
					src={LCK}
					title="LCK"
					count="11"
					game="League of Legends"
				/>
				<SidebarCard
					src={Dizzy}
					title="dizzy"
					count="1.9"
					game="Counter-Strike: Global Offensive"
				/>
				<SidebarCard
					src={MrFresh}
					title="mrfreshian"
					count="5.1"
					game="Fortnite"
				/>
				<SidebarCard
					src={Sneaky}
					title="sneakylol"
					count="5.1"
					game="Escape From Tarkov"
				/>
				<SidebarCard
					src={Lord}
					title="Lord_Kebun"
					count="6.6"
					game="Escape From Tarkov"
				/>
				<SidebarCard
					src={Hasan}
					title="hasanabi"
					count="2.9"
					game="Just Chatting"
				/>
				<SidebarSuggested />
			</div>
		</div>
	);
};

export default Sidebar;
