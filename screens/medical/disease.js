import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from 'react-native';
import { CustomButton, Header, CustomButton2, Header6 } from '../mycomponents/mycomponent';
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import { primarycolortwo, primarycolor, whitecolor } from "../../constants/color";

const Disease = () => {
  const navigation = useNavigation();
  const [showDiseaseForm, setShowDiseaseForm] = useState(false); // State to toggle the form
  const [selectedDisease, setSelectedDisease] = useState(null); // Track the selected disease

  // Suggestions for chronic illnesses
  const diseases = [
    "Diabetes",
    "Hypertension",
    "PCOS",
    "Hypothyroidism",
    "COPD",
    "Asthma",
  ];

  // Function to show diseases form when "No" or "Add Disease" is pressed
  const handleShowForm = () => {
    setShowDiseaseForm(true); // Show the form
  };

  // Handle selecting a disease
  const handleSelectDisease = (disease) => {
    setSelectedDisease(disease); // Set the selected disease
  };

  return (
    <View className="h-screen w-full bg-white" style={{ flex: 1 }}>
      <StatusBar style="auto" />

      {/* Conditionally render headers based on form state */}
      {!showDiseaseForm ? (
        <Header title="Medical" />
      ) : (
        <Header6 title="Add Disease" />
      )}

      <View className="flex justify-center w-full items-center mt-8" />

      {!showDiseaseForm ? (
        <>
          <Text className="text-[14px] font-semibold ml-8 mb-6" style={[Textstyles.text_medium]}>
            Do you have any chronic illness?
          </Text>
          <View className="flex-grow" />
          <View className="px-5 mb-8"> 
            <CustomButton2
              Textname={"No"}
              backgroundColor={primarycolortwo}
              TextColor={primarycolor}
              onPress={handleShowForm} // Show form when "No" is clicked
            />
            <View className="h-4"/>
            <CustomButton
              Textname={"Add Disease"}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
              onPress={handleShowForm} // Show form when "Add Disease" is clicked
            />
          </View>
        </>
      ) : (
        <>
          {/* Diseases Form Section */}
          <Text className="text-[20px] -mt-7 text-gray-400 font-bold ml-8 mb-6">
            Add Disease
          </Text>
          <Text
            className="text-[14px] font-bold ml-8 mb-6"
            style={[Textstyles.text_medium]}
          >
            Suggestions
          </Text>
          <View className="px-5 mb-8">
            {diseases.map((disease, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectDisease(disease)}
                className={`border-b h-12 pt-4 pb-2 mb-4 ${
                  selectedDisease === disease
                    ? "bg-[#0099B8]" // Selected disease gets a blue background
                    : "bg-white"
                }`}
              >
                <Text
                  className={`text-[14px] pl-2 ${
                    selectedDisease === disease ? "text-white" : "text-black"
                  }`}
                  style={[Textstyles.text_small]}
                >
                  {disease}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

export default Disease;
