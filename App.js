import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text Pressed!");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Money Heist</Text>
      <TouchableWithoutFeedback>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        ></Image>
      </TouchableWithoutFeedback>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
