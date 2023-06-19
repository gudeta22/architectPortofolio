import React from "react";

import homeicon from '../assets/images/home-location.png'
import mail from '../assets/images/mail.png'
import phone from '../assets/images/phone.png'
import whatsapp from '../assets/images/whatsapp.png'

function ContactComponent() {
  const Person = {
   
    name: "MISIKIR ZEWEDU",
    phone: "0910541797",
    email: "gbteshite6195@gmail.com",
    Address: "ADDIS ABEBA"
  };

  const handleWhatsApp = () => {
    const phoneNumber = encodeURIComponent(Person.phone);
    const message = encodeURIComponent("Hello, I would like to get in touch.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-white h-screen">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form action="#" className="space-y-9">
          <h2 className="text-2xl font-light">Get In Touch</h2>
          <div className="flex space-x-96 my-16 p-5">
            <div className="flex-col space-y-12 my-2 w-[40rem]">
              <div className="">
                <div className="flex space-x-5 border p-8 bg-gray-200">
                  <img src={homeicon} alt="" className="h-10 w-10" />
                  <div className="my-2 fontstyle font-semibold">
                    ADDIS ABEBA , ETHIOPIA
                  </div>
                </div>
              </div>
              <div className="flex space-x-5 border p-8 bg-gray-200">
                <img src={mail} alt="" className="h-10 w-10" />
                <div className="my-2 font-semibold fontstyle">
                 misikirzarchitects@gmail.com
                </div>
              </div>
              <div className="flex space-x-5 border p-8 bg-gray-200">
                <img src={phone} alt="" className="h-10 w-10" />
                <div className="my-2 fontstyle font-semibold">
                  +251918996585
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="px-5 text-sm text-center text-white border bg-green-600  b p-2 font-bold bg-primary-700 sm:w-fit focus:ring-4 focus:outline-none dark:hover:bg-primary-700"
              onClick={handleWhatsApp}
            >
                <div className="flex space-x-4">
                 
                   <span className="my-3">Call Now</span>
                    <img src={whatsapp} alt="what'sApp" className="w-10 h-10" />
                </div>
               
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactComponent;
