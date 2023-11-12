import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios';
import { AuthContext } from '../provider/AuthProvider';
import ReviewModal from '../components/ReviewModal';

const MyBooking = () => {
    const [bookings, setBookings] = useState([]);
    const {user}=useContext(AuthContext);
    const axios=useAxios();
    useEffect(()=>{
        axios.get(`/my-booking/${user.email}`)
        .then(res=>setBookings(res.data));

    },[axios,user]);


    return (
        <div className="overflow-x-auto w-5/6 mx-auto mt-24">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Room</th>
        <th>Booking Date</th>
        <th>Stay</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        bookings.map(booking=>
            <tr key={booking._id}>
     
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={booking.base} alt="hotel" />
              </div>
            </div>
            <div>
              <div className="font-bold">{booking.title}</div>
              {/* <div className="text-sm opacity-50">Booking Id: {booking._id}</div> */}
            </div>
          </div>
        </td>
        <td>
          From: {booking.fromDate}
          <br/>
          To: {booking.toDate}
        </td>
        <td>{booking.totalDays} days</td>
        <th>
          <ReviewModal booking={booking}></ReviewModal>
          <button className="btn btn-ghost btn-xs">Update</button>
          
         

        </th>
        
      </tr>)
      }
      
    
    </tbody>
    
    
  </table>
</div>
    );
};

export default MyBooking;