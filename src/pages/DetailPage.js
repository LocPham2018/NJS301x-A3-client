import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailSection from '../components/detail/DetailSection';
import Related from '../components/detail/Related';
import Layout from '../components/layout/Layout';
import { useHttp } from '../hooks/use-http';
import { SERVER_URL } from '../others/request';

const DetailPage = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);
	const [related, setRelated] = useState([]);
	const { sendRequest: fetchProducts } = useHttp();

	useEffect(() => {
		const requestInput = {
			url: `${SERVER_URL}/products/${productId}?getRelated=true`,
		};

		fetchProducts(requestInput, responseData => {
			if (responseData.success) {
				setProduct(responseData.product);
				setRelated(responseData.related);
			}
		});
	}, [fetchProducts, productId]);

	return (
		<Layout>
			<DetailSection product={product} />
			<Related products={related} />
		</Layout>
	);
};

export default DetailPage;
