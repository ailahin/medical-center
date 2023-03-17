import React, { useState } from "react";
import chair from "../../../assets/images/chair.png"
import {DayPicker} from "react-day-picker"
import { format } from "date-fns";
const AppoinmentPoster = ({selectedDate, setSelectedDate}) => {
    
  return (
    <header className="lg:m-6">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair} alt="chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className=" lg:mr-6">
            <DayPicker
            mode= "single"
            selected={selectedDate}
            onDayClick= {setSelectedDate}
            >
            </DayPicker>
            <p> You have selected Date:  {format (selectedDate, 'PP')} </p>
    
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppoinmentPoster;
