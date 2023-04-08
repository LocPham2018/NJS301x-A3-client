import { useSelector } from 'react-redux';

import formatPrice from '../../others/format-price';
import CheckoutBillItem from './CheckoutBillItem';

const CheckoutBill = () => {
	const { items, total } = useSelector(state => state.cart);

	return (
		<div className="col-4 bg-light p-5 align-self-start">
			<h4 className="text-uppercase mb-4">Your Order</h4>
			{items.map((item, id) => (
				<CheckoutBillItem key={id} item={item} />
			))}
			<p className="d-flex justify-content-between mt-3">
				<span>Total</span>
				{/* formatPrice receives string input, so we have to change type */}
				<span className="h5">{formatPrice(total + '')} VND</span>
			</p>
		</div>
	);
};

export default CheckoutBill;
