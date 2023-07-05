import './App.css';
import {Route , Routes} from 'react-router-dom'
import Home from '../src/pages/HomePage'
import Contact from '../src/pages/Contact'
import AboutPage from '../src/pages/AboutPage'
import Projects from '../src/pages/ProjectPage'
import Service from '../src/pages/ServicePage'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <>
   <Navbar />
    <Routes>
      <Route  path='/' element={<Home />} exact/>
      <Route path='/about'  element={<AboutPage />} exact />
      <Route path='/services' element={<Service />} exact/>
      <Route path='/projects' element={<Projects />} exact/>
      <Route path ='/contact' element={<Contact />} exact/>
    </Routes>
    <Footer />
   
     
    </> 
  );
}

export default App;
