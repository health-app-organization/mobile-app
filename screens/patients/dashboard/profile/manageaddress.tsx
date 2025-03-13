import { View, Text } from "react-native";
import React, { useState } from "react";
import { Textstyles } from "../../../../constants/fontsize";
import { primarycolor, whitecolor } from "../../../../constants/color";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { CustomInputWithHeader } from "components/utilities/inputs";
import { CustomButton } from "components/utilities/buttons";

const ManageAddress = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");

  const handleSelect = (action: string) => {
    if (action === "Save") {
      // Perform save action, e.g., send data to server or update state
      console.log("Address saved:", { fullName, email, phoneNumber, shippingAddress });
      // You can add more logic here, such as form validation or API calls
    }
  }

  return (
    <>
      <Text
        className="text-[28px] font-semibold mt-5 ml-8 mb-4"
        style={[Textstyles.text_cmedium]}
      >
        User new address details
      </Text>
      <View className=" px-4">
        <CustomInputWithHeader
          headerText="Full name"
          placeholder="Enter your full name"
          leftIcon={<FontAwesome name="user" color="#000" size={20} />}
          value={fullName}
          onChange={(text) => setFullName(text)}
        />
        <View className=" h-3" />
        <CustomInputWithHeader
          headerText="Email address"
          placeholder="Enter your email address"
          leftIcon={<FontAwesome name="envelope" color="#000" size={20} />}
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <View className="h-3" />
        <CustomInputWithHeader
          headerText="Phone number"
          placeholder="Enter your phone number"
          leftIcon={<FontAwesome name="phone" color="#000" size={20} />}
          value={phoneNumber}
          onChange={(text) => setPhoneNumber(text)}
        />

        <View className="h-3" />
        <CustomInputWithHeader
          headerText="Shipping Address"
          placeholder="Address"
          value={shippingAddress}
          onChange={(text) => setShippingAddress(text)}
        />
      </View>
      <View className=" mt-10 px-3">
        <CustomButton
          Textname={"Submit"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          onPress={() => handleSelect("Save")} // Trigger the save action
        />
      </View>
    </>
  );
};

export default ManageAddress;
