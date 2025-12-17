import { useMemo, useState } from "react";
import { AVATARS, MAPS, WEAPONS, type MapId, type WeaponId } from "@christmas/shared";
import GameScreen from "./GameScreen";

type Mode = "menu" | "bots" | "multiplayer" | "adventure";

const weaponOptions = Object.values(WEAPONS);

export default function App() {
  const [mode, setMode] = useState<Mode>("menu");
  const [map, setMap] = useState<MapId>("earth");
  const [playerName, setPlayerName] = useState("Frosty");
  const [primary, setPrimary] = useState<WeaponId>("snow_smg");
  const [secondary, setSecondary] = useState<WeaponId>("candy_shotgun");
  const [avatarId, setAvatarId] = useState(AVATARS[0].id);

  const loadout = useMemo(
    () => ({ primary, secondary, avatarId }),
    [primary, secondary, avatarId]
  );

  const startMode = (next: Exclude<Mode, "menu">) => {
    setMode(next);
  };

  const backToMenu = () => setMode("menu");

  return (
    <div className="app-root">
      <div className="game-shell">
        <GameScreen
          mode={mode}
          map={map}
          playerName={playerName}
          loadout={loadout}
          onExit={backToMenu}
        />
      </div>

      {mode === "menu" && (
        <div className="shell-overlay">
          <header className="main-header">
            <div className="game-logo">CHRISTMAS SHOCK</div>
          </header>

          <div className="main-layout">
            <div className="column">
              <div className="ss_bigtab" style={{ cursor: "default", height: "auto" }}>
                <div className="hud-label" style={{ marginBottom: 10 }}>Loadout</div>
                <div style={{ display: "grid", gap: 8, width: "100%" }}>
                  {weaponOptions.map((weapon) => (
                    <div
                      key={weapon.id}
                      className={`ss_bigtab ${primary === weapon.id ? "selected" : ""
                        }`}
                      style={{ minHeight: 80, padding: 10 }}
                      onClick={() => setPrimary(weapon.id)}
                    >
                      <div className="hud-value" style={{ fontSize: 18 }}>{weapon.name}</div>
                      <div className="hud-label">
                        {weapon.type === "hitscan" ? "Hitscan" : "Projectile"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="column center">
              <div style={{ width: "100%", maxWidth: 400 }}>
                <input
                  className="ss_field"
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Enter Name"
                />
                <button className="ss_button btn_play" onClick={() => startMode("bots")}>
                  PLAY
                </button>
                <button className="ss_button btn_play" style={{ marginTop: 10, background: "linear-gradient(#ff8e2b, #b35900)" }} onClick={() => startMode("adventure")}>
                  ADVENTURE
                </button>
                <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                  <button className="ss_button btn_blue" style={{ flex: 1 }} onClick={() => startMode("multiplayer")}>
                    Servers
                  </button>
                  {/* Login button removed */}
                </div>
              </div>
            </div>

            <div className="column">
              <div className="ss_bigtab" style={{ cursor: "default", height: '100%' }}>
                <div className="hud-label" style={{ marginBottom: 10 }}>Map Selection</div>
                <div style={{ display: "grid", gap: 8, width: "100%" }}>
                  {Object.values(MAPS).map((m) => (
                    <div
                      key={m.id}
                      className={`ss_bigtab ${map === m.id ? "selected" : ""}`}
                      style={{ minHeight: 100, padding: 10 }}
                      onClick={() => setMap(m.id)}
                    >
                      <div className="map-bg" style={{ backgroundImage: gradientFor(m.id) }} />
                      <div className="hud-value" style={{ fontSize: 16 }}>{m.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Skins section removed */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function gradientFor(map: MapId): string {
  if (map === "heaven") return "linear-gradient(135deg,#f6e8ff,#b1e1ff)";
  if (map === "hell") return "linear-gradient(135deg,#5a0b0b,#f25f5c)";
  return "linear-gradient(135deg,#0b3954,#1f7a8c)";
}
