import { OrbitControls, Stars } from "@react-three/drei";

import Sun from "../components/Sun";
import Planet from "../components/Planet";
import OrbitRing from "../components/OrbitRing";

import { SOLAR_SYSTEM_CONFIG } from "../utils/planet.util";

function SpaceScene() {
  return (
    <>
      <Stars radius={300} depth={60} count={10000} factor={6} />

      <Sun />

      {SOLAR_SYSTEM_CONFIG.map((planet) => (
        <OrbitRing key={`orbit-${planet.name}`} radius={planet.orbitRadius} />
      ))}

      {SOLAR_SYSTEM_CONFIG.map((planet) => (
        <Planet key={planet.name} config={planet} />
      ))}

      <OrbitControls maxDistance={50} minDistance={5} />
    </>
  );
}

export default SpaceScene;
