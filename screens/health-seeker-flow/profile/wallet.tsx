import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { primarycolor, whitecolor } from "../../../constants/color";
import { StackNavigation } from "../../../types/stack";
import useAuthStore from "store/auth-store";
import { Textstyles } from "constants/fontsize";
import { CustomInputWithHeader } from "components/utilities/inputs";
import { CustomRadioSingleOption } from "components/utilities/selects";
import { CustomButton } from "components/utilities/buttons";

const Wallet = () => {
  const navigation = useNavigation<StackNavigation>();
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuthStore();
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"" | "PayStack" | "Interswitch">("");
  return (
    <>
      {/* a modal */}
      {openModal && (
        <View className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.5)] justify-center items-center z-50">
          <View className="w-[80%] bg-white rounded-[60px] py-16 px-8 gap-y-6">
            <View className="flex-row justify-between items-center">
              <View className="flex-row items-center">
                <Image
                  source={require("../../../assets/images/logo-2.png")}
                  className="w-[22px] h-[22px]"
                  resizeMode="contain"
                />
                <Text className="text-primary text-[14px] leading-5 font-black">
                  HEALTHAPP
                </Text>
              </View>
              <TouchableOpacity onPress={() => setOpenModal(false)}>
                <FontAwesome name="times" size={20} color={primarycolor} />
              </TouchableOpacity>
            </View>
            <View className="mx-auto items-center">
              <Text className="text-[#00000050] font-semibold text-xs leading-6">{`${user?.firstName} ${user?.firstName}`}</Text>
              <Text className="font-bold text-sm leading-[30px]">N0.00</Text>
            </View>
            <CustomInputWithHeader
              placeholder="Enter Amount"
              keyboardType="numeric"
              value={amount}
              onChange={(text) => setAmount(text)}
            />
            <Text style={[Textstyles.text_small]}>Select Payment Method</Text>
            <CustomRadioSingleOption
              value="PayStack"
              onPress={() => setPaymentMethod("PayStack")}
              selected={paymentMethod === "PayStack"}
            />
            <CustomRadioSingleOption
              value="Interswitch"
              onPress={() => setPaymentMethod("Interswitch")}
              selected={paymentMethod === "Interswitch"}
            />
            <CustomButton
              Textname={"Save"}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
              onPress={() => { }}
            />
          </View>
        </View>
      )}
      <View className="flex-1 p-6">
        <View className="w-2/3 md:w-1/2 mx-auto">
          <CustomButton
            Textname={"Top-up Account"}
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            onPress={() => setOpenModal(true)}
          />
        </View>
        <Text className=" text-[24px] ml-4 mt-9 mb-24 text-black font-bold">
          Transaction
        </Text>
        <View className=" w-full h-[137px] flex justify-center items-center ">
          <View className=" w-[265px] h-[137px] flex justify-center items-center ">
            <Image
              source={require("../../../assets/images/wallet3.png")}
              className="w-full"
              resizeMode="contain"
            />
            <Text className=" text-[16px] font-[500] leading-6">
              No transaction is available
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Wallet;
