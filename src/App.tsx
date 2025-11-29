import { Canvas } from "@react-three/fiber";

import SpaceScene from "./scenes/SpaceScene";

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 25, 25], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <SpaceScene />
      </Canvas>
    </div>
  );
}
