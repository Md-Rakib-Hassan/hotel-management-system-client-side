import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../customHooks/useAxios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { BiUserCircle } from 'react-icons/bi';
import { LiaExpandArrowsAltSolid, LiaMoneyBillWaveAltSolid } from 'react-icons/lia'
import './css/Room.css'
import { DatePicker} from 'antd';

import RoomTabs from '../components/RoomTabs';
import moment from 'moment/moment';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
const Room = () => {
    const { roomId } = useParams();
    const axios = useAxios();
    const [roomInfo, setRoomInfo] = useState({});
    const [fromDate,setFromDate] = useState('');
    const [toDate,setToDate] = useState('');
    const [totalDays,setTotalDays] = useState('');

    

    useEffect(() => {
        axios.get(`/room/${roomId}`)
            .then(res => setRoomInfo(res.data));
    }, [axios, roomId]);

    console.log(roomInfo);
    const { room_images } = roomInfo;

    const selectedDate =(dates)=>{

        setFromDate(moment(dates[0]['$d']).format('DD-MM-YYYY'))
        setToDate(moment(dates[1]['$d']).format('DD-MM-YYYY'))
        setTotalDays(moment.duration(dates[1].diff(dates[0])).asDays()+1);
     
    }

    const{user}=useContext(AuthContext);

    const handleBooking= ()=>{


        if(!fromDate || !toDate){
            return   Swal.fire('Try Again', 'Please Select date', 'error')
        }
        const bookingDetails={
            email: user.email,
            roomId,
            base:roomInfo.base,
            title:roomInfo.title,
            price:roomInfo.price,
            totalDays,
            fromDate,
            toDate,
            review_given:false,
        }

        axios.post('/booking-room',bookingDetails)
        .then(res=>{
            if(res.data.acknowledged){
             return   Swal.fire('Thank You.', 'You Successfully booked the hotel', 'success')

            }
             return   Swal.fire('Try Again', 'Something gone wrong', 'error')
             

        })

    }


    // console.log('room_images',room_images);

    const { RangePicker } = DatePicker;
    return (
        <div className='mt-24'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>BookHotel | Rooms</title>

            </Helmet>

            <div className='flex lg:flex-row flex-col'>
                <div className='lg:w-2/3'>

                    <Carousel>

                        {
                            room_images?.map(image => <div key={roomId}>
                                <img src={image} />
                            </div>)
                        }

                    </Carousel >

                </div>
                <div className='lg:w-1/3 px-2 space-y-4'>
                     <p className='text-2xl font-bold'> {roomInfo.title}</p>
                    <p><span className='font-medium'>Members: </span> {roomInfo.members} Gustes</p>
                    <p><span className='font-medium'>Room Size: </span> {roomInfo.feet} Sq. Feet</p>
                    <p><span className='font-medium'>Per-Night: </span> {roomInfo.price} BDT</p>
                    <p><span className='font-medium'>Description: </span> {roomInfo.Description}</p>
                    <p><span className='font-medium'>Booking Date:  <RangePicker format={'DD-MM-YYYY' } onChange={selectedDate} /> </span></p>
                    <hr />
                    <p><span className='font-medium'>From: </span> {fromDate? fromDate : ''}</p>
                    <p><span className='font-medium'>To: </span> {toDate ? toDate : ''}</p>
                    <p><span className='font-medium'>No of Days: </span> {totalDays ? totalDays : ''}</p>
                    <p><span className='font-medium'>Total Cost: </span> {totalDays ? parseInt(totalDays)*parseInt(roomInfo.price) : '' }</p>
                    



                    <button onClick={handleBooking} className='btn bg-blue-500 hover:bg-blue-600 text-white'>Book Now</button>

                
                        
                </div>
            </div>

            <div className=' flex gap-6 lg:gap-32 lg:text-xl  mx-auto text-center justify-center  py-8 text-gray-400 font-thin'>


                <p className='flex flex-col items-center gap-1 text-2xl'>
                    <BiUserCircle className='text-5xl ' />   {roomInfo.members} GUESTS
                </p>
                <p className='flex flex-col items-center text-2xl gap-1'>
                    <LiaExpandArrowsAltSolid className='text-5xl'></LiaExpandArrowsAltSolid> {roomInfo.feet} FT
                </p>
                <p className='flex flex-col items-center text-2xl gap-1'><LiaMoneyBillWaveAltSolid className='text-5xl'></LiaMoneyBillWaveAltSolid> {roomInfo.price} BDT</p>

            </div>

            <RoomTabs roomId={roomId}></RoomTabs>









        </div>
    );
};

export default Room;