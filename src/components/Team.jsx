import React from "react";
import { Outlet, Link } from "react-router-dom";
import firstImage from "../assets/A.T.S.png";
import secondImage from "../assets/HARBZY (1).png";
import thirdImage from "../assets/HARBZY.png";
import fourthImage from "../assets/HARBZY (3).png"
import fifthImage from "../assets/HARBZY (2).png"
import {FaAngleLeft, FaAngleRight } from "react-icons/fa";
const color = {
  backgroundColor: "#383838",
};

const Team = () => {
  return (
    <div style={color} className="w-full h-full">
      <>
        <nav className="py-8">
          <ul className="flex flex-row gap-4 justify-center text-white font-normal text-sm sm:flex sm:flex-col">
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
      <div className="py-4">
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
             top-[400px]
             flex flex-row relative justify-center'>
    <a href=''><FaAngleLeft className='text-3xl'/></a>
    <a href=''><FaAngleRight className='text-3xl'/></a>
  </footer>
    </div>
  );
};

export default Team;
