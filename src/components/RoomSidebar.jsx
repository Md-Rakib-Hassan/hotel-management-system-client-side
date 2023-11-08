import React from 'react';
import RangeSlider from './Range Slider/RangeSlider';

const RoomSidebar = () => {
    return (
        <div className='sticky top-0 p-4 border space-y-5 shadow-md bg-slate-50'>

            <p className='font-bold text-center py-2 shadow-md '>Filter By your range</p>
          <RangeSlider title='Select the price range: ' unit='BDT' MIN={0} MAX={8000}></RangeSlider>
          <RangeSlider title='Number of Members: ' unit='Person'  MIN={1} MAX={10}></RangeSlider>
          <RangeSlider title='Room Size: ' unit='FT'  MIN={0} MAX={150}></RangeSlider>


        </div>
    );
};

export default RoomSidebar;