import { useDispatch } from 'react-redux';

import DetailDesc from './DetailDesc';
import DetailImg from './DetailImg';
import DetailInfo from './DetailInfo';
import { actions } from '../../store';
import './detail.css';

const DetailSection = props => {
	const product = props.product;
	const dispatch = useDispatch();
	const { addCart } = actions;

	const addToCart = (product, qty) => {
		dispatch(addCart({ product, qty }));
	};

	let content = <p></p>;
	if (product) {
		const images = [product.img1, product.img2, product.img3, product.img4];
		content = (
			<>
				<div className="row pb-4">
					<DetailImg name={product.name} images={images} />
					<DetailInfo
						name={product.name}
						price={product.price}
						category={product.category}
						description={product.short_desc}
						onAdd={addToCart.bind(null, product)}
					/>
				</div>
				<DetailDesc description={product.long_desc} />
			</>
		);
	}

	return (
		<section id="detail" className="container-lg py-5">
			{content}
		</section>
	);
};

export default DetailSection;
