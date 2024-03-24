import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  // State to manage the toggle
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white text-[#0079A0] font-bold shadow sticky top-0 z-10">
      <div className="container mx-auto px-4 py-5 flex   items-center justify-between">
        <Link to="/" onClick={closeMenu} className="flex flex-col md: items-center">
          <img src="/logos/refyndata.svg" alt="refyndata-logo" className="h-12 md:display-inline" />
          <div className={`md:block ${isOpen ? 'hidden' : 'block'}  md:hidden `}>
          <img  className="w-[140px] h-[30px] pl-10"src="/footer/E-Verify_Logo-2x.png" alt="" />

          </div>
          
        </Link>
        

        <div className="hidden md:flex md:space-x-1 lg:space-x-4">
          <Link to="/" className="hover:bg-gray-200 px-2 lg:px-3 py-2 rounded-md">Home</Link>
          <Link to="/about" className="hover:bg-gray-200 px-2 lg:px-3 py-2 rounded-md">About us</Link>
          <Link to="/services" className="hover:bg-gray-200 px-2 lg:px-3 py-2 rounded-md">Services</Link>
          <Link to="/careers" className="hover:bg-gray-200 px-2 lg:px-3 py-2 rounded-md">Careers</Link>
          <Link to="/clients" className="hover:bg-gray-200 px-2 lg:px-3 py-2 rounded-md">Clients</Link>
          <Link to="/contact" className="hover:bg-gray-200 px-2 lg:px-3 py-2 rounded-md">Contact us</Link>
          <img  className="w-[140px] h-[30px] mt-1 pl-5"src="/footer/E-Verify_Logo-2x.png" alt="" />
        </div>
        {/* Hamburger icon */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <hr></hr>
        <div className='mt-3'>
        <Link to="/" onClick={closeMenu} className="hover:bg-gray-200 px-5 py-1 rounded-md">Home</Link>
        <Link to="/about" onClick={closeMenu} className="hover:bg-gray-200 block px-5 py-1 rounded-md">About us</Link>
        <Link to="/services" onClick={closeMenu} className="hover:bg-gray-200 block px-5 py-1 rounded-md">Services</Link>
        <Link to="/careers" onClick={closeMenu} className="hover:bg-gray-200 block px-5 py-1 rounded-md">Careers</Link>
        <Link to="/clients" onClick={closeMenu} className="hover:bg-gray-200 block px-5 py-1 rounded-md">Clients</Link>
        <Link to="/contact" onClick={closeMenu} className="hover:bg-gray-200 block px-5 py-1 pb-3 rounded-md">Contact us</Link>
    </div>
      </div>
    </nav>
  );
}

export default Navbar;
