import React, { useContext } from 'react';
import useAxios from '../customHooks/useAxios';
import toast from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';

const ReviewModal = ({ booking }) => {
    const axios = useAxios();
    const { user } = useContext(AuthContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        const room_title = e.target.room.value
        const feedback = e.target.feedback.value
        const rating = e.target.rating6.value





        room_title



        const reviewInfo = {
            room_title, feedback, rating,
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
            room_id: booking?.roomId,
            booking_id: booking?._id,

        };


        axios.post('/reviews', reviewInfo)
            .then(res => {
                if (res.data.acknowledged) {
                    e.target.reset();

                    return toast.success("Review successfully posted")


                }
                return toast.error("Something went wrong")


            })



    }
    console.log(booking);


    return (
        <div>

            <button className="btn btn-ghost btn-xs" onClick={() => document.getElementById(booking._id).showModal()}>Review</button>
            <dialog id={booking._id} className="modal">
                <div className="modal-box">


                    <form onSubmit={handleSubmit} className='space-y-10'>

                        <div className='flex'>

                            <label className="label" htmlFor='room'>
                                <span className="label-text">Room: </span>
                            </label>

                            <input name='room' disabled value={booking?.title} required className=' w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text" />

                        </div>



                        <div className='flex items-center'>

                            <label className="label">
                                <span className="label-text">Rating: </span>
                            </label>
                            <div className="rating rating-md">
                                <input type="radio" name="rating6" value={1} className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating6" value={2} className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating6" value={3} className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating6" value={4} className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating6" value={5} defaultChecked className="mask mask-star-2 bg-orange-400" />
                            </div>

                        </div>



                        <textarea name='feedback' required placeholder='Give your feedback' className=' w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text" />

                        <input className='btn bg-blue-500 hover:bg-blue-600 text-white' type="submit" value={'SUBMIT'} />

                    </form>



                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    );
};

export default ReviewModal;