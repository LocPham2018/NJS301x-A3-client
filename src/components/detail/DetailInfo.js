import DetailForm from './DetailForm';
import formatPrice from '../../others/format-price';

const DetailInfo = props => {
	return (
		<div className="col-6">
			<h3 className="mb-4">{props.name}</h3>
			<h4 className="text-secondary mb-4">
				{formatPrice(props.price)} VND
			</h4>
			<p className="text-secondary mb-4">{props.description}</p>
			<p className="mb-3">
				<span className="text-uppercase">Category: </span>
				<span className="text-secondary">{props.category}</span>
			</p>
			<DetailForm onAdd={props.onAdd} />
		</div>
	);
};

export default DetailInfo;
