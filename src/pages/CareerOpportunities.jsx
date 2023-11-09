import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios';
import Swal from 'sweetalert2';
import { AuthContext } from '../provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CareerOpportunities = () => {

    const axios = useAxios();
    const [jobData, setJobData] = useState([]);
    const {user}=useContext(AuthContext);
    

    useEffect(() => {
        axios.get('/jobsopen')
            .then(res => setJobData(res.data));
    }, [axios]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cvlink = e.target.cvlink.value
        const name = e.target.name.value
        const email = e.target.email.value


        const cvInfo={name,email,cvlink};
        

        axios.post('/job-req',cvInfo)
        .then(res=>{
            if(res.data.acknowledged){
            e.target.reset();
            return toast.success("We will contact you soon")
        

            }
            return toast.error("We will contact you soon")
             

        })



    }


    return (
        <div className="container mx-auto p-4 mt-10">
            <ToastContainer />
            <h1 className="text-3xl font-bold text-center mb-6">Career Opportunities at BookHotel</h1>
            <p className="text-gray-700 mb-6">
                Join our team at BookHotel and be part of an exciting journey in the hospitality industry. Explore the current career opportunities below and discover how you can contribute to creating memorable experiences for our guests.
            </p>

            <section className="mb-8 flex flex-col-reverse lg:flex-row">

                <div className='flex-grow lg:w-2/3'>
                    <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
                    {
                        jobData.map((job, index) => <div key={job._id} className="mb-4">

                            <h3 className="text-xl font-semibold">{index + 1}. {job.title}</h3>
                            <p className="text-gray-700">{job.description}</p>
                            {/* Open the modal using document.getElementById('ID').showModal() method */}
                            <button className="p-.5 text-white px-2 rounded-md bg-blue-500" onClick={() => document.getElementById(job._id).showModal()}>Apply Here</button>
                            <dialog id={job._id} className="modal">
                                <div className="modal-box">


                                    <form onSubmit={handleSubmit} className='space-y-10'>

                                    <input name='cvlink' disabled value={job?.title} required placeholder='Give your Cv link' className=' w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text" />
                                    <input name='name' disabled value={user?.displayName} required placeholder='Name' className=' w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text"  />
                <input name='email' disabled value={user?.email} required placeholder='Email' className='w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="email"  />
                                        <input name='cvlink'  required placeholder='Give your Cv link' className=' w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text" />
                                        
                                        <input className='btn bg-blue-500 hover:bg-blue-600 text-white' type="submit" value={'SUBMIT'} />
                                    </form>



                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>)

                    }

                </div>

                <div>
                    <img className='flex-grow' src="https://i.ibb.co/Mch4X2m/undraw-Job-hunt-re-q203.png" alt="" />
                </div>


            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Why Join BookHotel?</h2>
                <p className="text-gray-700">
                    At BookHotel, we value collaboration, innovation, and a commitment to exceptional service. Joining our team means being part of a dynamic and supportive work environment. Here are some reasons to consider a career with us:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Opportunities for professional growth and development</li>
                    <li>A positive and inclusive workplace culture</li>
                    <li>Employee discounts on accommodation and dining</li>

                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
                <p className="text-gray-700">
                    To apply for any of the positions listed above, please follow these steps:
                </p>
                <ol className="list-decimal list-inside text-gray-700">
                    <li>Review the job description and requirements carefully.</li>
                    <li>Prepare your resume and a cover letter highlighting your relevant experience.</li>
                    <li>Submit your application through our online application form.</li>

                </ol>
            </section>
        </div>
    );
};

export default CareerOpportunities;
