import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import MyResumeSection from "./components/MyResumeSection"
import AboutMe from './components/AboutMe';
import MyService from './components/MyService';
import MyProject from './components/MyProject';
import Contact from './components/Contact';

import Footer from './components/Footer';
//importing font-awesome 


function App() {
  
  return (
    <div className="App">
      
      <Navbar/>

        <Header/>


      <MyResumeSection/>

      <AboutMe/> 


      <MyService/>     

      <MyProject/>

      <Contact/>

      <Footer/>

    </div>
  );
}

export default App;
