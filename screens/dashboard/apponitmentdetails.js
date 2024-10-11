import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { primarycolor, whitecolor } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";

const Details = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1">
      <StatusBar style="auto" />

      {/* Top Image */}
      <Image
        source={require("../../assets/images/slide1.png")} // replace with your actual image path
        className="w-full h-[500px]"
        resizeMode="cover"
      />

      {/* Overlay Section */}
      <View
        className="h-[600px] absolute mt-[350px] bg-white w-full px-5"
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        {/* Doctor's Info Card */}
        <View className="w-[345px] mx-auto -mt-10 h-[80px] bg-[#0099B8] rounded-lg justify-center">
          <Text className=" text-[18px] font-[600] text-white mb-2 leading-[21px] text-center">
            Prof. Dr. Micheal Brains
          </Text>
          <Text className="text-[13px] text-white text-center">
            Senior Cardiologist & Surgeon
          </Text>
          <Text className="text-[13px] text-white text-center">
            United States Medical College & Hospital
          </Text>
        </View>
        <View className=" w-full flex justify-center items-center  h-[127px]">
          <View className=" w-[290px]  h-[87px]  flex-row justify-center gap-[20px]">
            <View className=" w-[50px] h-[87px]">
              <View className=" w-[50px] h-[50px] rounded-[25px] bg-[#D9D9D980] mb-2"></View>
              <View className=" w-[46px] h-[32px]">
                <Text className=" text-center font-[500] text-[12px] leading-4">200</Text>
                <Text className=" text-center font-[400] text-[11px] leading-4 ">Patients</Text>
              </View>
            </View>
            <View className=" w-[50px] h-[87px]">
              <View className=" w-[50px] h-[50px] rounded-[25px] bg-[#D9D9D980] mb-2"></View>
              <View className=" w-[46px] h-[32px]">
                <Text className=" text-center font-[500] text-[12px] leading-4">5+</Text>
                <Text className=" text-center font-[400] text-[11px] leading-4">Years</Text>
              </View>
            </View>
            <View className=" w-[50px] h-[87px]">
              <View className=" w-[50px] h-[50px] rounded-[25px] bg-[#D9D9D980] mb-2"></View>
              <View className=" w-[46px] h-[32px]">
                <Text className="text-center font-[500] text-[12px] leading-4">5.0</Text>
                <Text className="text-center font-[400] text-[11px] leading-4">Rating</Text>
              </View>
            </View>
            <View className=" w-[50px] h-[87px]">
              <View className=" w-[50px] h-[50px] rounded-[25px] bg-[#D9D9D980] mb-2"></View>
              <View className=" w-[46px] h-[32px]">
                <Text className="text-center font-[500] text-[12px] leading-4">200+</Text>
                <Text className="text-center font-[400] text-[11px] leading-4">Reviews</Text>
              </View>
            </View>
           </View>
        </View>
        <View className=" w-[368px] h-[119px] bg-red-500 mt-3">
            <View ><Text className=" leading-[24px]  text-xl font-semibold">Appointments</Text></View>
            <View><Text></Text></View>
        </View>
      </View>
    </View>
  );
};

export default Details;
