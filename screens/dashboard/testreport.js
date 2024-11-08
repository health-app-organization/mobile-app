import React, { useState } from "react";
import { View, Text, Image, KeyboardAvoidingView } from "react-native";
import noReportsImage from "../../assets/images/pana.png";
import {
  FloatingActionButton,
  CustomInputWithHeader,
  CustomInputWithHeader2,
  CustomInputWithHeaderdes,
  CustomButton,
  AppointmentCard,
} from "../mycomponents/mycomponent";
import { primarycolor, whitecolor } from "../../constants/color";

const TestReport = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isAppointmentVisible, setIsAppointmentVisible] = useState(false);

  const handleFabPress = () => {
    setIsFormVisible(true);
    setIsAppointmentVisible(false); // Hide appointment card when form opens
  };

  const handleSavePress = () => {
    setIsAppointmentVisible(true);
    setIsFormVisible(false); // Hide form when appointment card is shown
  };

  return (
    <View
      className={`flex justify-center items-center ${
        !isFormVisible && !isAppointmentVisible ? "mt-40" : ""
      }`}
    >
      {/* Conditionally render either the initial content, form, or appointment card */}
      {!isFormVisible && !isAppointmentVisible ? (
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
      ) : isFormVisible ? (
        // Add Test Report form
        <View className="w-full bg-white">
          <KeyboardAvoidingView>
            <CustomInputWithHeader headerText="Report Name" />
            <View className="h-3" />
            <CustomInputWithHeader headerText="Doctor's Name" />

            <View className="flex-row">
              <CustomInputWithHeader2 headerText="Date" />
              <CustomInputWithHeader2 headerText="Time" />
            </View>
            <View className="h-3" />
            <CustomInputWithHeaderdes headerText="Description" />
            <View className="mt-7">
              <CustomButton
                Textname={"Save"}
                backgroundColor={primarycolor}
                TextColor={whitecolor}
                onPress={handleSavePress}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      ) : (
        <View className=" w-full">
          <AppointmentCard
            title="Malaria"
            doctorName="Dr Micheal Brains"
            dateTime="28TH OCT, 2024  11:45 AM"
          />
          <AppointmentCard
            title="Malaria"
            doctorName="Dr Micheal Brains"
            dateTime="28TH OCT, 2024  11:45 AM"
          />
          <View className="absolute -bottom-[230%] -right-2">
            <FloatingActionButton onPress={handleFabPress} />
          </View>
        </View>
      )}
    </View>
  );
};

export default TestReport;
