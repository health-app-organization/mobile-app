import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { height } from "../../../constants/mobileDimensions";
import { Textstyles } from "../../../constants/fontsize";
import { primarycolor, whitecolor } from "../../../constants/color";
import { FontAwesome } from "@expo/vector-icons";
import { StackNavigation } from "../../../types/stack";
import { CustomInputPassword, CustomInputWithHeader } from "components/utilities/inputs";
import { CustomButton } from "components/utilities/buttons";

export default function Healthcare() {
  const navigation = useNavigation<StackNavigation>();
  const [currentStep, setCurrentStep] = useState(0); // Steps: 0 = phone input, 1 = OTP, 2 = password
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = React.useState("");

  const handleContinue = () => {
    navigation.navigate("doctor-verification");
  };

  return (
    <View style={{ height: height }} className="w-full px-5 py-[88px] bg-white">
      <View className=" mt-10">
        <Text style={[Textstyles.text_medium]} className="mb-4  text-center">
          Welcome to HealthApp
        </Text>
        <View className=" flex items-center justify-center w-full ">
          <View className=" w-[85%] ">
            <Text className=" text-center mb-5" style={[Textstyles.text_small]}>
              Please enter your personal information to create your account
            </Text>
          </View>
        </View>
      </View>

      <CustomInputWithHeader
        headerText="Phone number"
        placeholder="Enter your phone number"
        leftIcon={<FontAwesome name="phone" color="#000" size={20} />}
        value={phoneNumber}
        onChange={(text) => setPhoneNumber(text)}
      />
      <View className="h-5" />
      <CustomInputWithHeader
        headerText="Email address"
        placeholder="Enter your email address"
        leftIcon={<FontAwesome name="envelope" color="#000" size={20} />}
        value={email}
        onChange={(text) => setEmail(text)}
      />
      <View className="h-5" />

      <CustomInputPassword
        headerText="Password"
        placeholder="Enter your password"
        value={password}
        secureTextEntry={true} // Enable password mode with secureTextEntry
        onChange={(text) => setPassword(text)} // Update password state on input change
        leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
      />
      <View className="h-5" />

      <CustomInputPassword
        headerText="Confirm  password"
        placeholder="Enter your password again"
        value={password}
        secureTextEntry={true} // Enable password mode with secureTextEntry
        onChange={(text) => setPassword(text)} // Update password state on input change
        leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
        className=" mb-32"
      />
      <View className=" h-10" />
      <CustomButton
        Textname={"Continue"}
        backgroundColor={primarycolor}
        TextColor={whitecolor}
        onPress={handleContinue}
      />
      <View className="flex-row justify-center items-center mt-4 flex-wrap">
        <Text style={[Textstyles.text_small]} className="text-center">
          By clicking continue, you are agreeing to the
        </Text>
        <TouchableOpacity>
          <Text style={[Textstyles.text_small]} className="text-[#0099b8] ml-1">
            Terms of Use
          </Text>
        </TouchableOpacity>
        <Text style={[Textstyles.text_small]} className="ml-1">
          and the
        </Text>
        <TouchableOpacity>
          <Text style={[Textstyles.text_small]} className="text-[#0099b8] ml-1">
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
