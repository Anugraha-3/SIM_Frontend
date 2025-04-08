import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import SphereWithPatches from '../components/GlobePatches';
import '../styles/globe.css';

const GlobeGallery = () => {
  return (
    <div className="globe-page">
      <div className="globe-canvas-container">
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 5, 5]} />
          <Suspense fallback={null}>
            <SphereWithPatches />
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
};

export default GlobeGallery;
