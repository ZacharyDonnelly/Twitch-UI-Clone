import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLogin from './navbar-buttons/login/navbar-login-button';
import NavbarSignup from './navbar-buttons/signup/navbar-signup-button';
import NavbarSvg from './navbar-logo-svg/navbar-logo-svg';
import NavbarPrime from './navbar-prime-svg/navbar-prime-svg';
import NavbarAvatar from './navbar-avatar-svg/navbar-avatar-svg';
import './navbar.css';
import NavbarDropdown from './navbar-svg-dropdown/navbar-svg-dropdown';

const Navbar = () => (
	<nav className="navbar">
		<NavbarSvg />
		<div className="navbar-main">
			<p className="navbar-item">
				<NavLink
					to="/directory"
					style={{ textDecoration: 'none', opacity: 0 }}
					activeClassName="active"></NavLink>
				Browse
			</p>
			<p className="navbar-item">
				<NavLink
					to="/amazon"
					style={{ textDecoration: 'none', opacity: 0 }}
					activeClassName="active"></NavLink>
				Try Prime
			</p>
		</div>
		<div className="navbar-button-div">
			<NavbarPrime />
			<NavbarDropdown />
			<NavbarLogin />
			<NavbarSignup />
			<NavbarAvatar />
		</div>
	</nav>
);
export default Navbar;
