import { React, useState } from "react";
import { FaStream, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Group 3999.png"

const Home = () => {
  const [open, setOpen] = useState(false);
  const color ={
    backgroundColor:"black"
  }

  return (
    <div>
      <div className="pt-6h-screen w-screen sm:h-full sm:w-full" style={color}>
        <div className="flex p-6">
          <img src={Logo} alt="" className="px-20"/>
        <h3 onClick={() => setOpen(!open)}>
          <FaStream
            className="cursor-pointer sm:cursor-pointer text-white sm:text-white
         text-4xl sm:text-2xl fixed sm:fixed right-60 sm:right-10 font-normal
        "
          />
        </h3>
        </div>
        {open && (
          <div>
            <ul
              className="flex justify-center flex-col gap-6 text-center cursor-pointer
            pt-20"
            >
              <li className="text-white font-bold text-3xl">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white font-bold text-3xl">
                <Link to="/services">Our services</Link>
              </li>
              <li className="text-white font-bold text-3xl">
                <Link to="/works">Our works</Link>
              </li>
              <li className="text-white font-bold text-3xl">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-white font-bold text-3xl">
                <Link to="/team">Team</Link>
              </li>
              <li className="text-white font-bold text-3xl">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
        <section className=" bg-black">
        <h2 className="text-white font-bold text-5xl text-center">
          Bringing Beautiful <br/>
          <span className="text-yellow-300">Web 3.0</span> Experiences<br/>
          to life
        </h2>
        </section>
        <footer
        className="
             top-[150px] sm:top-[5px]
             flex flex-row relative justify-center"
      >
        <Link to="/" target="_blank">
          <FaAngleLeft className="text-3xl text-white" />
        </Link>
        <Link to="/services" target="_blank">
          <FaAngleRight className="text-3xl" />
        </Link>
      </footer>
      </div>
    </div>
  );
};

export default Home;
