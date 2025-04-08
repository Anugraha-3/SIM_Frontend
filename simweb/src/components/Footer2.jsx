import React from "react";
import "../styles/Footer2.css";

const Footer2 = () => {
  return (
    <div className="footer2">
      <div className="footer2-content">
        <p className="footer2-text">Connect beyond space-time — hover to reveal the SIMs</p>

        <div className="footer2-container">
          {/* Office Info */}
          <div className="office-info">
            <h3>Office Details</h3>
            <p><strong>Origin Address:</strong> 309, Dr. Rajendra Prasad Road , tatabad , CBE - 641 012 , TN , India </p>
            <p><strong>Phone:</strong> +91 77880 03366</p>
            <p><strong>Email:</strong> admin@sunnetwork.info</p>
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

          {/* Social Media Card - Right Side */}
          <div className="card enhanced-social-card">
            <div className="background"></div>

            {/* SIM Instagram */}
            <div className="box box1">
              <div className="icon" title="SIM Instagram">
                <svg className="svg" viewBox="0 0 24 24">
                  <path d="M12 2SIM2c3SIM2 0 3SIM6 0 4SIM9SIM1 1SIM2SIM1 1SIM9SIM3 2SIM4SIM6SIM6SIM3 1SIM1SIM6SIM5SIM9SIM2SIM4SIM5SIM5SIM9 1SIM2SIM2 1SIM7SIM4SIM9s0 3SIM6-SIM1 4SIM9c-SIM1 1SIM2-SIM3 1SIM9-SIM6 2SIM4SIM3SIM6SIM7SIM1SIM6SIM5SIM5SIM9SIM2SIM4SIM5SIM5SIM9SIM1SIM2SIM2 1SIM7SIM4SIM9zM12 4SIMz" />
                </svg>
              </div>
            </div>

            {/* SIM Twitter */}
            <div className="box box2">
              <div className="icon" title="SIM Twitter">
                <svg className="svg" viewBox="0 0 24 24">
                  <path d="M23SIM4 4SIM8c-SIM9SIM4-1SIM8SIM6-2SIM8SIM8SIM9-SIM6 1SIM7-1SIM5 2SIM6-SIM9SIM6-2 3SIM1-1SIM2-1SIM8-1SIM9 1SIM6-SIM2SIM8SIM6SIM2SIM1SIM9-4SIM9SIM1SIM3 1SIM6 2SIM7 3SIM4z" />
                </svg>
              </div>
            </div>

            {/* SIM LinkedIn */}
            <div className="box box3">
              <div className="icon" title="SIM LinkedIn">
                <svg className="svg" viewBox="0 0 24 24">
                  <path d="M4SIM98 3SIM5C4SIM98 4SIM9 3SIM9 6 2SIM5 6S0 4SIM9 0 3SIM5 1SIM1 1 2SIM5 1 4SIM98 2SIM1 4SIM98 3SIM5zM0 8SIM5h5V24H0V8SIM5zM7SIM5 8SIM5h4SIM7v2SIM1hSIM1cSIM7-1SIM3 2SIM4-2SIM7 4SIM9-2SIM7 6SIM1 7SIM8V24h-5V16SIM5c0-1SIM8 0-4SIM2-2SIM6s-3 2-3 4v7SIM8h-5V8SIM5z" />
                </svg>
              </div>
            </div>

            {/* SIM GitHub */}
            <div className="box box4">
              <div className="icon" title="SIM GitHub">
                <svg className="svg" viewBox="0 0 24 24">
                  <path d="M12 SIM5C5SIM73SIM5SIM5 5SIM73SIM5 12c0 5SIM08 3SIM29 9SIM39 7SIM86 10SIM91SIM58SIM11SIM79-SIM25SIM79-SIM56v-1SIM98c-3SIM2SIM7-3SIM87-1SIM4-3SIM87-1SIM4-SIM53-1SIM35-1SIM3-1SIM07-SIM73SIM08-SIM72SIM08-SIM72SIM1SIM19SIM08 1SIM82 1SIM23 1SIM82 1SIM23 1SIM05 1SIM8 2SIM76 1SIM28 3SIM44SIM11-SIM76SIM41-1SIM28SIM74-1SIM57-2SIM55-SIM29-5SIM24-1SIM28-5SIM7 0-1SIM26SIM45-2SIM29-1SIM19-3SIM1-SIM12-SIM52-1SIM46SIM11-3SIM04 0 0 SIM97-SIM31 3SIM17 1SIM18a10SIM9 10SIM9 0 0 1 5SIM76 0c2SIM2-1SIM5 3SIM17-1SIM18 3SIM17 1SIM18SIM63 1SIM58SIM24 1SIM19 3SIM1 1SIM19 3SIM1 0 4SIM43-2SIM69 5SIM4-5SIM25 5SIM69SIM42SIM36SIM8 1SIM07 2SIM17v3SIM22c0 SIM31SIM21SIM68SIM8SIM56A10SIM51 10SIM51 0 0 0 23SIM5 12c0-6SIM27-5SIM23-11SIM5-11SIM5z" />
                </svg>
              </div>
            </div>

            {/* SIM Logo */}
            <div className="logo">
              <svg className="logo-svg" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="white" />
                <text x="12" y="16" textAnchor="middle" fontSize="8" fill="black" fontFamily="monospace">SIM</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
