import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <nav className='bg-red-500'>
      <ul className='flex flex-col gap-4'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
      </ul>
    </nav>
    <Outlet />
  </>
  )
}

export default Home