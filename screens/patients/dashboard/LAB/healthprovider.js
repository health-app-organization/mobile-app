import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  CustomButton,
  CustomDropdownWithHeader,
  Header,
} from "../../../mycomponents/mycomponent";
import { Textstyles } from "../../../../constants/fontsize";
import { primarycolor, whitecolor } from "../../../../constants/color";

const HealthcareProviderScreen = () => {
  // Handle selection
  // Handling the dropdown value change
  const handleDropdownChange = (selectedValue) => {
    console.log("Selected:", selectedValue);
  };

  return (
    <View className="flex-1 bg-white">
      <Header title="Healthcare Provider" marginLeft={-80} />
      <Text
        className="text-[28px] font-semibold mt-5 ml-8 mb-7"
        style={[Textstyles.text_cmedium]}
      >
        What sector will you like to book
      </Text>
      <View className=" px-3">
        <CustomDropdownWithHeader
          headerText="Healthcare provider"
          placeholder="Select  Healthcare provider"
          onChange={handleDropdownChange}
        />
        <View className=" h-3" />
        <CustomDropdownWithHeader
          headerText="Department"
          placeholder="Select Department"
          onChange={handleDropdownChange}
        />
        <View className=" h-3" />
        <CustomDropdownWithHeader
          headerText="Urgency"
          placeholder="How soon do you want care?"
          onChange={handleDropdownChange}
        />
        <View className=" h-3" />
        <CustomDropdownWithHeader
          headerText="Location"
          placeholder="Where do you want care?"
          onChange={handleDropdownChange}
        />
      </View>
      <View className=" mt-10 px-3">
        <CustomButton
          Textname={"Save"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          onPress={() => handleSelect("Save")} // Trigger the save action
        />
      </View>
    </View>
  );
};

export default HealthcareProviderScreen;
