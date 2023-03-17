import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentDetails from './AppointmentDetails';

const AvailableAppointments = ({selectedDate}) => {
    const [servicesSlot, setServicesSlot]= useState([])
    const [treatment, setTreatment]= useState(null)
    useEffect(()=>{
        fetch('servicesSlot.json')
        .then(reponse=> reponse.json())
        .then(data=> setServicesSlot(data))
    })
    return (
        <section className='m-12'>
            <p className='text-center text-primary font-bold'> Available Appoinments on {format(selectedDate, 'PP') }</p>

            <div className='grid gap-6  grid-cols-2, md:grid-cols-3, lg:grid-cols-3'>

                {
                    servicesSlot.map(slotDetails=> <AppointmentDetails
                    key={slotDetails.id} 
                    slotDetails={slotDetails} 
                    setTreatment= {setTreatment}
                    >  </AppointmentDetails> )
                 
                }

            </div>
            {   treatment &&
            <BookingModal treatment={treatment}> 
            </BookingModal>
            }
            
        </section>
    );
};

export default AvailableAppointments;