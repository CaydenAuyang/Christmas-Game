import * as THREE from "three";
import { Client as ColyseusClient, Room } from "colyseus.js";
import { WEAPONS, AVATARS, type MapId, type PlayerInput, type WeaponId } from "@christmas/shared";
import type { MapDefinition } from "@christmas/shared";
import { MAP_DEFINITIONS } from "../maps/mapData";
import { buildSceneForMap } from "../maps/loadMap";
import { AUDIO } from "../audio/AudioManager";

export type GameMode = "menu" | "bots" | "multiplayer" | "adventure";

export interface GameClientOptions {
  mapId: MapId;
  mode: GameMode;
  playerName: string;
  loadout: { primary: WeaponId; secondary: WeaponId; avatarId: string };
  onHud?: (hud: HudState) => void;
  onExit?: () => void;
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
  stageInfo?: string; // New field for UI
  bannerText?: string;
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
  healthBar?: THREE.Group;
  strafeDir: number;
  strafeTimer: number;
  // Melee Visuals
  swingProgress: number; // 0 to 1
  isSwinging: boolean;
  swordMesh?: THREE.Group; // Reference to rotate
  // Respawn
  respawnTimer: number;
}

interface Projectile {
  mesh: THREE.Group;
  velocity: THREE.Vector3;
  ownerId: string;
  damage: number;
  radius: number;
  life: number;
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
  private projectiles: Projectile[] = [];
  private mode: GameMode;
  private loadout: GameClientOptions["loadout"];
  private hud?: (hud: HudState) => void;
  private onExitCallback?: () => void;
  private score = 0;
  private pointerLocked = false;
  private inputState = {
    forward: 0,
    right: 0,
    jump: false,
    fireHeld: false,
    aimHeld: false, // ADS
    reload: false,
    yaw: 0,
    pitch: 0
  };
  private netClient: ColyseusClient | null = null;
  private netRoom: Room | null = null;
  private remoteMeshes = new Map<string, THREE.Group>();
  private localMesh!: THREE.Group;

  private trails: { mesh: THREE.Mesh; life: number; maxLife: number; startScale: number }[] = [];
  private raycaster = new THREE.Raycaster();

  private defaultFov = 75;
  private lastHitSound = 0;
  private adsFov = 40;

  // Adventure Mode State
  private stage = 1;
  private maxStage = 5;
  private isBossStage = false;
  private bossEntity: Entity | null = null;
  private gameWon = false;
  private bannerText = "";

  constructor(container: HTMLDivElement, options: GameClientOptions) {
    this.container = container;
    this.mode = options.mode;
    this.loadout = options.loadout;
    this.hud = options.onHud;
    this.onExitCallback = options.onExit;
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;

    if (container.clientWidth === 0 || container.clientHeight === 0) {
      console.warn("GameClient initialized with 0 dimensions. Canvas will be invisible.", container.clientWidth, container.clientHeight);
    }

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(this.defaultFov, container.clientWidth / container.clientHeight, 0.1, 500);
    this.camera.position.set(0, 2, 6);

    container.appendChild(this.renderer.domElement);
    this.bindEvents();
    this.loadMap(options.mapId);
    this.spawnPlayer(options.playerName);

    // Runtime Patch for Stale Cache: Ensure new values are applied
    if (WEAPONS.candy_shotgun) WEAPONS.candy_shotgun.magSize = 12;
    if (WEAPONS.gift_launcher) WEAPONS.gift_launcher.magSize = 6;
    if (WEAPONS.icicle_rifle) WEAPONS.icicle_rifle.magSize = 15;

    if (this.mode === "bots") {
      this.spawnBots(6);
    } else if (this.mode === "adventure") {
      this.startAdventureStage();
    } else if (this.mode === "multiplayer") {
      this.setupMultiplayer(options.mapId, options.playerName).catch((err) => {
        console.error("Multiplayer connect failed", err);
      });
    } else if (this.mode === "menu") {
      this.spawnBots(6);
    }

    this.updateHud();

    // Start music on first click
    const theme = this.mode === 'menu' ? 'lobby' : options.mapId;
    document.addEventListener("click", () => AUDIO.startMusic(theme as any), { once: true });
  }

  private bindEvents() {
    window.addEventListener("resize", this.onResize);

    if (this.mode !== "menu") {
      this.container.addEventListener("click", () => {
        this.container.requestPointerLock();
      });
      document.addEventListener("pointerlockchange", () => {
        this.pointerLocked = document.pointerLockElement === this.container;
        if (!this.pointerLocked) {
          // Show menu or pause? 
        }
      });
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("keydown", this.onKeyDown);
      document.addEventListener("keyup", this.onKeyUp);
      document.addEventListener("mousedown", (e) => {
        if (e.button === 0) this.inputState.fireHeld = true;
        if (e.button === 2) this.inputState.aimHeld = true; // ADS
      });
      document.addEventListener("mouseup", (e) => {
        if (e.button === 0) this.inputState.fireHeld = false;
        if (e.button === 2) this.inputState.aimHeld = false; // ADS
      });
      // Prevent context menu
      document.addEventListener("contextmenu", (e) => e.preventDefault());
    }
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
      reserveAmmo: Infinity,
      isBot: false,
      nextFire: 0,
      strafeDir: 0,
      strafeTimer: 0,
      swingProgress: 0,
      isSwinging: false,
      respawnTimer: 0
    };

    this.localMesh = makePlayerMesh(this.player.weapon, false);
    this.localMesh.position.copy(this.player.position);
    this.localMesh.userData.entityId = this.player.id; // Tag for hit detection
    this.scene.add(this.localMesh);

