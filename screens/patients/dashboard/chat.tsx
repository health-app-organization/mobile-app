import { View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { primarycolor } from "../../../constants/color";

const Chat = () => {
  return (
    <View className="flex-1 w-full h-screen pt-[44px]">
      <StatusBar style="auto" />

      <View style={{ backgroundColor: primarycolor }}></View>
    </View>
  );
};

export default Chat;
