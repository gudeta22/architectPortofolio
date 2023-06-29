import React from "react";
import bgcolor from "../assets/images/backnew.png";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";

function HomePage() {
  
  return (
    <section className="">
      <div
        className=" bg-no-repeat h-[45rem] lg:h-screen w-[100%] md:h-screen "
        style={{
          backgroundImage: `url(${bgcolor})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container m-auto ">
          <div className="px-4 absolute md:my-20 lg:my-48  my-16 ">
            <div className=" w-[100%]  pt-[5rem] md:gap-6 flex flex-col gap-5  ">
              <p class="text-white font-bold inline-block uppercase  relative font-rajdhani text-xs  lg:text-lg  md:text-lg fontstyle ">
               BEST ARCHITECTURAL FIRM IN THE TOWN
              </p>
              <div className="flex ">
                <div className=" bg-white relative opacity-50 lg:w-[269px] sm:w-[100px] w-32 h-[2px]"></div>
                <div className=" bg-red-700 w-[70px] absolute z-10 h-[2px]"></div>
              </div>
              <h1 className="text-white  text-[29px] text-bold md:text-7xl lg:text-8xl font-bold  leading-tight uppercase fontstyle">
                Focus on
                <br />
                Design Quality
              </h1>
              <p className="text-white lg:text-lg md:text-medium text-sm font-poppins lg:my-5">
                We creating lasting impression through architecture design.
              </p>
              <Link to='/contact' >
               <ButtonComponent title={"Contact Us"} />
              </Link>
            </div>
            <div className=" w-[100%] md:w-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
