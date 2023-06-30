import React , {useEffect} from "react";
import Archi from "../assets/images/city.png";
import Interior from "../assets/images/interior-design.png";
import building from "../assets/images/home.png";
import drawing from "../assets/images/drawing.png";
import permit from "../assets/images/affirmed.png";
import modeling from "../assets/images/3d-modeling.png";
import remodel from '../assets/images/remodeling.png'

function ServiceWeProvide({ index }) {
   useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const services = [
    {
      id: 1,
      src: Archi,
      title: "ARCHITECTURAL DESIGN",
      description: `As an experienced provider of design Services, our designers translate architectural ideas into forms`,
    },

    {
      id: 6,
      src: permit,
      title: "BUILDING PERMIT PREPARATION",
      description: `Our company provides building permit drawing services for a variety of projects, including new construction, renovations, and additions. We have a team of experienced architects and engineers who can create drawings that meet all applicable building codes and regulations.`,
    },
    {
      id: 7,
      src: modeling,
      title: "3D MODELING AND RENDERING",
      description: `we have the best team that can enable you to convert your 2D sketches/Plans to Architectural 3D modeling with high precision.`,
    },
    {
      id: 2,
      src: Interior,
      title: "INTERIOR DESIGN",
      description: `We make interior spaces more functional, safe, and beautiful for almost every type of building interior, by selecting essential and decorative materials.`,
    },
    {
      id: 3,
      src: building,
      title: "AS BUILT & PROPOSED",
      description: `We deliver the best As-Built drawing with exact current building look, or the intended layout of the building .`,
    },
    {
      id: 4,
      src: remodel,
      title: "REMODEL & ADDITION",
      description: `As an experienced provider of design Services, our designers translate architectural ideas into forms.`,
    },
    {
      id: 5,
      src: drawing,
      title: "LANDSCAPE DESIGN",
      description: `we design your outdoor experience, with custom styling for your unique property.`,
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
            WE PROVIDE BEST DESIGN SOLUTION FOR YOU
          </h1>
        </div>
      </div>

      <div className=" container m-auto   rounded-lg grid-cols-1 lg:grid-cols-3 md:-mt-44 -mt-72 md:grid md:grid-cols-2  justify-center w-full lg:py-10 md:gap-3 sm:grid sm:grid-cols-2 sm:m-auto sm:gap-4 sm:-mt-44  ">
        {services.map((service, id) => (
          <div
            key={id}
            className="bg-[#f8f8f8]  shadow-md  sm:justify-center   lg:h-[28rem] rounded-lg"
          >
            <div className="  mx-0 lg:w-auto p-[20px] flex justify-center items-center flex-col pt-5   gap-6  my-7">
              <img src={service.src} alt="" className="w-[20%]" />
              <h3 className="  font-semibold my-10 fontstyle ">
                {service.title}
              </h3>
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
