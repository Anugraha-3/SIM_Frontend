import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';

function DogModel(props) {
  const { scene, animations } = useGLTF('/dog.glb');
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
      return () => {
        action.stop();
        mixer.current.stopAllAction();
        mixer.current.uncacheRoot(scene);
      };
    }
  }, [scene, animations]);

  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  return <primitive object={scene} position={[0, 0, 0]} rotation={[0, 0, 0]} {...props} />;
}

export default function RobotViewer({ position, rotation }) {
  return (
    <div style={{ width: "100%", height: "600px", background: 'transparent' }}>
      <Canvas camera={{ position: [0, 1, 4], fov: 50 }} shadows style={{ background: 'transparent' }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <DogModel position={position} rotation={rotation} />
        </Suspense>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={false} />
      </Canvas>
    </div>
  );
}

RobotViewer.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
  rotation: PropTypes.arrayOf(PropTypes.number).isRequired,
};

// Required for GLTF loading
useGLTF.preload('/dog.glb');
