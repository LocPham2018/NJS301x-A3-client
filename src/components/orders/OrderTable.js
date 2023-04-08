import OrderRow from "./OrderRow";

const OrderTable = ({ orders }) => {
	let content = <p>No orders.</p>;
	if (orders.length > 0) {
		content = (
			<table className="mb-3 text-center">
				<thead className="bg-light text-uppercase h5">
					<th className="p-2">Order ID</th>
					<th className="p-2">User ID</th>
					<th className="p-2">Name</th>
					<th className="p-2">Phone</th>
					<th className="p-2">Address</th>
					<th className="p-2">Total</th>
					<th className="p-2">Delivery</th>
					<th className="p-2">Status</th>
					<th className="p-2">Detail</th>
				</thead>
				<tbody>
					{orders.map(order => (
						<OrderRow key={order._id} order={order} />
					))}
				</tbody>
			</table>
		);
	}

	return content;
};

export default OrderTable;