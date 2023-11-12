import { useContext } from 'react';
import TopBar from '../components/TopBar';
import { AuthContext } from '../provider/AuthProvider';
import RoomSidebar from '../components/RoomSidebar';
import AllRoomCard from '../components/AllRoomCard';

const Rooms = () => {
    const { loadedRooms } = useContext(AuthContext);
    return (

        <div className='flex flex-col-reverse gap-5 md:flex-row-reverse px-2 mt-24 py-10'>

            <div className=' md:w-3/4'>
                <TopBar></TopBar>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto lg:gap-16 gap-8 justify-center' loading="lazy">

                    {
                        loadedRooms.map(hotelDetail => <AllRoomCard key={hotelDetail._id} info={hotelDetail}></AllRoomCard>)
                    }

                </div>


            </div>

            <div className='md:w-1/4'><RoomSidebar></RoomSidebar></div> 
            


        </div>

    );
};

export default Rooms;