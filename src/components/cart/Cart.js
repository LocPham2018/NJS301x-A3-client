import { useSelector } from 'react-redux';
import CartNav from './CartNav';
import CartTable from './CartTable';
import CartTotal from './CartTotal';

const Cart = () => {
	const { items, total } = useSelector(state => state.cart);

	return (
		<section className="container-lg py-5">
			<h4 className="text-uppercase mb-4">Shopping Cart</h4>
			<div className="row">
				<div className="col-8">
					<CartTable items={items} />
					<CartNav total={total} />
				</div>
				{/* formatPrice receives string input, so we have to change type */}
				<CartTotal total={total + ''} />
			</div>
		</section>
	);
};

export default Cart;
