import { useEffect, useState } from 'react';
import './RangeSlider.css'
import Slider from 'react-slider';



const RangeSlider = ({title, unit,MIN,MAX,getValue}) => {
    const [value,setValue]= useState([MIN,MAX]);
    
    
   useEffect(()=>{
    getValue(value);

   },[value,getValue])

    return (
        <div className='box '>
            <p className='font-medium mb-4'>{title} </p>
            <Slider className={'slider mb-8'} value={value} min={MIN} max={MAX} onChange={setValue}></Slider>
            <div className='flex  gap-2 text-blue-500 justify-center'>
            <p>{value[0]} {unit}</p>
            <p>~</p>
            <p>{value[1]} {unit}</p>

            </div>
            
            
        </div>
    );
};

export default RangeSlider;