import React from "react";
import { motion } from "framer-motion";
import "../styles/keerthi.css";
import keerthiImg from "../assets/keerthivarman.png";

const timeline = [
  { year: "2009", text: "Co-founded SIM" },
  { year: "2014", text: "Launched SIM TV" },
  { year: "2016", text: "Started telecom services" },
  { year: "2018", text: "Founded election management company" },
  { year: "2020", text: "Developed all-kind vehicular simulators" },
  { year: "2021", text: "Launched Astro photography company" },
  {
    year: "2022",
    text: "Ventured into Holograms, Holobox, Future Car, VR/AR/MR, AI-based Agri & Medical",
  },
  { year: "2023", text: "Started SIM Tech Holding Company" },
  { year: "2024", text: "Entered Space Tech, Drone Tech, Flying Cars (R&D)" },
  { year: "2025", text: "Launched C99 Conceptual Trading Business" },
];

export default function KeerthiProfile() {
  return (
    <div className="elon-container">
      <motion.div
        className="elon-image-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={keerthiImg} alt="Keerthi Varman" className="elon-image" />
      </motion.div>

      <motion.div
        className="elon-text-section"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="elon-name glow">Keerthi Varman</h1>
        <h2 className="elon-title">Founder & Visionary, SIM Group</h2>
        <p className="elon-bio">
          A trailblazer of the tech frontier, Keerthi Varman has carved a legacy
          that spans industries and imaginations. From co-founding SIM in 2009
          to entering space tech and conceptual trading in 2025, his journey is
          marked not just by innovation—but by vision.
        </p>

        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
