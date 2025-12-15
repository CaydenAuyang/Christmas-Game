export type WeaponId = "snow_smg" | "candy_shotgun" | "gift_launcher" | "icicle_rifle";
export type MapId = "heaven" | "earth" | "hell";

export interface WeaponDefinition {
  id: WeaponId;
  name: string;
  type: "hitscan" | "projectile";
  damage: number;
  pellets?: number;
  fireRate: number; // rounds per second
  spread: number; // radians
  magSize: number;
  reloadTime: number; // seconds
  projectileSpeed?: number;
}

export const WEAPONS: Record<WeaponId, WeaponDefinition> = {
  snow_smg: {
    id: "snow_smg",
    name: "Snowburst SMG",
    type: "hitscan",
    damage: 11,
    fireRate: 12,
    spread: 0.035,
    magSize: 32,
    reloadTime: 1.8
  },
  candy_shotgun: {
    id: "candy_shotgun",
    name: "Candy Cane Shotgun",
    type: "hitscan",
    damage: 10,
    pellets: 9,
    fireRate: 1.2,
    spread: 0.18,
    magSize: 6,
    reloadTime: 2.4
  },
  gift_launcher: {
    id: "gift_launcher",
    name: "Gift Launcher",
    type: "projectile",
    damage: 80,
    fireRate: 0.75,
    spread: 0.05,
    magSize: 4,
    reloadTime: 2.6,
    projectileSpeed: 36
  },
  icicle_rifle: {
    id: "icicle_rifle",
    name: "Icicle Rifle",
    type: "hitscan",
    damage: 58,
    fireRate: 0.9,
    spread: 0.01,
    magSize: 5,
    reloadTime: 2.3
  }
};

export interface AvatarDefinition {
  id: string;
  name: string;
  primaryColor: string;
  accentColor: string;
}

export const AVATARS: AvatarDefinition[] = [
  { id: "elf", name: "Workshop Elf", primaryColor: "#1f8a3b", accentColor: "#d62839" },
  { id: "reindeer", name: "Reindeer Ranger", primaryColor: "#8b5a2b", accentColor: "#c41e3d" },
  { id: "snowman", name: "Frosty Scout", primaryColor: "#e8f1f2", accentColor: "#1b4965" },
  { id: "gingerbread", name: "Ginger Gunner", primaryColor: "#b5651d", accentColor: "#f2d0a4" },
  { id: "nutcracker", name: "Nutcracker Guard", primaryColor: "#102542", accentColor: "#e63946" }
];

export interface MapMeta {
  id: MapId;
  name: string;
  description: string;
  theme: "heaven" | "earth" | "hell";
}

export const MAPS: Record<MapId, MapMeta> = {
  heaven: {
    id: "heaven",
    name: "Celestial Cheer",
    description: "Golden clouds, choir pads, floating candy bridges.",
    theme: "heaven"
  },
  earth: {
    id: "earth",
    name: "Town Square",
    description: "Snowy village plaza with trees, gifts, and lamp posts.",
    theme: "earth"
  },
  hell: {
    id: "hell",
    name: "Infernal Workshop",
    description: "Lava rivers, basalt cliffs, glowing runes of winter fire.",
    theme: "hell"
  }
};

