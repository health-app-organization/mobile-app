import { Stack } from "expo-router";
import React from "react";

const NotificationLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="notification-details"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="referral-details"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default NotificationLayout;
