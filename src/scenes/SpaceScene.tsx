import { OrbitControls, Stars } from "@react-three/drei";
import Sun from "../components/Sun";

function SpaceScene() {
  return (
    <>
      <Stars radius={300} depth={60} count={10000} factor={6} />

      <Sun />

      <OrbitControls maxDistance={50} minDistance={5} />
    </>
  );
}

export default SpaceScene;
