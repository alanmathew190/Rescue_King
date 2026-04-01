import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { useState, useEffect } from "react";

import Player from "../src/components/Player";
import Pin from "../src/components/Pin";
import Treasure from "../src/components/Treasure";
import Lava from "../src/components/Lava";

import levelData from "../src/levels/level1.json";
import { isColliding } from "../src/logic/collision";

export default function Game() {
  const [pins, setPins] = useState(levelData.pins);
  const [playerPos, setPlayerPos] = useState(levelData.player);
  const [gameStatus, setGameStatus] = useState("playing");

  // 🔥 GRAVITY + COLLISION
  useEffect(() => {
    if (gameStatus !== "playing") return; // stop when game ends

    const interval = setInterval(() => {
      setPlayerPos((prev) => {
        const newPos = { ...prev, y: prev.y + 5 };

        // 🟥 Lava → Lose
        if (isColliding(newPos, levelData.lava)) {
          setGameStatus("lose");
        }

        // 🟩 Treasure → Win
        if (isColliding(newPos, levelData.treasure)) {
          setGameStatus("win");
        }

        return newPos;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [gameStatus]);

  // 📌 REMOVE PIN
  const removePin = (id: string) => {
    setPins((prev) =>
      prev.map((p) => (p.id === id ? { ...p, active: false } : p)),
    );
  };

  return (
    <ImageBackground
      source={require("../assets/images/background.png")}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        {/* PLAYER */}
        <Player position={playerPos} />

        {/* TREASURE */}
        <Treasure position={levelData.treasure} />

        {/* LAVA */}
        <Lava position={levelData.lava} />

        {/* PINS */}
        {pins.map((pin) => (
          <Pin key={pin.id} pin={pin} onRemove={removePin} />
        ))}

        {/* STATUS */}
        {gameStatus === "win" && <Text style={styles.win}>YOU WIN 🎉</Text>}
        {gameStatus === "lose" && <Text style={styles.lose}>YOU LOSE ❌</Text>}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  win: {
    color: "lime",
    textAlign: "center",
    marginTop: 50,
    fontSize: 24,
    fontWeight: "bold",
  },

  lose: {
    color: "red",
    textAlign: "center",
    marginTop: 50,
    fontSize: 24,
    fontWeight: "bold",
  },
});
