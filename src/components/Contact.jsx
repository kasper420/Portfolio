import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import CV from '../assets/CV.pdf'
import { AiOutlineDownload } from 'react-icons/ai'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-black flex justify-center items-center p-4'>
      <div className='pb-8 text-center'>
                <p className='text-4xl font-bold inline border-b-4 border-red-600 text-gray-300'>Contact</p>
                <br /> <br /> <br />
                <p className='text-red-500 font-bold py-2'>email: </p><p className='text-gray-300'>kasper.vandekerckhove@hotmail.be</p>
                <br />
                <p className='text-red-500 font-bold py-2'>social media: </p>
                <br />
                <div className='grid grid-cols-3'>
                <a className='justify-self-center self-center' href="https://www.facebook.com/profile.php?id=100008917507084"><AiFillFacebook className='bg-red-600 w-8 h-8'/></a>
        <a className='justify-self-center self-center' href="https://www.facebook.com/profile.php?id=100008917507084"><AiFillLinkedin className='bg-red-600 w-8 h-8'/></a>
        <a className='justify-self-center self-center' href="https://www.facebook.com/profile.php?id=100008917507084"><AiFillInstagram className='bg-red-600 w-8 h-8'/></a>
        </div>
        <br /><br />
        <p className='text-red-500 font-bold py-2'>resume: </p>
        <div className='self-center mt-5 ml-14'>
          <a className='text-white group border-2 px-6 py-3 my-2 w-36 flex items-center hover:bg-red-600 hover:border-red-600 duration-500' href={CV} download>
            Resume <AiOutlineDownload size={20} className='text-white ml-3'/>
          </a>
        
                </div>

            </div>
    </div>
  )
}

export default Contact