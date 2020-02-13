import React from 'react';
import NavbarSearch from './navbar-search-box';
import '../navbar.styles.css';

export default {
	title: 'NavbarSearchbox',
	component: NavbarSearch,
};

export const NavbarSearchStory = () => {
	return (
		<div className="navbar-searchbox-outter">
			<div className="navbar-searchbox-inner">
				<input
					autoCorrect="off"
					autoCapitalize="off"
					type="text"
					className="navbar-searchbox-input"
					placeholder="Search"
				/>
				<button className="navbar-searchbox-btn">
					<div className="navbar-searchbox-btn-inner">
						<div className="navbar-searchbox-svg-div">
							<svg
								className="magnify-svg"
								width="25px"
								height="25px"
								version="1.1"
								viewBox="0 0 20 20"
								x="0px"
								y="0px">
								<g>
									<path
										fill-rule="evenodd"
										d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
										clip-rule="evenodd"></path>
								</g>
							</svg>
						</div>
					</div>
				</button>
			</div>
		</div>
	);
};
