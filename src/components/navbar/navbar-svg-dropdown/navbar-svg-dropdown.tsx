import React, { useState } from 'react';
import '../navbar.css';

const NavbarDropdown = () => {
	const [display, setDisplay] = useState(false);
	return (
		<>
			<div className="svg-dropdown-div" onClick={() => setDisplay(!display)}>
				<div className="svg-dropdown">
					<svg
						className="elipsis"
						width="100%"
						height="100%"
						version="1.1"
						viewBox="0 0 20 20"
						x="0px"
						y="0px">
						<g>
							<path d="M2 10a2 2 0 114 0 2 2 0 01-4 0zM8 10a2 2 0 114 0 2 2 0 01-4 0zM16 8a2 2 0 100 4 2 2 0 000-4z"></path>
						</g>
					</svg>
				</div>
				<button className="shadow-button" />
			</div>
			<div className="dropdown-outter">
				<div
					className={
						display ? 'dropdown-container showing' : 'dropdown-container'
					}>
					<div className="dropdown">
						<p className="dropdown-header">General</p>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/p/about"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								About
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="http://twitchadvertising.tv/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Advertisers
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://blog.twitch.tv/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Blog
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://dev.twitch.tv/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Developers
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="/downloads"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Download Apps
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.igdb.com/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								IGDB
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/jobs"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Jobs
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/p/partners"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Partners
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/p/press"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Press
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.amazon.com/twitchmerch?channel=tpn&amp;ref_=tw_or_web_tpn_ms"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Store
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/turbo"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Turbo
							</a>
						</div>
						<div className="border"></div>
						<p className="dropdown-header">Help & Legal</p>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/p/legal/ad-choices/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Ad Choices
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/p/legal/community-guidelines/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Community Guidelines
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/p/legal/cookie-policy/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Cookie Policy
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://help.twitch.tv/s/?language=en_US"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Help
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/p/legal/privacy-notice/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Privacy Policy
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/p/security/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Security
							</a>
						</div>
						<div className="dropdown-item">
							<a
								href="https://www.twitch.tv/p/legal/terms-of-service/"
								rel="noopener noreferrer"
								target="_blank"
								data-a-target="about-link"
								className="dropdown-item-a">
								Terms
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarDropdown;
