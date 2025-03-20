import React from 'react';
import { FaSnapchat, FaInstagram, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link if using React Router
import Logo from "../../assets/images/logo.png"; // Update this with your actual logo path
import googlePlay from '../../assets/images/google.png';
import appStore from '../../assets/images/app.png';

const FooterComponent = () => {
  return (
    <footer className="w-full bg-white text-[#19649E] border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        {/* Left Side - Logo and Description */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <img src={Logo} alt="Wellbeing Day Logo" className="h-16" />
          <p className="text-sm max-w-xs">
            This platform and this application are a true achievement, as we have made the most of technology to serve humanity.
            We have transferred the clinic's work as it is to the application, with its components and more.
          </p>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-extrabold mb-3">Menu</h2>
          <ul className='space-y-2 text-gray-500 font-medium'>
            {/* Add links to each page */}
            <li>
              <Link to="/" className="hover:text-[#19649E] transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#19649E] transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#19649E] transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-[#19649E] transition duration-300">
                Team
              </Link>
            </li>
          </ul>
        </div>

        {/* Account & Policies */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="font-bold mb-3">Account & Policies</h2>
          <ul className='space-y-2 text-gray-500 font-medium'>
            <li>
                Privacy Policy
            </li>
            <li>
              
                Refund and Return Policy
            </li>
          </ul>
        </div>

        {/* App Download Links & Social Media Icons */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h2 className="font-bold">Download the application by clicking on the link below:</h2>
          <div className="flex gap-4 justify-center">
            <img src={googlePlay} alt="Google Play" className="h-10 cursor-pointer" />
            <img src={appStore} alt="App Store" className="h-10 cursor-pointer" />
          </div>
          <div className="flex gap-6 justify-center text-2xl mt-4">
            <FaSnapchat className="cursor-pointer hover:text-yellow-500 transition duration-300" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition duration-300" />
            <FaFacebook className="cursor-pointer hover:text-blue-600 transition duration-300" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 py-6 border-t border-gray-300">
        Copyright by Smart @2025
      </div>
    </footer>
  );
};

export default FooterComponent;