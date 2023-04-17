import {React, useState} from "react";
import { Outlet, Link } from "react-router-dom";
import firstImage from "../assets/Mask group.png";
import secondImage from "../assets/Mask group (1).png";
import {FaStream, FaAngleLeft, FaAngleRight } from "react-icons/fa";
const color = {
  backgroundColor: "#383838",
};

const Works = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={color} className="w-full h-full sm:w-full sm:h-full">
          <div className="hidden 2xl:hidden sm:block overflow-hidden
            sm:border-b-2 sm:border-white sm:rounded-b-md">
              <div>
              <h3 onClick={() => setOpen(!open)}>
      <FaStream
        className="cursor-pointer sm:cursor-pointer text-white sm:text-white
     text-4xl sm:text-3xl fixed sm:fixed right-60 sm:right-10 font-normal pt-3 
     ]
    "
      />
    </h3>
              </div>
    
    {open && (
      <div className='relative bottom-2 left-4'>
        <ul
          className="flex justify-center flex-col float-left text-center cursor-pointer
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
          <ul className="flex flex-row gap-4 justify-center text-white
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
      <h3 className="text-center text-white font-bold text-2xl sm:text-center sm:relative sm:bottom-6">
        Our Works
      </h3>
      <div className="flex flex-col gap-20 px-20 py-8 sm:flex sm:flex-col sm:gap-5 sm:py-6">
        <div className="flex flex-row gap-20 m-auto sm:flex sm:flex-col sm:gap-4 sm:m-auto">
          <img
            src={firstImage}
            alt="mask group"
            className="w-[450px] h-[300px] sm:m-auto sm:h-[150px] sm:w-[350px]"
          />
          <div className="flex flex-col gap-6 sm:flex sm:flex-col">
            <h3 className="text-white font-bold text-2xl sm:text-center sm:text-white sm:font-bold sm:text-xl">
              Bulldog <br className="sm:hidden" />
              Billionaires
            </h3>
            <p className="text-white font-normal sm:text-center sm:leading-relaxed">
              Bulldog Billionaires is a collection <br className="sm:block"/> 
              of <br className="hidden sm:hidden"/>
              2,000 randomly generated <br className="sm:block"/> NFTs 
              that <br className="hidden sm:hidden"/>
              exist on the Solana Blockchain.
            </p>
            <a
              href=""
              className="text-center bg-purple-700 py-3 px-9 sm:py-3 sm:px-9 text-white 
                font-normal w-[180px] m-auto sm:m-auto rounded-lg relative
                  right-10 bottom-10 sm:relative sm:right-0 sm:top-2 sm:animate-pulse"
            >
              Visit Website
            </a>
          </div>
         
        </div>
       
        <div className="flex flex-row gap-20 m-auto sm:flex sm:flex-col sm:gap-4 sm:m-auto sm:py-6">
          <div className="flex flex-col gap-6 sm:flex sm:flex-col sm:gap-2 sm:m-auto">
          <img
            src={secondImage}
            alt="mask group"
            className="w-[450px] h-[300px] hidden sm:block 2xl:hidden sm:h-[200px] sm:w-[350px] sm:auto sm:py-6"
          />
            <h3 className="text-white font-bold text-2xl sm:text-white sm:font-bold sm:text-center sm:relative
             sm:bottom-4">
              T-connect
            </h3>
            <p className="text-white font-normal sm:text-center">
              T-connect is an NFT Marketplace
              <br /> platform where users can lend and
              <br className="hidden sm:hidden"/> rent NFTs.
            </p>
            <a
              href=""
              className="text-center bg-purple-700 py-3 px-9 text-white font-normal
                 w-[180px] h-[50px] m-auto rounded-lg relative right-10 bottom-10 sm:m-auto sm:relative sm:right-0 sm:top-5 
                 sm:animate-pulse"
          >
              Visit Website
            </a>
          </div>
          <img
            src={secondImage}
            alt="mask group"
            className="w-[450px] h-[300px] sm:hidden"
          />
        </div>
      </div>
      <footer className='py-5
             flex flex-row relative justify-center'>
     <Link to="/services" target='_blank'><FaAngleLeft className='text-3xl'/></Link>
    <Link to="/about" target='_blank'><FaAngleRight className='text-3xl'/></Link>
  </footer>
    </div>
  );
};

export default Works;
