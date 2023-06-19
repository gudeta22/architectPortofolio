import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../assets/images/menu.png";
import xicon from "../assets/images/xicon.jpg";
import logo from "../assets/images/logo.png";
import NavMenuComponent from "./navMenuComponent";
function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className="w-[100%]">
      <nav className="bg-[#011813] border-none w-[100%]  fixed z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 ">
                <img className="h-32 w-40 " src={logo} alt="Logo" />
              </div>
            </div>
            <div className="hidden md:block ">
              <div className="ml-10 flex   items-baseline space-x-14">
                <Link
                  to="/"
                  className="group text-white   rounded-md text-sm font-medium"
                ><NavMenuComponent menu={'Home'}/></Link>


                <Link
                  to="/about"
                  className="group text-white   rounded-md text-sm font-medium"
                ><NavMenuComponent menu={'About'}/></Link>

                <Link
                  to="/services"
               className=" group text-white   rounded-md text-sm font-medium"
                ><NavMenuComponent menu={'Services'}/></Link>

                <Link
                  to="/projects"
                  className=" group text-white   rounded-md text-sm font-medium"
                ><NavMenuComponent menu={'Projects'}/>
                </Link>

                <Link
                  to="/contact"
                  className=" group text-white   rounded-md text-sm font-medium"
                ><NavMenuComponent menu={'Contact'}/>
                </Link>

              </div>
            </div>
            <div className="md:hidden  flex items-center">
              {open ? (
                <button
                  type="button"
                  className="text-gray-800 hover:text-gray-600 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <img src={xicon} alt="Menu" className="h-5 w-6" />
                </button>
              ) : (
                <button
                  type="button"
                  className="text-gray-800   focus:outline-none"
                  onClick={toggleMenu}
                >
                  <img src={menu} alt="Close" className="h-8 w-8" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gray-500 fixed z-50 my-16 w-full  flex justify-start px-5">
        {open && (
          <ul className="text-white md:hidden lg:hidden sm:hidden transform transition-all ease-out duration-300 select-none  ">
            <li className="p-1">
              <Link  to="/">Home</Link>
            </li>
            <li className="p-1">
              <Link to="/about">About</Link>
            </li>
            <li className="p-1">
              <Link to="/services">Services</Link>
            </li>
            <li className="p-1">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="p-1">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;

