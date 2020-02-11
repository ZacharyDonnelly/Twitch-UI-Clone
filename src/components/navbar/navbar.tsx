import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLogin from './navbar-buttons/login/navbar-login-button';
import NavbarSignup from './navbar-buttons/signup/navbar-signup-button';
import NavbarSvg from './navbar-logo-svg/navbar-logo-svg';
import NavbarPrime from './navbar-prime-svg/navbar-prime-svg';
import NavbarAvatar from './navbar-avatar-svg/navbar-avatar-svg';
import './navbar.css';

const Navbar = () => (
	<nav className="navbar">
		<NavbarSvg />
		<div className="navbar-main">
			<p className="navbar-item">
				<NavLink
					to="/"
					style={{ textDecoration: 'none' }}
					activeClassName="active">
					Discover
				</NavLink>
			</p>
			<p className="navbar-item">
				<NavLink
					to="/directory"
					style={{ textDecoration: 'none' }}
					activeClassName="active">
					Browse
				</NavLink>
			</p>
			<p className="navbar-item">
				<NavLink
					to="/amazon"
					style={{ textDecoration: 'none' }}
					activeClassName="active">
					Try Prime
				</NavLink>
			</p>
		</div>
		<div className="navbar-button-div">
			<NavbarPrime />
			<NavbarLogin />
			<NavbarSignup />
			<NavbarAvatar />
		</div>
	</nav>
);
export default Navbar;
