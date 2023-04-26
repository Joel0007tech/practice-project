import { React, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaStream, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import avatar from "../assets/logo.svg";
import Logo from "../assets/Group 3999.png";
const color = {
  backgroundColor: "#383838",
};

const About = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-screen h-screen sm:w-full sm:h-full" style={color}>
      <div
        className="hidden 2xl:hidden sm:block overflow-hidden
            sm:border-b-2 sm:border-white sm:rounded-b-md"
      >
        <div className="pb-4 pt-3">
          <FaStream
            className="cursor-pointer sm:cursor-pointer text-white sm:text-white
        sm:text-xl sm:float-right sm:mr-8 sm:mt-2 sm:font-normal"
            onClick={() => setOpen(!open)}
          />
          <img src={Logo} alt="logo" className="h-[30px] w-[80px] ml-6" />
        </div>

        {open && (
          <div className="relative bottom-2 left-4">
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
          <ul
            className="flex flex-row gap-4 justify-center text-white
      2xl:block sm:hidden font-normal text-sm sm:flex-col"
          >
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
      <div className="sm:relative sm:bottom-14">
        <h3 className="font-bold text-center text-white text-2xl py-8">
          About us
        </h3>
        <div className="flex justify-center py-5 sm:flex sm:flex-col sm:gap-10">
          <div className="w-1/2 animate__animated animate__fadeInLeft flex flex-row justify-center">
            <img src={avatar} alt="vector" className="h-[250px] w-[350px] relative left-[60px] sm:relative sm:left-[100px]" />
          </div>
          <div className="w-1/2 animate__animated animate__fadeInRight sm:m-auto">
            <h2 className="text-white font-normal">
              We are a digital agency committed to delivering exceptional
              results for
              <br/>
              our clients. Our team of experts specializes in creating
              customized
              <br />
              digital solutions that drive business growth. With a focus on
              innovative
              <br />
              technology and design, we help companies achieve their online
              goals
              <br />
              and stand out in a crowded market. From UI/UX design to website
              <br />
              development, we provide a full range of services to help
              businesses
              <br />
              succeed in the digital world.
              <br />
              Let us help you reach your target audience and achieve your goals.
            </h2>
          </div>
        </div>
      </div>
      <footer
        className="
             top-[250px] sm:top-0
             flex flex-row relative justify-center"
      >
        <Link to="/works" target="_blank">
          <FaAngleLeft className="text-3xl" />
        </Link>
        <Link to="/team" target="_blank">
          <FaAngleRight className="text-3xl" />
        </Link>
      </footer>
    </div>
  );
};

export default About;
