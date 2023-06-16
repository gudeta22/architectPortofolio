import React from "react";
import Archi from "../assets/images/city.png";
import Interior from '../assets/images/interior-design.png'
import building from '../assets/images/home.png'
import drawing from '../assets/images/drawing.png'
import permit from '../assets/images/affirmed.png'
import modeling from '../assets/images/3d-modeling.png'
import rendering from '../assets/images/rendering.png'

function ServiceWeProvide({index}) {
  const services = [
    {
      id: 1,
      src: Archi,
      title: "ARCHITECTURE",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
    {
      id: 2,
      src: Interior,
      title: "INTERIOR DESIGN",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
    {
      id: 3,
      src: building,
      title: "BUILDING DESIGN",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
      {
      id: 4,
      src: Interior,
      title: "SUPERVISION SERVICE",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
      {
      id: 5,
      src: drawing,
      title: "LANDSCAPE DESIGN",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
      {
      id: 6,
      src: permit,
      title: "PERMIT PREPARATION",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },

     {
      id: 7,
      src: modeling,
      title: "3D MODELING",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
     {
      id: 8,
      src: rendering,
      title: "RENDERING",
      description: `Sorem spsum dolor sit amsectetr adipisclit, seddo eiusmod tempr incididunt laborea.`,
    },
  ];

  return (
    <div className="bg-cover">
      <div className="p-4 text pt-28  h-[500px] md:text-center md:h-[35rem]  text-slate-950  ">
        <div className=" md:m-auto md:flex flex-col justify-center md:w-[620px] ">
          <div className="  flex items-center md:justify-center">
            <div className="  w-16 mb-5 h-[2px] -mt-4 mr-2  rounded-md bg-red-500 -left-16 "></div>
            <span className=" text-lg  mb-9  md:text-xlg font-bold uppercase md:text-center inline-block relative tracking-wider fontstyle ">
              Our services
            </span>
          </div>
          <h1 className=" text-xl  md:text-4xl uppercase font-bold fontstyle  ">
            WE PROVIDE BEST INTERIOR SOLUTION FOR YOU
          </h1>
        </div>
      </div>
    
      <div  className=" container m-auto   rounded-lg grid-cols-1 lg:grid-cols-3 md:-mt-44 -mt-72 md:grid md:grid-cols-3  justify-center w-full lg:py-10 md:gap-7 sm:grid sm:grid-cols-2 sm:m-auto sm:gap-4 sm:-mt-44  ">
        {services.map((service, id) => (
          <div
            key={id}
            className="bg-[#f8f8f8]  shadow-md  sm:justify-center   lg:h-[28rem] rounded-lg"
          >
            <div className="  mx-0 lg:w-auto p-[20px] flex justify-center items-center flex-col pt-5   gap-6  my-7">
              <img src={service.src} alt="" className="w-[20%]  " />
              <h3 className="  font-semibold my-10 fontstyle ">{service.title}</h3>
              <p className=" text-[#717081] text-center  poppins font-light fontstyle">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceWeProvide;
