import { motion } from "framer-motion";

export default function Services() {
  return (
    <motion.section className="p-8 text-white bg-black">
      <h2 className="text-3xl font-bold mb-4">Our Services</h2>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["Simulation", "Photography", "Event Management", "Digital Modeling"].map((service, index) => (
          <motion.div key={index} className="p-4 bg-gray-800 rounded-md"
            whileHover={{ scale: 1.05 }}>
            {service}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
