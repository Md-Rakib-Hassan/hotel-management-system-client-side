import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxios from '../customHooks/useAxios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiUserCircle } from 'react-icons/bi';
import { LiaExpandArrowsAltSolid, LiaMoneyBillWaveAltSolid } from 'react-icons/lia'
import './css/Room.css'

import RoomTabs from '../components/RoomTabs';
const Room = () => {
    const { roomId } = useParams();
    const axios = useAxios();
    const [roomInfo, setRoomInfo] = useState({});


    useEffect(() => {
        axios.get(`/room/${roomId}`)
            .then(res => setRoomInfo(res.data));
    }, [axios, roomId]);

    console.log(roomInfo);
    const { room_images } = roomInfo;

    // console.log('room_images',room_images);


    return (
        <div>

            <div className='flex lg:flex-row flex-col'>
                <div className='lg:w-2/3'>

                    <Carousel>

                        {
                            room_images?.map(image => <div key={roomId}>
                                <img src={image} />
                            </div>)
                        }

                    </Carousel >

                </div>
                <div className='lg:w-1/3 lg:ml-10 space-y-4'>
                     <p className='text-2xl font-bold'> {roomInfo.title}</p>
                    <p><span className='font-medium'>Members: </span> {roomInfo.members} Gustes</p>
                    <p><span className='font-medium'>Room Size: </span> {roomInfo.feet} Sq. Feet</p>
                    <p><span className='font-medium'>Per-Night: </span> {roomInfo.price} BDT</p>
                    <p><span className='font-medium'>Description: </span> {roomInfo.Description}</p>
                    <p><span className='font-medium'>Availability: </span></p>

                    <button className='btn bg-blue-500 hover:bg-blue-600 text-white'>Book Now</button>

                

                </div>
            </div>

            <div className=' flex gap-6 lg:gap-32 lg:text-xl  mx-auto text-center justify-center  py-8 text-gray-400 font-thin'>


                <p className='flex flex-col items-center gap-1 text-2xl'>
                    <BiUserCircle className='text-5xl ' />   {roomInfo.members} GUESTS
                </p>
                <p className='flex flex-col items-center text-2xl gap-1'>
                    <LiaExpandArrowsAltSolid className='text-5xl'></LiaExpandArrowsAltSolid> {roomInfo.feet} FT
                </p>
                <p className='flex flex-col items-center text-2xl gap-1'><LiaMoneyBillWaveAltSolid className='text-5xl'></LiaMoneyBillWaveAltSolid> {roomInfo.price} BDT</p>

            </div>

            <RoomTabs></RoomTabs>









        </div>
    );
};

export default Room;