import React from 'react'
import { Outlet,Link } from 'react-router-dom';
import myImage from "../assets/avatar.png"

const color ={
    backgroundColor:"#383838"
  }

const Team = () => {
  return (
    <div style={color} className='h-screen w-screen '>
    <>
    <nav className='py-3'>
      <ul className='flex flex-row gap-4 justify-center text-white font-bold text-sm sm:flex sm:flex-col'>
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
  <div>
  <img src={myImage} className='w-[50px] h-[80px]'/>
  </div>
  </div>
  )
}

export default Team