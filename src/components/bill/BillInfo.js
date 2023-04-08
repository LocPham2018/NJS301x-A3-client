import formatPrice from '../../others/format-price';

const BillInfo = ({ userId, name, phone, address, total }) => {
	return (
		<section className="container-lg p-5">
			<h2 className="text-uppercase">Information order</h2>
			<p>User ID: {userId}</p>
			<p>Full Name: {name}</p>
			<p>Phone: {phone}</p>
			<p>Address: {address}</p>
			<p>Total: {formatPrice(total + '')} VND</p>
		</section>
	);
};

export default BillInfo;
