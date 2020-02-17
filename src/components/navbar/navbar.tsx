import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLogin from './navbar-buttons/login/navbar-login-button';
import NavbarSignup from './navbar-buttons/signup/navbar-signup-button';
import NavbarSvg from './navbar-logo-svg/navbar-logo-svg';
import NavbarPrime from './navbar-prime-svg/navbar-prime-svg';
import NavbarAvatar from './navbar-avatar-svg/navbar-avatar-svg';
import NavbarDropdown from './navbar-svg-dropdown/navbar-svg-dropdown';
import NavbarSearch from './navbar-search-box/navbar-search-box';
import './navbar.styles.css';

const Navbar = () => {
	return (
		<div className="navbar-placeholder">
			<NavbarDropdown />
			<nav className="navbar">
				<NavbarSvg />
				<div className="navbar-main">
					<NavLink to="/" className="navbar-item" activeClassName="active">
						Discover
					</NavLink>
					<NavLink
						to="/directory"
						className="navbar-item"
						activeClassName="active">
						Browse
					</NavLink>
					<a
						href="https://twitch.amazon.com/tp?ref_=sm_tw_tup_ntp_t_all_exBar&twitchReferral=e784f0e508b180cdcde2199f1c78ca93"
						className="navbar-item"
						target="_blank"
						rel="noopener noreferrer">
						Try Prime
					</a>
				</div>
				<div className="navbar-button-div">
					<NavbarPrime />
					<NavbarLogin />
					<NavbarSignup />
					<NavbarAvatar />
				</div>
				<NavbarSearch />
			</nav>
		</div>
	);
};
export default Navbar;
