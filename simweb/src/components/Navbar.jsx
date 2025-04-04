import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav className="fixed top-0 left-0 w-full p-4 bg-black text-white flex justify-between px-6"
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-xl font-bold">My Website</h1>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </motion.nav>
  );
}
