import React from "react";
import { Outlet, Link } from "react-router-dom";
import firstImage from "../assets/A.T.S.png";
import secondImage from "../assets/HARBZY (1).png";
import thirdImage from "../assets/HARBZY.png";
import fourthImage from "../assets/HARBZY (3).png"
import fifthImage from "../assets/HARBZY (2).png"

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
        <div className="flex flex-col gap-8 py-6">
          <div className="flex flex-row justify-center gap-20">
            <div className="flex flex-col gap-1">
            <img src={firstImage} alt="this is for ats" className="text-blue bg-fuchsia-700 w-[270px] h-[27  0px]"/>
            <p className="ml-[150px] text-white">A.T.S</p>
            <p className="ml-[150px] text-white">UX Designer/Brand</p>
            </div>
           <div className="flex flex-col gap-1"> <img src={secondImage} alt="this is for ats" className="w-[250px]"/>
           <p className=" text-white">Chike</p>
            <p className=" text-white">UI/UX Designer</p>
           </div>
           <div className="flex flex-col gap-1"><img src={thirdImage} alt="this is for ats" className="w-[250px]"/>
           <p className=" text-white">Curlybraces</p>
            <p className=" text-white">Full Stack Developer</p>
           </div>
          </div>
          <div className="flex flex-row justify-center gap-20">
            <div className="flex flex-col gap-1"><img src={fourthImage} alt="this is for ats" className="w-[250px] relative bottom-2"/>
            <p className=" text-white">Debug'd</p>
            <p className=" text-white">Blockchain Engineer</p>
            </div>
            <div className="flex flex-col gap-1"> <img src={fifthImage} alt="this is for ats" className="w-[250px]"/>
            <p className=" text-white">Harbzy</p>
            <p className=" text-white">UI Designer/Social Media</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