    this.updateCamera();
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
        const mesh = makePlayerMesh(player.weapon as WeaponId, false);
        mesh.position.set(player.x, player.y, player.z);
        mesh.userData.entityId = key; // Remote ID
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

  private startAdventureStage() {
    // CLEAR existing bots
    for (const b of this.bots) {
      if ((b as any).mesh) this.scene.remove((b as any).mesh);
      if (b.healthBar) this.scene.remove(b.healthBar);
    }
    this.bots = [];
    this.bossEntity = null; // Reset boss ref, though we might set it again in stage 5

    // START SEQUENCE
    this.bannerText = `STAGE ${this.stage}`;
    this.updateHud();
    this.speak(`Stage ${this.stage}`);

    // 3... 2... 1... GO logic
    let count = 3;
    const countdown = () => {
      if (count > 0) {
        this.bannerText = `${count}...`;
        this.updateHud();
        // Short beep?
        count--;
        setTimeout(countdown, 1000);
      } else {
        this.bannerText = "START!";
        this.updateHud();
        this.speak("Start!");

        this.doSpawnWave();

        // Clear banner after 2s
        setTimeout(() => {
          this.bannerText = "";
          this.updateHud();
        }, 2000);
      }
    }

    setTimeout(countdown, 1500); // Wait a bit after showing Stage text

    this.player.hp = 100; // Reset HP
    this.player.armor = 25;
  }

  private speak(text: string) {
    if (!window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.rate = 1.1;
    utter.pitch = 1.0;
    window.speechSynthesis.speak(utter);
  }

  private doSpawnWave() {
    // Stage Counts: 7, 20, 35, 50, 70
    let count = 7;
    if (this.stage === 2) count = 20;
    if (this.stage === 3) count = 35;
    if (this.stage === 4) count = 50;
    if (this.stage === 5) count = 70;

    this.spawnBots(count);

    // STAGE 5 BOSS INTEGRATION
    if (this.stage === 5) {
      this.spawnBoss();
    }
  }

  private spawnBoss() {
    this.isBossStage = true; // Although integrated, we flag it
    const spawn = pickRandom(this.map.spawnPoints);
    const weapon: WeaponId = "icicle_rifle";

    const boss: Entity = {
      id: "boss",
      name: "KRAMPUS",
      position: new THREE.Vector3(...spawn),
      velocity: new THREE.Vector3(),
      yaw: 0,
      pitch: 0,
      hp: 5000,
      armor: 100,
      weapon,
      magAmmo: Infinity,
      reserveAmmo: Infinity,
      isBot: true,
      nextFire: 0,
      strafeDir: 0,
      strafeTimer: 0,
      swingProgress: 0,
      isSwinging: false,
      respawnTimer: 0
    };

    // BOSS MESH
    const bossGroup = new THREE.Group();
    // Body
    const bodyGeo = new THREE.CapsuleGeometry(1.5, 3, 4, 8);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x228b22, roughness: 0.8 });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = 2.5;
    bossGroup.add(body);
    // Head
    const headGeo = new THREE.SphereGeometry(1.2, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x006400 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 4.5;
    head.userData.isHead = true;
    bossGroup.add(head);

    // Add collision volume for projectile hits (Large box)
    const hitVol = new THREE.Mesh(
      new THREE.BoxGeometry(3, 6, 3),
      new THREE.MeshBasicMaterial({ visible: false })
    );
    hitVol.position.y = 2.5;
    hitVol.userData.entityId = boss.id;
    bossGroup.add(hitVol);

    // Horns
    const hornGeo = new THREE.ConeGeometry(0.2, 1, 8);
    const hornMat = new THREE.MeshStandardMaterial({ color: 0x111111 });
    const h1 = new THREE.Mesh(hornGeo, hornMat);
    h1.position.set(0.6, 5.2, 0);
    h1.rotation.z = -0.5;
    bossGroup.add(h1);
    const h2 = new THREE.Mesh(hornGeo, hornMat);
    h2.position.set(-0.6, 5.2, 0);
    h2.rotation.z = 0.5;
    bossGroup.add(h2);

    bossGroup.position.copy(boss.position);
    bossGroup.userData.entityId = boss.id;

    this.scene.add(bossGroup);
    (boss as any).mesh = bossGroup;

    const hb = makeHealthBar();
    hb.scale.set(3, 3, 3);
    this.scene.add(hb);
    boss.healthBar = hb;

    // Add Boss to Bots list (unlike before where it replaced them? No, before it was [boss])
    // Now we append
    this.bots.push(boss);
    this.bossEntity = boss;
    AUDIO.playDeath();
  }

