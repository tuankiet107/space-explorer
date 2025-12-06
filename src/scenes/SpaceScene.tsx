import { OrbitControls, Stars } from "@react-three/drei";

import Sun from "../components/Sun";
import OrbitRing from "../components/OrbitRing";

function SpaceScene() {
  return (
    <>
      <Stars radius={300} depth={60} count={10000} factor={6} />

      <Sun />

      {Array.from({ length: 8 }).map((_, index) => (
        <OrbitRing key={`orbit-${index}`} radius={index + 2} />
      ))}

      <OrbitControls maxDistance={50} minDistance={5} />
    </>
  );
}

export default SpaceScene;
