const CheckoutForm = ({ isLoading, formState, onChange, onSubmit }) => {
	return (
		<form onSubmit={onSubmit}>
			<label className="text-uppercase mb-2">Full Name:</label>
			<input
				type="text"
				className="w-100 p-2 mb-3"
				placeholder="Enter Your Full Name Here!"
				value={formState.fullName}
				onChange={evt => onChange('fullName', evt.target.value)}
			/>
			<label className="text-uppercase mb-2">Email:</label>
			<input
				type="email"
				className="w-100 p-2 mb-3"
				placeholder="Enter Your Email Here!"
				value={formState.email}
				onChange={evt => onChange('email', evt.target.value)}
			/>
			<label className="text-uppercase mb-2">Phone Number:</label>
			<input
				type="tel"
				className="w-100 p-2 mb-3"
				placeholder="Enter Your Phone Number Here!"
				value={formState.phoneNumber}
				onChange={evt => onChange('phoneNumber', evt.target.value)}
			/>
			<label className="text-uppercase mb-2">Address:</label>
			<input
				type="text"
				className="w-100 p-2 mb-3"
				placeholder="Enter Your Address Here!"
				value={formState.address}
				onChange={evt => onChange('address', evt.target.value)}
			/>
			<button
				disabled={isLoading}
				className="btn btn-secondary rounded-0 px-3 py-2"
			>
				Place order
			</button>
		</form>
	);
};

export default CheckoutForm;
