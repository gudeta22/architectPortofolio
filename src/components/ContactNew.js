import React , {useEffect} from "react";
import '../index.css'
import homeicon from '../assets/images/home-location.png'
import mail from '../assets/images/mail.png'
import phone from '../assets/images/phone.png'
import whatsapp from '../assets/images/whatsapp.png'

function ContactComponent() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const Person = {
   
    
    phone: "+251911393207",
    email: "misikirzarchitects@gmail.com",
    Address: "ADDIS ABEBA , ETHIOPIA"
  };

  const handleWhatsApp = () => {
    const phoneNumber = encodeURIComponent(Person.phone);
    const message = encodeURIComponent("Hello, I would like to get in touch.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white  container m-auto">
      <div className="py-8 lg:py-10 px-4 mx-auto ">
        <form action="#" className="space-y-9">
          <div className="  flex items-center md:justify-center mx-10  ">
            <div className="  w-10  mb-5 h-[2px] -mt-4 mr-2  rounded-md bg-red-500 -left-16 "></div>
            <span className=" text-2xl mb-9  md:text-xlg fontstyle font-semibold uppercase md:text-center inline-block relative tracking-wider">
             Get in touch
            </span>
          </div>
          
          <div className="flex space-x-96 my-16 p-5 justify-center">
            <div className="flex-col space-y-12 my-2 ">
              <div className="w-[20rem] lg:w-[38rem] md:w-[38rem] m-8">
                <div className="flex space-x-5 border p-5 lg:p-8 md:p-8 bg-gray-200 w-auto">
                  <img src={homeicon} alt="" className="h-10 w-10 md:h-8 md:w-8 sm:w-5 sm:h-5 " />
                  <div className="my-2 fontstyle font-semibold">
                    {Person.Address}
                  </div>
                </div>
              </div>
              <div className="flex w-[20rem] lg:w-[38rem] md:w-[38rem] m-8 space-x-3 border p-5 lg:p-8 md:p-8 bg-gray-200  ">
                <img src={mail} alt="" className="h-10 w-10 md:h-8 md:w-8 sm:w-5 sm:h-5 " />
                <div className="my-1 font-semibold fontstyle sm:text-sm lg:text-lg">
                 {Person.email}
                </div>
              </div>
              <div className="flex align-middle w-[20rem] lg:w-[38rem] md:w-[38rem] m-8 space-x-5 border p-5 lg:p-8 md:p-8 bg-gray-200  ">
                <img src={phone} alt="" className="h-10 w-10 md:h-8 md:w-8 sm:w-5 sm:h-5 " />
                <div className="my-2  fontstyle font-semibold">
                  +251-911393207
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <button
              type="button"
              className="px-5 text-sm text-center lg:mx-64 w-30  mx-5 text-white border bg-green-700  p-2 font-bold bg-primary-700 sm:w-fit focus:ring-4 focus:outline-none dark:hover:bg-primary-700"
              onClick={handleWhatsApp}
            >
                <div className="flex space-x-4  ">
                    <img src={whatsapp} alt="what'sApp" className="w-10 h-10" />
                   <span className="my-3 fontstyle">WHAT'S APP</span>
                   
                </div>
               
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactComponent;
