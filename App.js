import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  View,
  TouchableNativeFeedback,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text Pressed!");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Dom!</Text>
      <TouchableNativeFeedback>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
      <StatusBar style="inverted" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
