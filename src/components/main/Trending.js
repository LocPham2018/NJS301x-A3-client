import { useEffect, useState } from 'react';

import TrendingList from './TrendingList';
import { useHttp } from '../../hooks/use-http';
import './trending.css';
import { SERVER_URL } from '../../others/request';

const Trending = () => {
	const [products, setProducts] = useState([]);
	const { sendRequest: fetchProducts } = useHttp();

	useEffect(() => {
		const requestInput = {
			url: `${SERVER_URL}/products/all`,
		};

		fetchProducts(requestInput, responseData => {
			if (responseData.success) {
				setProducts(responseData.results);
			}
		});
	}, [fetchProducts]);

	return (
		<section id="trending" className="container-lg">
			<h6 className="text-secondary text-uppercase">Make the hard way</h6>
			<h5 className="text-uppercase">Top trending products</h5>
			<TrendingList products={products} />
		</section>
	);
};

export default Trending;
