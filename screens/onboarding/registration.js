import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Textstyles } from "../../constants/fontsize";
import {
  CustomInputpassword,
  CustomInputWithHeader,
} from "../mycomponents/mycomponent";
import { Box, CustomTextnumber } from "../mycomponents/mycomponent";
import { primarycolor, whitecolor, greycolortwo } from "../../constants/color";
import { CustomButton } from "../mycomponents/mycomponent";
import NumericKeyboard from "../modals/CustomKeyboard"; // Importing the Numeric Keyboard

export default function Registration() {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(0); // Steps: 0 = phone input, 1 = OTP, 2 = password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false); // State to toggle keyboard visibility
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP input array

  const translateY = useSharedValue(600); // Animation for the keyboard
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleContinue = () => {
    if (currentStep === 2) {
      navigation.navigate("login"); // Navigate to the 'Login' screen when on the last step
    } else {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleContinueBackwards = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  // Toggle keyboard visibility
  const handleShowKeys = () => {
    setShowKeyboard((prevState) => !prevState);
    translateY.value = showKeyboard ? withSpring(600) : withSpring(200);
  };

  // Function to handle OTP input
  const handleOtpInput = (value) => {
    if (value === "") {
      // Handle deletion of the last inputted digit
      setOtp((prevOtp) => {
        const lastFilledIndex = prevOtp.findLastIndex((digit) => digit !== "");
        if (lastFilledIndex > -1) {
          const newOtp = [...prevOtp];
          newOtp[lastFilledIndex] = "";
          return newOtp;
        }
        return prevOtp;
      });
    } else if (value === "*") {
      // Handle OTP submission when "*" is pressed
      if (otp.some((digit) => digit === "")) {
        setErrorMsg("Incomplete OTP");
      } else {
        setErrorMsg(null);
        console.log("OTP Submitted:", otp.join(""));
        // Handle OTP submission logic here
      }
    } else {
      // Add new digit to the first empty slot
      setOtp((prevOtp) => {
        const nextEmptyIndex = prevOtp.indexOf("");
        if (nextEmptyIndex > -1) {
          const newOtp = [...prevOtp];
          newOtp[nextEmptyIndex] = value;
          return newOtp;
        }
        return prevOtp;
      });
    }
  };

  return (
    <View className="w-full h-full px-5 py-[88px] bg-white">
      {/* Back button */}
      {currentStep > 0 && (
        <TouchableOpacity
          onPress={handleContinueBackwards}
          className="absolute -top-9 left-3"
        >
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      )}

      {/* Conditional Headers */}
      <View className="mt-6 flex justify-center items-center">
        {currentStep === 0 && (
          <>
            <Text style={[Textstyles.text_medium]} className="mb-6">
              Create an account
            </Text>
            <Text style={[Textstyles.text_small]} className="text-center mb-6">
              Please enter your phone number to receive a 6-digit code via SMS
            </Text>
          </>
        )}

        {currentStep === 1 && (
          <>
            <Text style={[Textstyles.text_medium]} className="mb-6">
              Verification
            </Text>
            <Text style={[Textstyles.text_small]} className="text-center">
              Enter the 6-digit code sent to your phone
            </Text>
            <View style={{ alignItems: "center", marginTop: 40 }}>
              <Text style={[Textstyles.text_xsmall]} className="text-red-300">
                {errorMsg}
              </Text>
              <Pressable
                onPress={handleShowKeys}
                className="flex-row justify-center items-center"
              >
                {otp.map((digit, index) => (
                  <View
                    key={index}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <Box inputText={digit} />
                    {index < otp.length - 1 && <View className="w-4" />}
                  </View>
                ))}
              </Pressable>
            </View>
            <View className="flex-row h-10">
              <Text
                style={[Textstyles.text_small]}
                className="text-center mt-6"
              >
                Didn't get a code?
              </Text>
              <TouchableOpacity className="mt-6 ml-1">
                <Text
                  style={[Textstyles.text_small]}
                  className="text-[#0099b8]"
                >
                  Resend
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      <View className="h-4" />

      {currentStep === 0 && (
        <>
          <View className="mb-5">
            <CustomTextnumber
              placeholder={"mobile number"}
              placeholderTextColor={greycolortwo}
            />
          </View>
        </>
      )}

      <>
        {currentStep === 2 && (
          <>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0} // Increase offset here
            >
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View>
                  <Text
                    style={[Textstyles.text_medium]}
                    className="mb-4 text-center"
                  >
                    Welcome to HealthApp
                  </Text>
                  <View className="w-full h-28 mb-5 flex justify-center items-center">
                    <View className="w-[117.91px] justify-center flex items-center h-[109.36px] rounded-xl">
                      <Image
                        source={require("../../assets/images/pro.png")}
                        resizeMode="contain"
                        className="w-full"
                      />
                    </View>
                  </View>
                </View>

                <CustomInputWithHeader
                  headerText="First name"
                  placeholder="Enter your first name"
                  leftIconName="user"
                  onChange={(text) => console.log(text)}
                />
                <View className="h-3" />
                <CustomInputWithHeader
                  headerText="Last name"
                  placeholder="Enter your last name"
                  leftIconName="user"
                  onChange={(text) => console.log(text)}
                />
                <View className="h-3" />
                <CustomInputWithHeader
                  headerText="Email address"
                  placeholder="Enter your email address"
                  leftIconName="envelope"
                  onChange={(text) => console.log(text)}
                />
                <View className="h-3" />
                <CustomInputWithHeader
                  headerText="Phone number"
                  placeholder="Enter your phone number"
                  leftIconName="phone"
                  onChange={(text) => console.log(text)}
                />
                <View className="h-3" />
                <CustomInputWithHeader
                  headerText="Date of birth"
                  placeholder="Enter your date of birth"
                  leftIconName="calendar"
                  onChange={(text) => console.log(text)}
                />
                <View className="h-3" />
                <CustomInputWithHeader
                  headerText="Gender"
                  placeholder="Enter your Gender"
                  leftIconName="user"
                  onChange={(text) => console.log(text)}
                />
                <View className="h-3" />
                <CustomInputpassword
                  headerText="Password"
                  placeholder="Enter your password"
                  value={password}
                  secureTextEntry={true}
                  onChange={(text) => setPassword(text)}
                  leftIconName="lock"
                  leftIconColor="#000"
                  leftIconSize={20}
                />
                <View className="h-3" />
                <CustomInputpassword
                  headerText="Confirm password"
                  placeholder="Enter your password again"
                  value={password}
                  secureTextEntry={true}
                  onChange={(text) => setPassword(text)}
                  leftIconName="lock"
                  leftIconColor="#000"
                  leftIconSize={20}
                  className="mb-32"
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </>
        )}
      </>

      <View>
        <View className="h-8" />
        <CustomButton
          backgroundColor={primarycolor}
          Textname={
            currentStep === 2
              ? "Continue"
              : currentStep === 1
                ? "Verify"
                : "Send"
          }
          TextColor={whitecolor}
          onPress={handleContinue}
        />
      </View>

      {/* Numeric Keyboard */}
      {currentStep === 1 && (
        <View className="absolute -bottom-5 z-50 items-center">
          <Animated.View className="w-full h-[467px]" style={[animatedStyles]}>
            <NumericKeyboard onPress={(value) => handleOtpInput(value)} />
          </Animated.View>
        </View>
      )}
    </View>
  );
}
