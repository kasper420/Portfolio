import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-500 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className='sm:text-center pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-red-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full px-4'>
            <div className='sm:text-center text-4xl font-bold'>
              <p>
                Studies:
              </p>
              <div className='sm:text-right grid grid-cols-2 text-4xl font-bold mt-10'>
              <p className='text-lg text-center ml-20 text-black font-extrabold'>
                Previous Studies: 
              </p>
              <p className='text-sm text-left '>
                Start of school carreer - 2014 => Voskenslaan, Wiskunde Wetenschappen
              </p>
              <p className='text-lg text-center ml-20 text-red-600'> 
              </p>
              <p className='text-sm text-left  mt-2'>
                2014 - 2019 => Donbosco SDW, Elektronica / Elektriciteit
              </p>
              <p className='text-lg text-center text-black font-extrabold ml-20 mt-5'>
                Current Studies: 
              </p>
              <p className='text-sm text-left mt-7'>
                2019 - ... => HoGent, Toegepaste Informatica
              </p>
              </div>
            </div>
            <div >
              <p className='sm:text-center text-4xl font-bold mt-10'>
                Personal Info:
              </p>
              <p className='text-center mt-5 text-black font-bold'>Im Kasper,
                a 21 year old student at Hogent studying Computer Science.
                I love working in teams and learn very quickly, i always try to motivate myself and go for every opportunity.
                My passion is programming and i never stop challenging myself.
              </p>
              <br />
              <p className='font-extrabold text-lg text-red-500 text-center'>Will i be the next new programmer in your team?</p>
            </div>
            <div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
