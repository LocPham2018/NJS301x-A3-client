import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthForm from '../components/auth/AuthForm';
import { useForm } from '../hooks/use-form';
import { useHttp } from '../hooks/use-http';
import { SERVER_URL } from '../others/request';

const RegisterPage = () => {
	const navigate = useNavigate();
	const { isLoading, sendRequest: signup } = useHttp();
	const { formState, inputHandler, resetInput } = useForm({
		email: '',
		password: '',
		fullName: '',
		phoneNumber: '',
	});
	const [error, setError] = useState('');

	const registerHandler = evt => {
		evt.preventDefault();
		// console.log(formState);
		const requestInput = {
			url: `${SERVER_URL}/auth/signup`,
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formState),
		};

		signup(requestInput, responseData => {
			if (responseData.err) {
				return setError(responseData.err);
			}
			alert(responseData.message);
			setError('');
			if (!responseData.success) {
				return resetInput('password');
			}
			navigate('/login');
		});
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
