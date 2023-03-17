import React from 'react';
import ContactForm from '../../ContactForm/ContactForm';
import AppoinmentCards from '../AppoinmentCards/AppoinmentCards';

import ContactCards from '../ContactCards/ContactCards';
import Endorsement from '../Endorsement/Endorsement';
import Poster from '../Poster/Poster';
import ServiceCards from '../Sevices/ServiceCards/ServiceCards';

const Home = () => {
    return (
        <div className='mx-5'>
          <Poster> </Poster>
          <ContactCards> </ContactCards>
          <ServiceCards> </ServiceCards>
          <AppoinmentCards> </AppoinmentCards>
          <Endorsement> </Endorsement>
          <ContactForm> </ContactForm>
        
          
         
        </div>
    );
};

export default Home;