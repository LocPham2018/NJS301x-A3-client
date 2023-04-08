import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useHttp } from '../hooks/use-http';
import BillInfo from '../components/bill/BillInfo';
import BillTable from '../components/bill/BillTable';
import Layout from '../components/layout/Layout';
import { SERVER_URL } from '../others/request';

const Bill = () => {
	const { id } = useParams();
	const { sendRequest: getOrder } = useHttp();
	const [order, setOrder] = useState(null);

	useEffect(() => {
		const requestInput = {
			url: `${SERVER_URL}/client/orders/bill/${id}`,
		};

		getOrder(requestInput, responseData => {
			console.log(responseData);
			if (responseData.success) {
				setOrder(responseData.order);
			}
		});
	}, [getOrder, id]);

	return (
		order && (
			<Layout>
				<BillInfo
					userId={order.userId}
					name={order.fullName}
					phone={order.phoneNumber}
					address={order.address}
					total={order.total}
				/>
				<section className="container-lg py-5">
					<BillTable items={order.products} />
				</section>
			</Layout>
		)
	);
};

export default Bill;
