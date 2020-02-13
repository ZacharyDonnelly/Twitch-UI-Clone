import React from 'react';
import SignupButton from '../../navbar/navbar-buttons/signup/navbar-signup-button';
import '../sidebar.styles.css';

const SidebarSuggested = () => {
	return (
		<div className="sidebar-suggested-outter">
			<div className="sidebar-suggested">
				<div className="sidebar-suggested-text-div">
					<h1 className="sidebar-suggested-header">
						Join the <span className="sidebar-suggested-span">Twitch</span>{' '}
						community!
					</h1>
					<p className="sidebar-suggested-text">
						Discover the best live streams anywhere.
					</p>
					<SignupButton />
				</div>
			</div>
		</div>
	);
};

export default SidebarSuggested;
