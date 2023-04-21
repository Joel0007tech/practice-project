import { React, useState } from "react";
import { FaStream, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Group 3999.png";
import avatar from "../assets/avatar.png"

const Home = () => {
  const [open, setOpen] = useState(false);
  const color = {
    backgroundColor: "#383838",
  };
const Font ={
  fontFamily:"Space Grotesk, sans-serif"
}
  return (
    <div>
      <div className="pt-6 h-full w-full sm:h-full sm:w-full" style={color}>
        <div className="flex p-6">
          <img src={Logo} alt="" className="px-20 fixed" />
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
            pt-18"
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
        <section>
          <h2 className="text-white font-semibold text-7xl text-center leading-tight" style={Font}>
            Bringing Beautiful <br />
            <span className="text-yellow-200">Web 3.0</span> Experiences
            <br />
            to life
          </h2>
          <div className="flex justify-center mt-6">
            <a
              href=""
              className="text-center bg-purple-800 py-3 px-9 sm:py-2 sm:my-4
              hover hover:bg-white hover:text-purple-800 text-white font-semibold sm:text-sm
             w-[250px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg" style={Font}>
              Let us create magic!
            </a>
          </div>
        </section>
        <section className="pt-20">
          <div className="flex">
            <div className="relative left-[300px] top-[150px]">
              <h3 className="text-white text-2xl font-semibold" style={Font}>Let's Play!</h3></div>
            <div className="border-[3px] rounded-t-xl border-solid  border-white h-[350px] w-[450px] m-auto pt-4">
           <img src={avatar} alt="ava" className="m-auto"/>
            </div>
            <div className=" relative right-[300px] top-[150px]">
              <h3 className="text-white text-2xl font-semibold" style={Font}>WE DESIGN !</h3>
            <h3 className="text-white text-2xl font-semibold" style={Font}>WE DEVELOP !</h3>
            <h3 className="text-white text-2xl font-semibold" style={Font}>WE INTEGRATE !</h3></div>

          </div>
        </section>
        <section className="pt-20">
          <div className="flex justify-center gap-8">
          <div className="border border-white h-8 w-8 bg-purple-700 relative top-1"></div>
          <h3 className="text-white text-4xl font-bold" style={Font}>Our Story </h3>
          <div className="border border-white h-8 w-8 bg-yellow-300 relative top-1"></div>
          </div>
         <p className="font-normal leading-normal font-sans text-white text-center p-10 text-lg">
          Tackling Ace is a web development agency that helps creative
          studio that timely design<br/> work contributes largely to streamlining
           our development process. Their edge as UX<br/> specialists stems from
            their ability to design visually appealing interfaces while<br/>
             understanding how every element is intended to function.</p>
        </section>
        <section className="pt-20">
            <h3 style={Font} className="text-white text-center text-4xl font-bold m-auto
             border-b-[14px] border-b-yellow-300 w-[250px] pb-3">
              What we do</h3>
            <div className="flex gap-4 justify-center m-auto pt-10">
                  <div
                   className="border-[2px] border-gray-500 h-[350px] w-[280px]
                   hover:border-purple-800 hover:border-[5px]">
                    <h3 className="text-white text-center text-xl" style={Font}>UI/UX Design</h3>
                    <p className="text-white leading-normal pt-10 text-center">
                      Unlock the full potential of your<br/> 
                    product with our expert UI/UX<br/>
                     design services. Our team of<br/>
                      designers and researchers work<br/> 
                     closely with you to create a visually<br/>
                      stunning and intuitive user<br/>
                       interface, while optimizing the<br/> overall user experience.
 </p></div>
                  <div
                   className="border-[2px] border-gray-500 h-[350px] w-[280px]
                   hover:border-purple-800 hover:border-[5px]">
                    <h3 className="text-white text-center text-xl" style={Font}>Full Stack <br/> Web Development</h3>
                    <p className="text-white leading-normal pt-10 text-center">
                      Bring your online vision to life with<br/>
                     our professional web development<br/>
                     services. Our team of experienced<br/>
                      developers will work with you to<br/>
                      design, develop and launch a<br/>
                      custom website that not only looks<br/>
                       great, but also performs<br/>
                        seamlessly.</p></div>
                  <div
                   className="border-[2px] border-gray-500 h-[350px] w-[280px]
                   hover:border-purple-800 hover:border-[5px]">
                    <h3 className="text-white text-center text-xl" style={Font}>Smart Contract <br/> Integration</h3>
                    <p className="text-white leading-normal pt-10 text-center">
                      Our team of blockchain experts will<br/>
                     work with you to design and<br/>
                      implement smart contracts that<br/>
                       automate and secure your business<br/>
                        processes. From supply chain<br/>
                         management to financial<br/>
                          transactions, smart contracts can<br/>
                           provide a tamper-proof and<br/>
                            efficient way to conduct business</p></div>
            </div>
        </section>
        <footer
          className="
             top-[150px] sm:top-[5px]
             flex flex-row relative justify-center"
        >
          <Link to="/" target="_blank">
            <FaAngleLeft className="text-3xl" />
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
