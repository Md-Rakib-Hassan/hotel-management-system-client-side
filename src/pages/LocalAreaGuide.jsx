import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxios from '../customHooks/useAxios';

const LocalAreaGuide = () => {

    const {user}=useContext(AuthContext);
    const axios=useAxios();


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const place = e.target.place.value
        const requirement = e.target.requirement.value

        const guideReqInfo={name,email,place,requirement};

        axios.post('/local-guide-req',guideReqInfo)
        .then(res=>{
            if(res.data.acknowledged){
            e.target.reset();
             return   Swal.fire('Done', 'We will managing your guide as your requirement. ', 'success')

            }
             return   Swal.fire('Try Again', 'Something gone wrong', 'error')
             

        })

    

    }


  return (
    <div className="container mx-auto p-4 mt-24">
      <h1 className="text-3xl font-bold text-center mb-4">Local Area Guide</h1>
      <p className="text-gray-700 mb-6">
        Welcome to our Local Area Guide! Explore the surrounding area and discover the best attractions and activities. Whether you&apos;re interested in sightseeing, dining, outdoor adventures, or cultural experiences, there&apos;s something for everyone to enjoy. Check out our recommendations below.
      </p>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Sightseeing</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Visit the local historic landmarks and monuments.</li>
          <li>Explore scenic parks and gardens with stunning views.</li>
          <li>Take a guided city tour to learn about the area&apos;s history.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Dining</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Experience local cuisine at the finest restaurants.</li>
          <li>Discover popular cafes and bakeries for a quick bite.</li>
          <li>Don&apos;t miss the street food and food markets for local flavors.</li>
        </ul>
      </section>


        <div className='mt-24'>

        <div className='w-3/4 mx-auto space-y-3'>
            <div className='mt-10'>

            <div className='mb-10'>
            <h1 className='font-bold text-2xl text-center'>Need Local Guide?</h1>
            <p className='text-gray-500 text-center'>Do you feel like you need a local guide to explore the city? Then don&apos;t waste time fill out the form now. We will manage a local guide for you.</p>

            </div>

            

            <form onSubmit={handleSubmit}  className='space-y-10'>
               <div className='flex flex-col md:flex-row w-full gap-8'>
  
                <input name='name' disabled value={user?.displayName} required placeholder='Name' className=' w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text"  />
                <input name='email' disabled value={user?.email} required placeholder='Email' className='w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="email"  />
     
               </div>
               <input name='place' required placeholder='Where you want to visit?' className='w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text"  />

               <textarea name='requirement' required placeholder='Do you have any specific requirement?' className='w-full border-b border-blue-300 focus:outline-none py-1 focus:border-blue-800 focus:border-b-2 transition-colors' type="text"  />
               <div className='flex justify-center'>
               <input className='btn bg-blue-500 hover:bg-blue-600 text-white' type="submit" value={'SUBMIT'} />

               </div>
               

            </form>

            </div>
            
           
        </div>
        </div>

      

      
    </div>
  );
};

export default LocalAreaGuide;
