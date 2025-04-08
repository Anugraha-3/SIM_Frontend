import { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
import GlobeGallery from "./pages/GlobeGallery";
import "./styles/globe.css";
import "./styles/space.css"; // Twinkling stars, cursor, etc.

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

function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <CustomCursor />
      {isLoading ? (
        <div className="loader-wrapper">
          <div className="loader">
            <span></span>
          </div>
          <p className="loader-text">
            Searching Space...<br />Fetching Your Planet
          </p>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/globe" element={<GlobeGallery />} />
        </Routes>
      )}
    </Router>
  );
}
