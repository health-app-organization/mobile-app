import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Image, Text } from "react-native";
import { Header } from "../../mycomponents/mycomponent";
import { Textstyles } from "../../../constants/fontsize";

const OrderTracking = () => {
  return (
    <View className="h-screen w-full">
      <StatusBar style="auto" />

      <Header title="Order Tracking" />

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
    </View>
  );
};

export default OrderTracking;
