import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import EarthModel from "../threeD/EarthModel";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function HeroSection() {
  const location = useLocation();
  const canvasRef = useRef();
  const controlsRef = useRef();
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(0.5); // Start slow

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const parent = canvasRef.current.parentElement;
        canvasRef.current.style.width = `${parent.clientWidth}px`;
        canvasRef.current.style.height = `${parent.clientHeight}px`;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [location.pathname]);

  useEffect(() => {
    let start = Date.now();
    let raf;
    function animateSpeed() {
      const elapsed = (Date.now() - start) / 1000; // seconds
      // Oscillate speed between 0.5 and 10 in a smooth sine wave every 5 seconds
      const speed = 5.25 + 4.75 * Math.sin((elapsed / 5) * Math.PI * 2);
      setAutoRotateSpeed(speed);
      raf = requestAnimationFrame(animateSpeed);
    }
    animateSpeed();
    return () => raf && cancelAnimationFrame(raf);
  }, [location.pathname]);

  useEffect(() => {
    // Imperatively update the controls' speed
    if (controlsRef.current) {
      controlsRef.current.autoRotateSpeed = autoRotateSpeed;
    }
  }, [autoRotateSpeed]);

  const scrollToAbout = () => {
    // Find the About section and scroll to it smoothly
    const aboutElement = document.querySelector('#about') || 
                        document.querySelector('[data-section="about"]') ||
                        // Fallback: find by className or tag if no ID exists
                        document.querySelector('section');
    
    if (aboutElement) {
      aboutElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative w-full h-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        <Canvas
          ref={canvasRef}
          key={location.pathname}
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{
            display: 'block',
            position: 'absolute',
          }}
        >
          <color attach="background" args={["#050510"]} />
          <ambientLight intensity={3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            fade
            saturation={0}
          />
          <EarthModel />
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={autoRotateSpeed}
            enableRotate={true}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </motion.div>

      {/* Professional Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 group cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative flex flex-col items-center">
          {/* Clean gradient border only scroll indicator */}
          <div className="relative w-10 h-20 rounded-full border-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-0.5 group-hover:from-pink-400 group-hover:via-purple-400 group-hover:to-blue-400 transition-all duration-300">
            <div className="w-full h-full rounded-full bg-black">
              {/* Solid gradient ball that moves on hover */}
              <motion.div
                className="absolute w-5 h-5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full left-1/2 transform -translate-x-1/2"
                initial={{ bottom: 12 }}
                whileHover={{ 
                  bottom: 48,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                whileTap={{ 
                  bottom: 48,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
                animate={{ bottom: 12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </motion.button>
    </div>
  );
}

export default HeroSection;