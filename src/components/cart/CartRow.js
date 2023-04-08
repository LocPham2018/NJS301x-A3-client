import { useDispatch } from 'react-redux';
import formatPrice from '../../others/format-price';
import { actions } from '../../store';

const CartRow = props => {
	const { product, qty } = props.item;
	const dispatch = useDispatch();
	const { updateCart, deleteCart } = actions;

	// UPDATE_CART actions.
	// If isDecrement is not set, it is false by default.
	const incrementHandler = () => dispatch(updateCart(product));
	const decrementHandler = () => dispatch(updateCart(product, true));
	// DELETE_CART action.
	const deleteHandler = () => dispatch(deleteCart(product));

	return (
		<tr>
			<td style={{ width: '7.5vw' }}>
				<img
					className="w-100 py-2"
					src={product.img1}
					alt={product.name}
				/>
			</td>
			<td className="h6">{product.name}</td>
			<td className="text-secondary">{formatPrice(product.price)} VND</td>
			<td>
				<button className="btn" onClick={decrementHandler}>
					&#9664;
				</button>
				{qty}
				<button className="btn" onClick={incrementHandler}>
					&#9654;
				</button>
			</td>
			<td className="text-secondary">
				{formatPrice(+product.price * qty + '')} VND
			</td>
			<td>
				<button
					className="btn btn-secondary rounded-0"
					onClick={deleteHandler}
				>
					Remove
				</button>
			</td>
		</tr>
	);
};

export default CartRow;
