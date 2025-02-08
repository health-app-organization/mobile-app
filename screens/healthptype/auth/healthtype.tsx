import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { height, width } from "../../../constants/mobileDimensions";
import { StackNavigation } from "../../../types/stack";

// mock data
const typeList = [
  {
    image: "../../../assets/images/Frame 8.png",
  },
  {
    image: "../../../assets/images/Frame 8.png",
  },
  {
    image: "../../../assets/images/Frame 8.png",
  },
];

const Provider = () => {
  const navigation = useNavigation<StackNavigation>();
  const handleContinue = () => {
    navigation.navigate("doctor-signup");
  };
  return (
    <View
      style={{ height: height, width: width }}
      className="bg-white py-[40px]"
    >
      <StatusBar />

      <View className="w-full h-44 mt-12 flex mb-7 justify-center items-center">
        <View className="w-[50%] h-32 flex justify-center items-center">
          <Image
            source={require("../../../assets/images/logo.png")}
            resizeMode="contain"
            className="h-36 w-36"
          />
        </View>
        <Text className=" font-bold text-xl">Choose identity</Text>
      </View>
      <View className=" h-5" />
      <View className=" w-full flex-row justify-between px-4 h-[115.39px] ">
        {typeList &&
          typeList.map((row, index) => (
            <TouchableOpacity
              key={index}
              className="w-[103px] h-[115.39px] justify-center items-center"
              onPress={handleContinue}
            >
              <Image
                source={require("../../../assets/images/Frame 8.png")}
                resizeMode="contain"
                className="w-full"
              />
            </TouchableOpacity>
          ))}
      </View>
      <View className=" h-12" />
      <View className=" w-full flex-row justify-between px-4 h-[115.39px] ">
        {typeList &&
          typeList.map((row, index) => (
            <TouchableOpacity
              key={index}
              className="w-[103px] h-[115.39px] justify-center items-center"
              onPress={handleContinue}
            >
              <Image
                source={require("../../../assets/images/Frame 8.png")}
                resizeMode="contain"
                className="w-full"
              />
            </TouchableOpacity>
          ))}
      </View>
      <View className=" h-12" />
      <View className=" w-full flex-row justify-between px-4 h-[115.39px]  ">
        {typeList &&
          typeList.map((row, index) => (
            <TouchableOpacity
              key={index}
              className="w-[103px] h-[115.39px] justify-center items-center"
              onPress={handleContinue}
            >
              <Image
                source={require("../../../assets/images/Frame 8.png")}
                resizeMode="contain"
                className="w-full"
              />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default Provider;
