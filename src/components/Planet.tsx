import { Suspense, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Sphere, useTexture } from "@react-three/drei";

import type { PlanetConfig } from "../utils/planet.util";

interface PlanetProps {
  config: PlanetConfig;
}

function PlanetMesh({ config }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh | null>(null);
  const atmosphereRef = useRef<THREE.Mesh | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);

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

  return (
    <group ref={groupRef}>
      <Sphere ref={planetRef} args={[config.size, 64, 64]}>
        <meshStandardMaterial
          map={texture}
          color="#ffffff"
          roughness={config.roughness || 0.7}
        />
      </Sphere>

      {config.hasAtmosphere && (
        <Sphere ref={atmosphereRef} args={[config.size * 1.05, 64, 64]}>
          <meshStandardMaterial
            color={config.atmosphereColor || "#ffffff"}
            transparent={true}
            opacity={config.atmosphereOpacity || 0.3}
            roughness={1}
            side={THREE.DoubleSide}
          />
        </Sphere>
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
