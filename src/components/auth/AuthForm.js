import AuthNav from './AuthNav';
import ErrorAlert from './ErrorAlert';
import './auth.css';

// This form is used for both Login and Register page
const AuthForm = (props) => {
	const { register, isLoading, formState, onChange, onSubmit, error } = props;

	return (
		<div
			id="background"
			className="d-flex justify-content-center align-items-center"
			style={{ backgroundImage: 'url(/images/banner1.jpg)' }}
		>
			<div className="auth-form bg-white p-5 rounded-4">
				<div className="display-6 py-4 text-center">
					{register ? 'Sign Up' : 'Sign In'}
				</div>
				<form className="py-2" onSubmit={onSubmit}>
					{register && (
						<input
							className="w-100 p-2"
							type="text"
							placeholder="Full Name"
							value={formState.fullName}
							onChange={evt =>
								onChange('fullName', evt.target.value)
							}
						/>
					)}
					<input
						className="w-100 p-2"
						type="text"
						placeholder="Email"
						value={formState.email}
						onChange={evt => onChange('email', evt.target.value)}
					/>
					<input
						className="w-100 p-2"
						type="password"
						placeholder="Password"
						value={formState.password}
						onChange={evt => onChange('password', evt.target.value)}
					/>
					{register && (
						<input
							className="w-100 p-2"
							type="tel"
							placeholder="Phone"
							value={formState.phoneNumber}
							onChange={evt =>
								onChange('phoneNumber', evt.target.value)
							}
						/>
					)}
					<button
						className="w-100 btn btn-secondary p-2 mt-2 text-center text-uppercase rounded-0"
						type="submit"
						disabled={isLoading}
					>
						{register ? 'Sign Up' : 'Sign In'}
					</button>
				</form>
				<ErrorAlert error={error} />
				<AuthNav register={register} />
			</div>
		</div>
	);
};

export default AuthForm;
