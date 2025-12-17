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
    if (!mountRef.current) return;
    // Cleanup previous instance
    if (clientRef.current) {
      clientRef.current.stop();
      clientRef.current.dispose();
    }

    const client = new GameClient(mountRef.current, {
      mode,
      mapId: map,
      playerName,
      loadout,
      onHud: setHud,
      onExit
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

      {/* Crosshair */}
      {mode !== "menu" && <div className="crosshair" />}

      {/* HUD only in game modes */}
      {mode !== "menu" && hud && (
        <div className="hud-container">
          <div className="hud-group">
            <div className="health-box">
              <div className="hud-value">{Math.round(hud.hp)}</div>
              <div className="hud-label">Health</div>
            </div>
            <div className="health-box" style={{ borderColor: "#4ea0ff" }}>
              <div className="hud-value" style={{ color: "#4ea0ff" }}>{Math.round(hud.armor)}</div>
              <div className="hud-label">Shield</div>
            </div>
            {hud.stageInfo && (
              <div style={{ marginLeft: 20, color: "gold", fontWeight: "bold", textShadow: "0 2px 4px black" }}>
                {hud.stageInfo}
              </div>
            )}
          </div>

          <div className="hud-group">
            {/* Weapon Info */}
            <div className="ammo-box" style={{ minWidth: 150 }}>
              <div className="hud-value" style={{ fontSize: 18, color: "white" }}>
                {WEAPONS[hud.weapon].name}
              </div>
              <div className="hud-label">Weapon</div>
            </div>
          </div>

          <div className="hud-group">
            <div className="ammo-box">
              <div className="hud-value">{hud.magAmmo}</div>
              <div className="hud-label">Ammo</div>
            </div>
            <div className="grenade-box">
              <div className="hud-value">{hud.score}</div>
              <div className="hud-label">Score</div>
            </div>
          </div>

          <button
            className="ss_button btn_red"
            style={{ position: "absolute", top: -60, right: 0, height: 36, fontSize: 14 }}
            onClick={onExit}
          >
            Exit
          </button>
        </div>
      )}

      {mode !== "menu" && (
        <div className="controls-overlay">
          <div>WASD - Move</div>
          <div>SPACE - Jump</div>
          <div>LMB - Shoot</div>
          <div>R - Reload</div>
          <div>MOUSE - Aim</div>
        </div>
      )}

      {mode === "multiplayer" && (
        <OverlayMessage text="Multiplayer Beta: Connecting..." />
      )}
      {/* Powerup Timer */}
      {mode !== "menu" && hud && (hud.powerupTimer || 0) > 0 && (
        <div style={{
          position: "absolute",
          top: 100,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <div style={{ position: "relative", width: 60, height: 60 }}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle cx="30" cy="30" r="25" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="5" />
              <circle
                cx="30" cy="30" r="25"
                fill="none"
                stroke="gold"
                strokeWidth="5"
                strokeDasharray="157"
                strokeDashoffset={157 * (1 - (hud.powerupTimer! / 10))} // 10s max
                transform="rotate(-90 30 30)"
                style={{ transition: "stroke-dashoffset 0.1s linear" }}
              />
            </svg>
            <div style={{
              position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "gold", fontWeight: "bold", fontSize: 20
            }}>
              {Math.ceil(hud.powerupTimer!)}
            </div>
          </div>
          <div style={{ color: "gold", fontWeight: "bold", marginTop: 5, textShadow: "0 1px 2px black" }}>POWER SURGE</div>
        </div>
      )}

      {/* Banner */}
      {mode !== "menu" && hud && hud.bannerText && (
        <div style={{
          position: "absolute",
          top: "30%",
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: 72,
          fontWeight: 900,
          color: "#fff",
          textShadow: "0 0 20px #ff0000, 0 0 10px #000",
          fontFamily: "var(--font-heading)",
          pointerEvents: "none",
          zIndex: 999
        }}>
          {hud.bannerText}
        </div>
      )}
    </div>
  );
}

function OverlayMessage({ text }: { text: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
        color: "#d8f3ff",
        fontWeight: 700,
        textShadow: "0 2px 4px rgba(0,0,0,0.5)"
      }}
    >
      {text}
    </div>
  );
}
