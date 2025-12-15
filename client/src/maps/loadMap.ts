import * as THREE from "three";
import type { MapDefinition } from "@christmas/shared";

export function buildSceneForMap(map: MapDefinition): THREE.Group {
  const group = new THREE.Group();

  // Ground plane
  const sizeX = map.bounds.max[0] - map.bounds.min[0];
  const sizeZ = map.bounds.max[2] - map.bounds.min[2];
  const groundGeometry = new THREE.PlaneGeometry(sizeX, sizeZ);
  const groundMaterial = new THREE.MeshStandardMaterial({
    color: groundColor(map.id),
    roughness: 0.9,
    metalness: 0.05
  });
  const ground = new THREE.Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  group.add(ground);

  // Simple center prop
  const pillarGeometry = new THREE.CylinderGeometry(1.2, 1.2, 6, 12);
  const pillarMaterial = new THREE.MeshStandardMaterial({
    color: accentColor(map.id),
    metalness: 0.2,
    roughness: 0.4,
    emissive: emissiveColor(map.id),
    emissiveIntensity: 0.4
  });
  const pillar = new THREE.Mesh(pillarGeometry, pillarMaterial);
  pillar.position.set(0, 3, 0);
  pillar.castShadow = true;
  group.add(pillar);

  // Add some gifts/rocks as boxes
  for (let i = 0; i < 10; i++) {
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(2, 2, 2),
      new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? accentColor(map.id) : groundColor(map.id),
        metalness: 0.05,
        roughness: 0.8
      })
    );
    box.position.set(randBetween(map.bounds.min[0] + 2, map.bounds.max[0] - 2), 1, randBetween(map.bounds.min[2] + 2, map.bounds.max[2] - 2));
    box.castShadow = true;
    box.receiveShadow = true;
    group.add(box);
  }

  return group;
}

function groundColor(mapId: string): number {
  switch (mapId) {
    case "heaven":
      return new THREE.Color("#f6f8ff").getHex();
    case "hell":
      return new THREE.Color("#2e0d0d").getHex();
    default:
      return new THREE.Color("#1f4068").getHex();
  }
}

function accentColor(mapId: string): number {
  switch (mapId) {
    case "heaven":
      return new THREE.Color("#f6c453").getHex();
    case "hell":
      return new THREE.Color("#f25f5c").getHex();
    default:
      return new THREE.Color("#e63946").getHex();
  }
}

function emissiveColor(mapId: string): number {
  switch (mapId) {
    case "heaven":
      return new THREE.Color("#f9e5ff").getHex();
    case "hell":
      return new THREE.Color("#ad2f2f").getHex();
    default:
      return new THREE.Color("#1b4965").getHex();
  }
}

function randBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

