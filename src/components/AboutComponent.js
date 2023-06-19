import React from 'react'
import About1 from '../assets/images/about1.png'
import About2 from '../assets/images/about2.png'
import ButtonComponent from './ButtonComponent';
function AboutPage() {
  return (
    <div className="container m-auto">
  <div className=' px-4 mi:flex gap-6 py-36'>
  <div className='mi:w-1/2 py-7 flex flex-col justify-center gap-8'>
<span className='flex items-center  font-bold'><div className='w-7 rounded-md mx-2 h-[2px] bg-red-600'></div><p>About Us</p></span>
<h2 className=' text-[#1d2434] text-[24px] fontstyle font-extrabold text-5xl lg:text-5xl '>2 YEARS OF EXPERIENCE IN THIS AREA
</h2>
<p className='poppins font-normal text-[#686868]'>Established in 2021 G.C, by a group of Architects and Engineers to provide a compressive range of design and supervision service for projects on different scales. Misikir Zewdu Architects is a registered, qualified & professional firm working on Architectural, Interior, and Landscape design solutions.</p>
  <ButtonComponent url={"/about"} title={'About Us'}/>
    </div>

    <div className='flex md:w-1/2 relative'>
      <div className=' z-10  absolute  mi:w-[80%] mi:left-6 lg:w-full'>
     <img src={About1} className=' ' alt="" />
      </div>
      <div className=' relative md:-right-[109px] md:top-4 mi:top-7 mi:right-0 lg:top-7 lg:-right-[109px] '>
      <img className=' ' src={About2} alt="" />
      </div>

    </div>
  </div>

    </div>
  );
}

export default AboutPage;