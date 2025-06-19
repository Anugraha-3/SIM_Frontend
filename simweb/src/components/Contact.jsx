import React, { useState } from 'react';

export default function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idea: ''
  });

  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    // Simulating email sending for demo
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        if (onClose) onClose();
      }, 2500);
    }, 2000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes starsMove {
          from { transform: translateX(0) translateY(0); }
          to { transform: translateX(-50px) translateY(-50px); }
        }
        @keyframes burstGlow {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(168, 85, 247, 0.5); }
          50% { transform: scale(1.1); box-shadow: 0 0 30px rgba(168, 85, 247, 0.8); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-slideUp { animation: slideUp 0.4s ease-out; }
        .animate-starsMove { animation: starsMove 200s linear infinite; }
        .animate-burstGlow { animation: burstGlow 2s ease-in-out infinite; }
      `}</style>
      
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn overflow-hidden font-sans">
        {/* Stars Background */}
        <div className="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-30 animate-starsMove z-0"></div>

        {/* Modal */}
        <div className="relative w-[90%] max-w-lg p-10 bg-black/80 border border-white/20 backdrop-blur-md rounded-xl text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] z-10 animate-slideUp">
          <button 
            onClick={onClose} 
            className="absolute top-3 right-4 text-2xl text-gray-300 hover:text-white transition-colors hover:scale-110"
          >
            &#10005;
          </button>

          {status === 'loading' && (
            <div className="text-center py-8 text-gray-300">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full mx-auto animate-spin" />
              <p className="mt-4">Sending your message into the stars...</p>
            </div>
          )}

          {status === 'success' && (
            <div className="text-center py-8 text-green-300 animate-pulse">
              <div className="w-10 h-10 rounded-full mx-auto bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-burstGlow" />
              <p className="mt-4">Message delivered successfully!</p>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center py-8 text-red-300 animate-fadeIn">
              <div className="w-12 h-12 mx-auto bg-[url('/glass.png')] bg-cover" />
              <p className="mt-4">Oops, something went wrong!</p>
            </div>
          )}

          {status === 'idle' && (
            <>
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Let's Get In Touch
              </h2>
              <p className="text-sm text-gray-300 mb-6">Fill out your info below and we'll reach out to you.</p>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white p-3 rounded-md text-sm focus:border-purple-500 focus:outline-none focus:bg-white/10 transition-all backdrop-blur-sm hover:border-white/20"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white p-3 rounded-md text-sm focus:border-purple-500 focus:outline-none focus:bg-white/10 transition-all backdrop-blur-sm hover:border-white/20"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white p-3 rounded-md text-sm focus:border-purple-500 focus:outline-none focus:bg-white/10 transition-all backdrop-blur-sm hover:border-white/20"
                />
                <textarea
                  name="idea"
                  placeholder="What's your idea?"
                  rows="4"
                  onChange={handleChange}
                  className="bg-white/5 border border-white/10 text-white p-3 rounded-md text-sm focus:border-purple-500 focus:outline-none focus:bg-white/10 transition-all backdrop-blur-sm hover:border-white/20 resize-none"
                ></textarea>
                <button 
                  type="submit" 
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white p-3 rounded-md font-bold hover:scale-105 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                >
                  Submit Request
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}