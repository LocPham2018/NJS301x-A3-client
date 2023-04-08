import { useState } from 'react';

const DetailImg = props => {
	const [showImg, setShowImg] = useState(0);

	return (
		<>
			<div id="img-list" className="col-1 d-flex flex-column">
				{props.images.map((img, id) => (
					<img
						key={id}
						className="w-100 mb-2"
						src={img}
						alt={`${props.name}-${id}`}
						onClick={() => setShowImg(id)}
					/>
				))}
			</div>
			<div className="col-5">
				<img
					className="w-100"
					src={props.images[showImg]}
					alt={`${props.name}-${showImg}`}
				/>
			</div>
		</>
	);
};

export default DetailImg;
