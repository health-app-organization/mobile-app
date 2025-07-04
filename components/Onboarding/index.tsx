import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { sliderSteps } from "./data";
import SliderGestures from "./gestures";

const Onboarding = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  //   const navigation = useNavigation<StackNavigation>();
  const isLastScreen = screenIndex === sliderSteps.length - 1;

  const handleContinue = () => {
    if (!isLastScreen) {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex == 0;
    console.log(screenIndex);

    if (isFirstScreen) {
      return;
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const handleSkip = async () => {
    setScreenIndex(sliderSteps.length - 1);
    try {
      await AsyncStorage.setItem("completedOnboarding", "Done");

      router.push("/(auth)");
    } catch (error) {
      console.error("Failed to save onboarding status", error);
    }
  };

  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem("completedOnboarding", "Done");

      router.push("/(auth)");
    } catch (error) {
      console.error("Failed to save onboarding status", error);
    }
  };

  return (
    <View style={styles.page}>
      <SliderGestures
        screenIndex={screenIndex}
        onContinue={handleContinue}
        onSkip={handleSkip}
        onBack={onBack}
        onGetStarted={handleGetStarted}
      />
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
