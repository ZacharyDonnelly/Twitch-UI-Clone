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

const Navbar = () => (
	<nav className="navbar">
		<NavbarSvg />
		<div className="navbar-main">
			<NavLink to="/" className="navbar-item" activeClassName="active">
				Discover
			</NavLink>
			<NavLink to="/directory" className="navbar-item" activeClassName="active">
				Browse
			</NavLink>
			<NavLink to="/amazon" className="navbar-item" activeClassName="active">
				Try Prime
			</NavLink>
		</div>
		<div className="navbar-button-div">
			<NavbarPrime />
			<NavbarDropdown />
			<NavbarLogin />
			<NavbarSignup />
			<NavbarAvatar />
		</div>
		<NavbarSearch />
	</nav>
);
export default Navbar;
