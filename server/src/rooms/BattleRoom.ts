import Colyseus from "colyseus";
import { Schema, type, MapSchema } from "@colyseus/schema";
import { MAPS, WEAPONS, type MapId, type PlayerInput, type WeaponId } from "@christmas/shared";

class PlayerState extends Schema {
  @type("string") id!: string;
  @type("string") name!: string;
  @type("string") weapon!: WeaponId;
  @type("float32") x = 0;
  @type("float32") y = 0;
  @type("float32") z = 0;
  @type("float32") yaw = 0;
  @type("float32") pitch = 0;
  @type("uint16") hp = 100;
  @type("uint16") armor = 25;
}

class BattleState extends Schema {
  @type("string") mapId: MapId = "earth";
  @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
}

interface PendingInput {
  forward: number;
  right: number;
  yaw: number;
  pitch: number;
  fire: boolean;
  weapon: WeaponId;
}

export class BattleRoom extends Colyseus.Room<BattleState> {
  private inputs = new Map<string, PendingInput>();
  private velocities = new Map<string, { x: number; y: number; z: number }>();
  private nextFire = new Map<string, number>();

  onCreate(options: { map?: MapId }) {
    this.setState(new BattleState());
    if (options.map && MAPS[options.map]) {
      this.state.mapId = options.map;
    }

    this.onMessage("input", (client, data: PlayerInput) => {
      this.inputs.set(client.sessionId, {
        forward: data.forward,
        right: data.right,
        yaw: data.yaw,
        pitch: data.pitch,
        fire: data.fire,
        weapon: data.weapon
      });
    });

    this.setSimulationInterval((deltaTime) => this.simulate(deltaTime / 1000), 50);
  }

  onJoin(client: Colyseus.Client, options: { name?: string; weapon?: WeaponId }) {
    const p = new PlayerState();
    p.id = client.sessionId;
    p.name = options.name || "Player";
    p.weapon = options.weapon || "snow_smg";
    p.x = Math.random() * 6 - 3;
    p.y = 1.6;
    p.z = Math.random() * 6 - 3;
    this.state.players.set(client.sessionId, p);
    this.velocities.set(client.sessionId, { x: 0, y: 0, z: 0 });
    this.nextFire.set(client.sessionId, 0);
  }

  onLeave(client: Colyseus.Client) {
    this.state.players.delete(client.sessionId);
    this.inputs.delete(client.sessionId);
    this.velocities.delete(client.sessionId);
    this.nextFire.delete(client.sessionId);
  }

  simulate(dt: number) {
    for (const [id, player] of this.state.players) {
      const input = this.inputs.get(id);
      const vel = this.velocities.get(id);
      if (!vel) continue;

      if (input) {
        const speed = 9;
        const yaw = input.yaw;
        const forward = { x: Math.sin(yaw), z: Math.cos(yaw) };
        const right = { x: Math.cos(yaw), z: -Math.sin(yaw) };

        vel.x = (forward.x * -input.forward + right.x * input.right) * speed;
        vel.z = (forward.z * -input.forward + right.z * input.right) * speed;
        vel.y -= 18 * dt;
        player.yaw = input.yaw;
        player.pitch = input.pitch;
        player.weapon = input.weapon;

        if (input.fire) {
          this.tryFire(id, player.weapon);
        }
      } else {
        vel.x *= 0.9;
        vel.z *= 0.9;
        vel.y -= 18 * dt;
      }

      player.x += vel.x * dt;
      player.y += vel.y * dt;
      player.z += vel.z * dt;
      if (player.y < 1.2) {
        player.y = 1.2;
        vel.y = 0;
      }
    }
  }

  private tryFire(id: string, weaponId: WeaponId) {
    const now = Date.now() / 1000;
    const next = this.nextFire.get(id) || 0;
    const weapon = WEAPONS[weaponId];
    if (now < next) return;
    this.nextFire.set(id, now + 1 / weapon.fireRate);
    // Basic broadcast only; hit detection omitted for brevity
    this.broadcast("shot", { id, weapon: weaponId });
  }
}

