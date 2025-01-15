import React from 'react';
import Navbar from '../Navabr/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
const Main = () => {
    return (
        <div className='max-w-screen-xl  flex flex-col mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Main;