import { useEffect, useState } from "react";
import useAxios from "../customHooks/useAxios";
import Review from "./Review";


const Reviews = ({roomId}) => {
    const axios=useAxios();
    const [review,setReview]=useState([]);

    useEffect(()=>{
        axios.get(`/reviews/${roomId}`)
        .then(res=>setReview(res.data));
    },[axios,roomId])
    if(review.length==0) return <div className="text-center pt-10">There is no review yet.</div>




    return (
        <div className='px-2 mt-14'>
        {/* <h1 className='text-center font-black lg:text-5xl md:text-4xl text-2xl pt-8 pb-4 '>Testimonials</h1>
        <p className='text-center lg:w-2/3 mx-auto '>Our clients have shared their experiences, and their words speak volumes about our dedication to creating unforgettable events. From engagement soirées to golden anniversaries, baby showers, and magical Christmas galas, we have had the privilege of being a part of many special moments. Explore what our clients have to say about their remarkable event experiences with us.</p> */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-8'>


            {
                review.map((review) => <Review key={review.id} info={review}></Review>)
            }


        </div>
    </div>
    );
};

export default Reviews;