import formatPrice from '../../others/format-price';

const CheckoutBillItem = props => {
	return (
		<div className="row border-bottom border-secondary py-3">
			<div className="col-6 h6">{props.item.product.name}</div>
			<div className="col-6 text-secondary">
				{formatPrice(props.item.product.price)} VND x{props.item.qty}
			</div>
		</div>
	);
};

export default CheckoutBillItem;
