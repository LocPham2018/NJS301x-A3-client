import RelatedItem from './RelatedItem';
import './related.css';

const Related = props => {
	let content = <p></p>;
	if (props.products.length > 0) {
		content = props.products.map(product => (
			<RelatedItem key={product._id} product={product} />
		));
	}

	return (
		<div id="related" className="container-lg pb-5">
			<h4 className="text-uppercase">Related products</h4>
			<div className="row text-center pt-3 pb-4">{content}</div>
		</div>
	);
};

export default Related;
