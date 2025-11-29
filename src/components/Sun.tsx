import { Sphere } from "@react-three/drei";

function Sun() {
  return (
    <group position={[0, 0, 0]}>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial
          color="#fdb813"
          emissive="#ff9500"
          emissiveIntensity={1}
          roughness={0.3}
          metalness={0.2}
        />
      </Sphere>
    </group>
  );
}

export default Sun;
