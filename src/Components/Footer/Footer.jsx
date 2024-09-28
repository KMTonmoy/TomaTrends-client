import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-[#303030] text-white py-10'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>

        <div>
          <h2 className='text-2xl font-bold mb-4'>About Us</h2>
          <p className='text-gray-400'>
            Toma Trends is a leading online store that provides high-quality products to customers worldwide. Our mission is to offer the best shopping experience.
          </p>
        </div>


        <div>
          <h2 className='text-2xl font-bold mb-4'>Quick Links</h2>
          <ul>
            <li><a href="/" className='hover:text-pink-500 transition duration-300'>Home</a></li>
            <li><a href="/shop" className='hover:text-pink-500 transition duration-300'>Shop</a></li>
            <li><a href="/products" className='hover:text-pink-500 transition duration-300'>Products</a></li>
            <li><a href="/blog" className='hover:text-pink-500 transition duration-300'>Blog</a></li>
            <li><a href="/contact" className='hover:text-pink-500 transition duration-300'>Contact</a></li>
          </ul>
        </div>


        <div>
          <h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
          <p className='text-gray-400'>1234 Street Name, City, State, 12345</p>
          <p className='text-gray-400 mt-2'>Phone: +1 234 567 890</p>
          <p className='text-gray-400 mt-2'>Email: info@tomatrends.com</p>
          <div className='flex mt-4 gap-4'>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-pink-500 transition duration-300'>
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-pink-500 transition duration-300'>
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-pink-500 transition duration-300'>
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-400 hover:text-pink-500 transition duration-300'>
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>


      <div className='text-gray-400 text-center py-4 mt-10'>
        <p>&copy; {currentYear} Toma Trends. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
