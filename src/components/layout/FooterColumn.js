const FooterColumn = props => {
	return (
		<div className="col-4">
			<h5 className="text-uppercase">{props.col.col_title}</h5>
			<ul className="list-group">
				{props.col.col_values.map((value, id) => (
					<li className="list-group-item bg-dark text-light border-0 px-0" key={id}>
						{value}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterColumn;
