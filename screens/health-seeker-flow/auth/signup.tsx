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
import { Feather, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Textstyles } from "../../../constants/fontsize";
import {
  primarycolor,
  whitecolor,
  greycolortwo,
} from "../../../constants/color";
import NumericKeyboard from "../../../components/modals/custom-keyboard"; // Importing the Numeric Keyboard
import { height } from "../../../constants/mobileDimensions";
import { RadioButton } from "react-native-paper";
import { customstyle } from "../../../constants/customstyle";
import DateModal from "../../../components/modals/date-modal";
import SuccessModal from "../../../components/modals/success-modal";
import { handleOtpInput } from "../../../utilities/utility";
import { StackNavigation } from "../../../types/stack";
import { StatusBar } from "expo-status-bar";
import { Box } from "components/utilities/box";
import {
  CustomInputPassword,
  CustomInputWithHeader,
  CustomTextInput,
} from "components/utilities/inputs";
import { CustomButton } from "components/utilities/buttons";
import { sendVerificationToken } from "redux/slices/send-otp";
import { RootState, useAppDispatch } from "redux/store";
import { useSelector } from "react-redux";

export default function SignUp() {
  const navigation = useNavigation<StackNavigation>();
  const [currentStep, setCurrentStep] = useState(0); // Steps: 0 = phone input, 1 = OTP, 2 = password
  // step 0
  const [phoneNumber, setPhoneNumber] = useState(""); //required
  // step 2
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(""); //required
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // const [isLoading, setIsLoading] = useState(false);
  const [showDate, setShowDate] = useState(false); //for date picker

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showKeyboard, setShowKeyboard] = useState(false); // State to toggle keyboard visibility
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP input array
  const [showLoginModal, setShowLoginModal] = useState(false);
  const dispatch = useAppDispatch();
  const { loading: isLoading } = useSelector((state: RootState) => state.otp);

  const translateY = useSharedValue(600); // Animation for the keyboard
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  const translateYsuccess = useSharedValue(600); // Animation for the keyboard
  const animatedStylessucess = useAnimatedStyle(() => ({
    transform: [{ translateY: translateYsuccess.value }],
  }));
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const handleContinue = async () => {
  //   if (isLoading) {
  //     return;
  //   }
  //   if (currentStep === 2) {
  //     console.log(phoneNumber);
  //     const data = {
  //       phoneNumber,
  //       firstName,
  //       lastName,
  //       email,
  //       birthDate,
  //       gender,
  //       password,
  //     };
  //     setIsLoading(true);
  //     // const response = await RegisterDataThree(
  //     //   data,
  //     //   setIsLoading,
  //     //   setErrorMessage,
  //     //   setCurrentStep
  //     // );
  //     // if (response === "ok") {
  //     setShowLoginModal(true);
  //     //   translateYsuccess.value = withSpring(0, {
  //     //     damping: 10,
  //     //     stiffness: 100,
  //     //   });
  //     // }

  //     setIsLoading(false);
  //   } else if (currentStep === 0) {
  //     if (!isValidEmail(email)) {
  //       setErrorMessage("Invalid Email Address");
  //       return;
  //     }
  //     // RegisterDataOne(email, setIsLoading, setErrorMessage, setCurrentStep);
  //   } else {
  //     const joinOtp = otp.join("");
  //     // RegisterDataTwo(
  //     //   email,
  //     //   joinOtp,
  //     //   setIsLoading,
  //     //   setErrorMessage,
  //     //   setCurrentStep
  //     // );
  //   }
  // };

  const handleContinue = async () => {
    if (isLoading) return;

    if (currentStep === 0) {
      if (!isValidEmail(email)) {
        setErrorMessage("Invalid Email Address");
        return;
      }

      const res = await dispatch(sendVerificationToken(email));

      if (sendVerificationToken.fulfilled.match(res)) {
        setCurrentStep(1);
      } else {
        const err = res.payload as string;
        setErrorMessage(err || "Failed to send OTP.");
      }
    } else if (currentStep === 1) {
      const joinOtp = otp.join("");
      if (joinOtp.length !== 6) {
        setErrorMessage("Please enter a 6-digit code.");
        return;
      }

      // dispatch verifyOtpThunk({ email, otp: joinOtp }) here
      // if success -> setCurrentStep(2)
    } else if (currentStep === 2) {
      const data = {
        phoneNumber,
        firstName,
        lastName,
        email,
        birthDate,
        gender,
        password,
      };

      // dispatch registerUser(data) here
      // if success -> setShowLoginModal(true)
    }
  };

  const handleContinueBackwards = () => {
    if (currentStep > 0) {
      setErrorMessage(null);
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  // Toggle keyboard visibility
  const handleShowKeys = () => {
    setShowKeyboard((prevState) => !prevState);
    translateY.value = showKeyboard ? withSpring(600) : withSpring(200);
  };

  // use effect to check for update to confirm password
  useEffect(() => {
    if (password !== confirmPassword) {
      setErrorMessage("Password does not match password");
    } else {
      setErrorMessage(null);
    }
  }, [confirmPassword]);

  // Email validator function

  return (
    <>
      <StatusBar backgroundColor="white" />
      {showDate && (
        <DateModal
          setBirthDate={(value) => setBirthDate(value)}
          birthDate={birthDate}
          closeModal={(value) => setShowDate(value)}
        />
      )}
      {/* Success Modal Display */}
      {currentStep === 2 && showLoginModal && (
        <>
          <View
            style={{ backgroundColor: primarycolor }}
            className="h-full w-full absolute z-40 opacity-70 "
          />
          <Animated.View
            className="absolute z-50 bottom-0 justify-center items-center w-full"
            style={[animatedStylessucess]} // Spring animation applied here
          >
            <SuccessModal
              handlenavigate={() => {
                navigation.navigate("health-seeker", { screen: "login" });
              }}
            />
          </Animated.View>
        </>
      )}

      <View style={{ height: height }}>
        <View className="w-full h-full px-5 py-[88px]">
          {/* Numeric Keyboard */}
          {currentStep === 1 && (
            <View className="absolute -bottom-5 z-40   items-center">
              <Animated.View
                className="w-full h-[500px]"
                style={[animatedStyles]}
              >
                <NumericKeyboard
                  onPress={(value: string) =>
                    handleOtpInput({ value, setOtp, otp, setErrorMessage })
                  }
                />
              </Animated.View>
            </View>
          )}

          {/* Back button */}
          {currentStep > 0 && (
            <TouchableOpacity
              onPress={handleContinueBackwards}
              className="absolute top-16 left-3"
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
                <Text
                  style={[Textstyles.text_small]}
                  className="text-center mb-6"
                >
                  Please enter your email to receive a 6-digit code via SMS
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
                  <Text
                    style={[Textstyles.text_xsmall]}
                    className="text-red-300"
                  >
                    {errorMessage}
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
                <View className="flex-row">
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
                <CustomTextInput
                  placeholder={"enter your email"}
                  placeholderTextColor={greycolortwo}
                  onChange={(val) => setEmail(val)}
                  value={email}
                  leftIcon={
                    <FontAwesome name="envelope" color="#ccc" size={20} />
                  }
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
                            source={require("../../../assets/images/pro.png")}
                            resizeMode="contain"
                            className="w-full"
                          />
                        </View>
                      </View>
                    </View>

                    <CustomInputWithHeader
                      headerText="First name"
                      placeholder="Enter your first name"
                      leftIcon={
                        <FontAwesome name="user" color="#000" size={20} />
                      }
                      value={firstName}
                      onChange={(text) => setFirstName(text)}
                    />
                    <View className="h-3" />
                    <CustomInputWithHeader
                      headerText="Last name"
                      placeholder="Enter your last name"
                      leftIcon={
                        <FontAwesome name="user" color="#000" size={20} />
                      }
                      value={lastName}
                      onChange={(text) => setLastName(text)}
                    />
                    <View className="h-3" />
                    <CustomInputWithHeader
                      headerText="Email address"
                      placeholder="Enter your email address"
                      leftIcon={
                        <FontAwesome name="envelope" color="#000" size={20} />
                      }
                      value={email}
                      onChange={(text) => setEmail(text)}
                      disabled
                    />
                    <View className="h-3" />
                    <CustomInputWithHeader
                      headerText="Phone number"
                      placeholder="Enter your phone number"
                      leftIcon={
                        <FontAwesome name="phone" color="#000" size={20} />
                      }
                      value={`+234 ${phoneNumber}`}
                      onChange={(text) => setPhoneNumber(text)}
                    />
                    <View className="h-3" />
                    <Text className="mb-2" style={[Textstyles.text_cmedium]}>
                      Date of birth
                    </Text>
                    <TouchableOpacity
                      className="flex justify-center"
                      onPress={() => setShowDate(true)}
                    >
                      <View className="absolute left-4 z-50">
                        <FontAwesome name="calendar" size={20} color={"#000"} />
                      </View>
                      <View
                        style={[
                          customstyle.textinputstyle,
                          {
                            paddingLeft: 45,
                            borderColor: "#ccc",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#F3F3F3",
                          },
                        ]}
                        className="justify-center"
                      >
                        <Text>
                          {birthDate ? birthDate : "Enter your date of birth"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <View className="h-3" />
                    <View className="w-3/4 mt-3">
                      <Text style={[Textstyles.text_cmedium]}>Gender</Text>
                      <View className="flex flex-row items-center mt-2">
                        <RadioButton
                          value="Male"
                          status={gender === "male" ? "checked" : "unchecked"}
                          onPress={() => setGender("male")}
                          color={primarycolor}
                        />
                        {Platform.OS === "ios" && (
                          <TouchableOpacity
                            onPress={() => setGender("male")}
                            style={{ marginRight: 10 }}
                            className="bg-cyan-300 w-16 items-center h-5 justify-center rounded-xl"
                          >
                            <Text>Male</Text>
                          </TouchableOpacity>
                        )}
                        {Platform.OS === "android" && (
                          <Text style={{ marginRight: 10 }}>Male</Text>
                        )}
                        <RadioButton
                          value="Female"
                          status={gender === "female" ? "checked" : "unchecked"}
                          onPress={() => setGender("female")}
                          color={primarycolor}
                        />
                        {Platform.OS === "ios" && (
                          <TouchableOpacity
                            onPress={() => setGender("Female")}
                            style={{ marginRight: 10 }}
                            className="bg-cyan-500 w-16 items-center h-5  justify-center rounded-xl px-2"
                          >
                            <Text>Female</Text>
                          </TouchableOpacity>
                        )}
                        {Platform.OS === "android" && (
                          <Text style={{ marginRight: 10 }}>Female</Text>
                        )}
                      </View>
                    </View>
                    <View className="h-3" />
                    <CustomInputPassword
                      headerText="Password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(text) => setPassword(text)}
                      secureTextEntry={true}
                      leftIcon={
                        <FontAwesome name="lock" color="#000" size={20} />
                      }
                    />
                    <View className="h-3" />
                    <Text className="text-red-500">{errorMessage}</Text>
                    <CustomInputPassword
                      headerText="Confirm password"
                      placeholder="Enter your password again"
                      value={confirmPassword}
                      onChange={(text) => setConfirmPassword(text)}
                      secureTextEntry={true}
                      leftIcon={
                        <FontAwesome name="lock" color="#000" size={20} />
                      }
                      className="mb-32"
                    />
                  </ScrollView>
                </KeyboardAvoidingView>
              </>
            )}
          </>

          <View className="relative">
            <View className="h-8" />
            <Text className="text-red-500">{errorMessage}</Text>
            <CustomButton
              backgroundColor={primarycolor}
              Textname={
                isLoading
                  ? "Loading..."
                  : currentStep === 2
                  ? "Continue"
                  : currentStep === 1
                  ? "Verify"
                  : "Send"
              }
              isLoading={isLoading}
              TextColor={whitecolor}
              onPress={handleContinue}
            />
          </View>
        </View>
      </View>
    </>
  );
}
