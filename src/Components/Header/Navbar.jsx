import React, { useState } from 'react';
import { FaUser, FaShoppingCart, FaHeadphones, FaBars, } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import logo from '../../assets/logo/logoTomaTrands3.png';
import { motion } from 'framer-motion';
import { IoCloseSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBootomOpen, setIsbottomBar] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleBottomBar = () => {
    setIsbottomBar(!isBootomOpen);
  };

  return (

    <div className='fixed top-0 z-50 w-full '>
      <div className='relative'>
        <motion.div
          className='px-10 py-2 bg-white shadow-md mb-5'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='border-b-2 pt-2 flex gap-5  flex-row items-center justify-between'>
            <div>
              <img src={logo} className='w-[150px] h-[80px]' alt="Toma Trends Logo" />
            </div>

            <div className='flex flex-col md:flex-row items-center gap-4'>
              <div className='hidden md:flex items-center relative'>
                <input
                  type="text"
                  className="h-[55px] rounded-[6px] border border-[rgba(48,48,48,0.5)] md:w-[600px] w-full px-[25px] pr-[60px] outline-none transition-all duration-300 bg-transparent"
                  placeholder="Search your products"
                />
                <button className="absolute right-0 top-0 h-full rounded-r-[6px] flex items-center justify-center px-3 text-gray-500 hover:text-gray-900 transition duration-300">
                  <HiOutlineSearch size={20} />
                </button>
              </div>

              <div className='flex gap-5'>
                <div className='hidden md:flex items-center gap-2 md:gap-4 text-[#636363]'>
                  <FaUser size={20} className='text-[#636363]' />
                  <button className='hover:text-[#D63384] transition duration-300'>Login</button>
                  <p className='text-[#636363]'>/</p>
                  <button className='hover:text-[#D63384] transition duration-300'>Sign Up</button>
                </div>



                {/* Hamburger Icon for Small Screens */}
                <div className='flex gap-5'>

                  <button onClick={toggleBottomBar} className='md:hidden'>
                    <CiSearch size={24} className='text-[#636363] hover:text-[#D63384] transition duration-300' />
                  </button>

                  <div className='relative'>
                    <FaShoppingCart size={24} className='text-[#636363] hover:text-[#D63384] transition duration-300' />
                    <span className='absolute -top-2 -right-2 bg-[#D63384] text-white text-xs rounded-full px-2 py-0.5'>
                      3
                    </span>
                  </div>


                  <button onClick={toggleSidebar} className='md:hidden'>
                    <FaBars size={24} className='text-[#636363] hover:text-[#D63384] transition duration-300' />
                  </button>

                </div>




              </div>
            </div>
          </div>

          <div className='hidden md:flex justify-between items-center p-2'>
            <div className='flex gap-3 '>
              <a href="" className='duration-500 font-semibold hover:text-pink-500'>Home</a>
              <a href="" className='duration-500 font-semibold hover:text-pink-500'>Shop</a>
              <a href="" className='duration-500 font-semibold hover:text-pink-500'>Product</a>
              <a href="" className='duration-500 font-semibold hover:text-pink-500'>Blog</a>
              <a href="" className='duration-500 font-semibold hover:text-pink-500'>Contact</a>
            </div>

            <div className='flex items-center gap-3 hover:text-pink-500 duration-500 cursor-pointer'>
              <p className='text-4xl'><FaHeadphones /></p>
              <div>
                <p className='text-[20px] flex gap-2 items-center'> +99327456</p>
                <p>24/7 Support Center</p>
              </div>
            </div>
          </div>
        </motion.div>

        {isBootomOpen && (
          <motion.div
            className='fixed top-50 right-0 w-full  bg-white shadow-lg z-50 flex flex-col p-5 -mt-10'
            initial={{ y: 300 }}
            animate={{ y: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={toggleBottomBar} className='self-start mb-5 text-2xl hover:text-red-500 duration-500'><IoCloseSharp />
            </button>
            <div className='flex flex-col gap-3'>
              <div className='flex items-center relative'>
                <input
                  type="text"
                  className="h-[55px] rounded-[6px] border border-[rgba(48,48,48,0.5)] md:w-[600px] w-full px-[25px] pr-[60px] outline-none transition-all duration-300 bg-transparent"
                  placeholder="Search your products"
                />
                <button className="absolute right-0 top-0 h-full rounded-r-[6px] flex items-center justify-center px-3 text-gray-500 hover:text-gray-900 transition duration-300">
                  <HiOutlineSearch size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}


        {/* Sidebar for Mobile */}
        {isSidebarOpen && (
          <motion.div
            className='fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-5'
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ duration: 0.3 }}
          >
            <button onClick={toggleSidebar} className='self-start mb-5 text-2xl hover:text-red-500 duration-500'><IoCloseSharp />
            </button>
            <div className='flex flex-col gap-3'>
              <a href="" className='font-semibold hover:text-pink-500'>Home</a>
              <a href="" className='font-semibold hover:text-pink-500'>Shop</a>
              <a href="" className='font-semibold hover:text-pink-500'>Product</a>
              <a href="" className='font-semibold hover:text-pink-500'>Blog</a>
              <a href="" className='font-semibold hover:text-pink-500'>Contact</a>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
