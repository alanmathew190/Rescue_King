import { Image, StyleSheet } from "react-native";

export default function Lava({ position }: any) {
  return (
    <Image
      source={require("../../assets/images/lava.png")}
      style={[styles.lava, { top: position.y, left: position.x }]}
    />
  );
}

const styles = StyleSheet.create({
  lava: {
    width: 80,
    height: 50,
    position: "absolute",
  },
});
