import React from 'react';
import {BiUserCircle} from 'react-icons/bi'
const HotelCard = ({ info }) => {
    return (
        <div className=" rounded-md shadow-xl image-full relative overflow-hidden">
           <div className='absolute top-3 right-0 px-8 py-2 bg-blue-700 font-medium z-50 text-white'>
                    <p>From {info.price} BDT</p>
                </div>
            <img className='rounded-md overflow-hidden' src={info.base} alt="" />
            <div className='absolute top-0  rounded-md left-0 right-0 bottom-0 bg-black z-10 opacity-40 overflow-y-clip'></div>

            
            
            <div className='absolute bottom-4 text-white ml-12 space-y-3 z-50'>
                <h1 className='font-medium text-2xl'>{info.title}</h1>
                <div className=' flex gap-10 text-xl'>
                    
                    <p className='flex items-center gap-1'>
                     <span className='text-2xl'><BiUserCircle/></span>   {info.members} GUESTS
                    </p>
                    <p className='flex items-center gap-1'>
                       <img className='w-6' src='https://i.ibb.co/ykRcQpT/icon-size.png'/> {info.feet}
                       FT
                    </p>

                    <button>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;