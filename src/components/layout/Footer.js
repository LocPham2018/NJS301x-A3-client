import { memo } from 'react';

import FooterColumn from './FooterColumn';

// Dummy data
const FOOTER_DATA = [
	{
		col_title: 'Customer Services',
		col_values: [
			'Help & Contact Us',
			'Returns & Refunds',
			'Online Stores',
			'Terms & Conditions',
		],
	},
	{
		col_title: 'Company',
		col_values: [
			'What We Do',
			'Available Services',
			'Latest Posts',
			'FAQs',
		],
	},
	{
		col_title: 'Social Media',
		col_values: ['Twitter', 'Instagram', 'Facebook', 'Pinterest'],
	},
];

const Footer = memo(() => {
	return (
		<footer className="bg-dark text-light">
			<div className="container-lg py-5">
				<div className="row">
					{FOOTER_DATA.map((col, id) => (
						<FooterColumn key={id} col={col} />
					))}
				</div>
			</div>
		</footer>
	);
});

export default Footer;
