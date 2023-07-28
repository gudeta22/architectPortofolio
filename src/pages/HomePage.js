import React from "react";
import AboutComponent from "../components/AboutComponent";
import ServiceComponent from "../components/ServiceComponent";
import OurWork from "../components/ourWork";
import Aboutwork from "../components/Aboutwork-2";
import HomePage from "../components/homePageComponnent";

function Home() {
  return (
    <div>
      <HomePage />
      <AboutComponent />
      <ServiceComponent />
      <OurWork />
      <Aboutwork />
    </div>
  );
}

export default Home;
