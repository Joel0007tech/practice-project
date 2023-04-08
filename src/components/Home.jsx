import React from 'react'
import { Outlet, Link } from 'react-router-dom'
const color ={
  backgroundColor:"#383838"
}

const Home = () => {
  return (
    <div style={color} className='w-screen h-screen'>
    <>
    <nav>
      <ul className='flex flex-col gap-4 text-center text-white font-bold text-2xl'>
        <li className="text-white hover:text-[#FED42A]">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services" target='_blank'>Our Services</Link>
        </li>
        <li>
          <Link to="/works"target='_blank'>Our Works</Link>
        </li>
        <li>
          <Link to="/about"target='_blank'>About Us</Link>
        </li>
        <li>
          <Link to="/team"target='_blank'>Team</Link>
        </li>
        <li>
          <Link to="/contact"target='_blank'>Contact Us</Link>
        </li>
        <li>
          <Link to="/footer"target='_blank'>Footer</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
  </div>
  )
}

export default Home