import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetRequest } from '../hooks/use-fetch';
import Layout from '../components/layout/Layout';
import OrderTable from '../components/orders/OrderTable';
import { ENDPOINTS } from '../others/request';

const History = () => {
	const { userId } = useParams();
	const [orders, setOrders] = useState([]);
	const applyData = useCallback(responseData => {
		if (responseData.success) {
			setOrders(responseData.orders);
		}
	}, []);
	useGetRequest(`${ENDPOINTS.getOrders}/${userId}`, applyData);

	return (
		<Layout>
			<section className="container-lg bg-light p-5">
				<h2 className="text-uppercase">History</h2>
			</section>
			<section className="container-lg py-5">
				<OrderTable orders={orders} />
			</section>
		</Layout>
	);
};

export default History;
