import { Stack } from "expo-router";
import React from "react";

const ProviderAuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="forget-password" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProviderAuthLayout;
