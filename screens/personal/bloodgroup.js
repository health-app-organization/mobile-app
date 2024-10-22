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

const Bloodgroup = () => {
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
        What is your Blood Group?
      </Text>

      {/* Manually creating each OptionButton instead of mapping */}
      <View className="flex flex-wrap justify-center items-center mt-5">
        <View className=" flex-row justify-between px-8 items-center w-full">
          <OptionButton
            optionName="A+"
            isSelected={selectedOption === "A+"}
            onSelect={() => setSelectedOption("A+")}
            width={71}
          />
          <OptionButton
            optionName="A-"
            isSelected={selectedOption === "A-"}
            onSelect={() => setSelectedOption("A-")}
            width={71}
          />
          <OptionButton
            optionName="B+"
            isSelected={selectedOption === "B+"}
            onSelect={() => setSelectedOption("B+")}
            width={71}
          />
          <OptionButton
            optionName="B-"
            isSelected={selectedOption === "B-"}
            onSelect={() => setSelectedOption("B-")}
            width={71}
          />
        </View>
        <View className=" flex-row justify-between  px-14 items-center w-full">
          <OptionButton
            optionName="O+"
            isSelected={selectedOption === "O+"}
            onSelect={() => setSelectedOption("O+")}
            width={71}
          />
          <OptionButton
            optionName="O-"
            isSelected={selectedOption === "O-"}
            onSelect={() => setSelectedOption("O-")}
            width={71}
          />
          <OptionButton
            optionName="AB+"
            isSelected={selectedOption === "AB+"}
            onSelect={() => setSelectedOption("AB+")}
            width={71}
          />
        </View>

        <View className=" w-full flex justify-center items-center ">
          <OptionButton
            optionName="AB-"
            isSelected={selectedOption === "AB-"}
            onSelect={() => setSelectedOption("AB-")}
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

export default Bloodgroup;
