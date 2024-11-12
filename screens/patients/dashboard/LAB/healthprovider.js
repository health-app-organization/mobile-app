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
  const healthprovider = [
    { label: "General Doctor", value: "General Doctor" },
    { label: "Nurse", value: "Nurse" },
    { label: "Massage Therapist", value: "Massage Therapist" },
    { label: "Optometrist", value: "Optometrist" },
    { label: "Gynecologists", value: "Gynecologists" },
    { label: "Cardiologist", value: "Cardiologist" },
    { label: "Pharmacist", value: "Pharmacist" },
    { label: "Surgeon", value: "Surgeon" },
  ];
  const urgent = [
    { label: "Urgent Care", value: "Urgent Care" },
    { label: "Non-Urgent Care", value: "Non-Urgent Care" },
  ];
  const location = [
    { label: "Video Consultation", value: "Video Consultation" },
    { label: "Home Consultation", value: "Home Consultation" },
    { label: "Clinic Consultation", value: "Clinic Consultation" },
  ];
  const department = [
    { label: "Any", value: "Any" },
    { label: "", value: "" },
    { label: "", value: "" },
  ];
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
          options={healthprovider}
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
          options={urgent}
          placeholder="How soon do you want care?"
          onChange={handleDropdownChange}
        />
        <View className=" h-3" />
        <CustomDropdownWithHeader
          headerText="Location"
          options={location}
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
