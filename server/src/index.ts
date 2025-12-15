import express from "express";
import { createServer } from "http";
import Colyseus from "colyseus";
import { BattleRoom } from "./rooms/BattleRoom.js";

const PORT = Number(process.env.PORT) || 2567;

const app = express();
app.get("/health", (_req, res) => res.send("ok"));
app.get("/servers", (req, res) => {
  const host = req.hostname || "localhost";
  res.json({
    rooms: [
      {
        name: "battle",
        url: `ws://${host}:${PORT}`,
        map: "earth"
      }
    ]
  });
});

const httpServer = createServer(app);
const gameServer = new Colyseus.Server({
  server: httpServer
});

gameServer.define("battle", BattleRoom);

httpServer.listen(PORT, () => {
  console.log(`Christmas Shock server running on :${PORT}`);
});

