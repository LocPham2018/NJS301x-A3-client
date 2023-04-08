import formatPrice from "../../others/format-price";

const BillRow = ({item}) => {
	return (
		<tr>
			<td style={{ width: '20%' }}>{item.product._id}</td>
			<td style={{ width: '15%' }}>
				<img
					className="w-100 py-2"
					src={item.product.img1}
					alt={item.product.name}
				/>
			</td>
			<td style={{ width: '40%' }}>{item.product.name}</td>
			<td style={{ width: '15%' }}>{formatPrice(item.product.price + '')}</td>
			<td style={{ width: '10%' }}>{item.qty}</td>
		</tr>
	);
};

export default BillRow;