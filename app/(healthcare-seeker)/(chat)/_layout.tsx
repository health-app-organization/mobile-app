import React from "react";
import { Stack } from "expo-router";

const ChatLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ChatLayout;
