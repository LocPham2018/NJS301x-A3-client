import { useState } from 'react';

const DetailDesc = props => {
	const [showDesc, setShowDesc] = useState(true);

	const toggleHandler = () => {
		setShowDesc(prevState => !prevState);
	};

	// convert to avoid double \n
	const descriptionTxt = props.description
		.split('\n')
		.filter(line => line !== '')
		.join('\n');

	return (
		<>
			<button
				className="btn btn-secondary rounded-0 px-4 py-2 text-uppercase"
				onClick={toggleHandler}
			>
				Description
			</button>
			{showDesc && (
				<div className="mt-3">
					<h5 className="text-uppercase">Product Description</h5>
					<p
						className="text-secondary"
						style={{ whiteSpace: 'pre-wrap' }}
					>
						{descriptionTxt}
					</p>
				</div>
			)}
		</>
	);
};

export default DetailDesc;
