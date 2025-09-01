// src/components/ParticleBackground.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Keep it within the modal
        background: { color: "#00000000" },
        particles: {
          number: { value: 50 },
          move: {
            enable: true,
            speed: 2,
            trail: {
              enable: true,
              length: 10,
              fillColor: "#000",
            },
          },
          size: { value: 3 },
          color: { value: "#ffffff" },
        },
      }}
    />
  );
};

export default ParticleBackground;
