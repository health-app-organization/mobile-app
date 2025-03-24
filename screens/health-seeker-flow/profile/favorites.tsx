import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, Text } from "react-native";
import { Textstyles } from "../../../constants/fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { primarycolor } from "constants/color";

const Favorites = () => {
  return (
    <>
      <View className=" w-full flex mt-52 justify-center items-center">
        <View className="w-[154px] h-[139px] ">
          <Image
            source={require("../../../assets/images/amico.png")}
            resizeMode="contain"
            className=" w-full"
          />
          <Text style={[Textstyles.text_xsma]} className=" text-center">
            Your orders will appear here
          </Text>
        </View>
      </View>
    </>
  );
};

export default Favorites;
