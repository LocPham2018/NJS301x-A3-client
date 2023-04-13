import CheckoutBill from './CheckoutBill';
import CheckoutForm from './CheckoutForm';

const Checkout = ({ isLoading, formState, onChange, onSubmit }) => {
	return (
		<section className="container-lg py-5">
			<h4 className="text-uppercase mb-4">Shopping Cart</h4>
			<div className="row">
				<div className="col-8">
					<CheckoutForm
						isLoading={isLoading}
						formState={formState}
						onChange={onChange}
						onSubmit={onSubmit}
					/>
				</div>
				<CheckoutBill />
			</div>
		</section>
	);
};

export default Checkout;
