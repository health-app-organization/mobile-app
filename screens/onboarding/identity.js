import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, StatusBar } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // For the mark icon
import {
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import { CustomButton, CustomButton2 } from "../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { height, width } from "../../constants/mobileDimensions";

const Identity = () => {
  const navigation = useNavigation();
  const handletonewacc = () => {
    navigation.navigate("signup");
  };
  const handletologin = () => {
    navigation.navigate("login");
  };

  // State to track which item was selected
  const [selectedIdentity, setSelectedIdentity] = useState(null);

  // Function to handle the selection
  const handleSelection = (identity) => {
    setSelectedIdentity(identity);
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

      <View className="flex-row items-center justify-evenly w-full h-64">
        {/* TouchableOpacity for Identity 1 */}
        <TouchableOpacity
          className="w-[143.01px] h-[188.56px] justify-center items-center relative"
          onPress={() => handleSelection("identity1")}
        >
          <Image
            source={require("../../assets/images/Frame 8.png")}
            resizeMode="contain"
            className="w-full"
          />
          {/* Show check mark if this one is selected */}
          {selectedIdentity === "identity1" && (
            <View className="absolute top-2 right-2 bg-black p-1 rounded-full">
              <FontAwesome name="check" size={16} color={whitecolor} />
            </View>
          )}
        </TouchableOpacity>

        {/* TouchableOpacity for Identity 2 */}
        <TouchableOpacity
          className="w-[143.01px] h-[188.56px] justify-center items-center relative"
          onPress={() => handleSelection("identity2")}
        >
          <Image
            source={require("../../assets/images/Frame 9.png")}
            resizeMode="contain"
            className="w-full"
          />
          {/* Show check mark if this one is selected */}
          {selectedIdentity === "identity2" && (
            <View className="absolute top-2 right-2 bg-black p-1 rounded-full z-10">
              <FontAwesome name="check" size={16} color={whitecolor} />
            </View>
          )}
        </TouchableOpacity>
      </View>

      {/* Conditionally show buttons when an identity is selected */}
      {selectedIdentity && (
        <View className="px-4 mt-36">
          <CustomButton
            Textname={"Login"}
            onPress={handletologin}
            backgroundColor={primarycolor}
            TextColor={whitecolor}
          />
          <View className="h-3" />
          <CustomButton2
            Textname={"Create account"}
            onPress={handletonewacc}
            backgroundColor={primarycolortwo}
            TextColor={primarycolor}
          />
        </View>
      )}
    </View>
  );
};

export default Identity;
