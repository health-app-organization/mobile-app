import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import {
  CustomButton,
  Header,
  CustomButton2,
} from "../mycomponents/mycomponent";
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import {
  primarycolortwo,
  primarycolor,
  whitecolor,
} from "../../constants/color";

const Surgeries = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 w-full">
      <StatusBar style="auto" />

      <Header title=" Medical" />
      <View className="flex justify-center w-full items-center mt-8" />
      <Text
        className="text-[14px] font-bold ml-8 mb-6"
        style={[Textstyles.text_medium]}
      >
        Any past Surgeries ?
      </Text>
      <View className="flex-grow" />
      <View className="px-5 mb-8">
        <CustomButton2
          Textname={"No"}
          backgroundColor={primarycolortwo}
          TextColor={primarycolor}
        />
        <View className="h-4" />
        <CustomButton
          Textname={"Add Surgeries"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
        />
      </View>
    </View>
  );
};

export default Surgeries;