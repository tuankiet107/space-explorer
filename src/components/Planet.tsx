import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { Html, Sphere, useTexture } from "@react-three/drei";

import type { PlanetConfig } from "../utils/planet.util";

interface PlanetProps {
  config: PlanetConfig;
}

function PlanetMesh({ config }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh | null>(null);
  const atmosphereRef = useRef<THREE.Mesh | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  const texture = useTexture(config.textureUrl);

  // Each planet begins in a random position.
  // eslint-disable-next-line react-hooks/purity
  const orbitAngle = useRef(Math.random() * Math.PI * 2);

  useFrame((_, delta) => {
    // Planet rotation
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * config.rotationSpeed;
    }

    // Planet moving in orbit
    if (groupRef.current) {
      orbitAngle.current += delta * config.orbitSpeed;
      const x = Math.cos(orbitAngle.current) * config.orbitRadius;
      const z = Math.sin(orbitAngle.current) * config.orbitRadius;

      groupRef.current.position.set(x, 0, z);
    }
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    setIsHovered(true);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    setIsHovered(false);
    document.body.style.cursor = "default";
  };

  return (
    <group ref={groupRef}>
      <Sphere
        ref={planetRef}
        args={[config.size, 64, 64]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshStandardMaterial
          map={texture}
          color={isHovered ? "#ffff88" : "#ffffff"}
          roughness={config.roughness || 0.7}
          emissive={isHovered ? "#444422" : "#000000"}
          emissiveIntensity={isHovered ? 0.3 : 0}
        />
      </Sphere>

      {config.hasAtmosphere && (
        <Sphere
          ref={atmosphereRef}
          args={[config.size * 1.05, 64, 64]}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <meshStandardMaterial
            color={config.atmosphereColor || "#ffffff"}
            transparent={true}
            opacity={isHovered ? 0.5 : config.atmosphereOpacity || 0.3}
            roughness={1}
            side={THREE.DoubleSide}
          />
        </Sphere>
      )}

      {isHovered && (
        <Html
          position={[0, config.size + 0.5, 0]}
          center
          distanceFactor={8}
          style={{
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              background: "rgba(0, 0, 0, 0.85)",
              color: "white",
              padding: "8px 16px",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "bold",
              fontFamily: "monospace",
              whiteSpace: "nowrap",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              border: "2px solid #ffff00",
              animation: "fadeIn 0.2s ease-in",
            }}
          >
            {config.name}
          </div>
        </Html>
      )}
    </group>
  );
}

function Planet({ config }: PlanetProps) {
  return (
    <Suspense fallback={null}>
      <PlanetMesh config={config} />
    </Suspense>
  );
}

export default Planet;
