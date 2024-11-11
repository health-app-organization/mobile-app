import {
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { height } from "../../../../constants/mobileDimensions";
import { Textstyles } from "../../../../constants/fontsize";
import {
  CustomInputpassword,
  CustomInputWithHeader,
} from "../../../mycomponents/mycomponent";
import {
  primarycolor,
  whitecolor,
} from "../../../../constants/color";
import { CustomButton } from "../../../mycomponents/mycomponent";

export default function Healthcare() {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0); // Steps: 0 = phone input, 1 = OTP, 2 = password
  const [email, setEmail] = useState("");
  const [password, setPassword] = React.useState("");

  const handleContinue = () => {
    navigation.navigate("doctor-verification");
  }

  return (
    <View style={{ height: height }} className="w-full px-5 py-[88px] bg-white">
      <View className=" mt-10">
        <Text style={[Textstyles.text_medium]} className="mb-4  text-center">
          Welcome to HealthApp
        </Text>
        <View className=" flex items-center justify-center w-full ">
          <View className=" w-[85%] ">
            <Text
              className=" text-center h-10  mb-5"
              style={[Textstyles.text_small]}
            >
              Please enter your personal information to create your account
            </Text>
          </View>
        </View>
      </View>

      <CustomInputWithHeader
        headerText="Phone number"
        placeholder="Enter your phone number"
        leftIconName="phone" // Use FontAwesome email icon
        onChange={(text) => console.log(text)}
      />
      <View className="h-5" />
      <CustomInputWithHeader
        headerText="Email address"
        placeholder="Enter your email address"
        leftIconName="envelope" // Use FontAwesome email icon
        onChange={(text) => console.log(text)}
      />
      <View className="h-5" />

      <CustomInputpassword
        headerText="Password"
        placeholder="Enter your password"
        value={password}
        secureTextEntry={true} // Enable password mode with secureTextEntry
        onChange={(text) => setPassword(text)} // Update password state on input change
        leftIconName="lock" // Optional: Add a lock icon on the left
        leftIconColor="#000"
        leftIconSize={20}
      />
      <View className="h-5" />

      <CustomInputpassword
        headerText="Confirm  password"
        placeholder="Enter your password again"
        value={password}
        secureTextEntry={true} // Enable password mode with secureTextEntry
        onChange={(text) => setPassword(text)} // Update password state on input change
        leftIconName="lock" // Optional: Add a lock icon on the left
        leftIconColor="#000"
        leftIconSize={20}
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
