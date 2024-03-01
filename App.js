/* import { StatusBar } from 'expo-status-bar'; */
import { StyleSheet } from "react-native";
import { Controler } from "./src/components";

export default function App() {
  return (
    <View style={styles.container}>
      <Controler />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
