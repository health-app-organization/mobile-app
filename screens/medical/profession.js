import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import {
  CustomButton,
  Header,
  CustomButton2,
  OptionButton,
} from "../mycomponents/mycomponent";
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import {
  primarycolortwo,
  primarycolor,
  whitecolor,
} from "../../constants/color";

const Profession = () => {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState(null);

  const handletocode = () => {
    navigation.navigate("");
  };

  return (
    <View className="flex-1 w-full">
      <StatusBar style="auto" />

      <Header title=" Medical" />
      <View className="flex justify-center w-full items-center mt-8" />
      <Text
        className="text-[14px] font-bold ml-8 mb-6"
        style={[Textstyles.text_medium]}
      >
        What is your profession?
      </Text>

      {/* Manually creating each OptionButton instead of mapping */}
      <View className="flex flex-wrap justify-center items-center mt-5">
        <View className=" flex-row justify-between px-5 items-center w-full">
        <OptionButton
          optionName="IT Professional"
          isSelected={selectedOption === "IT Professional"}
          onSelect={() => setSelectedOption("IT Professional")}
          width={183}
        />
        <OptionButton
          optionName="Home-Maker"
          isSelected={selectedOption === "Home-Maker"}
          onSelect={() => setSelectedOption("Home-Maker")}
          width={139}
        />
        </View>
        <View className=" flex-row justify-between px-5 items-center w-full">
        <OptionButton
          optionName="Education"
          isSelected={selectedOption === "Education"}
          onSelect={() => setSelectedOption("Education")}
          width={114}
        />
        <OptionButton
          optionName="Banking Professional"
          isSelected={selectedOption === "Banking Professional"}
          onSelect={() => setSelectedOption("Banking Professional")}
          width={191}
        />
        </View>
        <View className="  flex-row justify-between px-5 items-center w-full">
        <OptionButton
          optionName="Medical Professional"
          isSelected={selectedOption === "Medical Professional"}
          onSelect={() => setSelectedOption("Medical Professional")}
          width={189}
        />
        <OptionButton
          optionName="Student"
          isSelected={selectedOption === "Student"}
          onSelect={() => setSelectedOption("Student")}
          width={98}
        />
        </View>
        <View className=" w-full flex justify-start pl-5">
        <OptionButton
          optionName="Other"
          isSelected={selectedOption === "Other"}
          onSelect={() => setSelectedOption("Other")}
          width={100}
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

export default Profession;
