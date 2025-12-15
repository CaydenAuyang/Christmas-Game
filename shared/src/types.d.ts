import type { MapId, WeaponId } from "./constants.js";
export interface Loadout {
    primary: WeaponId;
    secondary: WeaponId;
    avatarId: string;
}
export interface PlayerInput {
    forward: number;
    right: number;
    jump: boolean;
    fire: boolean;
    reload: boolean;
    yaw: number;
    pitch: number;
    sequence: number;
    weapon: WeaponId;
}
export interface PlayerState {
    id: string;
    name: string;
    avatarId: string;
    position: [number, number, number];
    velocity: [number, number, number];
    yaw: number;
    pitch: number;
    hp: number;
    armor: number;
    weapon: WeaponId;
    magAmmo: number;
    reserveAmmo: number;
    isBot?: boolean;
}
export interface BotConfig {
    aimJitter: number;
    fireInterval: [number, number];
    aggression: number;
}
export interface MapWaypoint {
    id: string;
    position: [number, number, number];
    links: string[];
}
export interface MapDefinition {
    id: MapId;
    spawnPoints: [number, number, number][];
    waypoints: MapWaypoint[];
    bounds: {
        min: [number, number, number];
        max: [number, number, number];
    };
    skyColor: string;
    fogColor: string;
    ambient: [number, number, number];
    gravity: number;
}
