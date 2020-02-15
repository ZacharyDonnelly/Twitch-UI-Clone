import React from 'react';
import './categories.styles.css';

interface Category {
	img: string;
	category: string;
	viewers: string;
}

const CategoryTemplate = ({ img, category, viewers }: Category) => {
	return (
		<div className="category-card-div">
			<div className="category-card">
				<img src={img} alt="apex" className="category-image" />
				<div className="category-text-div">
					<h3 className="category-card-subheader">{category}</h3>
					<p className="category-card-viewers">{viewers}k viewers</p>
				</div>
			</div>
		</div>
	);
};

export default CategoryTemplate;
