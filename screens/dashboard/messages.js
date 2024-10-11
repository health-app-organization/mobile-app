import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import {
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import HeaderTitle, {
  CustomButton,
  CustomButton2,
  CustomButtonsmall,
  CustomButtonsmall2,
  CustomInputSearch,
  CustomTextInput,
} from "../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { height, width } from "../../constants/mobileDimensions";

const Messages = () => {
  const navigation = useNavigation();
  const handletocheck = () => {
    navigation.navigate("apponitments");
  };

  return (
    <View className=" py-[40px] h-screen">
      <StatusBar style="auto" />
      <View>
        <HeaderTitle title="My Messages" />
      </View>

      <View className=" px-7 mt-8">
        <CustomInputSearch
          placeholder="Search for chat"
          leftIconName="search" // Use FontAwesome email icon
          onChange={(text) => console.log(text)}
        />
      </View>
      <View className=" mt-1 w-full flex justify-center items-center  h-[660px]">
        <TouchableOpacity
          onPress={handletocheck}
          className=" w-52 h-52 bg-blue-800 -mt-12"
        ></TouchableOpacity>
      </View>
    </View>
  );
};

export default Messages;
