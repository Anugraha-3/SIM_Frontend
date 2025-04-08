import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';

const imageList = [
  { src: '/images/img1.png', caption: 'Inauguration' },
  { src: '/images/img2.png', caption: 'Students at Work' },
  { src: '/images/img3.png', caption: 'Workshop' },
  { src: '/images/img4.png', caption: 'Team Discussion' },
  { src: '/images/img5.png', caption: 'Demo Day' },
  { src: '/images/img6.png', caption: 'Development' },
  { src: '/images/img7.png', caption: 'Testing' },
  { src: '/images/img8.png', caption: 'Pitching' },
  { src: '/images/img9.png', caption: 'Mentoring' },
  { src: '/images/img10.png', caption: 'Presentation' },
  { src: '/images/img11.png', caption: 'Networking' },
  { src: '/images/img12.png', caption: 'Deployment' },
  { src: '/images/img13.png', caption: 'Brainstorming' },
  { src: '/images/img14.png', caption: 'Success Meet' },
  { src: '/images/img15.png', caption: 'Recognition' },
  { src: '/images/img16.png', caption: 'Celebration' },
  { src: '/images/img17.png', caption: 'Hackathon' },
  { src: '/images/img18.png', caption: 'Review' },
  { src: '/images/img19.png', caption: 'Award Ceremony' },
  { src: '/images/img20.png', caption: 'Finale' },
];

const isFrontFacing = (camera, pos) => {
  const cameraDir = new THREE.Vector3().subVectors(pos, camera.position).normalize();
  const normal = pos.clone().normalize();
  return normal.dot(cameraDir) > 0.2;
};

const Patch = ({ position, texture, caption }) => {
  const ref = useRef();

  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.lookAt(camera.position);
      const worldPos = ref.current.getWorldPosition(new THREE.Vector3());
      ref.current.visible = isFrontFacing(camera, worldPos);
    }
  });

  return (
    <group ref={ref} position={position}>
      <mesh>
        <circleGeometry args={[0.6, 64]} />
        <meshBasicMaterial map={texture} transparent={false} />
      </mesh>
      <Html center distanceFactor={8}>
        <div className="patch">
          <div className="caption">{caption}</div>
        </div>
      </Html>
    </group>
  );
};

const SphereWithPatches = () => {
  const loader = new THREE.TextureLoader();
  const radius = 4.5;
  const patches = [];

  const rows = 4;
  const cols = 5;

  for (let i = 0; i < rows; i++) {
    const phi = Math.PI * (i + 1) / (rows + 1);
    for (let j = 0; j < cols; j++) {
      const theta = 2 * Math.PI * j / cols;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      patches.push(new THREE.Vector3(x, y, z));
    }
  }

  return (
    <>
      <mesh scale={[0.98, 0.98, 0.98]}>
  <circleGeometry args={[0.6, 64]} />
  <meshBasicMaterial map={texture} />
</mesh>
      {patches.map((pos, index) => (
        <Patch
          key={index}
          position={pos}
          texture={loader.load(imageList[index % imageList.length].src)}
          caption={imageList[index % imageList.length].caption}
        />
      ))}
    </>
  );
};

export default SphereWithPatches;
