import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import {
  CustomButton,
  Header,
  CustomButton2,
  OptionButton
} from "../mycomponents/mycomponent";
import { useState } from "react";
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import { primarycolortwo, primarycolor, whitecolor } from "../../constants/color";

const Smoking = () => {
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
    How many cigarettes do you smoke per day?
      </Text>
      <View className="  flex-row  px-5 items-center w-full">
        <OptionButton
          optionName="1-2/day"
          isSelected={selectedOption === "1-2/day"}
          onSelect={() => setSelectedOption("1-2/day")}
          width={96}
        />
        <OptionButton
          optionName="I don’t smoke at all"
          isSelected={selectedOption === "I don’t smoke at all"}
          onSelect={() => setSelectedOption("I don’t smoke at all")}
          width={174}
        />
        </View>
        <View className=" w-full flex justify-start pl-5">
        <OptionButton
          optionName="I used to, but i have quit"
          isSelected={selectedOption === "I used to, but i have quit"}
          onSelect={() => setSelectedOption("I used to, but i have quit")}
          width={207}
        />
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

export default Smoking;
