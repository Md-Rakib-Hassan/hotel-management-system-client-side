import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxios from '../customHooks/useAxios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {BiUserCircle} from 'react-icons/bi';
import {LiaExpandArrowsAltSolid, LiaMoneyBillWaveAltSolid} from 'react-icons/lia'
import './css/Room.css'
import HouseRule from '../components/HouseRule';
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

            <div>

                <Carousel>

                    {
                        room_images?.map(image => <div key={roomId}>
                            <img src={image} />
                        </div>)
                    }

                </Carousel >

            </div>

            <div className=' flex gap-6 lg:gap-32 lg:text-xl  mx-auto text-center justify-center shadow-md bg-slate-300'>
                
                    
                    <p className='flex flex-col items-center gap-1 text-2xl'>
                     <BiUserCircle className='text-5xl'/>   {roomInfo.members} GUESTS
                    </p>
                    <p className='flex flex-col items-center text-2xl gap-1'>
                       <LiaExpandArrowsAltSolid className='text-5xl'></LiaExpandArrowsAltSolid> {roomInfo.feet}
                       FT
                    </p>
                    <p className='flex flex-col items-center text-2xl gap-1'><LiaMoneyBillWaveAltSolid className='text-5xl'></LiaMoneyBillWaveAltSolid> {roomInfo.price} BDT</p>
                   
                </div>
                {/* <HouseRule></HouseRule> */}



        </div>
    );
};

export default Room;