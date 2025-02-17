import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import Aboutme from './Components/Aboutme';
import Strength from './pages/Strength';
import Projects from './Components/Projects';

import Contactus from './Components/Contactus';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      
         <Route path="/home" element={<HeroSection />} />
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<Aboutme />} />
        <Route path="/strength" element={<Strength />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Contactus" element={<Contactus />} />
     
      </Routes>
    </Router>
  );
}

export default App;
