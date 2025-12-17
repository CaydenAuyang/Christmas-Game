# Christmas Shock 🎄🔫

**Christmas Shock** is a high-octane, festive first-person shooter (FPS) where players battle waves of holiday-themed enemies to save Christmas. Built with modern web technologies, it features fast-paced arena combat, unique weapons, and a progression system through 5 intense stages.

> **Play Live**: [https://caydenauyang.github.io/Christmas-Game/](https://caydenauyang.github.io/Christmas-Game/)

---

## 🎮 How to Play

### **Objective**
Survive 5 stages of increasing difficulty. Defeat all enemies in a wave to progress to the next stage. Conserve your health, utilize power-ups, and aim for the head!

### **Controls**
- **WASD**: Move
- **Mouse**: Aim
- **Left Click**: Shoot
- **R**: Reload
- **Space**: Jump
- **Shift**: Sprint (or slow walk depending on context)

### **Game Modes**
- **Adventure**: Fight through Stages 1-5 against AI bots.
- **Bots Match**: Custom skirmish against bots.
- **Multiplayer**: Connect to a server to fight other players (requires local server hosting).

---

## ⚔️ Weapons

The game features a holiday arsenal designed for chaos:

1.  **Snowburst SMG** (Primary)
    -   *Type*: Hitscan
    -   *Description*: A rapid-fire submachine gun with infinite ammo. Fast, reliable, and perfect for run-and-gun tactics.
    -   *Stats*: 50 Damage, High Fire Rate.

2.  **Candy Cane Shotgun** (Secondary)
    -   *Type*: Hitscan (Buckshot)
    -   *Description*: A pump-action shotgun that fires peppermint shards. Devastating at close range.
    -   *Stats*: 200 Damage per pellet (9 pellets). Guaranteed elimination at point-blank.

3.  **Gift Launcher** (Special)
    -   *Type*: Projectile (Explosive)
    -   *Description*: Launches explosive gifts that deal massive splash damage. Great for crowd control.
    -   *Stats*: 1000 Damage (Direct), 30 Splash Damage (5.0 Radius). Slow projectile speed.

4.  **Icicle Rifle** (Sniper)
    -   *Type*: Hitscan
    -   *Description*: Precision rifle for picking off targets across the map.
    -   *Stats*: 1000 Damage (Insta-kill). Pinpoint accuracy.

---

## 🎅 Enemies & AI

You will face three types of festive foes:

-   **Snowman Scout**:
    -   *Behavior*: Standard ranged infantry.
    -   *Weapon*: Snowballs.
    -   *Visuals*: Custom "Face" texture.
-   **Gingerbread Gunner**:
    -   *Behavior*: Fast, aggressive melee chaser. Straps randomly to dodge shots.
    -   *Weapon*: "Gingerbread Missile" (Thrown Axe).
    -   *Abilities*: Inflicts a **Slow Effect** on hit (25% speed reduction for 1s).
    -   *Stats*: Low Damage (3), but dangerous in swarms.
-   **Krampus (Boss)**:
    -   *Behavior*: The final challenge of Stage 5. Massive health pool and high damage.
    -   *Visuals*: Giant, imposing custom face texture.

---

## 📅 Stages (Adventure Mode)

The campaign consists of 5 timed stages:

1.  **Stage 1**: *The Warm-Up*. 3 Snowmen bots. Simple introduction to combat.
2.  **Stage 2**: *Gingerbread Assault*. 5 Gingerbread bots. fast-paced melee swarms.
3.  **Stage 3**: *Mixed Forces*. 4 Snowmen + 4 Gingerbread bots. Test your target prioritization.
4.  **Stage 4**: *Horde Mode*. 8 Snowmen + 8 Gingerbread bots. Chaos reigns.
5.  **Stage 5**: *Krampus's Last Stand*. Final Boss (Krampus) + Elite Bodyguards. Infinite power-up spawns sustain the long fight.

---

## 🏗️ Technology Stack

This project was built from scratch using a modern TypeScript stack:

### **Core**
-   **TypeScript**: Strongly typed JavaScript for logic and game systems.
-   **React**: User Interface (HUD, Menus, Inventory).
-   **Vite**: Next-generation frontend tooling for lightning-fast builds.

### **Graphics & 3D Engine**
-   **Three.js**: The backbone of the 3D rendering engine. Handles visuals, geometry, materials, and lighting.
-   **Cannon.js (via simple physics)**: Custom AABB (Axis-Aligned Bounding Box) collision detection system written from scratch for performance and control.

### **Networking**
-   **Colyseus.js**: Network client for multiplayer state synchronization (when connected to a server).
-   **Node.js**: Backend server runtime.

### **Deployment**
-   **GitHub Pages**: Static hosting for the client-side application.
-   **ngrok / localtunnel**: Used to expose local development servers for multiplayer testing.

---

## 🛠️ Tools Used
-   **VS Code**: Code editing.
-   **Google Gemini (Antigravity)**: AI Co-pilot for generating code optimization, asset logic, and debugging.
-   **npm**: Dependency management.

---

## 🏃 Run Locally

To run the game on your machine:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/CaydenAuyang/Christmas-Game.git
    cd Christmas-Game
    ```

2.  **Install Dependencies**:
    ```bash
    cd client
    npm install
    ```

3.  **Start Development Server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

---

*Merry Christmas and Happy Hunting!* 🎄