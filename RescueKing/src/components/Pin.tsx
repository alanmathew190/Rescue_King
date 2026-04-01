import { TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Pin({ pin, onRemove }: any) {
  if (!pin.active) return null;

  return (
    <TouchableOpacity
      style={{ position: "absolute", top: pin.y, left: pin.x }}
      onPress={() => onRemove(pin.id)}
    >
      <Image
        source={require("../../assets/images/pin.png")}
        style={styles.pin}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pin: {
    width: 80,
    height: 20,
    resizeMode: "contain",
  },
});
