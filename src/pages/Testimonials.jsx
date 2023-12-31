import { useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios';
import Review from '../components/Review';
import Aos from 'aos';
import "aos/dist/aos.css"
import { Helmet } from 'react-helmet';

const Testimonials = () => {
    const axios = useAxios();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axios.get('/reviews')
            .then(res => setReviews(res.data));
    }, [axios])

    Aos.init();
    return (
        <div className=' py-24 overflow-hidden' style={{background: 'linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(9,9,121,0.5) 35%, rgba(0,212,255,.5) 100%)'}} >
            <Helmet>
                <meta charSet="utf-8" />
                <title>BookHotel | Testimonials</title>

            </Helmet>
            <div className='mx-auto'>

            {reviews.map((review ,indx)=><div key={review._id} className={`flex justify-around md:mb-1 mb-16 ${indx%2 ? 'md:flex-row':'md:flex-row-reverse'}`}>

                <div className={`w-72 mb-18 `} data-aos={`${indx%2 ? 'fade-down-right' : 'fade-down-left'}`}  ><Review  info={review}></Review> </div>
                <div className='w-72 md:inline hidden'></div>

            </div>
             )}

                
            </div>
             
            
        </div>
    );
};

export default Testimonials;