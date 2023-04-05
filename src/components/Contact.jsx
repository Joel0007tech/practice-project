import React from "react";
import { Outlet, Link } from "react-router-dom";
const color = {
  backgroundColor: "#383838",
};

const Contact = () => {
  return (
    <div className="h-screen w-screen" style={color}>
      <>
        <nav className="py-8">
          <ul className="flex flex-row gap-6 justify-center text-white font-normal text-sm sm:flex sm:flex-col">
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
      <div className="py-3 flex flex-col ">
        <h3 className="font-bold text-white text-center text-3xl">
          Leave us a message
        </h3>
        <div className="flex flex-col gap-4 py-12">
          <input
            placeholder="Enter your Email"
            className="border-white bg-black border-2 w-[500px] h-[50px] rounded-xl m-auto placeholder:relative placeholder:left-3 placeholder:text-gray-500 text-white"
          />
          <input
            placeholder="Enter your message"
            className="border-white bg-black border-2 w-[500px] h-[250px] rounded-xl m-auto placeholder:relative placeholder:bottom-[100px] placeholder:left-3 placeholder:text-gray-500 text-white"
          />
          <a href="" className="text-center bg-purple-700 py-3 px-9 text-white font-normal w-[180px] h-[50px] m-auto rounded-lg">Send Message</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
