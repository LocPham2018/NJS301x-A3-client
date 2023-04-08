import { memo } from 'react';

import './categories.css';

const Categories = memo(() => {
	return (
		<section id="categories" className="container-lg text-center py-4">
			<h6 className="text-secondary text-uppercase">
				Carefully created collections
			</h6>
			<h5 className="text-uppercase">Browse our categories</h5>
			{/* render by using mapping on alt array */}
			<div className="row py-3">
				{['iPhone', 'Mac'].map((alt, id) => (
					<div className="col-6">
						<img
							className="w-100"
							src={`./images/product_${id + 1}.png`}
							alt={alt}
						/>
					</div>
				))}
			</div>
			<div className="row py-3">
				{['iPad', 'Apple Watch', 'AirPods'].map((alt, id) => (
					<div className="col-4">
						<img
							className="w-100"
							src={`./images/product_${id + 3}.png`}
							alt={alt}
						/>
					</div>
				))}
			</div>
		</section>
	);
});

export default Categories;
