import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/sim_logo.png";
import RobotViewer from "./RobotViewer";
import RobotChat from "../pages/RobotChat"; // Import the chat overlay

const Navbar = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showRobotChat, setShowRobotChat] = useState(false); // Modal state
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const normalize = (str) => str.toLowerCase().replace(/\s/g, "");

  const handleScroll = (ref, sectionName) => {
    setMenuOpen(false);
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setActiveSection(normalize(sectionName));
    }
  };

  useEffect(() => {
    const sectionRefs = Object.entries(scrollToSection);
    const observer = new window.IntersectionObserver(
      (entries) => {
        // Sort entries by intersection ratio descending
        const visible = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const name = sectionRefs.find(([, ref]) => ref.current === visible[0].target)?.[0];
          if (name) setActiveSection(normalize(name));
        }
      },
      { threshold: 0.6 }
    );

    sectionRefs.forEach(([, ref]) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, [scrollToSection]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
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
          <div
            className={`flex flex-col md:flex-row items-center gap-6 absolute md:static top-[70px] left-0 right-0 bg-black/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none p-5 md:p-0 rounded-b-2xl transform transition-transform origin-top ${
              menuOpen ? "scale-y-100" : "scale-y-0"
            } md:scale-y-100 overflow-hidden md:overflow-visible`}
            style={{ transitionProperty: "transform", zIndex: 100 }}
          >
            {[
              { name: "About", ref: scrollToSection.about },
              { name: "Services", ref: scrollToSection.services },
              { name: "Team", ref: scrollToSection.team },
              { name: "Get in Touch", ref: scrollToSection.contact },
            ].map(({ name, ref }) => (
              <div
                key={name}
                className={`relative cursor-pointer transition-all text-white font-medium px-2 py-1 rounded-md hover:text-blue-400 ${
                  activeSection === normalize(name) ? "text-blue-400" : ""
                }`}
                onClick={() => handleScroll(ref, name)}
              >
                {name}
                <span
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] bg-blue-500 rounded transition-all duration-300 ${
                    activeSection === normalize(name) ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}

            {/* Static Gallery Link */}
            <div
              className="relative cursor-pointer transition-all text-white font-medium px-2 py-1 rounded-md hover:text-blue-400"
              onClick={() => navigate("/globe")}
            >
              Gallery
            </div>

            {/* Robot Viewer Inline (Desktop only) */}
            <div
              className="hidden md:flex items-center ml-2 cursor-pointer"
              style={{ width: 80, height: 60 }}
              onClick={() => setShowRobotChat(true)}
              title="Open Dog Chat"
            >
              <RobotViewer
                key={isDesktop ? "desktop" : "mobile"}
                width="80px"
                height="60px"
                position={[0, -0.3, 1.2]}
                rotation={[0, -Math.PI / 2 + 0.4, 0]}
                scale={0.4}
              />
            </div>

            {/* DODDY AI Button (Mobile only) */}
            <button
              className="flex md:hidden items-center gap-2 text-white font-bold px-4 py-2 rounded-lg shadow transition-all duration-200"
              style={{
                minWidth: 100,
                background: "linear-gradient(90deg, #00C6FB 0%, #005BEA 100%)"
              }}
              onClick={() => setShowRobotChat(true)}
            >
              DODDY AI
            </button>
          </div>
        </div>
      </nav>
      {showRobotChat && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black bg-opacity-60" style={{ backdropFilter: 'blur(4px)' }}>
          <div className="relative w-[99vw] max-w-[1600px] h-[92vh] flex items-center justify-center">
            {/* Close button moved to RobotChat */}
            <RobotChat onClose={() => setShowRobotChat(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
