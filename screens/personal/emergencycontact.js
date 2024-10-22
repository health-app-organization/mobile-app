import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import {
  CustomButton,
  CustomInputWithHeader,
  Header,
  CustomTextnumber,
  CustomButton2,
  OptionButton,
  CustomTextnumberlabel,
} from "../mycomponents/mycomponent";
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import {
  primarycolortwo,
  primarycolor,
  whitecolor,
  greycolortwo
} from "../../constants/color";

const Emergency= () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handletocode = () => {
    navigation.navigate("");
  };

  return (
    <View className="flex-1 w-full">
      <StatusBar style="auto" />

      <Header title=" Personal" />
      <View className="flex justify-center w-full items-center mt-8" />
      <Text
        className="text-[14px] font-bold ml-8 mb-6"
        style={[Textstyles.text_medium]}
      >
      Who is your emergency contact?
      </Text>

      {/* Manually creating each OptionButton instead of mapping */}
      <View className="flex flex-wrap justify-center items-center mt-5">
        <View className=" flexjustify-between px-8 items-center w-full">
        <CustomInputWithHeader
                    headerText="Full name"
                    placeholder="Enter your full name"
                    leftIconName="user"
                    onChange={(text) => console.log(text)}
                  />
                  <View className=" h-8"/>
                  <CustomTextnumberlabel
                   label="Phone Number"
                    placeholder={"mobile number"}
                    placeholderTextColor={greycolortwo}
                  />
        </View>

       
      </View>

      <View className="flex-grow" />
      <View className="px-5 mb-8">
        <CustomButton
          Textname={"Save"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
        />
      </View>
    </View>
  );
};

export default Emergency;
