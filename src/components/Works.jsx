import React from "react";
import { Outlet, Link } from "react-router-dom";
import firstImage from "../assets/Mask group.png";
import secondImage from "../assets/Mask group (1).png";
const color = {
  backgroundColor: "#383838",
};

const Works = () => {
  return (
    <div style={color} className="w-full h-full sm:w-full sm:h-full">
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
      <h3 className="text-center text-white font-bold text-2xl sm:text-center">
        Our Works
      </h3>
      <div className="flex flex-col gap-20 px-20 py-8 sm:flex sm:flex-col sm:gap-5 sm:py-6">
        <div className="flex flex-row gap-20 m-auto sm:flex sm:flex-col sm:gap-4 sm:m-auto">
          <img
            src={firstImage}
            alt="mask group"
            className="w-[450px] h-[300px] sm:m-auto sm:h-[200px] sm:w-[350px]"
          />
          <div className="flex flex-col gap-6 sm:flex sm:flex-col">
            <h3 className="text-white font-bold text-2xl sm:text-center sm:text-white sm:font-bold sm:text-xl">
              Bulldog <br className="sm:hidden" />
              Billionaires
            </h3>
            <p className="text-white font-normal sm:text-center">
              Bulldog Billionaires is a collection of
              <br />
              2,000 randomly generated NFTs that
              <br />
              exist on the Solana Blockchain.
            </p>
            <a
              href=""
              className="text-center bg-purple-700 py-3 px-9 sm:py-3 sm:px-9 text-white 
                font-normal w-[180px] m-auto sm:m-auto rounded-lg relative
                  right-10 bottom-10 sm:relative sm:right-0 sm:top-2 "
            >
              Visit Website
            </a>
          </div>
         
        </div>
       
        <div className="flex flex-row gap-20 m-auto sm:flex sm:flex-col sm:gap-20 sm:m-auto">
          <div className="flex flex-col gap-6 sm:flex sm:flex-col sm:gap-6">
            <h3 className="text-white font-bold text-2xl sm:text-white sm:font-bold sm:text-center">
              T-connect
            </h3>
            <p className="text-white font-normal">
              T-connect is an NFT Marketplace
              <br /> platform where users can lend and
              <br /> rent NFTs.
            </p>
            <a
              href=""
              className="text-center bg-purple-700 py-3 px-9 text-white font-normal
                 w-[180px] h-[50px] m-auto rounded-lg relative right-10 bottom-10"
            >
              Visit Website
            </a>
          </div>
          <img
            src={secondImage}
            alt="mask group"
            className="w-[450px] h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
