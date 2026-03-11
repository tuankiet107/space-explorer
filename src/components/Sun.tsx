import { Sphere, useTexture } from "@react-three/drei";
import sunTexture from "/src/assets/img/planets/sunmap.jpg";

function Sun() {
  const texture = useTexture(sunTexture);

  return (
    <group position={[0, 0, 0]}>
      <Sphere args={[1.5, 32, 32]}>
        <meshStandardMaterial map={texture} />
      </Sphere>
    </group>
  );
}

export default Sun;
