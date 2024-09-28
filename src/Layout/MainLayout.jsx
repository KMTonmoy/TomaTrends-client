import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <div className='mb-[130px] md:mb-[200px]'>
                <Navbar />

            </div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;