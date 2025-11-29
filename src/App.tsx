import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
}
