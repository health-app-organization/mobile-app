import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import {
  CustomButton,
  Header,
  CustomButton2,
  OptionButton,
} from "../mycomponents/mycomponent";
import { useState } from "react";
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import {
  primarycolortwo,
  primarycolor,
  whitecolor,
} from "../../constants/color";

const Diet = () => {
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
        What does your diet mainly consist of?
      </Text>
      <View className="  flex-row justify-between px-5 items-center w-full">
        <OptionButton
          optionName="Vegetarian"
          isSelected={selectedOption === "Vegetarian"}
          onSelect={() => setSelectedOption("Vegetarian")}
          width={122}
        />
        <OptionButton
          optionName="Non-Vegetarian"
          isSelected={selectedOption === "Non-Vegetarian"}
          onSelect={() => setSelectedOption("Non-Vegetarian")}
          width={157}
        />
      </View>
      <View className="  flex-row justify-between px-5 items-center w-full">
        <OptionButton
          optionName="Vegan"
          isSelected={selectedOption === "Vegan"}
          onSelect={() => setSelectedOption("Vegan")}
          width={88}
        />
        <OptionButton
          optionName="Eggetarian"
          isSelected={selectedOption === "Eggetarian"}
          onSelect={() => setSelectedOption("Eggetarian")}
          width={122}
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

export default Diet;
