export interface PlanetConfig {
  name: string;
  size: number;
  textureUrl: string;

  roughness?: number;

  // Orbital properties
  orbitRadius: number;
  orbitSpeed: number;
  rotationSpeed: number;

  // Visual effects
  hasAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereOpacity?: number;
}

export const SOLAR_SYSTEM_CONFIG: PlanetConfig[] = [
  {
    name: "Mercury",
    size: 0.2,
    textureUrl: "/src/assets/img/planets/mercurymap.jpg",
    orbitRadius: 2,
    orbitSpeed: 0.03,
    rotationSpeed: 0.01,
    roughness: 0.9,
  },
  {
    name: "Venus",
    size: 0.4,
    textureUrl: "/src/assets/img/planets/venusmap.jpg",
    orbitRadius: 4,
    orbitSpeed: 0.08,
    rotationSpeed: 0.005,
    roughness: 0.7,
    hasAtmosphere: true,
    atmosphereColor: "#fffacd",
    atmosphereOpacity: 0.4,
  },
  {
    name: "Earth",
    size: 0.5,
    textureUrl: "/src/assets/img/planets/earthmap.jpg",
    orbitRadius: 6,
    orbitSpeed: 0.06,
    rotationSpeed: 0.5,
    roughness: 0.8,
    hasAtmosphere: true,
    atmosphereColor: "#87ceeb",
    atmosphereOpacity: 0.25,
  },
  {
    name: "Mars",
    size: 0.35,
    textureUrl: "/src/assets/img/planets/marsmap.jpg",
    orbitRadius: 8,
    orbitSpeed: 0.03,
    rotationSpeed: 0.1,
    roughness: 0.9,
    hasAtmosphere: true,
    atmosphereColor: "#ffa07a",
    atmosphereOpacity: 0.15,
  },
  {
    name: "Jupiter",
    size: 1.0,
    textureUrl: "/src/assets/img/planets/jupitermap.jpg",
    orbitRadius: 12,
    orbitSpeed: 0.01,
    rotationSpeed: 0.5,
    roughness: 0.6,
    hasAtmosphere: true,
    atmosphereColor: "#f4a460",
    atmosphereOpacity: 0.3,
  },
  {
    name: "Saturn",
    size: 0.7,
    textureUrl: "/src/assets/img/planets/saturnmap.jpg",
    orbitRadius: 16,
    orbitSpeed: 0.09,
    rotationSpeed: 0.012,
    roughness: 0.6,
    hasAtmosphere: true,
    atmosphereColor: "#faebd7",
    atmosphereOpacity: 0.2,
  },
  {
    name: "Uranus",
    size: 0.7,
    textureUrl: "/src/assets/img/planets/uranusmap.jpg",
    orbitRadius: 18,
    orbitSpeed: 0.07,
    rotationSpeed: 0.008,
    roughness: 0.5,
    hasAtmosphere: true,
    atmosphereColor: "#87ceeb",
    atmosphereOpacity: 0.3,
  },
  {
    name: "Neptune",
    size: 0.7,
    textureUrl: "/src/assets/img/planets/neptunemap.jpg",
    orbitRadius: 20,
    orbitSpeed: 0.05,
    rotationSpeed: 0.01,
    roughness: 0.5,
    hasAtmosphere: true,
    atmosphereColor: "#6495ed",
    atmosphereOpacity: 0.3,
  },
];
