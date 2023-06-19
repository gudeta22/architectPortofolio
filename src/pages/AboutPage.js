import React from "react";

import AboutComponent from "../components/AboutComponent.js";
import Experties from "../components/Experties";
import NavAbout from "../components/NavAbout";
import AboutDescription from "../components/AboutDescription.js";
function AboutPage() {
  return (
    <div>
      <div>
        <NavAbout />
        <AboutComponent />
        <AboutDescription />
        <Experties />
      </div>
    </div>
  );
}

export default AboutPage;
