import React, { useContext, useState } from 'react';
import RangeSlider from './Range Slider/RangeSlider';
import { AuthContext } from '../provider/AuthProvider';





const RoomSidebar = () => {


    const {
        handlePriceValue,
        handlePersonValue,
        handleUnitValue,
    
    }=useContext(AuthContext);
    return (
        <div className='sticky top-0 p-4 border space-y-5 shadow-md bg-slate-50'>

            <p className='font-bold text-center py-2 shadow-md '>Filter By your range</p>
            <RangeSlider title='Select the price range: ' unit='BDT' MIN={0} MAX={10000} getValue={handlePriceValue}></RangeSlider>
            <RangeSlider title='Number of Members: ' unit='Person' MIN={1} MAX={10} getValue={handlePersonValue}></RangeSlider>
            <RangeSlider title='Room Size: ' unit='FT' MIN={0} MAX={200} getValue={handleUnitValue}></RangeSlider>


        </div>
    );
};

export default RoomSidebar;