  private spawnBots(count = 6) {
    this.bots = [];
    for (let i = 0; i < count; i++) {
      const spawn = pickRandom(this.map.spawnPoints);
      const weapon: WeaponId = "snow_smg";
      this.bots.push({
        id: `bot-${i}`,
        name: `Bot ${i + 1}`,
        position: new THREE.Vector3(...spawn),
        velocity: new THREE.Vector3(),
        yaw: Math.random() * Math.PI * 2,
        pitch: 0,
        hp: 100,
        armor: 10,
        weapon,
        magAmmo: 0,
        reserveAmmo: 0,
        isBot: true,
        nextFire: 0,
        strafeDir: 0,
        strafeTimer: 0,
        swingProgress: 0,
        isSwinging: false,
        respawnTimer: 0
      });
      const botMeshGroup = makePlayerMesh(weapon, true);
      botMeshGroup.position.copy(this.bots[i].position);
      botMeshGroup.rotation.y = this.bots[i].yaw;
      botMeshGroup.userData.entityId = this.bots[i].id; // Hit detection tag
      this.scene.add(botMeshGroup);

      (this.bots[i] as any).mesh = botMeshGroup;

      const sword = botMeshGroup.userData.sword;
      this.bots[i].swordMesh = sword;

      const hb = makeHealthBar();
      this.scene.add(hb);
      this.bots[i].healthBar = hb;
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
    // document.removeEventListener("mousedown", ...); // TODO cleanup named handlers
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
    this.renderer.dispose();
  }

  private victoryParticles: { mesh: THREE.Mesh, vel: THREE.Vector3, life: number }[] = [];

  private gameLost = false;

  private triggerDefeat() {
    if (this.gameLost) return;
    this.gameLost = true;

    // Banner
    this.bannerText = "DEFEAT";
    this.updateHud();

    // Audio
    this.speak("You died.");
    AUDIO.startMusic("defeat");

    // Exit after 5s
    setTimeout(() => {
      if (this.onExitCallback) this.onExitCallback();
    }, 5000);
  }

  private triggerVictory() {
    if (this.gameWon) return; // Already won
    this.gameWon = true;

    // Banner
    this.bannerText = "VICTORY!";
    this.updateHud();

    // Audio
    this.speak("Merry Christmas! Victory!");
    AUDIO.startMusic("victory"); // Closest to "winning" song we have handy, or re-purpose

    // Fireworks Loop
    const fireworkInterval = setInterval(() => {
      if (!this.running) { clearInterval(fireworkInterval); return; }
      this.spawnFirework();
    }, 500);

    // Exit after 5s
    setTimeout(() => {
      clearInterval(fireworkInterval);
      if (this.onExitCallback) this.onExitCallback();
    }, 5000);
  }

  private spawnFirework() {
    const color = new THREE.Color().setHSL(Math.random(), 1, 0.5);
    const pos = this.player.position.clone().add(new THREE.Vector3((Math.random() - 0.5) * 20, 10 + Math.random() * 5, (Math.random() - 0.5) * 20 - 10));

    const geo = new THREE.SphereGeometry(0.2, 8, 8);
    const mat = new THREE.MeshBasicMaterial({ color });

    // Explosion
    for (let i = 0; i < 20; i++) {
      const p = new THREE.Mesh(geo, mat);
      p.position.copy(pos);
      this.scene.add(p);
      const vel = new THREE.Vector3((Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5)).normalize().multiplyScalar(5 + Math.random() * 5);
      this.victoryParticles.push({ mesh: p, vel, life: 2.0 });
    }
    AUDIO.playShoot('snowball'); // Pop sound
  }

  private tick = () => {
    const dt = Math.min(this.clock.getDelta(), 0.05);

    if (this.mode === "menu") {
      const time = Date.now() * 0.0005;
      const radius = 5;
      this.camera.position.x = this.player.position.x + Math.sin(time) * radius;
      this.camera.position.z = this.player.position.z + Math.cos(time) * radius;
      this.camera.position.y = this.player.position.y + 2;
      this.camera.lookAt(this.player.position.clone().add(new THREE.Vector3(0, 1.5, 0)));

      this.player.yaw = time;
      this.localMesh.rotation.y = this.player.yaw;
    } else {
      this.stepPlayer(dt);
    }

    if (this.mode === "bots" || this.mode === "menu" || this.mode === "adventure") {
      this.stepBots(dt);
    }

    this.stepProjectiles(dt);
    this.updateTrails(dt);

    // Victory Fireworks
    for (let i = this.victoryParticles.length - 1; i >= 0; i--) {
      const p = this.victoryParticles[i];
      p.life -= dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      p.vel.y -= 5 * dt; // Gravity
      p.mesh.scale.setScalar(p.life / 2.0);

      if (p.life <= 0) {
        this.scene.remove(p.mesh);
        this.victoryParticles.splice(i, 1);
      }
    }

    // ADS Zoom
    const targetFov = this.inputState.aimHeld ? this.adsFov : this.defaultFov;
    if (Math.abs(this.camera.fov - targetFov) > 0.1) {
      this.camera.fov += (targetFov - this.camera.fov) * dt * 10;
      this.camera.updateProjectionMatrix();
    }

    this.updateHud();
    this.renderer.render(this.scene, this.camera);
  };

  private updateTrails(dt: number) {
    // Animate Textures/Trails
    for (let i = this.trails.length - 1; i >= 0; i--) {
      const t = this.trails[i];
      t.life -= dt;
      if (t.life <= 0) {
        this.scene.remove(t.mesh);
        this.trails.splice(i, 1);
      } else {
        const pct = t.life / t.maxLife; // 1 -> 0
        (t.mesh.material as THREE.Material).opacity = pct;
        // Shrink thickness
        t.mesh.scale.set(pct * t.startScale, 1, pct * t.startScale);
      }
    }
  }

  private stepProjectiles(dt: number) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const p = this.projectiles[i];
      p.life -= dt;
      p.mesh.position.addScaledVector(p.velocity, dt);

      // Collision Check
      let hit = false;
      // Targets: Bots + Player (if p.ownerId != id)
      const targets = [...this.bots];
      if (this.player.hp > 0) targets.push(this.player);

      for (const t of targets) {
        if (t.id === p.ownerId) continue;
        if (t.hp <= 0) continue;

        // Radius check
        let r = 1.0;
        if (t.id === "boss") r = 3.5;

        if (p.mesh.position.distanceTo(t.position) < r + p.radius) {
          hit = true;
          applyDamage(t, p.damage);
          AUDIO.playOof();
          if (t.hp <= 0) AUDIO.playDeath();
          break;
        }
      }

      if (hit || p.life <= 0) {
        this.scene.remove(p.mesh);
        this.projectiles.splice(i, 1);
      }
    }
  }



  private stepPlayer(dt: number) {
    this.player.nextFire -= dt; // Global cooldown timer

    if (this.player.hp <= 0) {
      // Adventure Mode: Defeat
      if (this.mode === "adventure") {
        this.triggerDefeat();
        return;
      }

      if (!this.player.respawnTimer) this.player.respawnTimer = 3; // Init timer on death
      this.player.respawnTimer -= dt;
      this.localMesh.visible = false;
      if (this.player.respawnTimer <= 0) {
        // Respawn
        const spawn = pickRandom(this.map.spawnPoints);
        this.player.position.set(...spawn);
        this.player.hp = 100;
        this.player.armor = 25;
        this.player.magAmmo = WEAPONS[this.player.weapon].magSize; // Refill
        this.localMesh.visible = true;
        this.player.velocity.set(0, 0, 0);
        this.player.respawnTimer = 0;
      }
      return; // Dead, no move
    }

    const speed = 15; // Increased from 10
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

    // Jump Logic: Check ground roughly
    if (this.inputState.jump && this.player.position.y <= 1.3) {
      this.player.velocity.y = 8; // Jump impulse
      this.inputState.jump = false; // Consume jump
    }

    const nextPos = this.player.position.clone().addScaledVector(this.player.velocity, dt);

    // Simple Floor Collision (Updated with Map Objects)
    this.checkMapCollision(nextPos, this.player.velocity, dt);

    this.clampToBounds(nextPos);
    this.player.position.copy(nextPos);

    this.localMesh.position.copy(this.player.position);
    this.localMesh.rotation.y = this.player.yaw;
    // Critical for trail origin accuracy during movement
    this.localMesh.updateMatrixWorld(true);

    this.updateCamera();

    if (this.inputState.fireHeld) {
      this.tryFire(this.player, this.bots, dt);
    }
  }

  private updateCamera() {
    const camDist = 4;
    const camHeight = 2.5;

    const offset = new THREE.Vector3(0, camHeight, camDist);
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), this.player.yaw);

    const camPos = this.player.position.clone().add(offset);
    this.camera.position.lerp(camPos, 0.2);

    const lookTarget = this.player.position.clone().add(new THREE.Vector3(0, 1.5, 0));
    lookTarget.y += Math.sin(this.player.pitch) * 5;

    this.camera.lookAt(lookTarget);
  }

  private stepBots(dt: number) {
    for (let i = 0; i < this.bots.length; i++) {
      // ... respawn logic ...
      const bot = this.bots[i];
      bot.nextFire -= dt; // Global cooldown update

      if (bot.hp <= 0) {
        if (this.mode === "adventure") {
          // No Respawn in Adventure
          if ((bot as any).mesh) this.scene.remove((bot as any).mesh);
          if (bot.healthBar) this.scene.remove(bot.healthBar);

          // Remove from array
          this.bots.splice(i, 1);
          i--;

          // Check Victory or Stage Complete
          // Logic: If Boss was spawned (stage 5) and is dead... check if other bots remain.
          // If just boss dead but minions remain? User must kill all.
          // So just check this.bots.length === 0.
          // BUT ensure we don't trigger stage clear if we just killed a minion but boss is still alive/not spawned yet?
          // "if user can kill all ... it will go to next stage"
          // "if user kills all 45 ... boss mode" -> Now integrated.
          // So simply: if bots.length === 0:
          // If stage 5: VICTORY.
          // Else: Next Stage.

          if (this.bots.length === 0) {
            if (this.stage === 5) {
              this.triggerVictory();
            } else {
              this.stage++;
              setTimeout(() => this.startAdventureStage(), 2000);
            }
          }
          continue;
        }
        // ... Normal respawn logic unchanged ...
        if (!bot.respawnTimer) bot.respawnTimer = 2; // Faster respawn
        bot.respawnTimer -= dt;
        if ((bot as any).mesh) (bot as any).mesh.visible = false;
        if (bot.healthBar) bot.healthBar.visible = false;

        if (bot.respawnTimer <= 0) {
          const spawn = pickRandom(this.map.spawnPoints);
          bot.position.set(...spawn);
          bot.hp = 100;
          bot.armor = 10;
          bot.swingProgress = 0;
          bot.isSwinging = false;
          bot.respawnTimer = 0;
          if ((bot as any).mesh) (bot as any).mesh.visible = true;
          if (bot.healthBar) bot.healthBar.visible = true;
        }
        continue;
      }

      const toPlayer = this.player.position.clone().sub(bot.position);
      const distance = toPlayer.length();

      // ... Separation Logic ...
      const sepVector = new THREE.Vector3();
      for (let j = 0; j < this.bots.length; j++) {
        if (i === j) continue;
        const other = this.bots[j];
        if (other.hp <= 0) continue;
        const dist = bot.position.distanceTo(other.position);
        if (dist < 1.5) {
          const push = bot.position.clone().sub(other.position).normalize();
          sepVector.add(push);
        }
      }

      bot.yaw = Math.atan2(toPlayer.x, toPlayer.z);

      // Speed Increase logic
      let moveSpeed = 5.5;
      if (this.mode === "adventure") {
        // 10% faster per stage
        moveSpeed = 5.5 * (1 + (this.stage - 1) * 0.1);
      } else {
        // Bots mode: maybe make them faster over time? Or stick to 5.5
        moveSpeed = 5.5;
      }

      if (distance > 1.8) {
        bot.velocity.x = Math.sin(bot.yaw) * moveSpeed;
        bot.velocity.z = Math.cos(bot.yaw) * moveSpeed;
      } else {
        bot.velocity.x = 0;
        bot.velocity.z = 0;
      }

      if (sepVector.lengthSq() > 0) {
        sepVector.normalize().multiplyScalar(4);
        bot.velocity.add(sepVector);
      }

      bot.velocity.y += this.map.gravity * dt;
      // ... physics and mesh update ...
      const nextPos = bot.position.clone().addScaledVector(bot.velocity, dt);

      // Reverted to simple floor collision for bots to prevent getting stuck
      if (nextPos.y < 1.2) {
        nextPos.y = 1.2;
        bot.velocity.y = 0;
      }

      this.clampToBounds(nextPos);
      bot.position.copy(nextPos);

      if ((bot as any).mesh) {
        (bot as any).mesh.position.copy(bot.position);
        (bot as any).mesh.rotation.y = bot.yaw + Math.PI;
        // No Y rotation for bot mesh (upright)
        (bot as any).mesh.updateMatrixWorld(true);
      }

      // ... healthbar ...
      if (bot.healthBar) {
        bot.healthBar.position.copy(bot.position).add(new THREE.Vector3(0, 2.8, 0));
        bot.healthBar.lookAt(this.camera.position);
        const green = bot.healthBar.children[1];
        const pct = Math.max(bot.hp / 100, 0);
        green.scale.set(pct, 1, 1);
        green.position.x = -0.5 + (pct / 2);
      }

      // ... melee logic ...
      if (bot.isSwinging) {
        bot.swingProgress += dt * 4;
        if (bot.swingProgress >= 1) {
          bot.isSwinging = false;
          bot.swingProgress = 0;
        }
        if (bot.swordMesh) {
          const base = -Math.PI / 4;
          const swing = Math.sin(bot.swingProgress * Math.PI) * 1.5;
          bot.swordMesh.rotation.x = base + swing;
        }
      } else {
        if (bot.swordMesh) bot.swordMesh.rotation.x = -Math.PI / 4;

        if (distance < 2.5) {
          bot.nextFire -= dt;
          if (bot.nextFire <= 0) {
            bot.isSwinging = true;
            bot.swingProgress = 0;
            bot.nextFire = 1.0;

            if (distance < 2.5 && this.player.hp > 0) {
              applyDamage(this.player, 15);
              AUDIO.playOof(); // Bot hit player
              const knock = new THREE.Vector3(Math.sin(bot.yaw), 0, Math.cos(bot.yaw)).normalize().multiplyScalar(15);
              this.player.velocity.add(knock);
            }
          }
        }
      }
    }
  }

  // Updated tryFire (no decrement nextFire, just check)
  private tryFire(shooter: Entity, targets: Entity[], dt: number) {
    const weapon = WEAPONS[shooter.weapon];
    if (shooter.nextFire > 0) return;
    if (shooter.magAmmo <= 0) return;

    shooter.magAmmo -= 1;
    shooter.nextFire = 1 / weapon.fireRate; // Reset Timer

    // Play Sound
    if (shooter.id === "local") {
      if (weapon.id.includes('shotgun')) AUDIO.playShoot('shotgun');
      else if (weapon.id.includes('icicle')) AUDIO.playShoot('icicle');
      else if (weapon.id.includes('gift')) AUDIO.playShoot('gift');
      else AUDIO.playShoot('snowball');
    }

    // 1. Muzzle Origin
    let origin = shooter.position.clone().add(new THREE.Vector3(0, 1.3, 0));
    let mesh: THREE.Group | undefined;
    if (shooter.id === "local") mesh = this.localMesh;
    else mesh = (shooter as any).mesh;

    if (mesh && mesh.userData.muzzle) {
      const muzzlePos = new THREE.Vector3();
      mesh.userData.muzzle.getWorldPosition(muzzlePos);
      origin = muzzlePos;
    } else {
      const right = new THREE.Vector3(Math.cos(shooter.yaw), 0, -Math.sin(shooter.yaw));
      origin.addScaledVector(right, 0.4);
    }

    // 2. Aim Dir
    let baseDirection = new THREE.Vector3();
    if (!shooter.isBot && shooter.id === "local") {
      // Convergent Aiming: Raycast from Camera Center -> World
      // This ensures the bullet goes EXACTLY where the crosshair (center screen) points
      const camDir = new THREE.Vector3();
      this.camera.getWorldDirection(camDir);
      this.raycaster.set(this.camera.position, camDir);

      // Find what we are looking at
      const intersects = this.raycaster.intersectObjects(this.scene.children, true);
      let targetPoint = this.camera.position.clone().addScaledVector(camDir, 100); // Default far point

      for (const hit of intersects) {
        if (hit.distance < 1.0) continue; // Skip near clipping issues
        if (hit.object.name === "sky") continue; // Don't aim at sky sphere surface if inside
        // Ignore self
        let isSelf = false;
        let obj: THREE.Object3D | null = hit.object;
        while (obj) {
          if (obj.userData?.entityId === shooter.id) {
            isSelf = true;
            break;
          }
          obj = obj.parent;
        }
        if (isSelf) continue;

        targetPoint = hit.point;
        break;
      }

      // Calculate direction from Muzzle -> TargetPoint
      baseDirection.subVectors(targetPoint, origin).normalize();

    } else {
      baseDirection.set(
        Math.sin(shooter.yaw) * Math.cos(shooter.pitch),
        Math.sin(-shooter.pitch),
        Math.cos(shooter.yaw) * Math.cos(shooter.pitch)
      ).normalize();
    }

    // Special: Gift Launcher Projectile
    if (weapon.type === "projectile" && weapon.id === "gift_launcher") {
      const direction = baseDirection.clone();
      // Create Projectile Mesh (Gift Box)
      const boxGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const boxMat = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      const pMesh = new THREE.Group();
      const box = new THREE.Mesh(boxGeo, boxMat);
      pMesh.add(box);

      // Add particles or ribbon?

      pMesh.position.copy(origin);
      this.scene.add(pMesh);

      const speed = weapon.projectileSpeed || 30;
      this.projectiles.push({
        mesh: pMesh,
        velocity: direction.multiplyScalar(speed),
        ownerId: shooter.id,
        damage: weapon.damage,
        radius: 2.4, // Decreased by 70% (was 8)
        life: 5.0
      });
      return; // Done
    }

    // HITSCAN
    const pellets = weapon.pellets || 1;
    let hitSoundPlayed = false;

    for (let p = 0; p < pellets; p++) {
      const direction = baseDirection.clone();
      if (weapon.spread > 0) {
        const spreadX = (Math.random() - 0.5) * weapon.spread;
        const spreadY = (Math.random() - 0.5) * weapon.spread;
        const spreadZ = (Math.random() - 0.5) * weapon.spread;
        direction.add(new THREE.Vector3(spreadX, spreadY, spreadZ)).normalize();
      }

      this.raycaster.set(origin, direction);
      const intersects = this.raycaster.intersectObjects(this.scene.children, true);

      let hitPoint = origin.clone().addScaledVector(direction, 300);
      let hitEntity: Entity | null = null;
      let isHeadshot = false;

      // Single Pass Traversal
      for (const hit of intersects) {
        if (hit.distance < 0.2) continue;

        // Traverse up to find root or entity ID
        let obj: THREE.Object3D | null = hit.object;
        let foundId: string | null = null;
        let headFound = false;

        while (obj) {
          if (obj.userData?.isHead) headFound = true;
          if (obj.userData?.entityId) {
            foundId = obj.userData.entityId;
            break;
          }
          if (obj.parent === null) break; // Root
          obj = obj.parent;
        }

        if (foundId) {
          // Check if this ID is a valid target
          const t = targets.find(t => t.id === foundId);
          if (t) {
            hitEntity = t;
            hitPoint = hit.point;
            isHeadshot = headFound;
            break; // Hit a target
          } else {
            if (foundId === shooter.id) continue;
          }
        }

        // If we hit world/sky/untagged mesh
        if (!foundId && hit.object.type === "Mesh" && hit.object.name !== "sky") {
          hitPoint = hit.point;
          break; // Hit wall
        }
      }

      this.createBulletTrail(origin, hitPoint, weapon.type);

      if (hitEntity && hitEntity.hp > 0) {
        const dist = origin.distanceTo(hitPoint);
        if (dist <= 300) {
          let damage = weapon.damage;
          if (isHeadshot) {
            damage *= 10; // Mega Critical (Guaranteed Kill)
            console.log("BOOM HEADSHOT!");
          }
          applyDamage(hitEntity, damage);

          // Audio Throttle (Max 1 hit sound per frame/fire call)
          if (!hitSoundPlayed) {
            const now = Date.now();
            if (now - this.lastHitSound > 50) { // Limit to 20 per sec
              AUDIO.playHit();
              this.lastHitSound = now;
            }
            hitSoundPlayed = true;
          }

          if (hitEntity.hp <= 0 && !shooter.isBot) {
            this.score += 1;
            AUDIO.playPoint();
            AUDIO.playDeath();
            if (Math.random() > 0.3) AUDIO.playKillLine(); // 70% chance to say line
          }
        }
      }
    }
  }

  // --- Map Collision ---
  // Checks for solid objects below feet. 
  // If object is "step-able" (low enough), snap Y up.
  // If object is "wall" (too high), block X/Z movement.
  private checkMapCollision(pos: THREE.Vector3, vel: THREE.Vector3, dt: number) {
    const down = new THREE.Vector3(0, -1, 0);
    const rayStart = pos.clone().add(new THREE.Vector3(0, 1.0, 0));
    this.raycaster.set(rayStart, down);

    const intersects = this.raycaster.intersectObjects(this.scene.children, true);
    let groundY = 0;
    let hitSolid = false;

    for (const hit of intersects) {
      let obj: THREE.Object3D | null = hit.object;
      let isSolid = false;
      let isPlayer = false;

      while (obj) {
        if (obj.userData?.solid) isSolid = true;
        if (obj.userData?.entityId) isPlayer = true;
        if (obj.parent === null) break;
        obj = obj.parent;
      }

      if (isPlayer) continue;

      if (isSolid || hit.object.name !== "sky") {
        groundY = hit.point.y;
        hitSolid = isSolid;
        break;
      }
    }

    // Physics Logic
    const floorHeight = 1.2;
    const stepMax = 0.5; // Max height we can auto-step up
    const targetY = groundY + floorHeight;

    // Current foot pos (approx)
    const currentFootY = pos.y;

    if (targetY > currentFootY + stepMax) {
      // It's a wall/high object.
      // 1. Don't snap Y up.
      // 2. Stop forward movement (Simple bounce/slideless stop)
      // Revert X/Z to previous (approx by subtracting velocity)
      // This prevents "walking through" high objects
      if (hitSolid) {
        pos.x -= vel.x * dt;
        pos.z -= vel.z * dt;
        // Don't stop velocity, just position, to allow 'sliding' feel if we had better physics, 
        // but here just stop is fine.
      }

      // Ensure we don't fall below base floor
      if (pos.y < 1.2) pos.y = 1.2;
    } else {
      // Low enough to step up, or we are jumping over it
      if (pos.y < targetY) {
        pos.y = targetY;
        if (vel.y < 0) vel.y = 0; // Landed
      }
    }
  }

  private createBulletTrail(start: THREE.Vector3, end: THREE.Vector3, type: "hitscan" | "projectile") {
    const isShotgun = type === "hitscan" && this.player.weapon.includes("shotgun"); // rough check
    const color = isShotgun ? 0xffaa00 : 0xffff00;
    const thickness = isShotgun ? 0.05 : 0.15; // Shotgun thinner trails

    const direction = new THREE.Vector3().subVectors(end, start);
    const length = direction.length();

    const geo = new THREE.CylinderGeometry(thickness, thickness, length, 8, 1, true);
    geo.rotateX(Math.PI / 2);
    geo.translate(0, 0, length / 2);

    const mat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(start);
    mesh.lookAt(end);

    this.scene.add(mesh);
    this.trails.push({ mesh, life: 0.2, maxLife: 0.2, startScale: 1.0 });
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
    if (this.hud) {
      let stageInfo = "";
      if (this.mode === "adventure") {
        if (this.gameWon) stageInfo = "VICTORY! MERRY CHRISTMAS!";
        else if (this.isBossStage) stageInfo = "BOSS FIGHT";
        else stageInfo = `Stage ${this.stage} / ${this.maxStage} - Enemies: ${this.bots.length}`;
      }

      this.hud({
        hp: this.player.hp,
        armor: this.player.armor,
        weapon: this.player.weapon,
        magAmmo: this.player.magAmmo,
        reserveAmmo: this.player.reserveAmmo,
        score: this.score,
        mode: this.mode,
        map: this.map.id,
        stageInfo,
        bannerText: this.bannerText
      });
    }
  }

  private reload() {
    const weapon = WEAPONS[this.player.weapon];
    if (this.player.magAmmo >= weapon.magSize) return;

    // Infinite reserve logic: Just fill the mag
    const toLoad = weapon.magSize - this.player.magAmmo;
    this.player.magAmmo += toLoad;
    // this.player.reserveAmmo -= toLoad; // Disabled for Infinite Ammo
    this.player.nextFire = weapon.reloadTime;
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
    if (e.code === "KeyR") this.reload();
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

function makePlayerMesh(weaponId: WeaponId, isBot: boolean, avatarId: string = "snowman") {
  const group = new THREE.Group();
  group.userData = {}; // Init userData

  // -- Avatar Colors --
  let primaryColor = 0xffffff;
  let secondaryColor = 0x222222;

  // Use Shared Definitions
  const av = AVATARS.find(a => a.id === avatarId);
  if (av) {
    // Hex string to number? Shared likely has strings like "#ff0000" or hex numbers.
    // AVATARS is: export const AVATARS = [ { id: "santa", name: "Santa", color: 0xff0000, ... } ]
    // Assuming shared has color as number based on my knowledge of shared pattern in this project.
    // If it has color property...
    if ((av as any).color) primaryColor = (av as any).color;
  }

  // Bot override
  if (isBot) {
    primaryColor = 0xdddddd;
    secondaryColor = 0x444444;
  }

  const snowMat = new THREE.MeshStandardMaterial({
    color: primaryColor,
    roughness: 0.9,
    metalness: 0.1
  });

  // Base
  const baseGeo = new THREE.SphereGeometry(0.6, 16, 16);
  const base = new THREE.Mesh(baseGeo, snowMat);
  base.position.y = 0.6;
  base.castShadow = true;
  base.receiveShadow = true;
  group.add(base);

  // Middle
  const midGeo = new THREE.SphereGeometry(0.45, 16, 16);
  const mid = new THREE.Mesh(midGeo, snowMat);
  mid.position.y = 1.4;
  mid.castShadow = true;
  mid.receiveShadow = true;
  group.add(mid);

  // Belt/Buttons for secondary color?
  const btnGeo = new THREE.SphereGeometry(0.05, 8, 8);
  const btnMat = new THREE.MeshBasicMaterial({ color: secondaryColor });
  const b1 = new THREE.Mesh(btnGeo, btnMat);
  b1.position.set(0, 1.3, 0.42);
  group.add(b1);
  const b2 = new THREE.Mesh(btnGeo, btnMat);
  b2.position.set(0, 1.5, 0.4);
  group.add(b2);

  // Head
  const headGeo = new THREE.SphereGeometry(0.3, 16, 16);
  const head = new THREE.Mesh(headGeo, snowMat);
  head.position.y = 2.0;
  head.castShadow = true;
  head.receiveShadow = true;
  head.userData.isHead = true; // Tag for headshots
  group.add(head);

  // Features orientation: Nose to -Z (Forward)
  const noseGeo = new THREE.ConeGeometry(0.05, 0.3, 8);
  const noseMat = new THREE.MeshStandardMaterial({ color: 0xffa500 });
  const nose = new THREE.Mesh(noseGeo, noseMat);
  nose.rotation.x = Math.PI / 2; // Point along Z
  nose.position.set(0, 0, -0.3);
  head.add(nose);


  // Eyes
  const eyeColor = isBot ? 0xff0000 : 0x000000;
  const eyeGeo = new THREE.SphereGeometry(0.04, 8, 8);
  const eyeMat = new THREE.MeshBasicMaterial({ color: eyeColor });

  const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
  eyeL.position.set(-0.1, 0.1, -0.25);
  head.add(eyeL);

  const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
  eyeR.position.set(0.1, 0.1, -0.25);
  head.add(eyeR);

  // Angry Eyebrows for Bots
  if (isBot) {
    const browGeo = new THREE.BoxGeometry(0.12, 0.02, 0.02);
    const browMat = new THREE.MeshBasicMaterial({ color: 0x000000 });

    const browL = new THREE.Mesh(browGeo, browMat);
    browL.position.set(-0.1, 0.18, -0.22);
    browL.rotation.z = -0.3; // Angry slant
    head.add(browL);

    const browR = new THREE.Mesh(browGeo, browMat);
    browR.position.set(0.1, 0.18, -0.22);
    browR.rotation.z = 0.3; // Angry slant
    head.add(browR);
  }

  // Arms
  const armGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.8);
  const armMat = new THREE.MeshStandardMaterial({ color: 0x5c4033 });

  const armL = new THREE.Mesh(armGeo, armMat);
  armL.rotation.z = Math.PI / 3;
  armL.position.set(-0.5, 1.4, 0);
  group.add(armL);

  // Right Arm (Weapon Holder)
  const armR = new THREE.Mesh(armGeo, armMat);
  armR.rotation.z = -Math.PI / 3;
  armR.position.set(0.5, 1.4, 0);
  group.add(armR);

  // -- Weapon --
  if (isBot) {
    // Sword
    const swordGroup = new THREE.Group();

    // Hilt
    const hiltGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.25);
    const hiltMat = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const hilt = new THREE.Mesh(hiltGeo, hiltMat);
    swordGroup.add(hilt);

    // Crossguard
    const guardGeo = new THREE.BoxGeometry(0.3, 0.05, 0.05);
    const guard = new THREE.Mesh(guardGeo, hiltMat);
    guard.position.y = 0.125;
    swordGroup.add(guard);

    // Blade
    const bladeGeo = new THREE.BoxGeometry(0.08, 0.8, 0.02);
    const bladeMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, metalness: 0.8, roughness: 0.2 });
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.55;
    swordGroup.add(blade);

    // Initial Position (Held in right hand)
    swordGroup.position.set(0.5, 1.3, -0.2); // Near right hand
    swordGroup.rotation.x = -Math.PI / 4; // Pointing somewhat forward/up

    group.add(swordGroup);
    group.userData.sword = swordGroup;

  } else {
    // Unique Gun Models
    const wGroup = new THREE.Group();
    const wMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const barrelMat = new THREE.MeshStandardMaterial({ color: 0x111111 });

    if (weaponId.includes("shotgun")) {
      // Shotgun: Long, wooden stock, spread barrel
      const stockGeo = new THREE.BoxGeometry(0.1, 0.15, 0.4);
      const stock = new THREE.Mesh(stockGeo, new THREE.MeshStandardMaterial({ color: 0x8b4513 }));
      stock.position.z = 0.2;
      wGroup.add(stock);

      const barrelGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.8);
      const barrel = new THREE.Mesh(barrelGeo, barrelMat);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.z = -0.4;
      wGroup.add(barrel);

      // Muzzle Endpoint
      const muzzle = new THREE.Object3D();
      muzzle.position.set(0, 0, -0.8); // Tip of barrel (z -0.4 - 0.4 length)
      barrel.add(muzzle);
      wGroup.userData.muzzle = muzzle;

    } else {
      // SMG/Pistol: Boxy, Magazine
      const bodyGeo = new THREE.BoxGeometry(0.12, 0.15, 0.5);
      const body = new THREE.Mesh(bodyGeo, wMat);
      wGroup.add(body);

      const barrelGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.4);
      const barrel = new THREE.Mesh(barrelGeo, barrelMat);
      barrel.rotation.x = Math.PI / 2;
      barrel.position.z = -0.45;
      wGroup.add(barrel);

      const magGeo = new THREE.BoxGeometry(0.08, 0.25, 0.1);
      const mag = new THREE.Mesh(magGeo, wMat);
      mag.position.set(0, -0.2, 0.1);
      wGroup.add(mag);

      // Muzzle Endpoint
      const muzzle = new THREE.Object3D();
      muzzle.position.set(0, 0, -0.2); // Tip 
      barrel.add(muzzle);
      wGroup.userData.muzzle = muzzle;
    }

    wGroup.position.set(0.6, 1.3, -0.5);
    group.add(wGroup);
    group.userData.muzzle = wGroup.userData.muzzle; // Expose up
  }

  return group;
}

function makeHealthBar() {
  const group = new THREE.Group();

  // Background (Red)
  const bgGeo = new THREE.PlaneGeometry(1, 0.15);
  const bgMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  const bg = new THREE.Mesh(bgGeo, bgMat);
  group.add(bg);

  // Foreground (Green)
  const fgGeo = new THREE.PlaneGeometry(1, 0.15);
  const fgMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const fg = new THREE.Mesh(fgGeo, fgMat);
  fg.position.z = 0.01; // Front
  group.add(fg);

  return group;
}
