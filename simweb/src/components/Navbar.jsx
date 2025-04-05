import { FaPaperclip, FaCalendarAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/sim_logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container">
    <div className="navbar-left">
      <div className="logo-box">
       <img src={logo} alt="SIM Logo" className="navbar-logo" />
       <span className="navbar-title">SUN INFO MEDIA</span>
      </div>
    </div>

      <div className="navbar-center">
        <div className="navbar-option">Projects</div>
        <div className="navbar-option">About</div>
        <div className="navbar-option">Team</div>
        <div className="navbar-option">Contact</div>
      </div>
  
      <div className="navbar-right">

        <div className="navbar-option">
          <FaPaperclip className="icon" />
          <span>Services</span>
        </div>
        <div style={{ width: "15px" }}></div> 
        <div className="navbar-option">
          <FaCalendarAlt className="icon" />
          <span>Get in Touch</span>
        </div>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
