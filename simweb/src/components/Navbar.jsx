import { FaPaperclip, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/sim_logo.png";
import "../styles/Navbar.css";

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (ref, sectionName) => {
    setMenuOpen(false); // Close menu on click
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionName);
    }
  };

  // Active section detection on scroll
  useEffect(() => {
    const sectionRefs = Object.entries(scrollToSection);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const name = sectionRefs.find(([_, ref]) => ref.current === entry.target)?.[0];
            if (name) setActiveSection(name);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionRefs.forEach(([_, ref]) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [scrollToSection]);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="navbar-left">
          <div className="logo-box">
            <img src={logo} alt="SIM Logo" className="navbar-logo" />
            <span className="navbar-title">SUN INFO MEDIA</span>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Center & Right Links */}
        <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <div
            className={`navbar-option ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleScroll(scrollToSection.about, "about")}
          >
            About
          </div>
          <div
            className={`navbar-option ${activeSection === "services" ? "active" : ""}`}
            onClick={() => handleScroll(scrollToSection.services, "services")}
            title="Explore our services"
          >
            
            <span>Services</span>
          </div>
          <div
            className={`navbar-option ${activeSection === "team" ? "active" : ""}`}
            onClick={() => handleScroll(scrollToSection.team, "team")}
          >
            Team
          </div>
          <div className="navbar-option" onClick={() => navigate("/globe")}>
            Gallery
          </div>
      
          <div
            className={`navbar-option ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => handleScroll(scrollToSection.contact, "contact")}
            title="Reach out to us"
          >
            
            <span>Get in Touch</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
