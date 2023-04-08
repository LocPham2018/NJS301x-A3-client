import { useState } from 'react';

// Dummy data
const CATEGORIES = ['all', 'iphone', 'ipad', 'mac', 'airpod', 'mouse', 'other'];

const CategoriesList = props => {
	const [active, setActive] = useState('all');

	const clickHandler = category => {
		setActive(category);
		props.onFilter(category);
	};

	return (
		<div className="col-3">
			<h3 className="pb-3 text-uppercase">Categories</h3>
			<ul className="list-group text-uppercase">
				{CATEGORIES.map((category, id) => {
					const activeClasses =
						category === active ? 'bg-dark text-white' : '';
					return (
						<li
							key={id}
							className={`list-group-item ${activeClasses} border-0 rounded-0`}
							onClick={() => clickHandler(category)}
						>
							{category}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default CategoriesList;
