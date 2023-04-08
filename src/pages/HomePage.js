import Layout from '../components/layout/Layout';
import Banner from '../components/main/Banner';
import Categories from '../components/main/Categories';
import Trending from '../components/main/Trending';
import AfterService from '../components/main/AfterService';
import Contact from '../components/main/Contact';

const HomePage = props => {
	return (
		<Layout>
			<Banner />
			<Categories />
			<Trending />
			<AfterService />
			<Contact />
		</Layout>
	);
};

export default HomePage;
