import React from 'react';
import Slider from '../components/Slider';
import Map from '../components/Map';
import HouseRule from '../components/HouseRule';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <FeaturedRooms></FeaturedRooms>
          <Map></Map>
        </div>
    );
};

export default Home;