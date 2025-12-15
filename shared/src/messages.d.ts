import type { Loadout, MapDefinition, PlayerInput, PlayerState } from "./types.js";
export type ClientMessage = {
    type: "join";
    name: string;
    loadout: Loadout;
    map: string;
} | {
    type: "input";
    data: PlayerInput;
} | {
    type: "change_loadout";
    loadout: Loadout;
} | {
    type: "chat";
    text: string;
};
export interface LobbySnapshot {
    players: number;
    map: string;
}
export interface MatchSnapshot {
    time: number;
    map: MapDefinition;
    players: PlayerState[];
}
export type ServerMessage = {
    type: "lobby";
    lobby: LobbySnapshot;
} | {
    type: "start";
    match: MatchSnapshot;
} | {
    type: "state";
    players: PlayerState[];
    time: number;
} | {
    type: "chat";
    from: string;
    text: string;
} | {
    type: "error";
    message: string;
};
