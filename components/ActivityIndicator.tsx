import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { ActivityIndicator } from "./activity-indicator";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ActivityIndicator size={64} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { App };
