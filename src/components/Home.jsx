import {React, useState} from 'react'
import {FaStream, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Home = () => {
  const [open, setOpen] = useState (false);

    return (
      <div>
        <div className='flex pt-7 justify-center h-screen w-screen sm:h-full sm:w-full bg-black'>
        <h3 onClick={() => setOpen(!open)}><FaStream className='cursor-pointer sm:cursor-pointer text-white sm:text-white
         text-4xl sm:text-2xl fixed sm:fixed right-60 sm:right-10 font-normal
        '/></h3>
      {open && (
            <div>
            <ul className='flex justify-center flex-col gap-6 text-center cursor-pointer
            pt-20'>
                <li className='text-white font-bold text-3xl'>
                <Link to="/">Home</Link></li>
                <li className='text-white font-bold text-3xl'>
                <Link to="/services">Our services</Link></li>
                <li className='text-white font-bold text-3xl'>
                <Link to="/works">Our works</Link></li>
                <li className='text-white font-bold text-3xl'>
                <Link to="/about">About Us</Link></li>
                <li className='text-white font-bold text-3xl'>
                <Link to="/team">Team</Link></li>
                <li className='text-white font-bold text-3xl'>
                <Link to="/contact">Contact Us</Link></li>
            </ul>
                </div>
      )}
        </div>
  <footer className='
             top-[400px] sm:top-[350px]
             flex flex-row relative justify-center'>
    <Link to="/" target='_blank'><FaAngleLeft className='text-3xl'/></Link>
    <Link to="/services" target='_blank'><FaAngleRight className='text-3xl'/></Link>
  </footer>
  </div>
  )
}

export default Home