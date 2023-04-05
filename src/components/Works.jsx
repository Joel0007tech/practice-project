import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import firstImage from "../assets/Mask group.png"
import secondImage from "../assets/Mask group (1).png"
const color ={
    backgroundColor:"#383838"
  }

const Works = () => {
  return (
    <div style={color} className='w-full h-full'>
    <>
    <nav className='py-6'>
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
  <h3 className='text-center text-white font-bold text-2xl'>Our Works</h3>
  <div className='flex flex-col gap-20 px-20 py-8'>
    <div className='flex flex-row gap-20 m-auto'>
<img src={firstImage} alt="mask group" className='w-[450px] h-[300px]'/>
<div className='flex flex-col gap-6'>
  <h3 className='text-white font-bold text-2xl'>Bulldog <br/>Billionaires</h3>
  <p className='text-white font-normal'>
Bulldog Billionaires is a collection of<br/>
 2,000 randomly generated NFTs that<br/>
  exist on the Solana Blockchain.
  </p>
  <a href="" className="text-center bg-purple-700 py-3 px-9 text-white font-normal w-[180px] h-[50px] m-auto rounded-lg relative right-10 bottom-10">Visit Website</a>
</div>
    </div>
    <div className='flex flex-row gap-20 m-auto'>
    <div className='flex flex-col gap-6'>
  <h3 className='text-white font-bold text-2xl'>T-connect</h3>
  <p className='text-white font-normal'>T-connect is an NFT Marketplace<br/> platform where users can lend and<br/> rent NFTs.
</p>
<a href="" className="text-center bg-purple-700 py-3 px-9 text-white font-normal w-[180px] h-[50px] m-auto rounded-lg relative right-10 bottom-10">Visit Website</a>
</div>
<img src={secondImage} alt="mask group" className='w-[450px] h-[300px]'/>
</div>
  </div>
  </div>
  )
}

export default Works