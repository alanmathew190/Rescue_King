import { Image, StyleSheet } from "react-native";

export default function Treasure({ position }: any) {
  return (
    <Image
      source={require("../../assets/images/treasure.png")}
      style={[styles.treasure, { top: position.y, left: position.x }]}
    />
  );
}

const styles = StyleSheet.create({
  treasure: {
    width: 50,
    height: 50,
    position: "absolute",
  },
});
