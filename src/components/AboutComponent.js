import React, { useEffect } from "react";
import About1 from "../assets/images/about1.png";
import About2 from "../assets/images/about2.png";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container m-auto">
      <div className=" px-4 mi:flex gap-6 py-36">
        <div className="mi:w-1/2 py-7 flex flex-col justify-center gap-8">
          <span className="flex items-center  font-bold">
            <div className="w-7 rounded-md mx-2 h-[2px] bg-red-600"></div>
            <p>About Us</p>
          </span>
          <h2 className=" text-[#1d2434] text-[24px] fontstyle font-extrabold text-5xl lg:text-2xl ">
            We Create Architectural Masterpieces
          </h2>
          <p className="poppins font-normal text-[#686868]">
            Peniel International Church's journey began in 2012 GC when a group
            of visionary individuals recognized the need for a place where
            people from various nations could come together in worship and
            fellowship. From that moment, our church has continued to evolve,
            embracing the rich tapestry of cultures and traditions that make up
            our global congregation.
          </p>
          <Link to="/about">
            <ButtonComponent title={"About Us"} />
          </Link>
        </div>

        <div className="flex md:w-1/2 relative">
          <div className=" z-10  absolute  mi:w-[80%] mi:left-2  lg:w-[28rem]">
            <img src={About1} className=" " alt="" />
          </div>
          <div className=" relative md:-right-[109px] md:top-4 mi:top-7 mi:right-0 lg:top-7 lg:-right-[40px]  ">
            <img className=" " src={About2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
