import React from 'react';
import NavbarSignup from './navbar-signup-button';
import '../../navbar.css';

export default {
	component: NavbarSignup,
	title: 'Navbar',
};

export const NavbarSignupStory = () => {
	return (
		<button className="signup-button">
			<div className="signup-button-div">Sign Up</div>
		</button>
	);
};
