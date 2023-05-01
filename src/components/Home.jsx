import { React, useState } from "react";
import { FaStream, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/Group 3999.png";
import avatar from "../assets/avatar.png";
import FirstIcon from "../assets/Group 3971.svg";
import SecondIcon from "../assets/Vector.svg";
import ThirdIcon from "../assets/Group.svg";
import socialOne from "../assets/Vector (1).png";
import socialTwo from "../assets/Vector (2).png";
import socialThree from "../assets/Vector (3).png";
import socialFour from "../assets/Vector (4).png";
import socialFive from "../assets/Vector (5).png";
import objectFirst from "../assets/Vector 3.png";
import objectSecond from "../assets/Ellipse 62.png";
import firstImage from "../assets/Mask group.png";
import secondImage from "../assets/Mask group (1).png";

const Home = () => {
  const [open, setOpen] = useState(false);
  const color = {
    backgroundColor: "#383838",
  };
  const Font = {
    fontFamily: "Space Grotesk, sans-serif",
  };
  return (
    <div>
      <div
        className="pt-6 h-full w-full sm:h-full sm:w-full sm:overflow-hidden"
        style={color}
      >
        <div
          className=" p-6 overflow-hidden
            sm:border-b-2 sm:border-white sm:rounded-b-md"
        >
          <div className="sm:pb-3 sm:pt-3 sm:flex">
            <img
              src={Logo}
              alt=""
              className="px-20 fixed sm:fixed sm:top-8 sm:right-24"
            />
            <FaStream
              className="cursor-pointer sm:cursor-pointer text-white sm:text-white
              sm:text-2xl text-4xl fixed sm:fixed sm:right-10 right-60 font-normal sm:top-11 "
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
        {open && (
          <div
            className="overflow-hidden
          sm:border-b-2 sm:border-white sm:rounded-b-md"
          >
            <ul
              className="flex justify-center flex-col gap-6 sm:gap-2 text-center cursor-pointer
            pt-18"
            >
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/services">Our services</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/works">Our works</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/about">About Us</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/team">Team</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/contact">Contact Us</Link>
              </li>
              <li className="text-white font-bold text-3xl sm:text-sm sm:font-semibold">
                <Link to="/card">Card</Link>
              </li>
            </ul>
          </div>
        )}
        <div
          className="border-[2px] border-purple-500 w-[45px] h-[280px] 
        2xl:block sm:hidden flex flex-col gap-4 pt-8 fixed right-1"
        >
          <img src={socialFive} alt="" className="w-[20px] h-[20px] m-auto" />
          <img src={socialFour} alt="" className="w-[20px] h-[20px] m-auto" />
          <img src={socialThree} alt="" className="w-[20px] h-[20px] m-auto" />
          <img src={socialTwo} alt="" className="w-[20px] h-[20px] m-auto" />
          <img src={socialOne} alt="" className="w-[15px] h-[20px] m-auto" />
        </div>
        <section>
          <h2
            className="text-white font-semibold text-7xl sm:text-4xl sm:pt-4 text-center leading-tight pt-8"
            style={Font}
          >
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
             w-[250px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
              style={Font}
            >
              Let us create magic!
            </a>
          </div>
        </section>
        <section className="pt-20">
          <div className="flex sm:flex-col">
            <div className="relative left-[300px] top-[150px] sm:left-3 sm:top-0">
              <h3
                className="text-white text-2xl font-semibold sm:text-center"
                style={Font}
              >
                Let's Play!
              </h3>
            </div>
            <div
              className="border-[3px] rounded-t-xl border-solid 
             border-white h-[350px] sm:h-[300px] w-[450px] sm:w-[250px]
             m-auto pt-4"
            >
              <img src={avatar} alt="ava" className="m-auto" />
            </div>
            <div className=" relative right-[300px] top-[150px] sm:top-3 sm:left-[80px]">
              <h3 className="text-white text-2xl font-semibold" style={Font}>
                WE DESIGN !
              </h3>
              <h3 className="text-white text-2xl font-semibold" style={Font}>
                WE DEVELOP !
              </h3>
              <h3 className="text-white text-2xl font-semibold" style={Font}>
                WE INTEGRATE !
              </h3>
            </div>
          </div>
        </section>
        <section className="pt-20">
          <div className="flex justify-center gap-8 sm:gap-4">
            <div className="border border-white h-8 sm:h-6 w-8 sm:w-6 bg-purple-700 relative top-1 sm:top-1.5"></div>
            <h3
              className="text-white text-4xl sm:text-3xl font-bold"
              style={Font}
            >
              Our Story{" "}
            </h3>
            <div className="border border-white h-8 sm:h-6 w-8 sm:w-6 bg-yellow-300 relative top-1 sm:top-1.5"></div>
          </div>
          <p className="font-normal leading-normal font-sans text-white text-center p-10 text-lg">
            Tackling Ace is a web development agency that helps creative studio
            that timely design
            <br /> work contributes largely to streamlining our development
            process. Their edge as UX
            <br /> specialists stems from their ability to design visually
            appealing interfaces while
            <br />
            understanding how every element is intended to function.
          </p>
        </section>
        <section className="pt-20">
          <h3
            style={Font}
            className="text-white text-center text-4xl sm:2xl font-bold m-auto
             border-b-[14px] sm:border-b-[10px] border-b-yellow-300 w-[250px] pb-3"
          >
            What we do
          </h3>
          <div className="flex gap-4 justify-center m-auto pt-10 sm:flex-col">
            <div
              className="border-[2px] border-gray-500 h-[350px] w-[280px] sm:h-[250px] sm:w-[250px] 
                   hover:border-purple-800 hover:border-[5px] sm:m-auto"
            >
              <img src={FirstIcon} alt="firsticon" className="m-auto" />
              <h3 className="text-white text-center text-xl" style={Font}>
                UI/UX Design
              </h3>
              <p className="text-white leading-normal pt-10 text-sm text-center sm:text-sm sm:pt-2">
                Unlock the full potential of your
                <br />
                product with our expert UI/UX
                <br />
                design services. Our team of
                <br />
                designers and researchers work
                <br />
                closely with you to create a visually
                <br />
                stunning and intuitive user
                <br />
                interface, while optimizing the
                <br /> overall user experience.
              </p>
            </div>
            <div
              className="border-[2px] border-gray-500 h-[350px] sm:h-[250px] sm:w-[250px] w-[280px]
                   hover:border-purple-800 hover:border-[5px] sm:m-auto"
            >
              <img src={ThirdIcon} alt="thirdicon" className="m-auto pt-2" />
              <h3 className="text-white text-center text-xl pt-4" style={Font}>
                Full Stack <br /> Web Development
              </h3>
              <p className="text-white leading-normal pt-4 text-sm text-center sm:text-sm sm:pt-2">
                Bring your online vision to life with
                <br />
                our professional web development
                <br />
                services. Our team of experienced
                <br />
                developers will work with you to
                <br />
                design, develop and launch a<br />
                custom website that not only looks
                <br />
                great, but also performs
                <br />
                seamlessly.
              </p>
            </div>
            <div
              className="border-[2px] border-gray-500 h-[350px] w-[300px] sm:h-[250px] sm:w-[250px] 
                   hover:border-purple-800 hover:border-[5px] sm:m-auto"
            >
              <img src={SecondIcon} alt="secondicon" className="m-auto pt-2" />
              <h3 className="text-white text-center text-xl pt-6" style={Font}>
                Smart Contract <br /> Integration
              </h3>
              <p className="text-white leading-normal pt-4 text-sm text-center sm:text-sm sm:pt-2">
                Our team of blockchain experts will
                <br />
                work with you to design and
                <br />
                implement smart contracts that
                <br />
                automate and secure your business
                <br />
                processes. From supply chain
                <br />
                management to financial
                <br />
                transactions, smart contracts can
                <br />
                provide a tamper-proof and
                <br />
                efficient way to conduct business
              </p>
            </div>
          </div>
        </section>
        <section className="pt-20">
          <div className="flex justify-center gap-8 sm:gap-4">
            <div className="border border-white h-8 sm:h-6 w-8 sm:w-6 bg-yellow-300 relative top-1"></div>
            <h3
              className="text-white text-4xl sm:text-2xl font-bold"
              style={Font}
            >
              Our Process{" "}
            </h3>
            <div className="border border-white h-8 sm:h-6 w-8 sm:w-6 bg-purple-700 relative top-1"></div>
          </div>
          <div className="flex">
            <div className="flex">
              <img src={objectSecond} alt="ellipse" className="h-8 w-8" />
              <img
                src={objectFirst}
                alt="line"
                className="h-1 w-[200px] bg-white relative top-3.5"
              />
            </div>
            <div className="flex">
              <img src={objectSecond} alt="ellipse" className="h-8 w-8" />
              <img
                src={objectFirst}
                alt="line"
                className="h-1 w-[200px] bg-white relative top-3.5"
              />
            </div>
            <div className="flex">
              <img src={objectSecond} alt="ellipse" className="h-8 w-8" />
              <img
                src={objectFirst}
                alt="line"
                className="h-1 w-[200px] bg-white relative top-3.5"
              />
            </div>
            <div className="flex">
              <img src={objectSecond} alt="ellipse" className="h-8 w-8" />
              <img
                src={objectFirst}
                alt="line"
                className="h-1 w-[200px] bg-white relative top-3.5"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <h3 className="text-white font-bold text-lg" style={Font}>
                01. Research
              </h3>
              <p className="text-white">
                We gather information about your target audience, your
                <br />
                product or service, and your competitors. This steps helps{" "}
                <br />
                us to identify the needs and goals of users and to
                <br />
                develop a clear understanding of the problem that the <br />
                product or service is trying to solve.
              </p>
            </div>
          </div>
        </section>
        <section className="pt-20">
          <h3
            className="text-white text-center text-4xl font-bold m-auto
           border-b-[14px] sm:border-b-[10px] border-b-purple-700 w-[350px] pb-3"
            style={Font}
          >
            Some of our works
          </h3>
          <div className="flex flex-col p-20 gap-14 items-center ">
          <div className="relative w-[600px] h-[450px] right-40
           transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:shadow-2xl">
            <img
        className="w-[600px] h-[450px] hover:shadow-sm"
        src={firstImage}
        alt="placeholder"
      />
      
      <div className="absolute top-40 flex gap-4 w-full h-full left-7
       items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
     <div className="flex flex-col">
    <h3 className="text-white text-xl" style={Font}>Bulldog Billionaires</h3>
    <p className="text-white text-sm leading-normal">Bulldog Billionaires is a collection of 2,000 <br/>
    randomely generated NFTs that exist on <br/>
    the Solana Blockchain.</p>
     </div>
     <a
              href=""
              className="text-center bg-purple-600 py-3 px-9 sm:py-2 sm:my-4
              hover hover:bg-white hover:text-purple-800 text-white font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
              style={Font}
            >
               visit website
            </a>
      </div>
    </div>
    <div className="relative w-[600px] h-[450px] left-40 
    transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:bg-black hover:opacity-50
    ">
      <div>
      <img
        className="w-[600px] h-[450px]"
        src={secondImage}
        alt="placeholder"
      />
    </div>
      <div className="absolute top-40 gap-4 w-full h-full left-7 flex
       items-center justify-center opacity-0 hover:opacity-50 transition-opacity duration-300 hover:bg-opacity-0">
       <div className="flex flex-col">
    <h3 className="text-xl text-white" style={Font}>T-connect</h3>
    <p className="text-sm leading-normal text-white">T-connect is an NFT marketplace platform <br/>
    where users can lend and rent NFTs</p>
     </div>
     <a
              href=""
              className="text-center bg-purple-600 py-3 px-9 sm:py-2 sm:my-4
              hover hover:bg-white hover:text-purple-800 text-white font-semibold sm:text-sm
             w-[170px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
              style={Font}
            >
               visit website
            </a>
      </div>
    </div>
          </div>
          <div className="flex float-right relative right-60 bottom-14">
            <a
              href=""
              className="text-center bg-purple-600 py-3 px-9 sm:py-2 sm:my-4
              hover hover:bg-white hover:text-purple-800 text-white font-semibold sm:text-sm
             w-[220px] sm:w-[250px] h-[50px] sm:h-[40px] m-auto rounded-lg"
              style={Font}
            >
              See our works here
            </a>
          </div>
        </section>
        <section className="pt-20">
          <div className="flex justify-center gap-8 sm:gap-4">
            <div className="border border-white h-8 sm:h-6 w-8 sm:w-6 bg-yellow-300 relative top-1"></div>
            <h3
              className="text-white text-4xl sm:text-2xl font-bold"
              style={Font}
            >
              Testimonials
            </h3>
            <div className="border border-white h-8 sm:h-6 w-8 sm:w-6 bg-purple-700 relative top-1"></div>
          </div>
          <div
            className="border-[3px] rounded-t-xl border-solid 
             border-white h-[300px] sm:h-[300px] w-[650px] sm:w-[250px]
             m-auto pt-4 mt-10"
          >
            <div></div>
          </div>
        </section>
        <section className="pt-20">
        <div className="py-3 flex flex-col sm:flex sm:flex-col sm:py-3">
        <h3 className="font-bold text-white text-center text-4xl
         sm:font-normal sm:text-white sm:text-md sm:text-center m-auto
          border-b-[14px] sm:border-b-[10px] border-b-yellow-300 w-[350px] pb-3" style={Font}>
          Leave us a message
        </h3>
        <div className="flex flex-col gap-4 py-12 sm:flex sm:flex-col sm:gap-3">
          <input
            placeholder="Enter your Email"
            className="border-white sm:border-white bg-black sm:bg-black 
            border-2 sm:border-2 w-[650px] sm:w-[250px] h-[60px] rounded-xl
             sm:rounded-xl m-auto sm:m-auto placeholder:relative sm:placeholder:relative placeholder:left-3 sm:placeholder:left
             placeholder:text-gray-500 sm:placeholder:text-gray-500 text-white sm:text-white"
          />
          <input
            placeholder="Enter your message"
            className="border-white sm:border-white bg-black sm:bg-black border-2 sm:border-2
             w-[650px] sm:w-[250px] h-[300px] sm:h-[100px]
             rounded-xl sm:rounded-xl m-auto sm:m-auto placeholder:relative sm:placeholder:relative
              placeholder:bottom-[100px] sm:placeholder:bottom-[30px] placeholder:left-3 sm:placeholder:left-3
              placeholder:text-gray-500 sm:placeholder:text-gray-500 text-white sm:text-white"
          />
          <a
            href=""
            className="text-center bg-purple-600 py-3 px-9 sm:py-2 sm:my-4
            hover:text-purple-600 hover:bg-white hover:font-bold text-white font-bold sm:text-sm
             w-[200px] sm:w-[180px] h-[50px] sm:h-[40px] m-auto rounded-lg"
         style={Font} >
            Send Message
          </a>
        </div>
      </div>
        </section>
        <footer
          className="
             top-[2px] sm:top-[5px]
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
