import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-gray-800 hover:text-gray-600">
              QuickBite 🍴
            </Link>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
            <Link to="/" className="text-gray-800 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link>

             <Link to="/client-dashboard" className="text-gray-800 font-medium relative group">
              user Profile  
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </Link> 

            <a
              href="#menu"
              className="text-gray-800 font-medium relative group"
            >
              Menu
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="text-gray-800 font-medium relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-gray-800 font-medium relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-orange-500 text-white font-semibold rounded hover:bg-orange-700 hover:transition duration-300 transform hover:scale-105"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded hover:bg-orange-700 hover:text-white transition duration-300 transform hover:scale-105"
            >
              Sign Up
            </Link>
            
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 hover:text-gray-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Home
          </Link>
          <a href="#menu" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Menu
          </a>
          <a href="#about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            About Us
          </a>
          <a href="#contact" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
            Contact
          </a>
          <Link to="/login" className="block px-4 py-2 text-blue-500 hover:bg-gray-200">
            Login
          </Link>
          <Link to="/signup" className="block px-4 py-2 text-blue-500 hover:bg-gray-200">
            Sign Up
          </Link>
          <Link to="/orders" className="block px-4 py-2 text-blue-500 hover:bg-gray-200">
            My orders
          </Link>
          <Link to="/client-dashboard" className="block px-4 py-2 text-blue-500 hover:bg-gray-200">
            user profile
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
