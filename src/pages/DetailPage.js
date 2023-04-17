import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetRequest } from '../hooks/use-fetch';
import DetailSection from '../components/detail/DetailSection';
import Related from '../components/detail/Related';
import Layout from '../components/layout/Layout';

const DetailPage = () => {
	const { productId } = useParams();
	const [product, setProduct] = useState(null);
	const [related, setRelated] = useState([]);
	const applyData = useCallback(responseData => {
		if (responseData.success) {
			setProduct(responseData.product);
			setRelated(responseData.related);
		}
	}, []);
	useGetRequest(`/products/${productId}?getRelated=true`, applyData);

	return (
		<Layout>
			<DetailSection product={product} />
			<Related products={related} />
		</Layout>
	);
};

export default DetailPage;
