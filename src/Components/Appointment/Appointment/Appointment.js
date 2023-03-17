import React, { useState } from 'react';
import AppoinmentPoster from '../AppointmentPoster/AppointmentPoster';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectedDate, setSelectedDate]= useState( new Date());
    return (
        <div>
            <AppoinmentPoster 
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}> 
            </AppoinmentPoster>

            <AvailableAppointments
             selectedDate={selectedDate}
             setSelectedDate={setSelectedDate}>
            </AvailableAppointments>
        </div>
    );
};

export default Appointment;