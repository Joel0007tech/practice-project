import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import avatar from "../assets/avatar.png"
const color ={
    backgroundColor:"#383838"
  }

const About = () => {
  return (
    <div className='w-screen h-screen' style={color}>
    <>
    <nav className='py-8'>
      <ul className='flex flex-row gap-4 justify-center text-white font-normal text-sm sm:flex sm:flex-col'>
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
  <h3 className='font-bold text-center text-white text-2xl py-8'>About us</h3>
  <div className="flex justify-center py-5">
  <div className="w-1/2 animate__animated animate__fadeInLeft flex flex-row justify-center">
  <img src={avatar} alt=''/>
  </div>
  <div className="w-1/2 animate__animated animate__fadeInRight">
    <h2 className='text-white font-normal'>We are a digital agency committed to delivering exceptional results for<br/>
     our clients. Our team of experts specializes in creating customized<br/>
      digital solutions that drive business growth. With a focus on innovative<br/>
      technology and design, we help companies achieve their online goals<br/>
       and stand out in a crowded market. From UI/UX design to website<br/>
       development, we provide a full range of services to help businesses<br/>
        succeed in the digital world.<br/>
         Let us help you reach your target audience and achieve your goals.
</h2>
  </div>
</div>
  </div>


  )
}

export default About