import React from "react";
import Archi from "../assets/images/city.png";
import permit from '../assets/images/affirmed.png'
import modeling from '../assets/images/3d-modeling.png'
import "../index.css";
function ServiceComponent() {
  const services = [
    {
      id: 1,
      src: Archi,
      title: "ARCHITECTURAL DESIGN",
      description: `As an experienced provider of design Services, our designers translate architectural ideas into forms.`,
    },
    {
      id: 2,
      src: permit,
      title: "BUILDING PERMIT PREPARATION",
      description: `We make interior spaces more functional, safe, and beautiful for almost every type of building interior, by selecting essential and decorative materials.`,
    },
    {
      id: 3,
      src: modeling,
      title: "3D MODELING AND RENDERING",
      description: `we have the best team that can enable you to convert your 2D sketches/Plans to Architectural 3D modeling with high precision. `,
    },
  ];

  return (
    <div className="bg-cover">
      <div className="p-4 service bg-gray-900 pt-28  h-[500px] md:text-center md:h-[35rem]  text-white  ">
        <div className=" md:m-auto md:flex flex-col justify-center md:w-[620px]   ">
          <div className="  flex items-center md:justify-center">
            <div className="  w-16 mb-5 h-[2px] -mt-4 mr-2  rounded-md bg-red-500 -left-16 "></div>
            <span className=" text-lg  mb-9  md:text-xlg font-bold uppercase md:text-center inline-block relative tracking-wider">
              Our services
            </span>
          </div>
          <h1 className=" text-xl  md:text-4xl uppercase font-bold fontstyle  ">
           WE PROVIDE BEST DESIGN SOLUTION FOR YOU
          </h1>
        </div>
      </div>

      <div className=" container m-auto  rounded-lg  md:-mt-44 -mt-72 md:flex justify-center w-full  md:gap-7 sm:grid sm:grid-cols-2 sm:m-auto sm:gap-4 sm:-mt-44  ">
        {services.map((service, id) => (
          <div
            key={id}
            className="bg-[#f8f8f8]  shadow-md  sm:justify-center   lg:h-[28rem] rounded-lg"
          >
            <div className="  mx-0 lg:w-[25rem] md:w-[18rem] sm:w-[16rem] p-[20px] flex justify-center items-center flex-col pt-5   gap-6  my-7">
              <img src={service.src} alt="" className=" w-[25%]  " />
              <h3 className="  font-semibold my-10 fontstyle">{service.title}</h3>
              <p className=" text-[#717081] text-center  poppins font-light">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceComponent;
