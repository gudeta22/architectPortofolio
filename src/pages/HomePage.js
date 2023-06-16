import React from 'react';
import AboutComponent from '../components/AboutComponent';
import Footer from '../components/Footer';
import ServiceComponent from '../components/ServiceComponent';
import OurWork from '../components/ourWork';
import Experties from '../components/Experties';
import Aboutwork from '../components/Aboutwork-2';
import HomePage from '../components/homePageComponnent';

function Home() {
  return (
    
    <>
      <HomePage/>
      <AboutComponent />
      <ServiceComponent />
      <OurWork />
      <Aboutwork />
      
      <Experties />
      
    </>
  );
}

export default Home;
