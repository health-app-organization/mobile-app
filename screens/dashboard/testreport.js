import React, { useState } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import noReportsImage from "../../assets/images/pana.png";
import {
  FloatingActionButton,
  CustomInputWithHeader,
  CustomInputWithHeader2,
  CustomInputWithHeaderdes,
  CustomButton,
} from "../mycomponents/mycomponent";
import { primarycolor, whitecolor } from "../../constants/color"; // Adjust the path based on your folder structure

const TestReport = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleFabPress = () => {
    setIsFormVisible(true); // Show the form and hide initial content
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Hide the form and show initial content
  };

  return (
    <View
      className={`flex justify-center items-center ${
        !isFormVisible ? "mt-40" : ""
      }`}
    >
      {/* Conditionally render either the initial content or the form */}
      {!isFormVisible ? (
        // Initial content
        <>
          <Image
            source={noReportsImage}
            className="w-36 h-36 mb-4"
            resizeMode="contain"
          />
          <Text className="text-lg text-black">No test reports available.</Text>
          <View className="absolute -bottom-72 -right-2">
            <FloatingActionButton onPress={handleFabPress} />
          </View>
        </>
      ) : (
        // Add Test Report form
        <View className="w-full bg-white">
          <KeyboardAvoidingView>
            <CustomInputWithHeader headerText="Report Name" />
            <View className="h-3" />
            <CustomInputWithHeader headerText="Doctor's Name" />

            <View className=" flex-row    ">
              <CustomInputWithHeader2 headerText="Date" />
              <CustomInputWithHeader2 headerText="Time" />
            </View>
            <View className="h-3" />
            <CustomInputWithHeaderdes headerText="Description" />
            <View className=" mt-7">
              <CustomButton
                Textname={"Save"}
                backgroundColor={primarycolor}
                TextColor={whitecolor}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      )}
    </View>
  );
};

export default TestReport;
