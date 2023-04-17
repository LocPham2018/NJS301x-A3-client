import { useCallback, useState } from 'react';

import { useGetRequest } from '../../hooks/use-fetch';
import TrendingList from './TrendingList';
import './trending.css';
import { ENDPOINTS } from '../../others/request';

const Trending = () => {
	const [products, setProducts] = useState([]);
	const applyData = useCallback(responseData => {
		if (responseData.success) {
			setProducts(responseData.results);
		}
	}, []);
	useGetRequest(ENDPOINTS.getProducts, applyData);

	return (
		<section id="trending" className="container-lg">
			<h6 className="text-secondary text-uppercase">Make the hard way</h6>
			<h5 className="text-uppercase">Top trending products</h5>
			<TrendingList products={products} />
		</section>
	);
};

export default Trending;
