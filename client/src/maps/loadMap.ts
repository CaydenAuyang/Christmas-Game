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

  // Universal Decorations
  addCandyCanes(group, map);

  // Thematic Props
  if (map.id === "heaven") {
    addHeavenProps(group, map);
  } else if (map.id === "hell") {
    addHellProps(group, map);
  } else {
    addEarthProps(group, map);
  }

  // Common boundary walls (invisible physics walls would be better, but visual walls for now)
  // Or just rely on clamping logic. We'll add some visual markers at corners.
  addBoundMarkers(group, map);

  return group;
}

function addCandyCanes(group: THREE.Group, map: MapDefinition) {
  const caneGeo = new THREE.TorusGeometry(0.5, 0.1, 8, 16, Math.PI);
  const caneMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xffffff });

  // Create a candy cane mesh group
  const createCane = () => {
    const g = new THREE.Group();
    // Staff
    const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 2), whiteMat);
    staff.position.y = 1;
    g.add(staff);

    // Stripes (Torus segments or rings? simplified: rings)
    for (let i = 0; i < 5; i++) {
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.105, 0.05, 8, 16), caneMat);
      r.rotation.x = Math.PI / 2;
      r.position.y = 0.4 + i * 0.4;
      g.add(r);
    }

    // Hook
    const hook = new THREE.Mesh(caneGeo, whiteMat);
    hook.position.set(0.5, 2, 0); // Offset to side
    g.add(hook);

    return g;
  };

  for (let i = 0; i < 10; i++) {
    const c = createCane();
    c.position.set(
      randBetween(map.bounds.min[0] + 2, map.bounds.max[0] - 2),
      0,
      randBetween(map.bounds.min[2] + 2, map.bounds.max[2] - 2)
    );
    c.rotation.y = Math.random() * Math.PI * 2;
    group.add(c);
  }
}

function addHeavenProps(group: THREE.Group, map: MapDefinition) {
  // Golden Gates / Pillars
  const pillarGeo = new THREE.CylinderGeometry(0.8, 0.8, 8, 16);
  const pillarMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.8, roughness: 0.2 });

  const pos = [
    [5, 0, 5], [-5, 0, 5], [5, 0, -5], [-5, 0, -5],
    [10, 0, 0], [-10, 0, 0], [0, 0, 10], [0, 0, -10]
  ];

  pos.forEach(([x, _, z]) => {
    const p = new THREE.Mesh(pillarGeo, pillarMat);
    p.position.set(x, 4, z);
    p.castShadow = true;
    p.receiveShadow = true;
    group.add(p);
  });

  // Unique: Big Golden Tree
  const treeGeo = new THREE.ConeGeometry(4, 12, 16);
  const treeMat = new THREE.MeshStandardMaterial({
    color: 0xffe600,
    emissive: 0xaa8800,
    emissiveIntensity: 0.2,
    metalness: 0.9,
    roughness: 0.1
  });
  const t = new THREE.Mesh(treeGeo, treeMat);
  t.position.set(0, 6, 0);
  t.castShadow = true;
  group.add(t);


  // Cloud Platforms
  const cloudGeo = new THREE.SphereGeometry(3, 16, 16);
  const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 });
  for (let i = 0; i < 5; i++) {
    const c = new THREE.Mesh(cloudGeo, cloudMat);
    c.position.set(
      randBetween(map.bounds.min[0], map.bounds.max[0]),
      randBetween(2, 6),
      randBetween(map.bounds.min[2], map.bounds.max[2])
    );
    // Flatten clouds
    c.scale.set(1.5, 0.4, 1.5);
    group.add(c);
  }
}

