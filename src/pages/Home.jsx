import Slider from '../components/Slider';
import Map from '../components/Map';
import FeaturedRooms from '../components/FeaturedRooms';
import Testimonials from '../components/Testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>BookHotel | Home</title>

            </Helmet>
          <Slider></Slider>
          <FeaturedRooms></FeaturedRooms>
          <Testimonials></Testimonials>
          <Map></Map>

        </div>
    );
};

export default Home;