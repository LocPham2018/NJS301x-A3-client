import { memo } from 'react';

import './banner.css';

const Banner = memo(() => {
	return (
		<section id="banner" className="container-lg position-relative">
			<img className="w-100" src="./images/banner1.jpg" alt="Banner" />
			<div className="position-absolute top-50 ps-5 w-50">
				<p className="text-secondary text-uppercase mb-1">
					New Inspiration 2020
				</p>
				<h3 className="text-uppercase mb-3">
					20% off on new season
				</h3>
				<button className="btn btn-secondary rounded-0 px-4 py-2">
					Browse collections
				</button>
			</div>
		</section>
	);
});

export default Banner;
