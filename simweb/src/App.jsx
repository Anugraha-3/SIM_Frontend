import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Loader from './components/loader';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import GlobeGallery from './pages/Gallery';
import Keerthi from './pages/keerthi'; // 👈 Import the new Keerthi page
import RobotChat from "./pages/RobotChat";

import './styles/globe.css';
import './styles/space.css';

function HomePage() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
    
      <Navbar
        scrollToSection={{
          about: aboutRef,
          services: servicesRef,
          team: teamRef,
          contact: contactRef,
        }}
      />
      <HeroSection />
      <div ref={aboutRef}><About /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={teamRef}><Team /></div>
      <div ref={contactRef}><Footer /></div>
      <Footer2 />
    </>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/globe" element={<GlobeGallery />} />
          <Route path="/keerthi" element={<Keerthi />} /> {/* 👈 Route for Keerthi page */}
          <Route path="/robot-chat" element={<RobotChat />} />
        </Routes>
      )}
    </Router>
  );
}
