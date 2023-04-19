import {React, useState} from "react";
import { Outlet, Link } from "react-router-dom";
import {FaStream, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Logo from "../assets/Group 3999.png";
const color = {
  backgroundColor: "#383838",
};

const Contact = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen w-screen sm:h-full sm:w-full sm:overflow-hidden" style={color}>
          <div className="hidden 2xl:hidden sm:block
            sm:border-b-2 sm:border-white sm:rounded-b-md">
              <div className="pb-4 pt-3">
      <FaStream
        className="cursor-pointer sm:cursor-pointer text-white sm:text-white
        sm:text-xl sm:float-right sm:mr-8 sm:mt-2 sm:font-normal
    "
    onClick={() => setOpen(!open)}  />
    <img src={Logo} alt="logo" className="h-[30px] w-[80px] ml-6" />
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
        <nav className="py-8">
          <ul className="flex flex-row gap-6 justify-center text-white
          2xl:block sm:hidden font-normal text-sm sm:flex-col">
            <li className="hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2">
              <Link to="/services">Our Services</Link>
            </li>
            <li className="hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2">
              <Link to="/works">Our Works</Link>
            </li>
            <li className="hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2">
              <Link to="/team">Team</Link>
            </li>
            <li className="hover:border-solid hover:border-b-4 hover:border-yellow-300 pb-2">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </>
      <div className="py-3 flex flex-col sm:flex sm:flex-col sm:py-3">
        <h3 className="font-bold text-white text-center text-3xl
         sm:font-normal sm:text-white sm:text-md sm:text-center">
          Leave us a message
        </h3>
        <div className="flex flex-col gap-4 py-12 sm:flex sm:flex-col sm:gap-3">
          <input
            placeholder="Enter your Email"
            className="border-white sm:border-white bg-black sm:bg-black 
            border-2 sm:border-2 w-[500px] sm:w-[250px] h-[50px] rounded-xl
             sm:rounded-xl m-auto sm:m-auto placeholder:relative sm:placeholder:relative placeholder:left-3 sm:placeholder:left
             placeholder:text-gray-500 sm:placeholder:text-gray-500 text-white sm:text-white"
          />
          <input
            placeholder="Enter your message"
            className="border-white sm:border-white bg-black sm:bg-black border-2 sm:border-2
             w-[500px] sm:w-[250px] h-[250px] sm:h-[100px]
             rounded-xl sm:rounded-xl m-auto sm:m-auto placeholder:relative sm:placeholder:relative
              placeholder:bottom-[100px] sm:placeholder:bottom-[30px] placeholder:left-3 sm:placeholder:left-3
              placeholder:text-gray-500 sm:placeholder:text-gray-500 text-white sm:text-white"
          />
          <a
            href=""
            className="text-center bg-purple-700 py-3 px-9 sm:py-2 sm:my-4 text-white font-normal sm:text-sm
             w-[180px] sm:w-[180px] h-[50px] sm:h-[40px] m-auto rounded-lg"
          >
            Send Message
          </a>
        </div>
      </div>
      <footer className='
             top-[80px]
             flex flex-row relative justify-center sm:top-0'>
    <Link to="/team" target='_blank'><FaAngleLeft className='text-3xl'/></Link>
    <Link to="/" target='_blank'><FaAngleRight className='text-3xl'/></Link>
  </footer>
    </div>
  );
};

export default Contact;
