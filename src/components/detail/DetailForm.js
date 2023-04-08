import { useState } from 'react';
import { useSelector } from 'react-redux';

const DetailForm = props => {
	const [input, setInput] = useState('');
	const formIsValid = +input !== 0;
	const user = useSelector(state => state.loginUser);

	const addToCart = evt => {
		evt.preventDefault();
		props.onAdd(+input);
		alert('Added');
	};

	const setQtyHandler = evt => {
		setInput(evt.target.value);
	};

	return user ? (
		<form onSubmit={addToCart}>
			<div className="input-group w-50 align-items-center">
				<div className="input-group-prepend bg-white border-right-0 rounded-0 text-uppercase">
					<p className="mb-0 me-2">Quantity</p>
				</div>
				<input
					type="number"
					min="0"
					className="form-control border-left-0"
					value={input}
					onChange={setQtyHandler}
				/>
				<div className="input-group-append rounded-0">
					<button
						type="submit"
						className="btn btn-secondary rounded-0 text-uppercase"
						disabled={!formIsValid}
					>
						Add to cart
					</button>
				</div>
			</div>
		</form>
	) : (
		<p>Login to add to cart.</p>
	);
};

export default DetailForm;
