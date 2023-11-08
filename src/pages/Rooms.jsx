import { useContext } from 'react';
import TopBar from '../components/TopBar';
import { AuthContext } from '../provider/AuthProvider';
import HotelCard from '../components/HotelCard';

const Rooms = () => {
    const {loadedRooms}=useContext(AuthContext);
    return (
        <div className='bg-slate-50'>
            <TopBar></TopBar>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-16 justify-center' loading="lazy">

            {
                loadedRooms.map(hotelDetail =><HotelCard key={hotelDetail._id} info={hotelDetail}></HotelCard>)
            }

            </div>
           
            
        </div>
    );
};

export default Rooms;