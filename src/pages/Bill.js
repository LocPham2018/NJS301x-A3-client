import { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetRequest } from '../hooks/use-fetch';
import BillInfo from '../components/bill/BillInfo';
import BillTable from '../components/bill/BillTable';
import Layout from '../components/layout/Layout';
import { ENDPOINTS } from '../others/request';

const Bill = () => {
	const { id } = useParams();
	const [order, setOrder] = useState(null);
	const applyData = useCallback(responseData => {
		if (responseData.success) {
			setOrder(responseData.order);
		}
	}, []);
	useGetRequest(`${ENDPOINTS.getBill}/${id}`, applyData);

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
