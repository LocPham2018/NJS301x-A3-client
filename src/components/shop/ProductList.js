import ProductItem from './ProductItem';
import './product-list.css';

const ProductList = props => {
	let content = <p></p>;
	if (props.products.length > 0) {
		content = props.products.map(product => (
			<ProductItem key={product._id} product={product} />
		));
	}

	return (
		<div id="product-list" className="col-9">
			<div className="row text-center pb-4">{content}</div>
		</div>
	);
};

export default ProductList;
