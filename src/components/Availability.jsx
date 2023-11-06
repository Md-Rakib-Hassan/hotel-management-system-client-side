import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const Availability = () => {

    const [selectedDate, setSelectedDate]=useState(new Date());


    console.log(selectedDate);

    return (
      <div>
        <DatePicker
        label="Basic example"
        selected={selectedDate}
        onChange={date=>setSelectedDate(date)}
        minDate={new Date()}
        ></DatePicker>
        
      </div>
    );
};

export default Availability;