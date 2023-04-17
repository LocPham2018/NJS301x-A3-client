import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks/use-form';
import { useSubmitRequest } from '../hooks/use-fetch';
import AuthForm from '../components/auth/AuthForm';
import { ENDPOINTS, getPostOptions } from '../others/request';

const LoginPage = () => {
	const navigate = useNavigate();
	const { formState, inputHandler, resetInput } = useForm({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');
	const { isLoading, submitRequest } = useSubmitRequest();

	const loginHandler = evt => {
		evt.preventDefault();
		const options = getPostOptions(formState);

		const applyData = responseData => {
			if (responseData.err) {
				return setError(responseData.err);
			}
			alert(responseData.message);
			setError('');
			if (!responseData.success) {
				return resetInput('password');
			}
			navigate('/');
		};
		submitRequest(ENDPOINTS.login, options, applyData);
	};

	return (
		<AuthForm
			isLoading={isLoading}
			formState={formState}
			onChange={inputHandler}
			onSubmit={loginHandler}
			error={error}
		/>
	);
};

export default LoginPage;
