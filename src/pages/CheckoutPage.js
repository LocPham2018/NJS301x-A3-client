import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Checkout from '../components/checkout/Checkout';
import { useForm } from '../hooks/use-form';
import { useHttp } from '../hooks/use-http';
// import { getLoginUser } from '../others/storage';
import { actions } from '../store';
import { SERVER_URL } from '../others/request';

const CheckoutPage = () => {
	const navigate = useNavigate();
	const { formState, inputHandler } = useForm({
		fullName: '',
		email: '',
		phoneNumber: '',
		address: '',
	});
	const cart = useSelector(state => state.cart);
	const { isLoading, sendRequest: checkout } = useHttp();
	const user = useSelector(state => state.loginUser);
	const dispatch = useDispatch();

	const submitHandler = evt => {
		evt.preventDefault();
		const requestInput = {
			url: `${SERVER_URL}/client/checkout`,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ userId: user._id, cart, ...formState }),
		};

		checkout(requestInput, responseData => {
			if (responseData.err) {
				return alert(responseData.err);
			}
			alert(responseData.message);
			if (responseData.success) {
				dispatch(actions.resetCart());
				navigate('/');
			}
		});
	};

	return (
		<Layout>
			<section className="container-lg bg-light p-5">
				<h2 className="text-uppercase">Checkout</h2>
			</section>
			<Checkout
				isLoading={isLoading}
				formState={formState}
				onChange={inputHandler}
				onSubmit={submitHandler}
			/>
		</Layout>
	);
};

export default CheckoutPage;
