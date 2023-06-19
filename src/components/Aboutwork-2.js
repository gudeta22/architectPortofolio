import React from "react";
import "../index.css";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
function Aboutwork() {
  return (
    <div className="">
      <div className=" overflow-clip relative underworkcom -z-10 h-2/3 -mt-64 pt-[355px]">
        <div class=" bg-[rgba(4,21,28,0.902)] left-0 pt-5 w-full md:w-[85%] lg:w-1/2 absolute overflow-hidden h-inherit "></div>

        <div className="  container m-auto p-4   ">
          <div className=" relative pt-28  pb-24 flex flex-col  gap-10">
            <h1 className="  text-[27px] text-white fontstyle">
              Our best recent popular work here
            </h1>
            <p className=" text-white poppins ">
              We have established a high-quality private and government <br /> client both locally and internationally. We provide Architectural <br /> designs, building remodels and additions, As-built and proposed,<br /> and 3D modeling with high-quality rendering.{" "}
            </p>
            
            {/* <ButtonComponent  title={'About Us'} url={"/about"}/> */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutwork;
