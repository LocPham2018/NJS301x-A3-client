import { memo } from "react";

const Contact = memo(() => {
	return (
		<section id="contact" className="container-lg py-5">
			<div className="row">
				<div className="col-6">
					<h5 className="text-uppercase">Let's be friends</h5>
					<p className="text-secondary">
						Nisi nisi tempor consequat laboris nisi.
					</p>
				</div>
				<div className="col-6 text-end">
					<form>
						<input
							className="p-4 w-75"
							placeholder="Enter your email address"
						/>
						<button className="btn btn-secondary rounded-0 p-4">
							Subscribe
						</button>
					</form>
				</div>
			</div>
		</section>
	);
});

export default Contact;
