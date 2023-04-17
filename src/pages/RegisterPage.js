import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm } from '../hooks/use-form';
import { useSubmitRequest } from '../hooks/use-fetch';
import AuthForm from '../components/auth/AuthForm';
import { ENDPOINTS, getPostOptions } from '../others/request';

const RegisterPage = () => {
	const navigate = useNavigate();
	const { formState, inputHandler, resetInput } = useForm({
		email: '',
		password: '',
		fullName: '',
		phoneNumber: '',
	});
	const [error, setError] = useState('');
	const { isLoading, submitRequest } = useSubmitRequest();

	const registerHandler = evt => {
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
			navigate('/login');
		};
		submitRequest(ENDPOINTS.register, options, applyData);
	};

	return (
		<AuthForm
			register
			isLoading={isLoading}
			formState={formState}
			onChange={inputHandler}
			onSubmit={registerHandler}
			error={error}
		/>
	);
};

export default RegisterPage;
