import * as THREE from "three";
import { Line } from "@react-three/drei";

interface OrbitRingProps {
  radius: number;
}

function OrbitRing({ radius }: OrbitRingProps) {
  const points = [];
  const segments = 128;

  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(
      new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius)
    );
  }

  return <Line points={points} color="#fdfdfdff" opacity={0.3} transparent />;
}

export default OrbitRing;
