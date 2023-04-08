import BillRow from "./BillRow";

const BillTable = ({ items }) => {
	let content = <p>No items.</p>;
	if (items && items.length > 0) {
		content = (
			<table className="mb-3 text-center">
				<thead className="bg-light text-uppercase h5">
					<th className="p-2">Product ID</th>
					<th className="p-2">Image</th>
					<th className="p-2">Name</th>
					<th className="p-2">Price</th>
					<th className="p-2">Count</th>
				</thead>
				<tbody>
					{items.map(item => (
						<BillRow key={item.product._id} item={item} />
					))}
				</tbody>
			</table>
		);
	}

	return content;
};

export default BillTable;