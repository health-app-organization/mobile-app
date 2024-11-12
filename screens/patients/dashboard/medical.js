import React, { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import {
  CustomInputWithHeader,
  CustomDropdownWithHeader,
  CustomButton,
} from "../../mycomponents/mycomponent";
import { primarycolor, whitecolor } from "../../../constants/color";

const Medical = () => {
  // Define dropdown options using objects
  const allergies = [
    { label: "Lactose", value: "Lactose" },
    { label: "Soy", value: "Soy" },
    { label: "Seafood", value: "Seafood" },
    { label: "Nuts", value: "Nuts" },
    { label: "Eggs", value: "Eggs" },
    { label: "Fish", value: "Fish" },
  ];

  const medications = [
    { label: "21st Century fish oil", value: "21st Century fish oil" },
    { label: "Abidec", value: "Abidec" },
    {
      label: "Accord Bendroflumethiazide",
      value: "Accord Bendroflumethiazide",
    },
    { label: "ACCULOL", value: "ACCULOL" },
    { label: "ACTAVIS DOXYCYCLINE", value: "ACTAVIS DOXYCYCLINE" },
    { label: "ACTINAZA", value: "ACTINAZA" },
    { label: "ADAY kit tablets", value: "ADAY kit tablets" },
    { label: "Afrab Vite", value: "Afrab Vite" },
    { label: "AFRICO 1000 CAPSULES", value: "AFRICO 1000 CAPSULES" },
  ];

  const pastMedications = medications; // Use the same array for past medications

  const diseases = [
    { label: "Diabetes", value: "Diabetes" },
    { label: "Hypertension", value: "Hypertension" },
    { label: "PCOS", value: "PCOS" },
    { label: "Hypothyroidism", value: "Hypothyroidism" },
    { label: "COPD", value: "COPD" },
    { label: "Asthma", value: "Asthma" },
  ];

  const surgeries = [
    { label: "Heart", value: "Heart" },
    { label: "Liver", value: "Liver" },
    { label: "Kidney", value: "Kidney" },
    { label: "Lungs", value: "Lungs" },
    { label: "Brain", value: "Brain" },
  ];

  const injuries = [
    { label: "Fracture", value: "Fracture" },
    { label: "Sprain", value: "Sprain" },
    { label: "Dislocation", value: "Dislocation" },
    { label: "Burn", value: "Burn" },
    { label: "Cut/Wound", value: "Cut/Wound" },
    { label: "Other", value: "Other" },
  ];

  const smokingHabits = [
    { label: "1-2/day", value: "1-2/day" },
    { label: "I don’t smoke at all", value: "I don’t smoke at all" },
    {
      label: "I used to, but I have quit",
      value: "I used to, but I have quit",
    },
  ];

  const alcoholConsumption = [
    { label: "Non-drinker", value: "Non-drinker" },
    { label: "Rare", value: "Rare" },
    { label: "Socially", value: "Socially" },
    { label: "Regularly", value: "Regularly" },
    { label: "Heavy", value: "Heavy" },
  ];

  // Handling the dropdown value change
  const handleDropdownChange = (selectedValue) => {
    console.log("Selected:", selectedValue);
  };

  return (
    <View>
      <KeyboardAvoidingView>
        <ScrollView className="mb-44">
          <CustomDropdownWithHeader
            headerText="Allergy"
            placeholder="Any Allergy"
            options={allergies}
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Current Medication"
            placeholder="Any Current Medication"
            options={medications}
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Past Medication"
            placeholder="Any Past Medication"
            options={pastMedications}
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Chronic Disease"
            placeholder="Any Chronic Disease"
            options={diseases}
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Injuries"
            placeholder="Any Injuries"
            options={injuries} // Added options for injuries
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Surgery"
            placeholder="Any Past Surgery"
            options={surgeries}
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Smoking Habit"
            placeholder="Any Smoking Habit"
            options={smokingHabits}
            onChange={handleDropdownChange}
          />
          <CustomDropdownWithHeader
            headerText="Alcohol Consumption"
            placeholder="How frequently do you drink alcohol"
            options={alcoholConsumption}
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

export default Medical;
