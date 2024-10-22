import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import {
  CustomButton,
  Header,
  CustomButton2,
  Header6, // Import Header6
} from "../mycomponents/mycomponent";
import { Textstyles } from "../../constants/fontsize";
import {
  primarycolortwo,
  primarycolor,
  whitecolor,
} from "../../constants/color";

const Allegires = () => {
  // State to control which screen to show
  const [showAllergiesForm, setShowAllergiesForm] = useState(false); // Initially false to show the first screen
  const [selectedAllergy, setSelectedAllergy] = useState(null); // Track the selected allergy

  const allergies = ["Lactose", "Soy", "Seafood", "Nuts", "Eggs", "Fish"]; // Allergy suggestions

  // Show allergies form when "No" or "Add Allergies" is clicked
  const handleShowAllergiesForm = () => {
    setShowAllergiesForm(true); // This will toggle the form
  };

  // Handle selecting an allergy
  const handleSelectAllergy = (allergy) => {
    setSelectedAllergy(allergy); // Set the selected allergy
  };

  return (
    <View className="flex-1 w-full bg-white">
      <StatusBar style="auto" />

      {/* Conditionally render the headers based on which screen is being displayed */}
      {!showAllergiesForm ? (
        <Header title="Medical" /> // Initial screen
      ) : (
        <Header6 title="Add Allergies" /> // Form screen
      )}

      {!showAllergiesForm ? (
        <>
          {/* Initial Question Section */}
          <View className="flex justify-center w-full items-center mt-8" />
          <Text
            className="text-[14px] font-bold ml-8 mb-6"
            style={[Textstyles.text_medium]}
          >
            Are you allergic to anything?
          </Text>
          <View className="flex-grow" />
          <View className="px-5 mb-8">
            <CustomButton2
              Textname={"No"}
              backgroundColor={primarycolortwo}
              TextColor={primarycolor}
              onPress={handleShowAllergiesForm} // Show form when "No" is clicked
            />
            <View className="h-4" />
            <CustomButton
              Textname={"Add Allergies"}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
              onPress={handleShowAllergiesForm} // Show form when "Add Allergies" is clicked
            />
          </View>
        </>
      ) : (
        <>
          {/* Allergies Form Section */}
          <View className="flex justify-center w-full items-center " />
          <Text className="text-[20px] text-gray-400 font-bold ml-8 mb-6">
            Add Allegires
          </Text>
          <Text
            className="text-[14px] font-bold ml-8 mb-6"
            style={[Textstyles.text_medium]}
          >
            Suggestions
          </Text>
          <View className="px-5 mb-8">
            {allergies.map((allergy, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectAllergy(allergy)}
                className={`border-b h-12 pt-4 pb-2 mb-4 ${
                  selectedAllergy === allergy
                    ? "bg-[#0099B8]" // Selected allergy gets a blue background
                    : "bg-white"
                }`}
              >
                <Text
                  className={`text-[14px] pl-2 ${
                    selectedAllergy === allergy ? "text-white" : "text-black"
                  }`}
                  style={[Textstyles.text_small]}
                >
                  {allergy}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

export default Allegires;
