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
import { primarycolortwo, primarycolor, whitecolor } from "../../constants/color";

const Injuries = () => {
  const navigation = useNavigation();
  const [showIncidentForm, setShowIncidentForm] = useState(false); // State to toggle the form
  const [selectedIncident, setSelectedIncident] = useState(null); // Track the selected incident

  // Suggestions for injuries
  const incidents = [
    "Burns",
    "Spinal Cord Injury",
    "Spinal Fracture",
    "Skull Fracture",
  ];

  // Function to show incidents form when "No" or "Add Incident" is pressed
  const handleShowForm = () => {
    setShowIncidentForm(true); // Show the form
  };

  // Handle selecting an incident
  const handleSelectIncident = (incident) => {
    setSelectedIncident(incident); // Set the selected incident
  };

  return (
    <View className="flex-1 w-full bg-white">
      <StatusBar style="auto" />

      {/* Conditionally render headers based on form state */}
      {!showIncidentForm ? (
        <Header title="Medical" />
      ) : (
        <Header6 title="Add Incident" />
      )}

      <View className="flex justify-center w-full items-center mt-8" />

      {!showIncidentForm ? (
        <>
          <Text
            className="text-[14px] font-bold ml-8 mb-6"
            style={[Textstyles.text_medium]}
          >
            Have you had any injuries in the past?
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
              Textname={"Add Incident"}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
              onPress={handleShowForm} // Show form when "Add Incident" is clicked
            />
          </View>
        </>
      ) : (
        <>
          {/* Incidents Form Section */}
          <Text
            className="text-[20px] text-gray-400 font-bold ml-8 mb-6"
          >
            Add Incident
          </Text>
          <Text
            className="text-[14px] font-bold ml-8 mb-6"
            style={[Textstyles.text_medium]}
          >
            Suggestions
          </Text>
          <View className="px-5 mb-8">
            {incidents.map((incident, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleSelectIncident(incident)}
                className={`border-b h-12 pt-4 pb-2 mb-4 ${
                  selectedIncident === incident
                    ? "bg-[#0099B8]" // Selected incident gets a blue background
                    : "bg-white"
                }`}
              >
                <Text
                  className={`text-[14px] pl-2 ${
                    selectedIncident === incident ? "text-white" : "text-black"
                  }`}
                  style={[Textstyles.text_small]}
                >
                  {incident}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
    </View>
  );
};

export default Injuries;
