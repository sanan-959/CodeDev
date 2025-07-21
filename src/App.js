import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import Components
import CustomNavbar from './Components/Navbar'; 
import HeroSection from './Components/hero';
import NewsLetter from './Components/NewLetter';
import CradPage from './Components/Card';
import FundamantelPage from './Components/FundamantelSection';
import ReactPage from './Components/ReactSection';
import QuestionPage from './Components/QuestionSection';

function App() {

  return (
    <>
    <CustomNavbar/>
    <HeroSection/>
    <NewsLetter/>
    <CradPage/>
    <FundamantelPage/>
    <ReactPage/>
    <QuestionPage/>
    </>
  );
}

export default App;
