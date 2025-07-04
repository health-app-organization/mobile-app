import { Stack } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(healthcare-provider)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(healthcare-seeker)"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default TabsLayout;
