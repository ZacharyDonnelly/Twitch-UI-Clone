import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Navbar from './navbar';
import NavbarLogin from './navbar-buttons/login/navbar-login-button';
import NavbarSignup from './navbar-buttons/signup/navbar-signup-button';
import NavbarSvg from './navbar-logo-svg/navbar-logo-svg';
import './navbar.css';

export default {
	component: Navbar,
	title: 'Navbar',
};

export const NavbarStory = () => (
	<nav className="navbar">
		<NavbarSvg />
		<div className="navbar-main">
			<p className="navbar-item">
				<BrowserRouter>
					<NavLink
						to="/"
						style={{ textDecoration: 'none' }}
						activeClassName="active">
						Discover
					</NavLink>
				</BrowserRouter>
			</p>
			<p className="navbar-item">
				<BrowserRouter>
					<NavLink
						to="/directory"
						style={{ textDecoration: 'none' }}
						activeClassName="active">
						Browse
					</NavLink>
				</BrowserRouter>
			</p>
			<p className="navbar-item">
				<BrowserRouter>
					<NavLink
						to="/amazon"
						style={{ textDecoration: 'none' }}
						activeClassName="active">
						Try Prime
					</NavLink>
				</BrowserRouter>
			</p>
		</div>
		<div className="navbar-button-div">
			<NavbarLogin />
			<NavbarSignup />
		</div>
	</nav>
);
