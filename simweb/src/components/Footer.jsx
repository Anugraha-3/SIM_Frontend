import React, { useState } from 'react';
import ContactModal from './Contact';
import '../styles/Footer.css';

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="video-wrapper">
          <video
            className="background-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/space-animation.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"></div>
        </div>

        <div className="footer-content">
          <h2 className="footer-heading">
            Have an idea? <br className="hide-on-mobile" />
            <span>Let’s talk.</span>
          </h2>
          <p className="footer-subtext">
            We create solutions that are bold and forward-looking.
          </p>
          <button
            className="footer-button"
            onClick={() => setShowModal(true)}
          >
            Free Consultation
          </button>
        </div>
      </footer>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </>
  );
}
