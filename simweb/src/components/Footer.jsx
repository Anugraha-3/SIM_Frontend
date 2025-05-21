import React, { useState } from 'react';
import ContactModal from './Contact';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="relative w-full max-w-[1420px] mx-auto mb-0 overflow-hidden bg-black text-white text-center rounded-[30px] font-inter min-h-[600px]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/space-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-30" />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-start justify-center px-6 py-24 md:px-20">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight font-domine text-left text-shadow-md">
            Have an idea? <br className="hidden md:inline" />
            <span className="text-blue-300">Let’s talk.</span>
          </h2>

          <p className="mt-4 text-lg text-gray-200 max-w-xl text-left text-shadow-sm">
            We create solutions that are bold and forward-looking.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="relative mt-10 border-[0.25em] border-blue-400 px-10 py-3 text-blue-400 font-bold text-sm rounded-xl bg-[#0a192f] shadow-[0_0_1em_0.25em_rgb(100,149,237),0_0_4em_1em_rgba(25,100,200,0.75),inset_0_0_0.75em_0.25em_rgb(100,149,237)] text-shadow-sm transition-all duration-300 hover:text-[#0a192f] hover:bg-blue-400 hover:shadow-[0_0_1em_0.25em_rgb(100,149,237),0_0_4em_2em_rgba(25,100,200,0.75),inset_0_0_0.75em_0.25em_rgb(100,149,237)] active:shadow-[0_0_0.6em_0.25em_rgb(100,149,237),0_0_2.5em_2em_rgba(25,100,200,0.75),inset_0_0_0.5em_0.25em_rgb(100,149,237)]"
          >
            Free Consultation
            <span className="pointer-events-none absolute top-[120%] left-0 h-full w-full bg-[rgba(25,100,200,0.75)] blur-[2em] opacity-70 scale-y-[0.6] rotate-x-[35deg] perspective-[1.5em]" />
          </button>
        </div>
      </footer>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
}
