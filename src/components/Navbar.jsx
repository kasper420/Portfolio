import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-center items-center px-4 bg-black text-gray-300'>
      <div className='hidden md:flex space-x-6'>
        <Link to='home' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          Home
        </Link>
        <Link to='about' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          About
        </Link>
        <Link to='work' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          Work
        </Link>
        <Link to='skills' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          Skills
        </Link>
        <Link to='contact' smooth={true} className="hover:cursor-pointer border-b-2 border-[#0a192f] hover:border-gray-300 px-2 duration-500">
          Contact
        </Link> 
      </div>
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' }>
          <Link onClick={handleClick} to='home' smooth={true} className='duration-500 py-6 text-4xl'>
            Home
          </Link>
          <Link onClick={handleClick} to='about' smooth={true} className='duration-500 py-6 text-4xl'>
            About
          </Link>
          <Link onClick={handleClick} to='work' smooth={true} className='duration-500 py-6 text-4xl'>
            Work
          </Link>
          <Link onClick={handleClick} to='skills' smooth={true} className='duration-500 py-6 text-4xl'>
            Skills
          </Link>
          <Link onClick={handleClick} to='contact' smooth={true} className='duration-500 py-6 text-4xl'>
            Contact
          </Link>
      </div>
    </div>
  );
};

export default Navbar;
