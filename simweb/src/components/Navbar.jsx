import { FaPaperclip, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/sim_logo.png";
import "../styles/Navbar.css";

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();

  const handleScroll = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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

        {/* Center: Nav Links */}
        <div className="navbar-center">
          <div className="navbar-option" onClick={() => handleScroll(scrollToSection.services)}>
            Services
          </div>
          <div className="navbar-option" onClick={() => handleScroll(scrollToSection.about)}>
            About
          </div>
          <div className="navbar-option" onClick={() => handleScroll(scrollToSection.team)}>
            Team
          </div>
          <div className="navbar-option" onClick={() => handleScroll(scrollToSection.contact)}>
            Contact
          </div>
          <div className="navbar-option" onClick={() => navigate("/globe")}>
            Gallery
          </div>
        </div>

        {/* Right: Icon Buttons */}
        <div className="navbar-right">
          <div className="navbar-option" onClick={() => handleScroll(scrollToSection.services)}>
            <FaPaperclip className="icon" />
            <span>Services</span>
          </div>
          <div style={{ width: "15px" }}></div>
          <div className="navbar-option" onClick={() => handleScroll(scrollToSection.contact)}>
            <FaCalendarAlt className="icon" />
            <span>Get in Touch</span>
          </div>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
