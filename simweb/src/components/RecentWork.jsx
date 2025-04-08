import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/RecentWork.css";

const projects = [
  {
    image: "/project1.png",
    title: "AI Diagnostics",
    description: "Cutting-edge diagnostic system for early detection.",
  },
  {
    image: "/project2.png",
    title: "Smart Dose",
    description: "Automated medication system powered by ML.",
  },
  {
    image: "/project3.png",
    title: "NeuroTrack",
    description: "Brainwave analysis for pediatric cognitive health.",
  },
  {
    image: "/project4.png",
    title: "VisionCraft",
    description: "Real-time retina scan and analysis for children.",
  },
];

export default function RecentWork() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const current = projects[index];
  const goTo = (i) => setIndex(i);

  return (
    <>
      <h2 className="recent-work-heading">Recent Work</h2>

      <section className="recent-work-fullscreen">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            className="fullscreen-slide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-container">
              <img
                src={current.image}
                alt={current.title}
                className="slide-image"
              />
              <div className="hover-info">
                <h2>{current.title}</h2>
                <p>{current.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="dot-navigation">
          {projects.map((_, i) => (
            <span
              key={i}
              onClick={() => goTo(i)}
              className={`dot ${i === index ? "active-dot" : ""}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
