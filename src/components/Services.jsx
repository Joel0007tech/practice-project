import React from 'react'
import { Outlet,Link } from 'react-router-dom'
const color ={
    backgroundColor:"#383838"
  }

const Services = () => {
  return (
    <div style={color} className='h-screen w-screen sm:w-full sm:h-full'>
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
  <h3 className='font-bold text-2xl text-white text-center'>our services</h3>
  <h4 className='font-bold text-2xl sm:text-sm text-white text-center sm:text-center py-10 sm:py-2'>Product Strategy</h4>
  <p className='font-bold text-xl sm:text-sm text-white text-center sm:text-center py-10 sm:py-2 sm:font-normal'>
    As a data-driven company, one of our major services is to use desk research<br/>
  to assess all the market data that is currently accessible in order to create<br/>
  the optimum alignment between your organization's demand and those of<br/> the product.</p>
  <div class="hidden sm:block md:hidden">
  <p className='text-white'>acting</p>
</div>
  </div>
 
  )
}

export default Services