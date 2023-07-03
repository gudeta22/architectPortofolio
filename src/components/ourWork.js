import React from "react";
import { Link } from 'react-router-dom';
import jammy from "../assets/projects/JIMMY RESIDENCE/1.jpg";
import roccatani from "../assets/projects/ROCCATANI DWELLING/1273 WALDMERE ROAD-01.jpg";
import andrew from "../assets/projects/ANDREW RESIDENCE/1.jpg";
import ramos from "../assets/projects/RAMOS KITCHEN/1-01.jpg";
import "../index.css";
function OurWork() {
  const projects = [
    {
      id: 1,
      src: jammy,
      title: "JIMMY RESIDENCE ",
    },
    {
      id: 2,
      src: roccatani,
      title: "ROCCATANI RESIDENCE",
    },
    {
      id: 3,
      src: andrew,
      title: "ANDREW RESIDENCE",
    },
    {
      id: 4,
      src: ramos,
      title: "RAMOS KITCHEN",
    },
  ];
  return (
    <div className="container   m-auto mt-[12rem]  justify-center   ">
      <div className=" sm:text-center ">
        <div className=" sm:m-auto sm:w-[500px]">
          <div className=" flex items-center sm:justify-center sm:text-center ">
            <div className=" lg:w-16 ,d:w-16 w-10 h-[2px]  mr-3 bg-slate-950 rounded-lg "></div>
            <p className="font-semibold tracking-wider text-[#292c37]  text-sm sm:text-sm  lg:text-xl uppercase  ">
              our recent work
            </p>
          </div>
          <div className="w-auto h-auto">
            <h2 className="mb-3 fontstyle  text-left text-[18px]  sm:text-[31px] md:text-[50px] textstyle  mt-9 font-extrabold text-[#1d2434]  sm:text-center lg:text-5xl ">
              OUR BEST RECENT WORK HERE
            </h2>
          </div>
        </div>

        <div className=" m-auto  sm:grid grid-cols-2 gap-[29px] lg:h-auto h-auto lg:my-14 md:my-14">
          {projects.map((project, id) => (
            <Link to="/projects" >
            <div key={id} className="group mb-8 ">
              <img src={project.src} alt="" className="w-full lg:h-[20rem] md:h-[15rem]  " />
              <div className="child relative pb-8 pl-2   z-10 bg-white w-full transition-all group-hover:-translate-y-10 duration-500 ease-in-out ">
                <p className="text-left fontstyle text-[#1D1D1D] font-semibold text-sm lg:text-xl fontstyle">
                  {project.title}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWork;
