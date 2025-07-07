import { Stack } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(provider-auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(seeker-auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(notification)" options={{ headerShown: false }} />
      <Stack.Screen
        name="healthcare-provider"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(healthcare-seeker)"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      <Stack.Screen name="chats" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TabsLayout;
