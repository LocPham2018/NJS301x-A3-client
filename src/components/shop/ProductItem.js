import { NavLink } from 'react-router-dom';

import formatPrice from '../../others/format-price';

const ProductItem = props => {
	const product = props.product;

	return (
		<div className="col-4 item">
			<NavLink
				to={`/detail/${product._id}`}
				className="link-dark text-decoration-none px-2"
			>
				<img
					className="w-100 mb-3"
					src={product.img1}
					alt={product.name}
				/>
				<p className="mb-1">{product.name}</p>
				<p className="text-secondary">
					{formatPrice(product.price)} VND
				</p>
			</NavLink>
		</div>
	);
};

export default ProductItem;
