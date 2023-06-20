import React from "react";
import aboutdescbg from "../assets/images/servicebg.png";
import check from "../assets/images/checker.png";
function AboutDescription() {
  return (
    <div
      // className="relative w-full lg:p-24 p-6 sm:bg-fixed text-white "
      // style={{
      //   backgroundImage: `url(${aboutdescbg})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* // <div className=""> */}
      <div className="grid grid-cols-1  lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 md:space-x-2 md:text-lg space-y-8 justify-center fontstyle text-lg my-10 ">
        <div className="text-white lg:w-[60%] lg:mx-96 h-auto ">
          <div className="p-[3.3rem] lg:my-8 border bg-white rounded-xl  ">
            <span className="flex items-center  font-bold">
              <div className="w-10 rounded-md mx-2 h-[2px] bg-red-600"></div>{" "}
              <h2 className="my-4 lg:text-xl text-slate-950 font-bold">
                OUR COMPANY
              </h2>
            </span>
            <p className="lg:text-  text-[#1d2434]">
           Located in the vibrant city of Addis Ababa, Ethiopia, Misikir Zewdu Architects is dedicated to providing a comprehensive range of services for projects at every stage. Our team of highly qualified experts works together in a fully furnished office space, ensuring smooth and efficient project execution.<br /><br />

           Our office serves as a hub where talented local specialists come together to collaborate and create outstanding architectural solutions. By fostering a supportive and inspiring environment, we enable our team to unleash their full potential and deliver exceptional results.
           At Misikir Zewdu Architects, we understand the importance of a conducive workspace. That's why we have carefully designed our office to provide the ideal setting for creativity and innovation to flourish. We believe that by bringing together our skilled professionals in this environment, we can exceed expectations and bring your architectural visions to life.{" "}
            </p>
          </div>
        </div>
        <div className="">
          <div className="p-10 border bg-white rounded-xl lg:h-[28rem] lg:w-[60%] lg:mx-[23.5rem]">
            <span className="flex items-center  font-bold">
              <div className="w-10 rounded-md mx-2 h-[2px] bg-red-600"></div>{" "}
              <h2 className="my-4 lg:text-xl text-slate-950 font-bold">
                OUR OBJECTIVE
              </h2>
            </span>
            <p className="lg:text-xl  text-[#1d2434] font-semibold">
              The main objective of the company are :{" "}
            </p>
            <ul className=" lg:text-lg  text-[#1d2434] p-5">
              <div className="flex lg:p-2 ">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1 " />{" "}
                <li className="">
                  To contribute professional service to overcome the high demand
                  for engineering works design study and management{" "}
                </li>
              </div>
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>
                  To promote the engineering industry by producing quality work{" "}
                </li>
              </div>
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>
                  To upgrade the skill of professionals in the engineering field{" "}
                </li>
              </div>
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>
                  To give creative solutions to the new demands of the design
                  industry that can sustain the taste of time
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="p-[2.37rem] border bg-white rounded-xl lg:w-[60%] lg:mx-[23.5rem]">
            <span className="flex items-center  font-bold">
              <div className="w-10 rounded-md mx-1 h-[2px] bg-red-600"></div>{" "}
              <h2 className="my-4 lg:text-xl text-slate-950 font-bold">
                OUR SERVICES
              </h2>
            </span>
            <p className="lg:text-lg  text-[#1d2434] font-semibold">
              Based on our objective, we are providing compressive Architectural
              and Engineering services mainly in the following sectors:{" "}
            </p>{" "}
            <br />
            <ul className="lg:text-xl text-[#1d2434]">
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>Architectural design</li>
              </div>
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>Interior design </li>
              </div>
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>Landscape design</li>
              </div>
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>Building Permit Preparation</li>
              </div>
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>Remodel & Addition</li>
              </div>
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>As-Built & Proposed</li>
              </div>
              <div className="flex lg:p-2">
                <img src={check} alt="check" className="w-5 h-5 mx-2 my-1" />
                <li>3D Modeling & Rendering</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDescription;
