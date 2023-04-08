import { useDispatch } from 'react-redux';

import formatPrice from '../../others/format-price';
import { actions } from '../../store';

const TrendingItem = props => {
	const product = props.product;
	const dispatch = useDispatch();

	const openPopup = () => {
		const { showPopup } = actions;
		// SHOW_POPUP action
		dispatch(showPopup(product));
	};

	return (
		<div className="col-3 item" onClick={openPopup}>
			<img className="w-100 mb-3" src={product.img1} alt={product.name} />
			<p className="mb-1">{product.name}</p>
			<p className="text-secondary">{formatPrice(product.price)} VND</p>
		</div>
	);
};

export default TrendingItem;
