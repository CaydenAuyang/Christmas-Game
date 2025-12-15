import { useEffect, useRef, useState } from "react";
import { MAPS, WEAPONS, type MapId, type WeaponId } from "@christmas/shared";
import { GameClient, type GameMode, type HudState } from "./scene/GameClient";

interface Props {
  mode: "menu" | GameMode;
  map: MapId;
  playerName: string;
  loadout: { primary: WeaponId; secondary: WeaponId; avatarId: string };
  onExit: () => void;
}

export default function GameScreen({ mode, map, playerName, loadout, onExit }: Props) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const clientRef = useRef<GameClient | null>(null);
  const [hud, setHud] = useState<HudState | null>(null);

  useEffect(() => {
    if (!mountRef.current || mode === "menu") return;
    const client = new GameClient(mountRef.current, {
      mode: mode === "menu" ? "bots" : mode,
      mapId: map,
      playerName,
      loadout,
      onHud: setHud
    });
    clientRef.current = client;
    client.start();
    return () => {
      client.stop();
      client.dispose();
      clientRef.current = null;
    };
  }, [mode, map, playerName, loadout]);

  return (
    <div className="game-shell">
      <div ref={mountRef} className="canvas-container" />
      {mode === "menu" && <OverlayMessage text="Choose a mode to start playing" />}
      {mode !== "menu" && hud && (
        <div className="hud">
          <div className="hud-row">
            <HudBox label="Health" value={`${Math.max(0, Math.round(hud.hp))}`} />
            <HudBox label="Armor" value={`${Math.max(0, Math.round(hud.armor))}`} />
            <HudBox label="Weapon" value={WEAPONS[hud.weapon].name} />
            <HudBox label="Ammo" value={`${hud.magAmmo} / ${hud.reserveAmmo}`} />
          </div>
          <div className="hud-row">
            <div className="hud-box">
              <div className="label">Mode</div>
              <div className="value">{hud.mode === "bots" ? "Bots" : "Multiplayer"}</div>
            </div>
            <div className="hud-box">
              <div className="label">Map</div>
              <div className="value">{MAPS[hud.map].name}</div>
            </div>
            <div className="hud-box">
              <div className="label">Score</div>
              <div className="value">{hud.score}</div>
            </div>
            <div className="hud-box">
              <button className="button ghost" onClick={onExit} style={{ pointerEvents: "auto" }}>
                Exit to Menu
              </button>
            </div>
          </div>
        </div>
      )}
      {mode === "multiplayer" && (
        <OverlayMessage text="Multiplayer stub: connect server to enable online play." />
      )}
    </div>
  );
}

function HudBox({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="hud-box">
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </div>
  );
}

function OverlayMessage({ text }: { text: string }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none",
        color: "#d8f3ff",
        fontWeight: 700,
        letterSpacing: "0.06em"
      }}
    >
      {text}
    </div>
  );
}

