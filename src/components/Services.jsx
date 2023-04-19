import {React, useState} from 'react'
import { Outlet,Link } from 'react-router-dom'
import {FaAngleLeft, FaAngleRight, FaStream} from "react-icons/fa";
import Logo from "../assets/Group 3999.png"

const color ={
    backgroundColor:"#383838"
  }

const Services = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={color} className='h-screen w-full sm:w-screen sm:h-screen'>
          <div className="hidden 2xl:hidden sm:block overflow-hidden
            sm:border-b-2 sm:border-white sm:rounded-b-md">
              <div className='pb-3 pt-3 flex'>
      <FaStream
        className="cursor-pointer sm:cursor-pointer text-white sm:text-white
     sm:text-xl fixed sm:fixed sm:right-10 font-normal
    "
    onClick={() => setOpen(!open)}/>
      <img src={Logo} alt="logo" className='h-[30px] w-[80px] ml-6'/>
              </div>
   
    {open && (
      <div className='relative bottom-2 left-4'>
        <ul
          className="flex justify-center flex-col text-center cursor-pointer
        pt-3"
        >
          <li className="text-white font-semibold text-sm ">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white font-semibold text-sm">
            <Link to="/services">Our services</Link>
          </li>
          <li className="text-white font-semibold text-sm ">
            <Link to="/works">Our works</Link>
          </li>
          <li className="text-white font-semibold text-sm ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="text-white font-semibold text-sm ">
            <Link to="/team">Team</Link>
          </li>
          <li className="text-white font-semibold text-sm ">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    )}
    </div>
    <>
    <nav className='py-8'>
      <ul className='flex flex-row gap-4 justify-center text-white font-normal
       text-sm 2xl:block sm:hidden'>
        <li className='hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2'>
          <Link to="/services">Our Services</Link>
        </li>
        <li className='hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2'>
          <Link to="/works">Our Works</Link>
        </li>
        <li className='hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2'>
          <Link to="/about">About Us</Link>
        </li>
        <li className='hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2'>
          <Link to="/team">Team</Link>
        </li>
        <li className='hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2'>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
  
  <h3 className='font-bold text-2xl text-white text-center 2xl:block sm:relative sm:bottom-10'>our services</h3>
  <h4 className='font-bold text-2xl sm:text-sm text-white
   text-center sm:text-center py-10 sm:py-2 2xl:block sm:relative sm:bottom-6'>Product Strategy</h4>
  <p className='font-bold text-xl sm:text-sm text-white
   text-center sm:text-center py-10 sm:py-2 sm:font-normal 2xl:block'>
    As a data-driven company, one of our major services is to use desk research<br/>
  to assess all the market data that is currently accessible in order to create<br/>
  the optimum alignment between your organization's demand and those of<br/> the product.</p>

  <footer className='
             top-[250px] sm:top-[80px]
             flex flex-row relative justify-center'>
   <Link to="/services" target='_blank'><FaAngleLeft className='text-3xl'/></Link>
    <Link to="/works" target='_blank'><FaAngleRight className='text-3xl'/></Link>
  </footer>
  </div>
  )
}

export default Services