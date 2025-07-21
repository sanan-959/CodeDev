import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import CradPage from './Components/Card';
import CustomNavbar from './Components/Navbar'; 
import HeroSection from './Components/hero';

function App() {

  return (
    <>
    <CustomNavbar/>
    <HeroSection/>
    </>
  );
}

export default App;
