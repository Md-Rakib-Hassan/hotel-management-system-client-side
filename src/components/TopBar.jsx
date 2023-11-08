import React, { useContext, useEffect, useState } from 'react';
import useAxios from '../customHooks/useAxios';
import  { AuthContext } from '../provider/AuthProvider';

const TopBar = () => {
    const axios=useAxios();
    const [sortField,setSortField]=useState('');
    const [sortOrder,setSortOrder]=useState('');
    const {loadedRooms,setLoadedRooms} =useContext(AuthContext);
   
    // const =axios.get('')

    const setValue= (e)=>{
        const value=e.target.value;
        if(!value) return;
        const [field,order]=value.split(',');
        setSortField(field);
        setSortOrder(order);

    }

    useEffect(()=>{
        axios.get(`/hotel-details?sortField=${sortField}&sortOrder=${sortOrder}`)
        .then(res=>(setLoadedRooms(res.data)));

    },[sortField,sortOrder,axios,setLoadedRooms]);

    console.log(loadedRooms);


    return (
        <div className='bg-white shadow-md mb-10'>
            <div className='flex justify-around'>
                <p className='font-medium text-xl'>All Rooms</p>

                <div>
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