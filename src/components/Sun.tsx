import { Sphere, useTexture } from "@react-three/drei";

const SUN_PATH = "/src/assets/img/planets/sunmap.jpg";

function Sun() {
  const texture = useTexture(SUN_PATH);

  return (
    <group position={[0, 0, 0]}>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial map={texture} />
      </Sphere>
    </group>
  );
}

export default Sun;
