import React from 'react';
import logo from '../../assets/logo/logoTomaTrands.png';
import { IoIosSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoHeadsetSharp } from "react-icons/io5";


const Navbar = () => {
    return (
        <div >
            <div className='flex mb-5 justify-center items-center'>
            <div className='flex justify-left gap-2 mr-48 items-center'>
                   <img className='w-24 h-12' src={logo} alt="" />
                   <h2 className='text-2xl font-bold text-orange-600'>TomaTrends</h2> 
              </div>

              <div className='relative mr-5 flex justify-start items-center'>
                  <input className='input w-72 p-2 rounded-lg relative border-red-800' type="text" placeholder='Search for products and brands' />
                  <IoIosSearch className='absolute w-24 top-4 left-52' />
              </div>

              <div className='flex justify-center mr-5 items-center'>
              <FaUserCircle className='mr-2' />
                  <button>Login</button> <span>/</span> <button>Sign Up</button>
              </div>
              <div className='flex ml-5 justify-start items-center gap-3'>
                   <FaBagShopping /> <span>My Bag($ 54.97)</span>
              </div>
            </div>
            <hr className='border-green-600  ' />
       
            <div className='flex my-2 justify-between mx-12 items-center'>
                 <div className='flex justify-center items-center gap-5'>
                   <select className='text-orange-400 ml-5' name="" id="">
                      <option  value=""> All Category</option>
                     </select> 
                   <select name="" id="">
                      <option value="">Home</option>
                     </select> 
                   <select name="" id="">
                      <option value="">Shop</option>
                     </select> 
                   <select name="" id="">
                      <option value="">Product</option>
                     </select> 
                   <select name="" id="">
                      <option value=""> Blog</option>
                     </select> 

                   <select name="" id="">
                      <option value="">Pages</option>
                     </select> 
                    <button>Contact</button>

                </div> 
                <div className='flex justify-center items-center gap-4'>
                <IoHeadsetSharp className='text-2xl' />  <div className='flex flex-col'>
                <h2 className='font-bold text-orange-400 text-xl'>+99327556</h2>
                 <p className='-mt-2'>24/7 Support Center</p>
                </div>
                </div>
            </div>
            <hr className='border-green-600  ' />
        </div>
    );
};

export default Navbar;