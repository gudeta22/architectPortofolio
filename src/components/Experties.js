import React from "react";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person1.png";
import '../index.css'
function Experties() {
  const experties = [
    {
      id: 1,
      src: person1,
      name: "Jhon Sunsa",
      role: `Creative director`,
    },
    {
      id: 2,
      src: person2,
      name: "Smith J White",
      role: `Creative director`,
    },
    {
      id: 3,
      src: person3,
      name: "Jayson Brouni",
      role: `Creative director`,
    },
   
  ];
  return (
    <div className=" container m-auto  mt-[20rem] sm:flex  ">
      <div className=" sm:text-center ">
        <div className=" sm:m-auto sm:w-[500px]">
          <div className=" flex items-center sm:justify-center sm:text-center ">
            <div className=" w-16 h-[2px]  mr-3 bg-slate-950 rounded-lg "></div>
            <p className="font-semibold tracking-wider text-[#292c37]  text-xl uppercase  ">
              our Experties
            </p>
          </div>
          <div  className="w-auto h-auto">
             <h2 className="mb-3 font-extrabold fontstyle text-left text-[27px]  mt-9  text-[#1d2434]  sm:text-center lg:text-4xl ">
                  BEST TEAM WE HAVE EVER HAD RIGHT NOW
             </h2>
          </div>
         
        </div>

        <div className=" sm:m-auto sm:w-[500px] sm:grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-[29px] md:w-[690px] lg:w-[75rem] lg:my-14 md:my-14 ">
          {experties.map((experties, id) => (
            <div key={id} className="group mb-8 relative  overflow-hidden bg-contain ">
                {/* <img src={experties.src} alt="img" className="" /> */}
                <div className="lg:h-[25rem]">
              <img src={experties.src} alt="img" className="w-full h-auto duration-500   object-cover transition ease-in-out hover:scale-110" />
              </div>
              <div className=" child relative  z-10 bg-white w-full transition  duration-500 my-10 mt-20 ">
                <p className="text-left  fontstyle font-extrabold text-3xl text-slate-950   ">{experties.name}</p>
                <div className="flex items-center sm:justify-center  sm:text-center mr-48">
                <div className="md:w-10 lg:w-10 sm:w-10 w-10 h-[2px] mr-2   bg-red-600 rounded-lg "></div>
                <p className="text-left fontstyle font-normal">{experties.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experties;
