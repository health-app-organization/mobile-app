import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const accounts = [
  {
    id: 1,
    bankName: "Gtbank",
    accountNumber: "2223345645",
    logo: require("assets/images/gtbank-logo.png"),
  },
  {
    id: 2,
    bankName: "Gtbank",
    accountNumber: "2223345645",
    logo: require("assets/images/gtbank-logo.png"),
  },
  {
    id: 3,
    bankName: "Gtbank",
    accountNumber: "2223345645",
    logo: require("assets/images/gtbank-logo.png"),
  },
];

const WithdrawScreen = () => {
  const navigation = useNavigation();
  const [selectedAccount, setSelectedAccount] = useState(null);

  return (
    <View className="flex-1 bg-[#f3f9fc]">
    
      <View className="bg-[#0099B8] pt-12 pb-9 px-4 flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-white text mr-2">←</Text>
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold">Withdraw</Text>
        <View className="w-10 h-10" />
      </View>

      {/* Amount Section */}
      <View className="items-center my-8 px-6">
        <Text className="text-center text-gray-600 font-semibold text-base mb-2">
          Enter the amount you want to withdraw
        </Text>
        <Text className="text-3xl font-bold text-black">₦ 0.00</Text>
      </View>

      {/* Account List */}
      <View className="px-6">
        <View className=" h-32 flex-row justify-between items-center mb-3">
          <Text className="text-black font-bold text-base">Withdraw to</Text>
          <TouchableOpacity>
            <Text className="text-[#0099B8] font-semibold">Manage account</Text>
          </TouchableOpacity>
        </View>

        {accounts.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedAccount(item.id)}
            className={`flex-row items-center justify-between bg-white rounded-xl p-4 mb-3 ${
              selectedAccount === item.id ? "border border-[#0099B8]" : ""
            }`}
          >
            <View className="flex-row items-center">
              <Image source={item.logo} className="w-10 h-10 rounded-full" />
              <View className="ml-3">
                <Text className="font-semibold text-black">{item.bankName}</Text>
                <Text className="text-gray-500">{item.accountNumber}</Text>
              </View>
            </View>
            <View
              className={`w-5 h-5 rounded-full border-2 ${
                selectedAccount === item.id ? "border-[#0099B8] bg-[#0099B8]" : "border-[#0099B8]"
              }`}
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Withdraw Button */}
      <TouchableOpacity
        className="bg-[#0099B8] rounded-xl py-4 mx-6 mt-auto mb-8"
        onPress={() => console.log("Withdraw")}
      >
        <Text className="text-white text-center font-semibold text-base">Withdraw</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WithdrawScreen;
