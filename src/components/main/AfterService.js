import { memo } from "react";

// Dummy data
const SERVICES = ['Free shipping', '24 x 7 service', 'Festival offer'];

const AfterService = memo(() => {
	return (
		<section
			id="after-service"
			className="container-lg bg-light text-center py-5"
		>
			<div className="row">
				{SERVICES.map(service => (
					<div className="col-4">
						<h5 className="text-uppercase">{service}</h5>
						<p className="text-secondary">
							Free shipping worldwide
						</p>
					</div>
				))}
			</div>
		</section>
	);
});

export default AfterService;
