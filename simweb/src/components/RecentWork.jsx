import { motion } from "framer-motion";

export default function RecentWork() {
  return (
    <section className="p-8 text-white bg-gray-900">
      <h2 className="text-3xl font-bold">Recent Work</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <motion.img src="/assets/project1.jpg" className="w-full h-48 object-cover rounded-lg"
          whileHover={{ scale: 1.1 }} />
        <motion.img src="/assets/project2.jpg" className="w-full h-48 object-cover rounded-lg"
          whileHover={{ scale: 1.1 }} />
      </div>
    </section>
  );
}
