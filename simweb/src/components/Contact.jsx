import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

    emailjs.send(
      'service_0dau8g6',
      'template_v5lgcsv',
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        idea: formData.idea
      },
      'wlVTM9FNjKuFlA4YQ'
    )
    .then(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 2500);
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => {
        setStatus('idle');
      }, 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn overflow-hidden font-primary">
      {/* Stars Background */}
      <div className="absolute w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-repeat opacity-30 animate-starsMove z-0"></div>

      {/* Modal */}
      <div className="relative w-[90%] max-w-lg p-10 bg-gradient-to-br from-[#0a0a0f] to-[#13131a] rounded-xl text-white shadow-[0_0_20px_rgba(150,150,255,0.1)] z-10 animate-slideUp">
        <button onClick={onClose} className="absolute top-3 right-4 text-2xl text-gray-400 hover:text-white transition">&#10005;</button>

        {status === 'loading' && (
          <div className="text-center py-8 text-gray-300">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto animate-spin" />
            <p className="mt-4">Sending your message into the stars...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="text-center py-8 text-green-300 animate-pulse">
            <div className="w-10 h-10 rounded-full mx-auto bg-gradient-to-br from-[#7f5eff] to-[#5e7fff] animate-burstGlow" />
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
            <h2 className="text-2xl font-semibold mb-2 font-accent">Let's Get In Touch</h2>
            <p className="text-sm text-gray-400 mb-6">Fill out your info below and we’ll reach out to you.</p>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="bg-[#1e1e2a] border border-[#333] text-white p-3 rounded-md text-sm focus:border-[#5e7fff] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="bg-[#1e1e2a] border border-[#333] text-white p-3 rounded-md text-sm focus:border-[#5e7fff] focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="bg-[#1e1e2a] border border-[#333] text-white p-3 rounded-md text-sm focus:border-[#5e7fff] focus:outline-none"
              />
              <textarea
                name="idea"
                placeholder="What's your idea?"
                rows="4"
                onChange={handleChange}
                className="bg-[#1e1e2a] border border-[#333] text-white p-3 rounded-md text-sm focus:border-[#5e7fff] focus:outline-none"
              ></textarea>
              <button type="submit" className="bg-gradient-to-r from-[#5e7fff] to-[#7f5eff] text-white p-3 rounded-md font-medium hover:scale-[1.03] transition-transform">
                Submit Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
