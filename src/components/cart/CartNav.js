import { NavLink } from 'react-router-dom';

const CartNav = props => {
	return (
		<div className="d-flex justify-content-between align-items-center bg-light p-3">
			<NavLink to="/shop" className="text-dark text-decoration-none">
				&larr; Continue shopping
			</NavLink>
			{props.total > 0 ? (
				<NavLink
					to="/checkout"
					className="btn btn-outline-dark rounded-0"
				>
					Proceed to checkout &rarr;
				</NavLink>
			) : (
				<span></span>
			)}
		</div>
	);
};

export default CartNav;