function addEarthProps(group: THREE.Group, map: MapDefinition) {
  // Christmas Trees
  const treeGeo = new THREE.ConeGeometry(2, 6, 8);
  const treeMat = new THREE.MeshStandardMaterial({ color: 0x2d6a4f, roughness: 0.8 });
  const trunkGeo = new THREE.CylinderGeometry(0.4, 0.4, 2);
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 });

  for (let i = 0; i < 8; i++) {
    const treeGroup = new THREE.Group();
    const t = new THREE.Mesh(treeGeo, treeMat);
    t.position.y = 4;
    t.castShadow = true;
    const tr = new THREE.Mesh(trunkGeo, trunkMat);
    tr.position.y = 1;
    tr.castShadow = true;

    treeGroup.add(t);
    treeGroup.add(tr);
    treeGroup.position.set(
      randBetween(map.bounds.min[0] + 2, map.bounds.max[0] - 2),
      0,
      randBetween(map.bounds.min[2] + 2, map.bounds.max[2] - 2)
    );
    group.add(treeGroup);
  }

  // Presents
  const boxGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
  for (let i = 0; i < 6; i++) {
    const color = Math.random() > 0.5 ? 0xd13737 : 0x297afb;
    const box = new THREE.Mesh(boxGeo, new THREE.MeshStandardMaterial({ color }));
    box.position.set(
      randBetween(map.bounds.min[0] + 4, map.bounds.max[0] - 4),
      0.75,
      randBetween(map.bounds.min[2] + 4, map.bounds.max[2] - 4)
    );
    box.castShadow = true;
    (box as any).userData.solid = true; // Collidable
    group.add(box);
  }

  // Bridges (Jumpable platforms)
  const bridgeGeo = new THREE.BoxGeometry(4, 0.5, 8);
  const bridgeMat = new THREE.MeshStandardMaterial({ color: 0x8b4513, roughness: 1.0 }); // Wood

  // Bridge 1
  const b1 = new THREE.Mesh(bridgeGeo, bridgeMat);
  b1.position.set(0, 2.5, 0); // Elevated
  b1.userData.solid = true;
  group.add(b1);

  // Ramps for Bridge 1
  const rampGeo = new THREE.BoxGeometry(4, 0.5, 6);
  const ramp1 = new THREE.Mesh(rampGeo, bridgeMat);
  ramp1.position.set(0, 1.25, -6);
  ramp1.rotation.x = -Math.PI / 8; // Slope up
  ramp1.userData.solid = true;
  group.add(ramp1);

  const ramp2 = new THREE.Mesh(rampGeo, bridgeMat);
  ramp2.position.set(0, 1.25, 6);
  ramp2.rotation.x = Math.PI / 8; // Slope up
  ramp2.userData.solid = true;
  group.add(ramp2);
}

function addHellProps(group: THREE.Group, map: MapDefinition) {
  // Obsidian Spikes
  const spikeGeo = new THREE.ConeGeometry(1, 5, 4);
  const spikeMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.2 });

  for (let i = 0; i < 12; i++) {
    const s = new THREE.Mesh(spikeGeo, spikeMat);
    s.position.set(
      randBetween(map.bounds.min[0], map.bounds.max[0]),
      2.5,
      randBetween(map.bounds.min[2], map.bounds.max[2])
    );
    s.castShadow = true;
    s.userData.solid = true;
    group.add(s);
  }

  // Unique: Scary Tree
  const treeGeo = new THREE.ConeGeometry(3, 10, 4); // Sharp 4-sided
  const treeMat = new THREE.MeshStandardMaterial({ color: 0x550000, roughness: 0.9, flatShading: true });
  const t = new THREE.Mesh(treeGeo, treeMat);
  t.position.set(0, 5, 0);
  t.rotation.y = Math.PI / 4;
  t.castShadow = true;
  t.userData.solid = true;
  group.add(t);

  // Lava Pools (Flat emissive planes slightly above ground)
  const lavaGeo = new THREE.CircleGeometry(3, 16);
  const lavaMat = new THREE.MeshBasicMaterial({ color: 0xff4500 });
  for (let i = 0; i < 3; i++) {
    const l = new THREE.Mesh(lavaGeo, lavaMat);
    l.rotation.x = -Math.PI / 2;
    l.position.set(
      randBetween(map.bounds.min[0] + 5, map.bounds.max[0] - 5),
      0.05,
      randBetween(map.bounds.min[2] + 5, map.bounds.max[2] - 5)
    );
    group.add(l);
  }
}

function addBoundMarkers(group: THREE.Group, map: MapDefinition) {
  const corners = [
    [map.bounds.min[0], map.bounds.min[2]],
    [map.bounds.max[0], map.bounds.min[2]],
    [map.bounds.max[0], map.bounds.max[2]],
    [map.bounds.min[0], map.bounds.max[2]]
  ];

  const markerGeo = new THREE.BoxGeometry(1, 4, 1);
  const markerMat = new THREE.MeshStandardMaterial({ color: 0x888888 });

  corners.forEach(([x, z]) => {
    const m = new THREE.Mesh(markerGeo, markerMat);
    m.position.set(x, 2, z);
    m.userData.solid = true;
    group.add(m);
  });
}

function groundColor(mapId: string): number {
  switch (mapId) {
    case "heaven": return 0xf0f8ff; // White-ish
    case "hell": return 0x2e0d0d; // Dark Red
    default: return 0xe0e0e0; // Snow
  }
}

function randBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
