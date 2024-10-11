import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Header } from "../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";

const Orcode = () => {
  const navigation = useNavigation();
  return (
    <View className="h-screen w-full  " style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <Header title="Patient QR code" />
      <Text className=" text-center  text-[17px] leading-[25] font-[500] text-gray-500 px-[78px] mt-12">
        Your QR Code is Private. Your doctor can scan it with their camera on
        HEALTH to see yourmedical history
      </Text>
      <View className="   w-full flex justify-center items-center  h-[660px]">
        <TouchableOpacity className=" w-[345px] h-[398px] bg-white rounded-[16px] -mt-12">
          <View className=" w-[80px] justify-center -mt-9 flex items-center ml-auto mr-auto  h-[80px] rounded-xl">
            <Image
              source={require("../../assets/images/pro.png")}
              resizeMode="contain"
              className=" w-full"
            />
          </View>
          <Text className=" text-center  text-[17px] leading-[25] font-[500] text-gray-500 px-[78px] mt-6">ID- HEALTH_987654321</Text>
          <Text className=" text-center  text-[17px] leading-[25] font-[500] text-gray-500 px-[70px] ">Member since September 2024</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Orcode;
