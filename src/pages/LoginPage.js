import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from '../components/auth/AuthForm';
import { useForm } from '../hooks/use-form';
import { useHttp } from '../hooks/use-http';
import { SERVER_URL } from '../others/request';

const LoginPage = () => {
	const navigate = useNavigate();
	const { sendRequest: login } = useHttp();
	const { formState, inputHandler, resetInput } = useForm({
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	const loginHandler = evt => {
		evt.preventDefault();
		// console.log(formState);
		const requestInput = {
			url: `${SERVER_URL}/auth/login`,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formState),
		};

		login(requestInput, responseData => {
			if (responseData.err) {
				return setError(responseData.err);
			}
			alert(responseData.message);
			setError('');
			if (!responseData.success) {
				return resetInput('password');
			}
			navigate('/');
		});
	};

	return (
		<AuthForm
			formState={formState}
			onChange={inputHandler}
			onSubmit={loginHandler}
			error={error}
		/>
	);
};

export default LoginPage;
