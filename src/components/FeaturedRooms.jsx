import React, { useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios';
import HotelCard from './HotelCard';

const FeaturedRooms = () => {
    const [hotelDetails, setHotelDetails]=useState([]);
    const axios=useAxios();

    useEffect(() =>{
        axios.get('/hotel-details')
        .then(res=>setHotelDetails(res.data));
    },[axios]);

    console.log(hotelDetails);

    return (

        <div className='px-2'>
             <h1 className='text-center font-black lg:text-5xl md:text-4xl text-2xl pt-8 pb-4  mb-2'>Featured Rooms</h1>

             <p className='text-center lg:w-2/3 mx-auto mb-10'>Discover our carefully curated selection of featured rooms, each designed for a unique and exceptional experience. Whether you're seeking ocean views, family-friendly comfort, business amenities, or romantic escapes, our featured rooms offer something for every traveler. Explore these highlights and find the perfect room for your stay.</p>

             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 justify-center' loading="lazy">
            {
                hotelDetails.map(hotelDetail =><HotelCard key={hotelDetail._id} info={hotelDetail}></HotelCard>)
            }
        </div>
        </div>
       
    );
};

export default FeaturedRooms;