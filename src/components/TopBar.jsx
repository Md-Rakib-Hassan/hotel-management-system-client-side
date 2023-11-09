import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios';
import  { AuthContext } from '../provider/AuthProvider';

const TopBar = () => {
    const axios=useAxios();
    const [sortField,setSortField]=useState('');
    const [sortOrder,setSortOrder]=useState('');
    const { setLoadedRooms,
        loadedRooms,
        price,
        person,
        room,
    }=useContext(AuthContext);
   
    // const =axios.get('')

    const setValue= (e)=>{
        const value=e.target.value;
        const [field,order]=value.split(',');
        setSortField(field);
        setSortOrder(order);

    }
//http://localhost:5000/api/v1/hotel-details?sortField=price&sortOrder=asc&pricemin=0&pricemax=8000&membermin=1&membermax=10&roommin=0&roommax=150
    useEffect(()=>{
        console.log( price,
            person,
            room,);
        axios.get(`/hotel-details?sortField=${sortField}&sortOrder=${sortOrder}&pricemin=${price[0]}&pricemax=${price[1]}&membermin=${person[0]}&membermax=${person[1]}&roommin=${room[0]}&roommax=${room[1]}`)
        .then(res=>(setLoadedRooms(res.data)));

    },[sortField,sortOrder,axios,setLoadedRooms,price,person,room]);

    console.log(loadedRooms);


    return (
        <div className='bg-slate-50 shadow-md mb-10 sticky top-0 z-50'>
            <div className='flex flex-col md:flex-row justify-between gap-5 py-2 rounded-md md:mx-10 '>
                <p className='font-medium text-xl text-center md:text-left'>All Rooms</p>

                <div className='mx-auto md:mx-0'>
                    <label htmlFor="sortSelection" className='font-medium'>Sort By:  </label>
                    <select className='bg-slate-200' name="sortSelection" id="" onChange={setValue}>
                        <option value="">Default</option>
                        <option value="price,asc">Price (low&gt;high)</option>
                        <option value="price,desc">Price (high&gt;low)</option>
                        <option value="members,asc">Members (low&gt;high)</option>
                        <option value="members,desc">Members (high&gt;low)</option>
                        <option value="feet,asc">Room Size (low&gt;high)</option>
                        <option value="feet,desc">Room Size (high&gt;low)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default TopBar;