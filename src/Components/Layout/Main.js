import React from 'react';
import {Outlet } from 'react-router-dom'
import Appoinment from '../Appointment/Appointment/Appointment';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Navbar/Navbar';
import Home from '../Home/Home/Home';

const Main = () => {
    return (
        <div>
            <Navbar> </Navbar>
            <Outlet> </Outlet>
            <Footer> </Footer>

            


        </div>
    );
};

export default Main;