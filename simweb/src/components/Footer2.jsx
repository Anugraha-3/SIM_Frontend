import React from "react";
import "../styles/Footer2.css";

const Footer2 = () => {
  return (
    <div className="footer2">
      <div className="footer2-content">
        <p className="footer2-text">Connect with us at ease.</p>

        <div className="footer2-container">
          {/* Office Info */}
          <div className="office-info">
            <h3>Office Details</h3>
            <p>
              <strong>Origin Address:</strong> 309, Dr. Rajendra Prasad Road, Tatabad, CBE - 641 012, TN, India
            </p>
            <p>
              <strong>Phone:</strong> +91 77880 03366
            </p>
            <p>
              <strong>Email:</strong> admin@sunnetwork.info
            </p>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.26118714513!2d76.95398617536273!3d11.019019789144869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858fb882cbae7%3A0xdbef65f44b38f8ed!2sSun%20Info%20Media!5e0!3m2!1sen!2sin!4v1744035696065!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                title="Office Map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="card enhanced-social-card">
            <div className="background"></div>

            {/* Instagram */}
            <div className="box box1">
              <div className="icon" title="SIM Instagram">
                <svg className="svg" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Zm5.25-.25a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0V8.5a.75.75 0 0 1 .75-.75Z"/>
                </svg>
              </div>
            </div>

            {/* Twitter */}
            <div className="box box2">
              <div className="icon" title="SIM Twitter">
                <svg className="svg" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.26 4.26 0 0 0 1.88-2.35a8.39 8.39 0 0 1-2.7 1.03a4.22 4.22 0 0 0-7.2 3.84a11.97 11.97 0 0 1-8.7-4.41a4.22 4.22 0 0 0 1.3 5.63a4.21 4.21 0 0 1-1.91-.53v.05a4.22 4.22 0 0 0 3.38 4.13a4.24 4.24 0 0 1-1.9.07a4.22 4.22 0 0 0 3.95 2.93A8.46 8.46 0 0 1 2 19.54A11.93 11.93 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68c0-.18 0-.36-.01-.54A8.35 8.35 0 0 0 22.46 6Z"/>
                </svg>
              </div>
            </div>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/suninfomedia/" target="_blank" rel="noopener noreferrer">
              <div className="box box3">
                <div className="icon" title="SIM LinkedIn">
                  <svg className="svg" viewBox="0 0 24 24">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5v15H0V8.5zm7.5 0h4.47v2.1h.06c.62-1.17 2.14-2.4 4.41-2.4c4.72 0 5.6 3.1 5.6 7.13V24h-5v-6.35c0-1.51-.03-3.45-2.1-3.45c-2.1 0-2.42 1.64-2.42 3.33V24h-5V8.5z" />
                  </svg>
                </div>
              </div>
            </a>

            {/* SIM Logo */}
            {/* <div className="logo">
              <svg className="logo-svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="white" />
                <text x="12" y="16" textAnchor="middle" fontSize="8" fill="black" fontFamily="monospace">SIM</text>
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
