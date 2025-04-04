import { FaPaperclip, FaCalendarAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import logo from "../assets/sim_logo.png";

const Navbar = () => {
  return (
    <nav className="w-full flex flex-col items-center bg-black py-4">
      {/* Navbar Container */}
      <div className="w-[90%] max-w-[1300px] flex items-center justify-between border border-gray-600 rounded-2xl px-6 py-3">
        {/* Left - Logo & Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="SIM Logo" className="w-12 h-auto" />
          <span className="text-white text-lg font-semibold">SUN INFO MEDIA</span>
        </div>

        {/* Center - Links */}
        <ul className="hidden md:flex gap-10 text-white text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-400">Projects</li>
          <li className="cursor-pointer hover:text-gray-400">About</li>
          <li className="cursor-pointer hover:text-gray-400">Team</li>
          <li className="cursor-pointer hover:text-gray-400">Contact</li>
        </ul>

        {/* Right - Hamburger Menu */}
        <div className="text-white text-2xl cursor-pointer md:hidden">
          <HiMenu />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-[90%] max-w-[1300px] flex items-center justify-between border border-gray-600 rounded-2xl mt-4">
        {/* Left - Services */}
        <div className="w-1/2 flex items-center justify-center gap-2 text-white py-3 border-r border-gray-600">
          <FaPaperclip className="text-lg" />
          <span className="text-sm">Services</span>
        </div>

        {/* Right - Get in Touch */}
        <div className="w-1/2 flex items-center justify-center gap-2 text-white py-3">
          <FaCalendarAlt className="text-lg" />
          <span className="text-sm">Get in touch</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
