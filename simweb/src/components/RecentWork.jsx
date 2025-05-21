import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="w-full">
      <h2 className="text-center text-4xl font-bold text-white mb-6 font-primary tracking-wide">
        Recent Work
      </h2>

      <section className="relative w-[95%] max-w-[1520px] h-[500px] mx-auto overflow-hidden rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.image}
            className="absolute top-0 left-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full group">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition duration-400 group-hover:brightness-50"
              />
              <div className="absolute top-8 left-8 text-white opacity-0 group-hover:opacity-100 transition duration-400 pointer-events-none z-10">
                <h2 className="text-2xl font-semibold font-accent">{current.title}</h2>
                <p className="mt-2 max-w-md">{current.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {projects.map((_, i) => (
            <span
              key={i}
              onClick={() => goTo(i)}
              className={`w-[14px] h-[14px] rounded-full cursor-pointer transition-colors duration-300 ${
                i === index ? "bg-yellow-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
