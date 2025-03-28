import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

const UserQrCode = () => {
  return (
    <>
      <Text className=" text-center  text-[17px]  font-[500] text-gray-500 px-[78px] mt-12">
        Your QR Code is Private. Your doctor can scan it with their camera on
        HEALTH to see yourmedical history
      </Text>
      <View className="   w-full flex justify-center items-center  h-[660px]">
        <TouchableOpacity className=" w-[345px] h-[398px] bg-white rounded-[16px] flex justify-center items-center -mt-12">
          <View className=" w-[80px] justify-center -mt-20 flex items-center ml-auto mr-auto  h-[80px] rounded-xl">
            <Image
              source={require("../../../assets/images/pro.png")}
              resizeMode="contain"
              className=" w-full"
            />
          </View>
          <Text className=" text-center  text-[17px] font-[500] text-gray-500 px-[78px] mt-6">
            ID- HEALTH_987654321
          </Text>
          <Text className=" text-center  text-[17px]  font-[500] text-gray-500 px-[70px] mb-12 ">
            Member since September 2024
          </Text>
          <View className=" w-[201px] h-[201px] ">
            <Image
              source={require("../../../assets/images/qr.png")}
              resizeMode="contain"
              className=" w-full"
            />
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default UserQrCode;
