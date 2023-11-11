
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useAxios from '../customHooks/useAxios';
import Review from './Review';
import 'swiper/css/grid'


const Testimonials = () => {

    const axios = useAxios();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('/reviews')
            .then(res => setReviews(res.data));
    }, [axios])


    return (
        <div className='mt-10 px-2'>

<h1 className='text-center font-black lg:text-5xl md:text-4xl text-2xl pt-8 pb-4 '>Testimonials</h1>
            <p className='text-center lg:w-2/3 mx-auto mb-4 '>Our clients have shared their experiences, and their words speak volumes about our dedication to creating unforgettable events. From engagement soirées to golden anniversaries, baby showers, and magical Christmas galas, we have had the privilege of being a part of many special moments. Explore what our clients have to say about their remarkable event experiences with us.</p>

            <Swiper 
            
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                breakpoints={
                    {
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,

                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,

                        },
                        1024:{
                            slidesPerView: 4,
                            spaceBetween: 20,

                        }

                    }
                }
            >

                {reviews.map(review => <SwiperSlide className='my-8' key={review._id}><Review info={review}></Review></SwiperSlide>)}

            </Swiper>

        </div >
    );
};

export default Testimonials;