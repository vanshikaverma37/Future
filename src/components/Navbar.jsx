import React from "react";
import { NavLink } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import "./Navbar.css";
import bgImage from "./images/bg.avif";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import aboutimg from "./images/about.jpg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import mentor from "./images/mento1.jpg";
import men2 from "./images/men2.jpg";
import men3 from "./images/men3.jpg";

const Navbar = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false });
  }, []);
  return (
    <>
      <nav className=" main-nav">
        <div className="title">
          <h1>
            <span>F</span>uture-
            <span>G</span>uide
          </h1>
        </div>
        <div className="menu-links col-span-[3/4] flex justify-around  max-[1000px]:hidden ">
          <NavLink className="text-center" to={"/"}>
            Home <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/Field"}>
            Field <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/Videos"}>
            Mentor-Video <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/Query"}>
            Query <span className=""></span>
          </NavLink>
          <NavLink className="" to={"/FeedBack"}>
            FeedBack <span className=""></span>
          </NavLink>
          <NavLink className="side-icon ">
            <PiDotsThreeOutlineVerticalLight />
          </NavLink>
        </div>
      </nav>
      <section className=" max-[1000px]:hidden">
        {bgImage ? (
          <img
            src={bgImage}
            alt="Background"
            className="main-img ml-[15rem] mt-[59px]
    w-[63rem]
    h-[67vh]  cursor-pointer  max-[1000px]:ml-[91px]
     max-[1000px]:w-[56rem]"
          />
        ) : null}
        <h1 className=" head -mt-[27rem] ml-[53rem]  w-[21rem] max-[1000px]:ml-[35rem] max-[1000px]:-mt-[25rem]">
          Shape Your Future By Choosing Correct Path Today !!
        </h1>
      </section>
      <div
        className="about bg-transparent w-[100%] h-[38rem] text-black"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-delay="1000"
      >
        <h1 className="mt-[24rem] ml-[41rem] text-[3rem]">ABOUT</h1>
        <div className="container-about">
          <div className="about-detail">
            <h1 className=" text-[19px] font-serif text-center">
              🌟 "Learning is an adventure—every click opens a new world of fun
              and discovery!"
            </h1>
            <p className="text-[15px] ml-[33em] leading-[45px]">
              Here We are Providing a Guide to Help you all to take a steps
              towards yout Gaols.
            </p>
            <div className="under-detail flex justify-self-start gap-[18rem]">
              <img
                src={aboutimg}
                alt=""
                className="h-[26rem] w-[45rem] ml-[39px] mt-[47px]"
                data-aos="fade-right"
                data-aos-duration="5000"
              />
              <h1 className="text-[31px] font-serif -ml-[111px] w-[29rem] mt-[87px]">
                We are Providing a mentor video and if you choice path then
                mentor provide u to roadmap.
              </h1>
            </div>
          </div>
        </div>
        <div
          className="h-[40rem] bg-amber-600 mt-[77px]"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1000"
        >
          <span
            className=" text-[80px] ml-[37rem]"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Mentor's
          </span>
          <div className="mentors-info cursor-pointer">
            <div className="first-mentor flex justify-around  gap-[9px]">
              <ul>
                <li>
                  <img
                    src={men3}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[11px] text-[20px] leading-[45px]">
                    Vijay Kumar
                  </h1>
                  <p className="-ml[22px]">Data Scienctist in Google</p>
                  <span className="text-[11px] ml-[15px]">
                    6 year Experienced
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={men2}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[11px] text-[20px] leading-[45px]">
                    priya tiwari
                  </h1>
                  <p className="-ml[22px]">AI expert in Microsoft</p>
                  <span className="text-[11px] ml-[15px]">
                    5 year Experienced
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={mentor}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[0px] text-[20px] leading-[45px]">
                    Rony Roy
                  </h1>
                  <p className="-ml[22px]">Graphic Designer</p>
                  <span className="text-[11px] ml-[15px]">
                    8 year Experienced
                  </span>
                </li>
              </ul>
            </div>
            <div className="seconf-mentor flex justify-around gap-[19px] mt-[60px]">
              <ul>
                <li>
                  <img
                    src={mentor}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[0px] text-[20px] leading-[45px]">
                    Rony Roy
                  </h1>
                  <p className="-ml[22px]">Graphic Designer</p>
                  <span className="text-[11px] ml-[15px]">
                    8 year Experienced
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={mentor}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[0px] text-[20px] leading-[45px]">
                    Rony Roy
                  </h1>
                  <p className="-ml[22px]">Graphic Designer</p>
                  <span className="text-[11px] ml-[15px]">
                    8 year Experienced
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={mentor}
                    alt=""
                    className="rounded-[50%] border-3 border-black w-[100px] h-[95px]"
                  />
                  <h1 className="ml-[0px] text-[20px] leading-[45px]">
                    Rony Roy
                  </h1>
                  <p className="-ml[22px]">Graphic Designer</p>
                  <span className="text-[11px] ml-[15px]">
                    8 year Experienced
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer bg-black mt-[60px] cursor-pointer">
          <div className="footer-contain  flex justify-around">
            <div className="footer-main">
              <h1 className="footer-head  text-[16px] font-light mb-[20px]">
                Experinced Menot's
              </h1>
              <ul className=" footer-ul text-[12px] leading-[23px] hover:text-white">
                <li className="hover:text-white">Ritehs Agarwal</li>
                <li className="hover:text-white">Ritehs Agarwal</li>
                <li className="hover:text-white">Ritehs Agarwal</li>
                <li className="hover:text-white">Ritehs Agarwal</li>
              </ul>
            </div>
            <div className="footer-main">
              <h1 className="footer-head text-[16px] font-light mb-[20px]">
                Facilities
              </h1>
              <ul className="footer-ul text-[12px] leading-[23px] hover:text-white">
                <NavLink to={"/Query"}>
                  <li className="hover:text-white">Mentor's Talk</li>
                </NavLink>
                <NavLink to={"/Query"}>
                 
                  <li className="hover:text-white">Ask any Query</li>
                </NavLink>
                <NavLink to={"/Field"}>
                 
                  <li className="hover:text-white">ALL Field</li>
                </NavLink>
                <NavLink to={"/Videos"}>
                 
                  <li className="hover:text-white">Videos of Mentor's</li>
                </NavLink>
                <NavLink to={"/FeedBack"}>
                  
                  <li className="hover:text-white">FeedBack</li>
                </NavLink>
              </ul>
            </div>
            <div className="footer-main">
              <h1 className="footer-head text-[16px] font-light mb-[20px]">
                Students Benefits
              </h1>
              <ul className=" footer-ul text-[12px] leading-[23px]">
                <li className="hover:text-white">Learn about your Interest</li>
                <li className="hover:text-white">free to talk</li>
                <li className="hover:text-white">No need to registration</li>
                <li className="hover:text-white">easly get you path</li>
                <li className="hover:text-white"></li>
                <li className="hover:text-white">Ritehs Agarwal</li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <h1 className="text-white mt-[15rem] ml-[77rem]">Take a Step Towards your dream</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
