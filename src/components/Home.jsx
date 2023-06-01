import React from 'react';
import CV from '../assets/CV.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-black'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ccd6f6] text-center font-extrabold text-5xl'>Portofolio of:</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white text-center mt-20'>
          Vandekerckhove Kasper
        </h1>
        <p className='mt-5 text-2xl sm:text-2xl font-bold text-white text-center mt-20 text-red-600'>Download my Resume:</p>
        <div className='self-center mt-5'>
          <a className='text-white group border-2 px-6 py-3 my-2 w-36 flex items-center hover:bg-red-600 hover:border-red-600 duration-500' href={CV} download>
            Resume <AiOutlineDownload size={20} className='text-white ml-3'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
