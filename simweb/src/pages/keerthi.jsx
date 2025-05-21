import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Loader from "../components/loader";
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
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && (
        <motion.div
          className="min-h-screen bg-black text-white px-4 py-10 font-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Image Section - Mobile: scrolls normally | Desktop: sticky */}
            <div className="static md:sticky md:top-10 md:self-start space-y-6">
              <motion.button
                className="text-gray-300 hover:text-purple-400 transition text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/")}
              >
                ← Back to Home
              </motion.button>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="flex justify-center"
              >
                <img
                  src={keerthiImg}
                  alt="Keerthi Varman"
                  className="w-full max-w-xs rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>

            {/* Right Column: Bio + Timeline */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4 }}
              >
                <h1 className="text-4xl font-accent text-purple-400 mb-2 drop-shadow-[0_0_6px_rgba(165,102,255,0.7)]">
                  Keerthi Varman
                </h1>
                <h2 className="text-lg text-gray-300 mb-6 font-primary">
                  Founder & Visionary, SIM Group
                </h2>
                <p className="text-base text-gray-200 leading-relaxed mb-8">
                  A trailblazer of the tech frontier, Keerthi Varman has carved a legacy that spans industries and imaginations. From co-founding SIM in 2009 to entering space tech and conceptual trading in 2025, his journey is marked not just by innovation—but by vision.
                </p>
              </motion.div>

              {/* Timeline */}
              <motion.div
                className="border-l-4 border-purple-500 pl-6 space-y-6"
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
                    className="relative"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-3 h-3 bg-purple-500 rounded-full absolute -left-8 top-1.5" />
                    <div>
                      <h3 className="text-lg font-accent font-semibold text-purple-400">
                        {item.year}
                      </h3>
                      <p className="text-sm text-gray-300">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
