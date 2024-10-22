import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import {
  CustomButton,
  Header,
  CustomButton2,
  Header6,
} from "../mycomponents/mycomponent";
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import {
  primarycolortwo,
  primarycolor,
  whitecolor,
} from "../../constants/color";

const Surgeries = () => {
  const navigation = useNavigation();
  const [showSurgeryForm, setShowSurgeryForm] = useState(false); // State to toggle the form
  const [selectedSurgery, setSelectedSurgery] = useState(null); // Track the selected surgery

  // Suggestions for surgeries
  const surgeries = ["Heart", "Liver", "Kidney", "Lungs", "Brain"];

  // Function to show surgeries form when "No" or "Add Surgeries" is pressed
  const handleShowForm = () => {
    setShowSurgeryForm(true); // Show the form
  };

  // Handle selecting a surgery
  const handleSelectSurgery = (surgery) => {
    setSelectedSurgery(surgery); // Set the selected surgery
  };

  return (
    <View className="flex-1 w-full bg-white">
      <StatusBar style="auto" />

      {/* Conditionally render headers based on form state */}
      {!showSurgeryForm ? (
        <Header title="Medical" />
      ) : (
        <Header6 title="Add Surgeries" />
      )}

      <View className="flex justify-center w-full items-center mt-8" />

      {!showSurgeryForm ? (
        <>
          <Text
            className="text-[14px] font-bold ml-8 mb-6"
            style={[Textstyles.text_medium]}
          >
            Any past Surgeries?
          </Text>
          <View className="flex-grow" />
          <View className="px-5 mb-8">
            <CustomButton2
              Textname={"No"}
              backgroundColor={primarycolortwo}
              TextColor={primarycolor}
              onPress={handleShowForm} // Show form when "No" is clicked
            />
            <View className="h-4" />
            <CustomButton
              Textname={"Add Surgeries"}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
              onPress={handleShowForm} // Show form when "Add Surgeries" is clicked
            />
          </View>
        </>
      ) : (
        <>
          {/* Surgeries Form Section */}
          <Text className="text-[20px] -mt-6 text-gray-400 font-bold ml-8 mb-6">
            Add Surgeries
          </Text>
          <Text
            className="text-[14px] font-bold ml-8 mb-6"
            style={[Textstyles.text_medium]}
          >
            Suggestions
          </Text>
          <View className="px-5 mb-8">
            {surgeries.map((surgery, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectSurgery(surgery)}
                className={`border-b h-12 pt-4 pb-2 mb-4 ${
                  selectedSurgery === surgery
                    ? "bg-[#0099B8]" // Selected surgery gets a blue background
                    : "bg-white"
                }`}
              >
                <Text
                  className={`text-[14px] pl-2 ${
                    selectedSurgery === surgery ? "text-white" : "text-black"
                  }`}
                  style={[Textstyles.text_small]}
                >
                  {surgery}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

export default Surgeries;
