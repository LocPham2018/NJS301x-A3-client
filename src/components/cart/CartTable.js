import CartRow from './CartRow';

const CartTable = ({ items }) => {
	let content = <p>No items.</p>;
	if (items.length > 0) {
		content = (
			<table className="mb-3 text-center">
				<thead className="bg-light text-uppercase h5">
					<th className="p-2">Image</th>
					<th className="p-2">Product</th>
					<th className="p-2">Price</th>
					<th className="p-2">Quantity</th>
					<th className="p-2">Total</th>
					<th className="p-2">Remove</th>
				</thead>
				<tbody>
					{items.map(item => (
						<CartRow key={item.product._id} item={item} />
					))}
				</tbody>
			</table>
		);
	}

	return content;
};

export default CartTable;
