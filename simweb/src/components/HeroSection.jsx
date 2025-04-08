import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import EarthModel from "../threeD/EarthModel";
import "../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero-container">
      {/* Motion for the entire Canvas */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="canvas-wrapper"
      >
        <Canvas
          camera={{ position: [0, 0, 3.5], fov: 45 }}
          style={{ width: "100vw", height: "100vh" }}
        >
          {/* Darker space background (not black) */}
          <color attach="background" args={["#050510"]} />

          {/* Lighting for Earth only */}
          <ambientLight intensity={2.0} />
          <directionalLight position={[5, 3, 5]} intensity={1.5} />

          {/* Earth */}
          <EarthModel />

          {/* Controls */}
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.1}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />

          {/* Stars in the background */}
          <Stars
            radius={100}
            depth={50}
            count={10000}
            factor={4}
            fade
            saturation={0}
          />
        </Canvas>
      </motion.div>

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="hero-fixed-text"
      >
        Innovating the Future.
      </motion.div>
    </section>
  );
}

export default HeroSection;
