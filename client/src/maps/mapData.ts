import type { MapDefinition } from "@christmas/shared";

export const MAP_DEFINITIONS: Record<string, MapDefinition> = {
  heaven: {
    id: "heaven",
    spawnPoints: [
      [0, 2, 0],
      [6, 2, -4],
      [-6, 2, 4],
      [8, 2, 8]
    ],
    waypoints: [
      { id: "a", position: [0, 2, 0], links: ["b", "c"] },
      { id: "b", position: [8, 2, 0], links: ["a", "d"] },
      { id: "c", position: [-8, 2, 0], links: ["a", "d"] },
      { id: "d", position: [0, 2, 10], links: ["b", "c"] }
    ],
    bounds: { min: [-18, 0, -18], max: [18, 12, 18] },
    skyColor: "#f6e8ff",
    fogColor: "#c9e4ff",
    ambient: [0.9, 0.9, 1],
    gravity: -16
  },
  earth: {
    id: "earth",
    spawnPoints: [
      [0, 1.8, 0],
      [10, 1.8, -6],
      [-10, 1.8, 6],
      [6, 1.8, 10]
    ],
    waypoints: [
      { id: "a", position: [0, 1.8, 0], links: ["b", "c", "d"] },
      { id: "b", position: [10, 1.8, -6], links: ["a", "c"] },
      { id: "c", position: [-10, 1.8, 6], links: ["a", "d"] },
      { id: "d", position: [6, 1.8, 10], links: ["a", "b"] }
    ],
    bounds: { min: [-22, 0, -22], max: [22, 10, 22] },
    skyColor: "#0b3954",
    fogColor: "#1f7a8c",
    ambient: [0.6, 0.7, 0.8],
    gravity: -18
  },
  hell: {
    id: "hell",
    spawnPoints: [
      [0, 2.5, 0],
      [8, 2.5, -8],
      [-8, 2.5, 8],
      [12, 2.5, 6]
    ],
    waypoints: [
      { id: "a", position: [0, 2.5, 0], links: ["b", "c"] },
      { id: "b", position: [10, 2.5, -6], links: ["a", "d"] },
      { id: "c", position: [-10, 2.5, 6], links: ["a", "d"] },
      { id: "d", position: [0, 2.5, 12], links: ["b", "c"] }
    ],
    bounds: { min: [-20, 0, -20], max: [20, 12, 20] },
    skyColor: "#2b0b0b",
    fogColor: "#8c1d1d",
    ambient: [0.45, 0.3, 0.3],
    gravity: -16
  }
};

