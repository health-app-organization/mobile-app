import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Onboarding from "../../components/Onboarding";

export default function OnboardingScreen() {
  return (
    <GestureHandlerRootView style={styles.page}>
      <Onboarding />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
