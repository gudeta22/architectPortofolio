import React from "react";
import "../index.css";
function NavMenuComponent(props) {
  return (
    <div className=" flex flex-col  ">
      {props.menu}

      <div className=" bg-white rounded-md   w-0 group-hover:w-[100%] transition-all duration-300 ease-in-out   h-[2px]">
        <div className=" bg-red-800  w-0   group-hover:w-inherit h-[2px] transition-all duration-200 ease-in-out"></div>{" "}
      </div>
    </div>
  );
}

export default NavMenuComponent;
