import { useSelector } from 'react-redux';

import Popup from './Popup';
import TrendingItem from './TrendingItem';

const TrendingList = props => {
	let content = <p></p>;
	if (props.products.length > 0) {
		content = props.products.map(product => (
			<TrendingItem key={product._id} product={product} />
		));
	}
	const popupProduct = useSelector(state => state.popupProduct);

	return (
		<>
			<div className="row text-center pt-3 pb-4">{content}</div>
			{popupProduct && <Popup product={popupProduct} />}
		</>
	);
};

export default TrendingList;
