import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for arrow
import { CustomButton } from "../mycomponents/mycomponent";
import { primarycolor,whitecolor } from "../../constants/color";

const Wallet = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 w-full h-screen">
      <StatusBar style="auto" />

      <View className="w-full bg-[#0099B8] h-[211px]">
        <View className="flex-row items-center px-8 h-[90px] pt-8">
          {/* Back Button */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={32} color="white" />
          </TouchableOpacity>

          {/* Title */}
          <Text className="text-white text-2xl font-bold ml-4">
            My Wallet
          </Text>
        </View>
        <View className=" w-full flex-row justify-between px-5 h-[119px] ">
<View className="   w-[170px] h-[130px]">
    <Text className=" text-2xl text-white mt-7 mb-2">Available Balance</Text>
    <Text className="  text-2xl text-white font-bold "> ₦0.00</Text>
    <Image
        source={require("../../assets/images/wallet2.png")}
        className="w-full -z-10 -mt-[75px]"
        resizeMode="contain"
      />
</View>
<View className="  flex justify-center items-center w-[104px] h-[104px]">
<Image
        source={require("../../assets/images/wallet.png")}
        className="w-full"
        resizeMode="contain"
      />
</View>
        </View>
      </View>
      <View className=" mt-[30px] px-24"> 
      <CustomButton
          Textname={"Top-up Account"}
        
          backgroundColor={primarycolor}
          TextColor={whitecolor}
        />
        </View>
        <Text className=" text-[24px] ml-4 mt-9 mb-24 text-black font-bold">Transaction</Text>
        <View className=" w-full h-[137px] flex justify-center items-center ">
        <View className=" w-[265px] h-[137px] flex justify-center items-center ">
        <Image
        source={require("../../assets/images/wallet3.png")}
        className="w-full"
        resizeMode="contain"
      />
      <Text className=" text-[16px] font-[500] leading-6">No transaction is available</Text>
        </View>
        </View>
    </View>
  );
};

export default Wallet;
