import Footer from './Footer';
import Navbar from './Navbar';

const Layout = props => {
	return (
		<>
			<Navbar />
			<main className="bg-white text-dark">{props.children}</main>
			<Footer />
		</>
	);
};

export default Layout;
