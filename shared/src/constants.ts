export type WeaponId = "snow_smg" | "candy_shotgun" | "gift_launcher" | "icicle_rifle" | "gingerbread_axe";
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
    damage: 50, // Buffed
    fireRate: 20, // Super fast
    spread: 0.035,
    magSize: 999, // Infinite
    reloadTime: 0.1
  },
  candy_shotgun: {
    id: "candy_shotgun",
    name: "Candy Cane Shotgun",
    type: "hitscan",
    damage: 200, // 200 per pellet -> Guaranteed kill (even just 1 pellet)
    pellets: 9,
    fireRate: 5, // Fast pump
    spread: 0.18,
    magSize: 12,
    reloadTime: 0.1
  },
  gift_launcher: {
    id: "gift_launcher",
    name: "Gift Launcher",
    type: "projectile",
    damage: 1000, // Nuke
    fireRate: 5,
    spread: 0.05,
    magSize: 6,
    reloadTime: 0.1,
    projectileSpeed: 60
  },
  icicle_rifle: {
    id: "icicle_rifle",
    name: "Icicle Rifle",
    type: "hitscan",
    damage: 1000, // Insta kill
    fireRate: 8,
    spread: 0.001,
    magSize: 15,
    reloadTime: 0.1
  },
  gingerbread_axe: {
    id: "gingerbread_axe",
    name: "Gingerbread Missile", // Renamed
    type: "projectile",
    damage: 10,
    fireRate: 0.25, // 1 shot every 4s (1/4 = 0.25). Wait, fireRate is Hz. 1/4s = 0.25.
    spread: 0.05,
    magSize: 999,
    reloadTime: 0,
    projectileSpeed: 5 // Slow and visible (was 10)
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

