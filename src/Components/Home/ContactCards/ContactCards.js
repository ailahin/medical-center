import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import ContactCard from '../ContactCard/ContactCard';

const ContactCards = () => {
    const contactData= [
        {
            id:1,
            name: "Openning Hours",
            description: " 8 am to 5pm" ,
            icon:  clock,
            bgClass: 'bg-primary'
        },
        {
            id:2,
            name: "Location",
            description: " 8 am to 5pm" ,
            icon:  marker,
            bgClass: 'bg-primary'
        },
        {
            id:3,
            name: "Contact us",
            description: " 8 am to 5pm" ,
            icon:  phone,
            bgClass: 'bg-primary'
        }
    ]
    return (
        <div className=' grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            {
                contactData.map(data =>  ( 
                    <ContactCard  key={data.id} 
                    data={data}>  </ContactCard>
                 ))
            }

            
        </div>
    );
};

export default ContactCards;