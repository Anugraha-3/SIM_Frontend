import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="font-primary relative overflow-hidden bg-black text-white p-12 md:p-8 rounded-[14px] max-w-[1400px] mx-auto ml-8 border-2 border-transparent animate-slideIn before:absolute before:inset-0 before:z-[-1] before:rounded-[14px] before:p-[2px] before:bg-[linear-gradient(135deg,_#00f7ff,_#a000ff,_#00f7ff)] before:bg-[length:400%_400%] before:animate-borderGlow">
      
      <h2 className="font-accent text-[2.2rem] font-extrabold mb-5 text-left inline-block relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[linear-gradient(90deg,_#ff00cc,_#3333ff)] after:rounded-[10px] after:animate-underlineGlow">
        <span className="text-neutral-700">01</span> ABOUT US
      </h2>

      <p className="text-[1.15rem] leading-[1.9] font-normal text-left transition-all duration-300 ease-in-out">
        At <span className="text-[#ff5e00] font-bold drop-shadow-[0_0_5px_#ff3b3b88]">SUN</span> INFO{" "}
        <span className="text-[#00ff1e] font-bold drop-shadow-[0_0_5px_#00ff9088]">MEDIA</span>, we are more than just a business.
        <br />
        We are the{" "}
        <span className="font-semibold italic text-[#00c8ff] drop-shadow-[0_0_10px_#00c8ff55]">
          architects of imagination
        </span>
        , the{" "}
        <span className="font-semibold italic text-[#00c8ff] drop-shadow-[0_0_10px_#00c8ff55]">
          curators of innovation
        </span>
        , and the{" "}
        <span className="font-semibold italic text-[#00c8ff] drop-shadow-[0_0_10px_#00c8ff55]">
          pioneers of cutting-edge experiences
        </span>
        .
        <br />
        Our passion lies in blending{" "}
        <span className="font-semibold italic text-[#00c8ff] drop-shadow-[0_0_10px_#00c8ff55]">creativity</span> with{" "}
        <span className="font-semibold italic text-[#00c8ff] drop-shadow-[0_0_10px_#00c8ff55]">technology</span> to create awe-inspiring
        solutions that captivate audiences.
        <br />
        Unlocking the future through{" "}
        <span className="font-semibold italic text-[#00c8ff] drop-shadow-[0_0_10px_#00c8ff55]">innovation</span>, we redefine reality — from{" "}
        <span className="font-semibold italic text-[#00c8ff] drop-shadow-[0_0_10px_#00c8ff55]">holographic displays</span> to{" "}
        <span className="font-semibold italic text-[#00c8ff] drop-shadow-[0_0_10px_#00c8ff55]">immersive simulators</span>.
        <br />
        <br />
        <br />
        <Link
          to="/keerthi"
          className="text-[#6e00c8] font-bold underline hover:text-[#0c39dc] transition-colors duration-300"
        >
          Know More About our Founder - Keerthi Varman 🔗
        </Link>
      </p>
    </section>
  );
}
