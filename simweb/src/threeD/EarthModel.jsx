import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export default function EarthModel() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
}
