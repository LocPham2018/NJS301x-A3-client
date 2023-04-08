import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';

import formatPrice from '../../others/format-price';
import { actions } from '../../store';
import './popup.css';

const Popup = ({ product }) => {
	const dispatch = useDispatch();
	const target = document.getElementById('modal');

	const closePopup = () => {
		const { hidePopup } = actions;
		// HIDE_POPUP action
		dispatch(hidePopup());
	};

	return (
		<>
			{createPortal(<div id="backdrop"></div>, target)}
			{createPortal(
				<div id="popup" className="bg-white">
					<div className="row p-2 position-relative">
						<div className="col-6">
							<img
								className="w-100"
								src={product.img1}
								alt={product.name}
							/>
						</div>
						<div className="col-6 p-4">
							<p className="h4">{product.name}</p>
							<p className="h5 text-secondary">
								{formatPrice(product.price)} VND
							</p>
							<p className="text-secondary">
								{product.short_desc}
							</p>
							<button className="btn btn-secondary px-3 py-2">
								View Detail
							</button>
						</div>
					</div>
					<div
						type="button"
						className="btn-close p-2"
						onClick={closePopup}
					></div>
				</div>,
				target
			)}
		</>
	);
};

export default Popup;
