import { useCallback, useState } from 'react';

import { useGetRequest } from '../hooks/use-fetch';
import Layout from '../components/layout/Layout';
import CategoriesList from '../components/shop/CategoriesList';
import ProductList from '../components/shop/ProductList';
import { ENDPOINTS } from '../others/request';

const ShopPage = () => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState('all');
	const applyData = useCallback(responseData => {
		if (responseData.success) {
			setProducts(responseData.results);
		}
	}, []);
	useGetRequest(ENDPOINTS.getProducts, applyData);

	const filterHandler = category => setCategory(category);

	let filterProducts = products;
	if (category !== 'all') {
		filterProducts = products.filter(
			product => product.category === category
		);
	}

	return (
		<Layout>
			<section className="container-lg bg-light p-5">
				<h2 className="text-uppercase">Shop</h2>
			</section>
			<section className="container-lg bg-white py-5">
				<div className="row">
					<CategoriesList onFilter={filterHandler} />
					<ProductList products={filterProducts} />
				</div>
			</section>
		</Layout>
	);
};

export default ShopPage;
