import React from 'react'
import { useState } from 'react';
import {FaAlignRight } from 'react-icons/fa';

const Footer = () => {
  const [open, setOpen] = useState (false);
const Menus =["Hello", "Hi"]
  return (
    <div>
      <div className='flex pt-7 justify-center'>
      <h3 onClick={() => setOpen(!open)}><FaAlignRight className='cursor-pointer text-blue-500 text-4xl relative'/></h3>
    {open && (
          <div className='bg-red-500 w-52 pt-3 mt-10'>
          <ul>
           {
            Menus.map((menu)=>(
              <li key={menu}>{menu}</li>
            ))
           }
          </ul>
              </div>
    )}
      </div>

   </div>
  )
}

export default Footer

