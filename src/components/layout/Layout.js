import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<main className="bg-white text-dark">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
