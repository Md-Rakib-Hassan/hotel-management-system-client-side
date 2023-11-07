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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 justify-center'>
            {
                hotelDetails.map(hotelDetail =><HotelCard key={hotelDetail._id} info={hotelDetail}></HotelCard>)
            }
        </div>
    );
};

export default FeaturedRooms;