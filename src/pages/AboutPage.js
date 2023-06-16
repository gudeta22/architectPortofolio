import React from "react";

import AboutComponent from "../components/AboutComponent.js";
import Experties from "../components/Experties";
import NavAbout from "../components/NavAbout";
function AboutPage() {
  return (
    <div>
      <div>
        <NavAbout />
        <AboutComponent />
        <Experties />
      </div>
    </div>
  );
}

export default AboutPage;
