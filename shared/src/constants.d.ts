export type WeaponId = "snow_smg" | "candy_shotgun" | "gift_launcher" | "icicle_rifle";
export type MapId = "heaven" | "earth" | "hell";
export interface WeaponDefinition {
    id: WeaponId;
    name: string;
    type: "hitscan" | "projectile";
    damage: number;
    pellets?: number;
    fireRate: number;
    spread: number;
    magSize: number;
    reloadTime: number;
    projectileSpeed?: number;
}
export declare const WEAPONS: Record<WeaponId, WeaponDefinition>;
export interface AvatarDefinition {
    id: string;
    name: string;
    primaryColor: string;
    accentColor: string;
}
export declare const AVATARS: AvatarDefinition[];
export interface MapMeta {
    id: MapId;
    name: string;
    description: string;
    theme: "heaven" | "earth" | "hell";
}
export declare const MAPS: Record<MapId, MapMeta>;
