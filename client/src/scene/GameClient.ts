import * as THREE from "three";
import { Client as ColyseusClient, Room } from "colyseus.js";
import { WEAPONS, type MapId, type PlayerInput, type WeaponId } from "@christmas/shared";
import type { MapDefinition } from "@christmas/shared";
import { MAP_DEFINITIONS } from "../maps/mapData";
import { buildSceneForMap } from "../maps/loadMap";

export type GameMode = "bots" | "multiplayer";

export interface GameClientOptions {
  mapId: MapId;
  mode: GameMode;
  playerName: string;
  loadout: { primary: WeaponId; secondary: WeaponId; avatarId: string };
  onHud?: (hud: HudState) => void;
}

export interface HudState {
  hp: number;
  armor: number;
  weapon: WeaponId;
  magAmmo: number;
  reserveAmmo: number;
  score: number;
  mode: GameMode;
  map: MapId;
}

interface Entity {
  id: string;
  name: string;
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  yaw: number;
  pitch: number;
  hp: number;
  armor: number;
  weapon: WeaponId;
  magAmmo: number;
  reserveAmmo: number;
  isBot: boolean;
  nextFire: number;
  target?: Entity;
}

export class GameClient {
  private container: HTMLDivElement;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private map!: MapDefinition;
  private clock = new THREE.Clock();
  private running = false;
  private player!: Entity;
  private bots: Entity[] = [];
  private mode: GameMode;
  private loadout: GameClientOptions["loadout"];
  private hud?: (hud: HudState) => void;
  private score = 0;
  private pointerLocked = false;
  private inputState = {
    forward: 0,
    right: 0,
    jump: false,
    fireHeld: false,
    reload: false,
    yaw: 0,
    pitch: 0
  };
  private netClient: ColyseusClient | null = null;
  private netRoom: Room | null = null;
  private remoteMeshes = new Map<string, THREE.Mesh>();

  constructor(container: HTMLDivElement, options: GameClientOptions) {
    this.container = container;
    this.mode = options.mode;
    this.loadout = options.loadout;
    this.hud = options.onHud;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 500);
    this.camera.position.set(0, 2, 6);

