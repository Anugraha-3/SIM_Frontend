import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";
import "./keerthi.css";
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
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <motion.div
          className="elon-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="back-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
          >
            ← Back to Home
          </motion.div>

          <motion.div
            className="elon-image-section"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
            <motion.img
              src={keerthiImg}
              alt="Keerthi Varman"
              className="elon-image"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 150 }}
            />
          </motion.div>

          <motion.div
            className="elon-text-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            <motion.h1 className="elon-name glow">Keerthi Varman</motion.h1>
            <motion.h2 className="elon-title">Founder & Visionary, SIM Group</motion.h2>
            <motion.p className="elon-bio">
              A trailblazer of the tech frontier, Keerthi Varman has carved a legacy
              that spans industries and imaginations. From co-founding SIM in 2009
              to entering space tech and conceptual trading in 2025, his journey is
              marked not just by innovation—but by vision.
            </motion.p>

            <motion.div
              className="timeline"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <h3>{item.year}</h3>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
