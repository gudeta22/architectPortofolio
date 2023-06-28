import React from "react";

import AboutComponent from "../components/AboutComponent.js";
import NavAbout from "../components/NavAbout";
import AboutDescription from "../components/AboutDescription.js";
function AboutPage() {
  return (
    <div>
      <div>
        <NavAbout />
        <AboutComponent />
        <AboutDescription />
      </div>
    </div>
  );
}

export default AboutPage;
