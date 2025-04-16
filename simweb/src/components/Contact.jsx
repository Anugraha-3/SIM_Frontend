import React, { useState } from 'react';
import '../styles/ContactModal.css';
import emailjs from 'emailjs-com';

export default function ContactModal({ onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idea: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    emailjs.send(
      'service_0dau8g6',          // Replace with your EmailJS service ID
      'template_v5lgcsv',         // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        idea: formData.idea
      },
      'wlVTM9FNjKuFlA4YQ'         // Replace with your EmailJS public key
    )
    .then(() => {
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        onClose(); // Close modal after success
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
    <div className="modal-overlay">
      {/* Comet trails */}
      {/* <div className="comet" />
      <div className="comet" />
      <div className="comet" /> */}

      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✕</button>

        {status === 'loading' && (
          <div className="feedback-animation galaxy-loader">
            <div className="orbit-ring"></div>
            <p>Sending your message into the stars...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="feedback-animation success-glow">
            <div className="burst"></div>
            <p>Message delivered successfully!</p>
          </div>
        )}

        {status === 'error' && (
          <div className="feedback-animation error-shatter">
            <div className="crack"></div>
            <p>Oops, something went wrong!</p>
          </div>
        )}

        {status === 'idle' && (
          <>
            <h2 className="modal-title">Let's Get In Touch</h2>
            <p className="modal-subtitle">Fill out your info below and we’ll reach out to you.</p>
            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
              />
              <textarea
                name="idea"
                placeholder="What's your idea?"
                rows="4"
                onChange={handleChange}
              ></textarea>
              <button type="submit">Submit Request</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
