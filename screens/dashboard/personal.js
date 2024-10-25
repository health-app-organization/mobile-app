import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import {
  CustomInputWithHeader,
  CustomDropdownWithHeader,
  CustomButton,
} from "../mycomponents/mycomponent";
import { primarycolor, whitecolor } from "../../constants/color";

const Personal = () => {
  const bloodGroupOptions = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  const maritalStatusOptions = [
    { label: "Single", value: "single" },
    { label: "Married", value: "married" },
    { label: "Divorced", value: "divorced" },
  ];

  const active = [
    { label: "Athletic (very high)", value: "Athletic (very high)" },
    { label: "Active (High)", value: "Active (High)" },
    {
      label: "Moderately active (normal)",
      value: "Moderately active (normal)",
    },
    { label: "  Sedentary (low)", value: " Sedentary (low)" },
  ];

  const diet = [
    { label: "Vegetarian", value: "Vegetarian" },
    { label: "Non-Vegetarian", value: "Non-Vegetarian" },
    { label: "Vegan", value: "Vegan" },
    { label: " Eggetarian", value: " Eggetarian" },
  ];

  const occupationOptions = [
    { label: "Student", value: "Student" },
    { label: "Employed", value: "Employed" },
    { label: "Self-Employed", value: "Self-Employed" },
    { label: "Unemployed", value: "Unemployed" },
    { label: "Retired", value: "Retired" },
    { label: "Other", value: "Other" },
  ];

  // Handling the dropdown value change
  const handleDropdownChange = (selectedValue) => {
    console.log("Selected:", selectedValue);
  };

  return (
    <View>
      <KeyboardAvoidingView>
        <ScrollView className="mb-60">
          <CustomInputWithHeader
            headerText="First name"
            placeholder="Enter your first name"
            leftIconName="user"
            onChange={(text) => console.log(text)}
          />
          <View className="h-3" />
          <CustomInputWithHeader
            headerText="Last name"
            placeholder="Enter your last name"
            leftIconName="user"
            onChange={(text) => console.log(text)}
          />
          <View className="h-3" />
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
          <CustomInputWithHeader
            headerText="Date of birth"
            placeholder="Enter your date of birth"
            leftIconName="calendar"
            onChange={(text) => console.log(text)}
          />
          <View className="h-3" />
          <CustomInputWithHeader
            headerText="Gender"
            placeholder="Enter your gender"
            leftIconName="user"
            onChange={(text) => console.log(text)}
          />
          <View className="h-3" />
          <CustomDropdownWithHeader
            headerText="Blood Group"
            options={bloodGroupOptions}
            placeholder="Select your blood group"
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Marital Status"
            options={maritalStatusOptions}
            placeholder="Select your blood group"
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Height"
            placeholder="Select your blood group"
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Weight"
            placeholder="Select your blood group"
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Activity Level"
            options={active}
            placeholder="Select your activity level"
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Food preference"
            options={diet}
            placeholder="Select your diet"
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Occupation"
            options={occupationOptions}
            placeholder="Select your Occupation"
            onChange={handleDropdownChange}
          />
          <View className=" mt-4" />
          <View className=" mb-7">
            <CustomButton
              Textname={"Save"}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Personal;
