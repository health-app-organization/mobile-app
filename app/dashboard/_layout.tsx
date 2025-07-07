import React from "react";
import { Stack } from "expo-router";

const DashLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="appointment-details"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="book-appointment"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="medicine"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="payment"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="user-qr-code"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default DashLayout;
