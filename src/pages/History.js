import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import { useHttp } from '../hooks/use-http';
import OrderTable from '../components/orders/OrderTable';
import { SERVER_URL } from '../others/request';

const History = () => {
	const { userId } = useParams();
	const { sendRequest: getOrders } = useHttp();
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const requestInput = {
			url: `${SERVER_URL}/client/orders/${userId}`,
		};

		getOrders(requestInput, responseData => {
			console.log(responseData);
			if (responseData.success) {
				setOrders(responseData.orders);
			}
		});
	}, [getOrders, userId]);

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
