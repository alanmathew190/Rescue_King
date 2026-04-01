import { Image, StyleSheet } from "react-native";

export default function Player({ position }: any) {
  return (
    <Image
      source={require("../../assets/images/king.png")}
      style={[styles.player, { top: position.y, left: position.x }]}
    />
  );
}

const styles = StyleSheet.create({
  player: {
    width: 50,
    height: 50,
    position: "absolute",
  },
});
