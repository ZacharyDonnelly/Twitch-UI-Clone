import React from 'react';
import '../dashboard.styles.css';

const FourthSeparator = () => (
	<div className="border">
		<div className="show-more-line-left-four" />
		<div className="border-button-div-four">
			<button className="show-more-btn">
				<p className="show-more-btn-text">Show more</p>
				<svg
					className="down-arrow-svg"
					width="25px"
					height="25px"
					fill="#a970ff"
					version="1.1"
					viewBox="0 0 20 20"
					x="0px"
					y="0px">
					<g>
						<path d="M14.5 6.5L10 11 5.5 6.5 4 8l6 6 6-6-1.5-1.5z"></path>
					</g>
				</svg>
			</button>
		</div>
		<div className="show-more-line-right-four" />
	</div>
);

export default FourthSeparator;