    container.appendChild(this.renderer.domElement);
    this.bindEvents();
    this.loadMap(options.mapId);
    this.spawnPlayer(options.playerName);
    if (this.mode === "bots") {
      this.spawnBots();
    } else {
      this.setupMultiplayer(options.mapId, options.playerName).catch((err) => {
        console.error("Multiplayer connect failed", err);
      });
    }
    this.updateHud();
  }

  private bindEvents() {
    window.addEventListener("resize", this.onResize);
    this.container.addEventListener("click", () => {
      this.container.requestPointerLock();
    });
    document.addEventListener("pointerlockchange", () => {
      this.pointerLocked = document.pointerLockElement === this.container;
    });
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("keydown", this.onKeyDown);
    document.addEventListener("keyup", this.onKeyUp);
    document.addEventListener("mousedown", (e) => {
      if (e.button === 0) this.inputState.fireHeld = true;
    });
    document.addEventListener("mouseup", (e) => {
      if (e.button === 0) this.inputState.fireHeld = false;
    });
  }

  private loadMap(mapId: MapId) {
    this.map = MAP_DEFINITIONS[mapId];
    this.scene.clear();
    this.scene.background = new THREE.Color(this.map.skyColor);
    const fogColor = new THREE.Color(this.map.fogColor);
    this.scene.fog = new THREE.FogExp2(fogColor, 0.015);

    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.7);
    hemi.position.set(0, 20, 0);
    this.scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(15, 25, 10);
    dir.castShadow = true;
    this.scene.add(dir);

    const ambient = new THREE.AmbientLight(
      new THREE.Color(this.map.ambient[0], this.map.ambient[1], this.map.ambient[2]).getHex(),
      0.8
    );
    this.scene.add(ambient);

    const mapGroup = buildSceneForMap(this.map);
    this.scene.add(mapGroup);
  }

  private spawnPlayer(name: string) {
    const spawn = pickRandom(this.map.spawnPoints);
    this.player = {
      id: "local",
      name,
      position: new THREE.Vector3(...spawn),
      velocity: new THREE.Vector3(),
      yaw: 0,
      pitch: 0,
      hp: 100,
      armor: 25,
      weapon: this.loadout.primary,
      magAmmo: WEAPONS[this.loadout.primary].magSize,
      reserveAmmo: WEAPONS[this.loadout.primary].magSize * 3,
      isBot: false,
      nextFire: 0
    };
    this.camera.position.copy(this.player.position.clone().add(new THREE.Vector3(0, 1.6, 0)));
  }

  private async setupMultiplayer(mapId: MapId, playerName: string) {
    const endpoint = import.meta.env.VITE_SERVER_URL || "ws://localhost:2567";
    this.netClient = new ColyseusClient(endpoint);
    try {
      this.netRoom = await this.netClient.joinOrCreate("battle", {
        map: mapId,
        name: playerName,
        weapon: this.loadout.primary
      });
      const room = this.netRoom;

      room.state.players.onAdd = (player: any, key: string) => {
        if (key === room.sessionId) {
          this.player.position.set(player.x, player.y, player.z);
        }
        const mesh = makeRemoteMesh(player.weapon as WeaponId);
        mesh.position.set(player.x, player.y, player.z);
        this.scene.add(mesh);
        this.remoteMeshes.set(key, mesh);

        player.onChange = () => {
          mesh.position.set(player.x, player.y, player.z);
          mesh.rotation.y = player.yaw;
          if (key === room.sessionId) {
            this.player.position.set(player.x, player.y, player.z);
            this.player.yaw = player.yaw;
            this.player.pitch = player.pitch;
            this.player.hp = player.hp;
            this.player.armor = player.armor;
          }
        };
      };

      room.state.players.onRemove = (_player: any, key: string) => {
        const mesh = this.remoteMeshes.get(key);
        if (mesh) {
          this.scene.remove(mesh);
          this.remoteMeshes.delete(key);
        }
      };
    } catch (err) {
      console.error("Failed to join multiplayer room", err);
    }
  }

  private spawnBots() {
    this.bots = [];
    for (let i = 0; i < 6; i++) {
      const spawn = pickRandom(this.map.spawnPoints);
      const weapon: WeaponId = i % 2 === 0 ? "snow_smg" : "candy_shotgun";
      this.bots.push({
        id: `bot-${i}`,
        name: `Bot ${i + 1}`,
        position: new THREE.Vector3(...spawn),
        velocity: new THREE.Vector3(),
        yaw: Math.random() * Math.PI * 2,
        pitch: 0,
        hp: 90,
        armor: 10,
        weapon,
        magAmmo: WEAPONS[weapon].magSize,
        reserveAmmo: WEAPONS[weapon].magSize * 2,
        isBot: true,
        nextFire: 0
      });
    }
  }

  start() {
    if (this.running) return;
    this.running = true;
    this.clock.start();
    this.renderer.setAnimationLoop(this.tick);
  }

  stop() {
    this.running = false;
    this.renderer.setAnimationLoop(null);
  }

  dispose() {
    this.stop();
    window.removeEventListener("resize", this.onResize);
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("keydown", this.onKeyDown);
    document.removeEventListener("keyup", this.onKeyUp);
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
    this.renderer.dispose();
  }

  private tick = () => {
    const dt = Math.min(this.clock.getDelta(), 0.05);
    this.stepPlayer(dt);
    if (this.mode === "bots") {
      this.stepBots(dt);
    } else if (this.netRoom) {
      this.sendInput();
    }
    this.updateHud();
    this.renderer.render(this.scene, this.camera);
  };

  private stepPlayer(dt: number) {
    const speed = 10;
    const dir = new THREE.Vector3();
    dir.x = this.inputState.right;
    dir.z = -this.inputState.forward;
    if (dir.lengthSq() > 0) {
      dir.normalize().multiplyScalar(speed);
    }
    const yaw = this.player.yaw;
    const forward = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw));
    const right = new THREE.Vector3(Math.cos(yaw), 0, -Math.sin(yaw));
    const move = new THREE.Vector3();
    move.addScaledVector(forward, dir.z);
    move.addScaledVector(right, dir.x);

    this.player.velocity.x = move.x;
    this.player.velocity.z = move.z;
    this.player.velocity.y += this.map.gravity * dt;

    // Basic ground collision
    const nextPos = this.player.position.clone().addScaledVector(this.player.velocity, dt);
    if (nextPos.y < 1.2) {
      nextPos.y = 1.2;
      this.player.velocity.y = 0;
    }
    this.clampToBounds(nextPos);
    this.player.position.copy(nextPos);

    // Camera follows
    this.camera.position.copy(this.player.position.clone().add(new THREE.Vector3(0, 1.4, 0)));
    this.camera.rotation.set(this.player.pitch, this.player.yaw, 0, "YXZ");

    // Shooting
    if (this.inputState.fireHeld) {
      this.tryFire(this.player, this.bots, dt);
    }
  }

  private stepBots(dt: number) {
    for (const bot of this.bots) {
      if (bot.hp <= 0) {
        // respawn
        const spawn = pickRandom(this.map.spawnPoints);
        bot.position.set(...spawn);
        bot.hp = 90;
        bot.armor = 10;
      }
      const toPlayer = this.player.position.clone().sub(bot.position);
      const distance = toPlayer.length();
      const desiredDir = toPlayer.clone().normalize();
      bot.yaw = Math.atan2(desiredDir.x, desiredDir.z);
      bot.pitch = -Math.atan2(desiredDir.y, Math.sqrt(desiredDir.x ** 2 + desiredDir.z ** 2));

      const moveSpeed = distance > 6 ? 6 : 2;
      bot.velocity.x = desiredDir.x * moveSpeed;
      bot.velocity.z = desiredDir.z * moveSpeed;
      bot.velocity.y += this.map.gravity * dt;

      const nextPos = bot.position.clone().addScaledVector(bot.velocity, dt);
      if (nextPos.y < 1.2) {
        nextPos.y = 1.2;
        bot.velocity.y = 0;
      }
      this.clampToBounds(nextPos);
      bot.position.copy(nextPos);

      // Shoot at player
      this.tryFire(bot, [this.player], dt);
    }
  }

  private tryFire(shooter: Entity, targets: Entity[], dt: number) {
    const weapon = WEAPONS[shooter.weapon];
    shooter.nextFire -= dt;
    if (shooter.nextFire > 0) return;
    if (shooter.magAmmo <= 0) {
      if (shooter.reserveAmmo > 0) {
        const toLoad = Math.min(weapon.magSize, shooter.reserveAmmo);
        shooter.magAmmo = toLoad;
        shooter.reserveAmmo -= toLoad;
        shooter.nextFire = weapon.reloadTime;
      }
      return;
    }

    shooter.magAmmo -= 1;
    shooter.nextFire = 1 / weapon.fireRate;

    const origin = shooter.position.clone().add(new THREE.Vector3(0, 1.4, 0));
    const direction = new THREE.Vector3(
      Math.sin(shooter.yaw) * Math.cos(shooter.pitch),
      Math.sin(-shooter.pitch),
      Math.cos(shooter.yaw) * Math.cos(shooter.pitch)
    ).normalize();

    for (const target of targets) {
      if (target.hp <= 0) continue;
      const toTarget = target.position.clone().add(new THREE.Vector3(0, 1.2, 0)).sub(origin);
      const distance = toTarget.length();
      const aimDir = toTarget.clone().normalize();
      const angle = direction.angleTo(aimDir);
      const hitCone = weapon.spread + 0.1;
      if (angle < hitCone && distance < 50) {
        const damage = computeDamage(weapon);
        applyDamage(target, damage);
        if (target.hp <= 0 && !shooter.isBot) {
          this.score += 1;
        }
      }
    }
  }

  private clampToBounds(pos: THREE.Vector3) {
    pos.x = THREE.MathUtils.clamp(pos.x, this.map.bounds.min[0], this.map.bounds.max[0]);
    pos.y = THREE.MathUtils.clamp(pos.y, this.map.bounds.min[1], this.map.bounds.max[1] + 5);
    pos.z = THREE.MathUtils.clamp(pos.z, this.map.bounds.min[2], this.map.bounds.max[2]);
  }

  private sendInput() {
    if (!this.netRoom) return;
    const payload: PlayerInput = {
      forward: this.inputState.forward,
      right: this.inputState.right,
      jump: this.inputState.jump,
      fire: this.inputState.fireHeld,
      reload: this.inputState.reload,
      yaw: this.player.yaw,
      pitch: this.player.pitch,
      sequence: Date.now(),
      weapon: this.player.weapon
    };
    this.netRoom.send("input", payload);
  }

  private updateHud() {
    if (!this.hud) return;
    this.hud({
      hp: this.player.hp,
      armor: this.player.armor,
      weapon: this.player.weapon,
      magAmmo: this.player.magAmmo,
      reserveAmmo: this.player.reserveAmmo,
      score: this.score,
      mode: this.mode,
      map: this.map.id as MapId
    });
  }

  private onResize = () => {
    const { clientWidth, clientHeight } = this.container;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(clientWidth, clientHeight);
  };

  private onMouseMove = (e: MouseEvent) => {
    if (!this.pointerLocked) return;
    const sensitivity = 0.0025;
    this.player.yaw -= e.movementX * sensitivity;
    this.player.pitch -= e.movementY * sensitivity;
    this.player.pitch = THREE.MathUtils.clamp(this.player.pitch, -Math.PI / 2 + 0.1, Math.PI / 2 - 0.1);
  };

  private onKeyDown = (e: KeyboardEvent) => {
    if (e.code === "KeyW") this.inputState.forward = 1;
    if (e.code === "KeyS") this.inputState.forward = -1;
    if (e.code === "KeyA") this.inputState.right = -1;
    if (e.code === "KeyD") this.inputState.right = 1;
    if (e.code === "Space") this.inputState.jump = true;
  };

  private onKeyUp = (e: KeyboardEvent) => {
    if (e.code === "KeyW" || e.code === "KeyS") this.inputState.forward = 0;
    if (e.code === "KeyA" || e.code === "KeyD") this.inputState.right = 0;
    if (e.code === "Space") this.inputState.jump = false;
  };
}

function computeDamage(weapon: typeof WEAPONS[keyof typeof WEAPONS]) {
  if (weapon.pellets) {
    return weapon.damage * weapon.pellets * 0.2;
  }
  return weapon.damage;
}

function applyDamage(target: Entity, damage: number) {
  const armorBlock = Math.min(target.armor, damage * 0.3);
  target.armor -= armorBlock;
  target.hp -= Math.max(damage - armorBlock, 0);
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function makeRemoteMesh(weapon: WeaponId) {
  const color = WEAPONS[weapon].type === "hitscan" ? "#81e6d9" : "#f77f00";
  const geo = new THREE.CapsuleGeometry(0.6, 1.2, 6, 10);
  const mat = new THREE.MeshStandardMaterial({
    color,
    emissive: new THREE.Color(color).multiplyScalar(0.3),
    roughness: 0.4,
    metalness: 0.1
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  return mesh;
}

