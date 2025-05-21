import { FaPaperclip, FaCalendarAlt, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/sim_logo.png";

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (ref, sectionName) => {
    setMenuOpen(false);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionName);
    }
  };

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
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1400px] bg-black/75 backdrop-blur-lg rounded-2xl px-6 py-3 shadow-xl z-[1000] transition-all duration-300">
      <div className="flex justify-between items-center w-full font-primary text-white">
        {/* Left Logo */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center bg-black p-1 rounded-md hover:shadow-[0_0_15px_#0396ff] transition-shadow">
            <img src={logo} alt="SIM Logo" className="w-[70px] h-[50px] object-contain rounded-md" />
            <span className="text-[9px] font-bold tracking-wider font-accent">SUN INFO MEDIA</span>
          </div>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden text-xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Links */}
        <div className={`flex flex-col md:flex-row items-center gap-6 absolute md:static top-[70px] left-0 right-0 bg-black/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none p-5 md:p-0 rounded-b-2xl transform transition-transform origin-top ${menuOpen ? "scale-y-100" : "scale-y-0"} md:scale-y-100`}>
          {[
            { name: "About", ref: scrollToSection.about },
            { name: "Services", ref: scrollToSection.services },
            { name: "Team", ref: scrollToSection.team },
            { name: "Get in Touch", ref: scrollToSection.contact },
          ].map(({ name, ref }) => (
            <div
              key={name}
              className={`relative cursor-pointer transition-all text-white font-medium px-2 py-1 rounded-md hover:text-shadow-md hover:text-blue-400 ${
                activeSection.toLowerCase() === name.toLowerCase().replace(" ", "") ? "text-blue-400" : ""
              }`}
              onClick={() => handleScroll(ref, name.toLowerCase().replace(" ", ""))}
            >
              {name}
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-blue-500 rounded transition-all duration-300 ${
                  activeSection.toLowerCase() === name.toLowerCase().replace(" ", "") ? "w-full" : "w-0"
                }`}
              />
            </div>
          ))}

          {/* Static Gallery Link */}
          <div
            className="relative cursor-pointer transition-all text-white font-medium px-2 py-1 rounded-md hover:text-shadow-md hover:text-blue-400"
            onClick={() => navigate("/globe")}
          >
            Gallery
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
