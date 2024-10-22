import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import {
  CustomButton,
  Header,
  Header6, // Importing Header6 for second screen
  CustomButton2,
} from "../mycomponents/mycomponent";
import { Textstyles } from "../../constants/fontsize";
import { primarycolortwo, primarycolor, whitecolor } from "../../constants/color";

const Medications = () => {
  const [showMedicationForm, setShowMedicationForm] = useState(false); // To toggle the screen
  const [selectedMedication, setSelectedMedication] = useState(null); // Track the selected medication

  // Mock data for medications
  const medications = [
    "21st Century fish oil",
    "Abidec",
    "Accord Bendroflumethiazide",
    "ACCULOL",
    "ACTAVIS DOXYCYCLINE",
    "ACTINAZA",
    "ADAY kit tablets",
    "Afrab Vite",
    "AFRICO 1000 CAPSULES",
  ];

  // Function to show medications form when "No" or "Add Medications" is pressed
  const handleShowForm = () => {
    setShowMedicationForm(true); // This will toggle the form
  };

  // Handle selecting a medication
  const handleSelectMedication = (medication) => {
    setSelectedMedication(medication); // Set the selected medication
  };

  return (
    <View className="h-screen w-full bg-white" style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {/* Conditional rendering based on the user's choice */}
      {!showMedicationForm ? (
        <>
          {/* Initial Question Screen */}
          <Header title="Medical" />
          <View className="flex justify-center w-full items-center mt-8"></View>
          <Text
            className="text-[14px] font-semibold ml-3 mb-6"
            style={[Textstyles.text_medium]}
          >
            Have you been on any medications in the past?
          </Text>
          <View className="flex-grow" />
          <View className="px-5 mb-8">
            <CustomButton2
              Textname={"No"}
              onPress={handleShowForm} // When "No" is clicked, show form
              backgroundColor={primarycolortwo}
              TextColor={primarycolor}
            />
            <View className=" h-4"/>
            <CustomButton
              Textname={"Add Medications"}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
              onPress={handleShowForm} // When "Add Medications" is clicked, show form
            />
          </View>
        </>
      ) : (
        <>
          {/* Medications Form Section */}
          <Header6 title="        Add Medications" />
          <Text className="text-[20px] text-gray-400 font-bold ml-8 mb-6">
            Add Medications
          </Text>
          <Text
            className="text-[14px] font-bold ml-8 mb-6"
            style={[Textstyles.text_medium]}
          >
            Suggestions
          </Text>
          <View className="px-5 mb-8">
            {medications.map((medication, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectMedication(medication)}
                className={`border-b h-12 pt-4 pb-2 mb-4 ${
                  selectedMedication === medication
                    ? "bg-[#0099B8]" // Selected medication gets a blue background
                    : "bg-white"
                }`}
              >
                <Text
                  className={`text-[14px] pl-2 ${
                    selectedMedication === medication ? "text-white" : "text-black"
                  }`}
                  style={[Textstyles.text_small]}
                >
                  {medication}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

export default Medications;
