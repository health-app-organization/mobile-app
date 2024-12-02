import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  CustomButton,
  CustomInputWithHeaderdes,
  CustomInputWithHeader,
  Header,
} from "../../../mycomponents/mycomponent";
import { Textstyles } from "../../../../constants/fontsize";
import { primarycolor, whitecolor } from "../../../../constants/color";

const Address = () => {
  // Handle selection
  // Handling the dropdown value change
  const handleDropdownChange = (selectedValue) => {
    console.log("Selected:", selectedValue);
  };

  return (
    <View className="flex-1 bg-white">
      <Header title="Manage Address" />
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
          leftIconName="user"
          onChange={(text) => console.log(text)}
        />
        <View className=" h-3" />
        <CustomInputWithHeader
          headerText="Email address"
          placeholder="Enter your email address"
          leftIconName="envelope"
          onChange={(text) => console.log(text)}
        />
        <View className="h-3" />
        <CustomInputWithHeader
          headerText="Phone number"
          placeholder="Enter your phone number"
          leftIconName="phone"
          onChange={(text) => console.log(text)}
        />

        <View className="h-3" />
        <CustomInputWithHeaderdes
          headerText="Shipping Address"
          placeholder="Address"
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
    </View>
  );
};

export default Address;
