import React from 'react';
import Slider from '../components/Slider';
import Map from '../components/Map';
import HouseRule from '../components/HouseRule';

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <Map></Map>
          <HouseRule></HouseRule>
        </div>
    );
};

export default Home;