import React from "react";
import { View, Text, Image } from "react-native";
import noReportsImage from "../../assets/images/pana.png"; // Adjust the path based on your folder structure

const TestReport = () => (
  <View className=" flex mt-40 justify-center items-center ">
    <Image
      source={noReportsImage} // Use the imported image
      className="w-36 h-36 mb-4" // Adjust width and height as needed
      resizeMode="contain" // Adjust image scaling
    />
    <Text className="text-lg text-black">No test reports available.</Text>
  </View>
);

export default TestReport;
