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
      
      {mode === "multiplayer" && (
        <OverlayMessage text="Multiplayer Beta: Connecting..." />
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
