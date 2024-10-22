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
import {
  primarycolortwo,
  primarycolor,
  whitecolor,
} from "../../constants/color";

const Alcohol = () => {
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
        How frequently do you consume alcohol?
      </Text>
      <View className="  flex-row  px-5 items-center w-full">
        <OptionButton
          optionName="Non-drinker"
          isSelected={selectedOption === "Non-drinker"}
          onSelect={() => setSelectedOption("Non-drinker")}
          width={131}
        />
        <OptionButton
          optionName="Rare"
          isSelected={selectedOption === "Rare"}
          onSelect={() => setSelectedOption("Rare")}
          width={76}
        />
        <OptionButton
          optionName="social"
          isSelected={selectedOption === "social"}
          onSelect={() => setSelectedOption("social")}
          width={85}
        />
      </View>
      <View className=" w-full flex justify-start pl-5">
        <OptionButton
          optionName="Regular"
          isSelected={selectedOption === "Regular"}
          onSelect={() => setSelectedOption("Regular")}
          width={98}
        />
        <OptionButton
          optionName="Heavy"
          isSelected={selectedOption === "Heavy"}
          onSelect={() => setSelectedOption("Heavy")}
          width={88}
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

export default Alcohol;
