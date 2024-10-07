import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import {
  CustomButton,
  CustomButton2,
  CustomButtonsmall,
  CustomButtonsmall2,
} from "../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { height, width } from "../../constants/mobileDimensions";

const Provider = () => {
  const navigation = useNavigation();

  // State for identity selection
  const [selectedIdentity, setSelectedIdentity] = useState(null);

  // State for showing the confirmation modal
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Functions to handle navigation
  const handletonewacc = () => {
    if (selectedIdentity === "identity2") {
      setShowConfirmation(true); // Show popup for health provider
    } else {
      navigation.navigate("signup");
    }
  };

  const handletologin = () => {
    if (selectedIdentity === "identity2") {
      setShowConfirmation(true); // Show popup for health provider
    } else {
      navigation.navigate("login");
    }
  };

  // Function to handle the selection
  const handleSelection = (identity) => {
    setSelectedIdentity(identity);
  };

  // Function to proceed after confirmation
  const handleConfirmationContinue = () => {
    setShowConfirmation(false);
    if (selectedIdentity === "identity2") {
      navigation.navigate("healthProviderLogin"); // Adjust the route for health provider login/signup
    }
  };

  // Function to close confirmation modal
  const handleConfirmationBack = () => {
    setShowConfirmation(false);
  };

  return (
    <View
      style={{ height: height, width: width }}
      className="bg-white py-[40px]"
    >
      <StatusBar style="auto" />

      <View className="w-full h-44 mt-12 flex mb-7 justify-center items-center">
        <View className="w-[50%] h-32 flex justify-center items-center">
          <Image
            source={require("../../assets/images/logo.png")}
            resizeMode="contain"
            className="h-36 w-36"
          />
        </View>
        <Text className=" font-bold text-xl">Choose identity</Text>
      </View>
      <View className=" h-5"/>
      <View className=" w-full flex-row justify-between px-4 h-[115.39px] ">
        <TouchableOpacity className="w-[103px] h-[115.39px] justify-center items-center">
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
        </TouchableOpacity>
        <TouchableOpacity className="w-[103px] h-[115.39px] justify-center items-center">
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
        </TouchableOpacity>
        <TouchableOpacity className="w-[103px] h-[115.39px] justify-center items-center">
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
        </TouchableOpacity>
      </View>
      <View className=" h-12" />
      <View className=" w-full flex-row justify-between px-4 h-[115.39px] ">
        <TouchableOpacity className="w-[103px] h-[115.39px] justify-center items-center">
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
        </TouchableOpacity>
        <TouchableOpacity className="w-[103px] h-[115.39px] justify-center items-center">
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
        </TouchableOpacity>
        <TouchableOpacity className="w-[103px] h-[115.39px] justify-center items-center">
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
        </TouchableOpacity>
      </View>
      <View className=" h-12" />
      <View className=" w-full flex-row justify-between px-4 h-[115.39px]  ">
        <TouchableOpacity className="w-[103px] h-[115.39px] justify-center items-center">
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
        </TouchableOpacity>
        <TouchableOpacity className="w-[103px] h-[115.39px] justify-center items-center">
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
        </TouchableOpacity>
        <TouchableOpacity className="w-[103px] h-[115.39px] justify-center items-center">
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Provider;
