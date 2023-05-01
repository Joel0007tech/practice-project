import {React, useState} from "react";
import { Outlet, Link } from "react-router-dom";
import firstImage from "../assets/A.T.S.png";
import secondImage from "../assets/HARBZY (1).png";
import thirdImage from "../assets/HARBZY.png";
import fourthImage from "../assets/HARBZY (3).png"
import fifthImage from "../assets/HARBZY (2).png";
import Logo from "../assets/Group 3999.png";
import {FaStream, FaAngleLeft, FaAngleRight } from "react-icons/fa";
const color = {
  backgroundColor: "#383838",
};

const Team = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={color} className="w-full h-full">
                <div className="hidden 2xl:hidden sm:block overflow-hidden
            sm:border-b-2 sm:border-white sm:rounded-b-md">
              <div className="pb-4 pt-3">
      <FaStream
        className="cursor-pointer sm:cursor-pointer text-white sm:text-white
        sm:text-xl sm:float-right sm:mr-8 sm:mt-2 sm:font-normal  
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
        <nav className="py-8">
          <ul className="flex flex-row gap-4 justify-center text-white font-normal
          2xl:block sm:hidden text-sm sm:flex-col">
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
      <div className="py-4 sm:relative sm:bottom-10">
        <h3 className="text-center text-white font-bold text-2xl">
          Meet the Team
        </h3>
        <div className="flex flex-col gap-8 py-6 sm:flex sm:flex-col sm:m-auto">
          <div className="flex flex-row justify-center gap-20 sm:flex sm:flex-col sm:m-auto sm:gap-8">
            <div className="flex flex-col gap-1">
            <img src={firstImage} alt="this is for ats" className="text-blue bg-fuchsia-700 w-[250px] h-[250px]
             sm:h-[150px] sm:w-[150px]"/>
            <p className=" text-white font-bold sm:text-center">A.T.S</p>
            <p className=" text-white sm:text-center">UX Designer/Brand</p>
            </div>
           <div className="flex flex-col gap-1"> <img src={secondImage} alt="this is for ats" className="w-[250px] sm:w-[150px]"/>
           <p className=" text-white font-bold sm:text-center">Chike</p>
            <p className=" text-white sm:text-center">UI/UX Designer</p>
           </div>
           <div className="flex flex-col gap-1"><img src={thirdImage} alt="this is for ats" className="w-[250px] sm:w-[150px]"/>
           <p className=" text-white font-bold sm:text-center">Curlybraces</p>
            <p className=" text-white sm:text-center">Full Stack Developer</p>
           </div>
          </div>
          <div className="flex flex-row justify-center gap-20 sm:flex sm:flex-col sm:m-auto sm:gap-8">
            <div className="flex flex-col gap-1"><img src={fourthImage} alt="this is for ats"
             className="w-[250px] sm:w-[150px] relative bottom-2 sm:m-auto"/>
            <p className=" text-white font-bold sm:text-center">Debug'd</p>
            <p className=" text-white sm:text-center">Blockchain Engineer</p>
            </div>
            <div className="flex flex-col gap-1"> <img src={fifthImage} alt="this is for ats" 
            className="w-[250px] sm:w-[150px] sm:m-auto"/>
            <p className=" text-white font-bold sm:text-center">Harbzy</p>
            <p className=" text-white sm:text-center">UI Designer/Social Media</p>
            </div>
          </div>
        </div>
      </div>
      <footer className='
             flex flex-row relative justify-center'>
    <Link to="/about" target='_blank'><FaAngleLeft className='text-3xl'/></Link>
    <Link to="/contact" target='_blank'><FaAngleRight className='text-3xl'/></Link>
  </footer>
    </div>
  );
};

export default Team;
