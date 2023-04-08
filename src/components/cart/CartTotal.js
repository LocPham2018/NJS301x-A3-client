import formatPrice from '../../others/format-price';

const CartTotal = props => {
	return (
		<div className="col-4 bg-light text-uppercase p-5 align-self-start">
			<h4>Cart Total</h4>
			<p className="d-flex justify-content-between mb-2">
				<span>Subtotal</span>
				<span className="text-secondary">
					{formatPrice(props.total)} VND
				</span>
			</p>
			<hr className="my-2" />
			<p className="d-flex justify-content-between">
				<span>Total</span>
				<span className="h5">{formatPrice(props.total)} VND</span>
			</p>
			<form>
				<input
					type="text"
					className="w-100 p-2"
					placeholder="Enter your coupon"
				/>
				<button className="btn btn-secondary w-100 rounded-0 p-2">
					Apply coupon
				</button>
			</form>
		</div>
	);
};

export default CartTotal;
