import { NavLink } from 'react-router-dom';

const CartRow = ({ order }) => {
	return (
		<tr>
			<td>{order._id}</td>
			<td>{order.user._id}</td>
			<td>{order.user.fullName}</td>
			<td>{order.user.phoneNumber}</td>
			<td>{order.address}</td>
			<td>{order.total} VND</td>
			<td>Waiting for progress</td>
			<td>Waiting for pay</td>
			<td>
				<NavLink
					to={`/order/${order._id}`}
					className="btn btn-outline-dark rounded-0"
				>
					View &rarr;
				</NavLink>
			</td>
		</tr>
	);
};

export default CartRow;
