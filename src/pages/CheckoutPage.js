import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { actions } from '../store';
import { useForm } from '../hooks/use-form';
import { useSubmitRequest } from '../hooks/use-fetch';
import Layout from '../components/layout/Layout';
import Checkout from '../components/checkout/Checkout';
import { ENDPOINTS, getPostOptions } from '../others/request';

const CheckoutPage = () => {
	const navigate = useNavigate();
	const { formState, inputHandler } = useForm({
		fullName: '',
		email: '',
		phoneNumber: '',
		address: '',
	});
	const cart = useSelector(state => state.cart);
	const user = useSelector(state => state.loginUser);
	const dispatch = useDispatch();
	const { isLoading, submitRequest } = useSubmitRequest();

	const submitHandler = evt => {
		evt.preventDefault();
		const options = getPostOptions({
			userId: user._id,
			cart,
			...formState,
		});

		const applyData = responseData => {
			if (responseData.err) {
				return alert(responseData.err);
			}
			alert(responseData.message);
			if (responseData.success) {
				dispatch(actions.resetCart());
				navigate('/');
			}
		};
		submitRequest(ENDPOINTS.checkout, options, applyData);
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
