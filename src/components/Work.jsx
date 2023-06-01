import React from 'react';
import Cars from '../assets/Cars.png';
import Port from '../assets/port.png';

const Work = () => {
  return (
    <div name='work' className='w-full min-h-screen text-gray-300 bg-black flex justify-center items-center'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>
            Projects
          </p>
          <p className='py-6'>These are some of my previous projects</p>
        </div>
        <div>
          <p className="font-bold" >Login => </p>
          <p>Username: Jan</p>
          <p>Password: Baksteen22</p>
          <div style={{ backgroundImage: `url(${Cars})` }} className='shadow-lg border-2 border-red-500 shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white tracking-wider text-center'>
                React & Node.js Application
              </p>
              <div className='pt-8 text-center'>
                <a className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' href='https://hogent-web.github.io/frontendweb-pieter-2122-kasper420/' target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
              
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Port})` }} className='shadow-lg border-2 border-red-500 shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div mt-5'>
            <div className='opacity-0 group-hover:opacity-100'>
              <p className='text-2xl font-bold text-white tracking-wider text-center'>
                React Application
              </p>
              <div className='pt-8 text-center'>
                <a className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' href='https://628e513acc96f10087bbb67f--portfolio-kasper.netlify.app/' target="_blank" rel="noreferrer">
                  Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
