import { useMemo, useState } from "react";
import { AVATARS, MAPS, WEAPONS, type MapId, type WeaponId } from "@christmas/shared";
import GameScreen from "./GameScreen";

type Mode = "menu" | "bots" | "multiplayer";

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
    <div className="app-shell">
      <div className="panel">
        <div className="title">Christmas Shock</div>
        <div className="subtitle">Holiday FPS — ShellShockers-style</div>

        <div className="section">
          <div className="label">Player</div>
          <input
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              fontWeight: 700
            }}
            placeholder="Snowball"
          />
        </div>

        <div className="section">
          <div className="label">Map</div>
          <div className="card-grid">
            {Object.values(MAPS).map((m) => (
              <div
                key={m.id}
                className={`card ${map === m.id ? "selected" : ""}`}
                onClick={() => setMap(m.id)}
              >
                <div className="map-preview" style={{ backgroundImage: gradientFor(m.id) }} />
                <div className="value">{m.name}</div>
                <div className="label">{m.description}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="label">Loadout</div>
          <div className="loadout-grid">
            {weaponOptions.map((weapon) => (
              <div
                key={weapon.id}
                className={`card ${
                  primary === weapon.id || secondary === weapon.id ? "selected" : ""
                }`}
                onClick={() =>
                  primary === weapon.id ? setSecondary(weapon.id) : setPrimary(weapon.id)
                }
              >
                <div className="value">{weapon.name}</div>
                <div className="label">
                  {weapon.type === "hitscan" ? "Hitscan" : "Projectile"} · {weapon.magSize} mag
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="section">
          <div className="label">Avatar</div>
          <div className="loadout-grid">
            {AVATARS.map((avatar) => (
              <div
                key={avatar.id}
                className={`card ${avatarId === avatar.id ? "selected" : ""}`}
                onClick={() => setAvatarId(avatar.id)}
              >
                <div
                  style={{
                    height: 60,
                    borderRadius: 8,
                    marginBottom: 8,
                    background: `linear-gradient(135deg, ${avatar.primaryColor}, ${avatar.accentColor})`
                  }}
                />
                <div className="value">{avatar.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="section menu-bar">
          <button className="button" onClick={() => startMode("bots")}>
            Play Solo (Bots)
          </button>
          <button className="button secondary" onClick={() => startMode("multiplayer")}>
            Multiplayer
          </button>
        </div>
      </div>

      <div className="game-shell">
        <GameScreen
          mode={mode}
          map={map}
          playerName={playerName}
          loadout={loadout}
          onExit={backToMenu}
        />
      </div>
    </div>
  );
}

function gradientFor(map: MapId): string {
  if (map === "heaven") return "linear-gradient(135deg,#f6e8ff,#b1e1ff)";
  if (map === "hell") return "linear-gradient(135deg,#5a0b0b,#f25f5c)";
  return "linear-gradient(135deg,#0b3954,#1f7a8c)";
}

