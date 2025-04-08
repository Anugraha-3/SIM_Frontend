import { useRef, useEffect, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";

import Albedo from "/textures/Albedo.jpg";
import Bump from "/textures/Bump.jpg";
import Clouds from "/textures/Clouds.png";
import NightLights from "/textures/night_lights_modified.png";
import Ocean from "/textures/Ocean.png";
import Stars from "/textures/Gaia_EDR3_darkened.png";

function EarthModel() {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const galaxyRef = useRef();

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const [colorMap, bumpMap, cloudMap, nightMap, oceanMap, bgMap] = useLoader(TextureLoader, [
    Albedo,
    Bump,
    Clouds,
    NightLights,
    Ocean,
    Stars,
  ]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();

    if (earthRef.current) earthRef.current.rotation.y = elapsed * 0.05;
    if (cloudsRef.current) cloudsRef.current.rotation.y = elapsed * 0.06;

    // Parallax effect on background galaxy
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y = mouse.x * 0.3;
      galaxyRef.current.rotation.x = mouse.y * 0.15;
    }
  });

  return (
    <>
      {/* Background Galaxy (Mouse Responsive) */}
      <mesh ref={galaxyRef}>
        <sphereGeometry args={[80, 64, 64]} />
        <meshBasicMaterial map={bgMap} side={THREE.BackSide} />
      </mesh>

      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={oceanMap}
          emissiveMap={nightMap}
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[1.01, 64, 64]} />
        <meshPhongMaterial
          map={cloudMap}
          transparent
          opacity={0.3}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}

export default EarthModel;
