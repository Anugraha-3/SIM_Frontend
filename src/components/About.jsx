import React from "react";

export default function About() {
  return (
    <section 
      id="about"
      data-section="about"
      className="font-primary relative overflow-hidden bg-black text-white p-6 md:p-12 rounded-[14px] max-w-[1400px] mx-auto my-12 border-2 border-transparent animate-slideIn before:absolute before:inset-0 before:z-[-1] before:rounded-[14px] before:p-[2px] before:bg-[linear-gradient(135deg,_#ff0000,_#8b5cf6,_#3b82f6)] before:bg-[length:400%_400%] before:animate-borderGlow"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        

        {/* Text Content Section */}
        <div className="w-full lg:w-3/5">
          <h2 className="font-accent text-2xl md:text-4xl font-extrabold mb-5 text-left inline-block relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[linear-gradient(90deg,_#ef4444,_#8b5cf6)] after:rounded-[10px] after:animate-underlineGlow">
            <span className="text-neutral-700 text-xl md:text-2xl">01</span> ABOUT US
          </h2>

          <p className="text-base md:text-lg leading-relaxed font-normal text-left transition-all duration-300 ease-in-out mb-8">
            At <span className="text-[#ef4444] font-bold drop-shadow-[0_0_5px_#ef444488]">SUN</span> INFO{" "}
            <span className="text-[#8b5cf6] font-bold drop-shadow-[0_0_5px_#8b5cf690]">MEDIA</span>, we are the{" "}
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
            . Our passion lies in blending creativity with technology to create awe-inspiring
            solutions that captivate audiences, from holographic displays to immersive simulators.
          </p>

          <a
            href="/keerthi"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-red-500 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105"
          >
            <span className="absolute inset-0 w-full h-full bg-black opacity-40 group-hover:opacity-20 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-3">
              Meet Our Visionary Founder
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}