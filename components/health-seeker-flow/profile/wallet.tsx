import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { primarycolor, whitecolor } from "../../../constants/colors";
import { Textstyles } from "../../../constants/fontsize";
import { CustomButton } from "../../../utilities/buttons";
import { CustomInputWithHeader } from "../../../utilities/inputs";
import { CustomRadioSingleOption } from "../../../utilities/selects";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getTransactions } from "../../../redux/slices/get-transaction";

const WalletPage = () => {
  const user = useSelector((state: RootState) => state.dashboard.data);

  const data = useSelector((state: RootState) => state.transactions.data);
  const [openModal, setOpenModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<
    "" | "PayStack" | "Interswitch"
  >("");

  useEffect(() => {
    getTransactions();
  }, [data]);

  console.log("transaction data", data);

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
              <Text className="text-[#00000050] font-semibold text-xs leading-6">{`${user?.seeker?.firstName} ${user?.seeker?.lastName}`}</Text>
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
              onPress={() => {}}
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

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View className="flex flex-col items-center justify-center w-full h-full p-4 rounded-2xl bg-white">
                {/* <Text> {item.amount}</Text> */}
              </View>
            )}
            ListHeaderComponent={() => (
              <Text
                style={{
                  ...Textstyles.text_cfmedium,
                  color: "black",
                  paddingVertical: 10,
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                Transaction
              </Text>
            )}
            ListEmptyComponent={() => (
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
            )}
          />
        </View>
      </View>
    </>
  );
};

export default WalletPage;
