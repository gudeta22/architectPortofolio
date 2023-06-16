import React from "react";
import popular1 from "../assets/images/home.jpg";
import popular2 from "../assets/images/firstwork.jpg";
import popular3 from "../assets/images/house3.jpg";
import popular4 from "../assets/images/secondwork.jpg";
import '../index.css'
function OurWork() {
  const projects = [
    {
      id: 1,
      src: popular1,
      title: "Downside Low House",
      place: `Bole,Addis Abeba`,
    },
    {
      id: 2,
      src: popular2,
      title: "Top Commercial Building",
      place: `Bole,Addis Abeba`,
    },
    {
      id: 3,
      src: popular3,
      title: "Big Building Concept",
      place: `Bole,Addis Abeba`,
    },
    {
      id: 4,
      src: popular4,
      title: "Downside Low House",
      place: `Bole,Addis Abeba`,
    },
  ];
  return (
    <div className="container   m-auto mt-[12rem]  justify-center   ">
     
      <div className=" sm:text-center ">
        <div className=" sm:m-auto sm:w-[500px]">
          <div className=" flex items-center sm:justify-center sm:text-center ">
            <div className=" w-16 h-[2px]  mr-3 bg-slate-950 rounded-lg "></div>
            <p className="font-semibold tracking-wider text-[#292c37]  text-xl uppercase  ">
              our recent work
            </p>
          </div>
          <div  className="w-auto h-auto">
             <h2 className="mb-3 fontstyle  text-left text-[27px] sm:text-[31px] md:text-[50px] textstyle  mt-9 font-extrabold text-[#1d2434]  sm:text-center lg:text-5xl ">
                  OUR BEST RECENT  WORK HERE
             </h2>
          </div>
         
        </div>

        <div className=" m-auto  sm:grid grid-cols-2 gap-[29px]  lg:my-14 md:my-14">
          {projects.map((project, id) => (
            <div key={id} className="group mb-8  ">
              <img src={project.src} alt="" className="w-full h-auto" />
              <div className="child relative pb-8 pl-2   z-10 bg-white w-full transition-all group-hover:-translate-y-10 duration-500 ease-in-out ">
                <p className="text-left fontstyle text-[#1D1D1D] font-bold ">{project.title}</p>
                <p className="text-left fontstyle text-[#686868]  font-medium">{project.place}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurWork;
