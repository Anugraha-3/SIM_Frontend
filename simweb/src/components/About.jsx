import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section className="p-8 text-white bg-gray-900"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-4">We are an innovation-driven company...</p>
    </motion.section>
  );
}
