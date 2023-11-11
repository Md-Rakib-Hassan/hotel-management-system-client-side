import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Review = ({ info }) => {
    const ret = parseInt(info.rating);
    const ratings = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= ret) ratings.push(<AiFillStar />)
        else ratings.push(<AiOutlineStar />)
    }

    return (
        <div className='text-center  shadow-lg card  glass space-y-2 px-3 py-10'>

            <img className='rounded-full h-24 w-auto mx-auto' src={info.image} alt="" />
            <h1 className='font-bold text-xl'>{info.name}</h1>
            <div className='flex justify-center text-yellow-400 '>{...ratings}</div>

            <p className='pt-4 text-justify'>{info.feedback}</p>

        </div>
    );
};

export default Review;