import React, { useState } from 'react';
import ContactModal from './Contact';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <style jsx>{`
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(168, 85, 247, 0.4), 0 0 40px rgba(239, 68, 68, 0.3), inset 0 0 20px rgba(168, 85, 247, 0.2); }
          50% { box-shadow: 0 0 30px rgba(168, 85, 247, 0.6), 0 0 60px rgba(239, 68, 68, 0.5), inset 0 0 30px rgba(168, 85, 247, 0.3); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes subtle-glow {
          0%, 100% { box-shadow: 0 4px 15px rgba(168, 85, 247, 0.2); }
          50% { box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-glow-pulse { animation: glow-pulse 2s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-subtle-glow { animation: subtle-glow 3s ease-in-out infinite; }
        .animate-gradient-shift { animation: gradient-shift 3s ease-in-out infinite; }
      `}</style>

      <footer className="relative w-full max-w-[1420px] mx-auto mb-0 overflow-hidden bg-black text-white text-center rounded-[30px] font-sans min-h-[600px]">
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
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-left text-shadow-md">
            Have an idea? <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-float">
              Let's talk.
            </span>
          </h2>

          <p className="mt-4 text-lg text-gray-300 max-w-xl text-left text-shadow-sm">
            We create solutions that are bold and forward-looking.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="relative mt-10 px-8 py-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 text-white font-bold text-lg transition-all duration-500 ease-out hover:bg-gradient-to-r hover:from-red-500/10 hover:via-purple-500/10 hover:to-blue-500/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-1 group overflow-hidden"
          >
            {/* Subtle background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg background-size-200 animate-gradient-shift"></div>
            
            {/* Clean border enhancement */}
            <div className="absolute inset-0 rounded-lg border border-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Button text with subtle enhancement */}
            <span className="relative z-10 transition-all duration-300 group-hover:text-white/95">
              Free Consultation
            </span>
            
            {/* Minimal outer glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-purple-500/20 to-blue-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-60 transition-all duration-500 -z-10"></div>
          </button>
        </div>
      </footer>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
}