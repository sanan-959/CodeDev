import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import CustomNavbar from './Components/Navbar'; 
import HeroSection from './Components/hero';
import NewsLetter from './Components/NewLetter';

function App() {

  return (
    <>
    <CustomNavbar/>
    <HeroSection/>
    <NewsLetter/>
    </>
  );
}

export default App;
