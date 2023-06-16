import React from "react";
import footer from "../assets/images/bg-footer.png";
function NavComponent() {
  return (
    <div
      className=" w-full h-10 lg:h-[20rem] px-20 py-32 flex justify-center bg-fixed"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" w-auto flex justify-center items-center ">
        <div className="text-white text-3xl md:text-5xl font-bold font-style ">
          <div className="fontstyle">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default NavComponent;
