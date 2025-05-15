import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/About.css";

export default function About() {
  return (
    <section className="about-section">
      <h2 className="about-title"><span className="numbe">01</span> ABOUT US</h2>
      <p className="about-text">
        At <span className="sun">SUN</span> INFO <span className="media">MEDIA</span>, we are more than just a business.
        <br />
        We are the <span className="highlight">architects of imagination</span>, the <span className="highlight">curators of innovation</span>, and
        the <span className="highlight">pioneers of cutting-edge experiences</span>.
        <br />
        Our passion lies in blending <span className="highlight">creativity</span> with <span className="highlight">technology</span> to create awe-inspiring
        solutions that captivate audiences.
        <br />
        Unlocking the future through <span className="highlight">innovation</span>, we redefine reality — 
        from <span className="highlight">holographic displays</span> to <span className="highlight">immersive simulators</span>.
        <br />
        <br />
        <br />
        <Link to="/keerthi" className="know-more-link">
          Know More About our Founder - Keerthi Varman 🔗
        </Link>
      </p>
    </section>
  );
}
