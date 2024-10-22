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


const Lifestyle = () => {
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
        How active is your lifestyle?
      </Text>
      <View className="  flex-row  px-5 items-center w-full">
        <OptionButton
          optionName="Athletic (very high)"
          isSelected={selectedOption === "Athletic (very high)"}
          onSelect={() => setSelectedOption("Athletic (very high)")}
          width={175}
        />
        <OptionButton
          optionName="Active (high"
          isSelected={selectedOption === "Active (high"}
          onSelect={() => setSelectedOption("Active (high")}
          width={126}
        />
      </View>
      <View className=" w-full flex justify-start pl-5">
        <OptionButton
          optionName="Moderately active (normal)"
          isSelected={selectedOption === "Moderately active (normal)"}
          onSelect={() => setSelectedOption("Moderately active (normal)")}
          width={235}
        />
      </View>
      <View className=" w-full flex justify-start pl-5">
        <OptionButton
          optionName="Sedentary (low)"
          isSelected={selectedOption === "Sedentary (low)"}
          onSelect={() => setSelectedOption("Sedentary (low)")}
          width={153}
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

export default Lifestyle;
