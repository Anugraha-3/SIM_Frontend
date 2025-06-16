import React from "react";

export default function About() {
  return (
    <section className="font-primary relative overflow-hidden bg-black text-white p-12 md:p-8 rounded-[14px] max-w-[1400px] mx-auto ml-8 border-2 border-transparent animate-slideIn before:absolute before:inset-0 before:z-[-1] before:rounded-[14px] before:p-[2px] before:bg-[linear-gradient(135deg,_#ff0000,_#8b5cf6,_#3b82f6)] before:bg-[length:400%_400%] before:animate-borderGlow">

      <h2 className="font-accent text-[2.2rem] font-extrabold mb-5 text-left inline-block relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[linear-gradient(90deg,_#ef4444,_#8b5cf6)] after:rounded-[10px] after:animate-underlineGlow">
        <span className="text-neutral-700">01</span> ABOUT US
      </h2>

      <p className="text-[1.15rem] leading-[1.9] font-normal text-left transition-all duration-300 ease-in-out">
        At <span className="text-[#ef4444] font-bold drop-shadow-[0_0_5px_#ef444488]">SUN</span> INFO{" "}
        <span className="text-[#8b5cf6] font-bold drop-shadow-[0_0_5px_#8b5cf690]">MEDIA</span>, we are more than just a business.
        <br />
        We are the{" "}
        <span className="font-semibold italic text-[#3b82f6] drop-shadow-[0_0_10px_#3b82f655]">
          architects of imagination
        </span>
        , the{" "}
        <span className="font-semibold italic text-[#3b82f6] drop-shadow-[0_0_10px_#3b82f655]">
          curators of innovation
        </span>
        , and the{" "}
        <span className="font-semibold italic text-[#3b82f6] drop-shadow-[0_0_10px_#3b82f655]">
          pioneers of cutting-edge experiences
        </span>
        .
        <br />
        Our passion lies in blending{" "}
        <span className="font-semibold italic text-[#3b82f6] drop-shadow-[0_0_10px_#3b82f655]">creativity</span> with{" "}
        <span className="font-semibold italic text-[#3b82f6] drop-shadow-[0_0_10px_#3b82f655]">technology</span> to create awe-inspiring
        solutions that captivate audiences.
        <br />
        Unlocking the future through{" "}
        <span className="font-semibold italic text-[#3b82f6] drop-shadow-[0_0_10px_#3b82f655]">innovation</span>, we redefine reality — from{" "}
        <span className="font-semibold italic text-[#3b82f6] drop-shadow-[0_0_10px_#3b82f655]">holographic displays</span> to{" "}
        <span className="font-semibold italic text-[#3b82f6] drop-shadow-[0_0_10px_#3b82f655]">immersive simulators</span>.
        <br />
        <br />
        <br />
        <a
          href="/keerthi"
          className="group inline-flex items-center gap-3 text-[#8b5cf6] font-semibold hover:text-white transition-all duration-500 relative"
        >
          <span className="relative">
            Meet Our Visionary Founder
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-red-500 group-hover:w-full transition-all duration-500"></span>
          </span>
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-red-500/20 border border-purple-500/30 group-hover:border-purple-500/60 group-hover:bg-gradient-to-r group-hover:from-purple-500/40 group-hover:to-red-500/40 transition-all duration-500">
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </a>
      </p>
    </section>
  );
}