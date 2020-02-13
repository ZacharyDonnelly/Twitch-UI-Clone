import React from 'react';
import NavbarLogin from './navbar-login-button';
import '../../navbar.styles.css';

export default {
	component: NavbarLogin,
	title: 'Navbar',
};

export const NavbarLoginStory = () => {
	return (
		<button className="login-button">
			<div className="login-button-div">Log In</div>
		</button>
	);
};
