import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import {
  MaterialIcons,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
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
  CustomTextInput,
} from "../mycomponents/mycomponent";
import { Box, CustomTextnumber } from "../mycomponents/mycomponent";
import { primarycolor, whitecolor, greycolortwo } from "../../constants/color";
import { CustomButton } from "../mycomponents/mycomponent";
import NumericKeyboard from "../modals/CustomKeyboard"; // Importing the Numeric Keyboard
import { SafeAreaView } from "react-native-safe-area-context";
import { height } from "../../constants/mobileDimensions";
import { RadioButton } from "react-native-paper";
import { customstyle } from "../../constants/customstyle";
import DateModal from "../modals/datemodal";
import axios from "axios";
import { registerUrl } from "../../api/end-point";
import { RegisterDataOne, RegisterDataThree, RegisterDataTwo } from "../patients/fetchdata/fetchdata";
import SuccessModal from "../modals/successModal";


export default function Registration() {
  const navigation = useNavigation();
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

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showDate, setShowDate] = useState(false);//for date picker

  const [errorMessage, setErrorMessage] = useState(null);
  const [showKeyboard, setShowKeyboard] = useState(false); // State to toggle keyboard visibility
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP input array
  const [showloginModal,setshowloginModal]=useState(false)

  const translateY = useSharedValue(600); // Animation for the keyboard
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  const translateYsuccess = useSharedValue(600); // Animation for the keyboard
  const animatedStylessucess = useAnimatedStyle(() => ({
    transform: [{ translateY: translateYsuccess.value }],
  }));
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleContinue = async () => {
    if (isLoading) return;
    if (currentStep === 2) {
      console.log(phoneNumber)
      const data = {
        phoneNumber,
        firstName,
        lastName,
        email,
        birthDate,
        gender,
        password,
      };
      setIsLoading(true);
      const response=await RegisterDataThree(data, setIsLoading, setErrorMessage, setCurrentStep)
      if(response==='ok'){
        setshowloginModal(true)
        translateYsuccess.value = withSpring(0, { damping: 10, stiffness: 100 });
      }
      
      setIsLoading(false);
    } else if (currentStep === 0) {
      if (!isValidEmail(email)) {
        setErrorMessage('Invalid Email Address')
        return;
      }
      RegisterDataOne(email,setIsLoading,setErrorMessage,setCurrentStep);
     
    } else {
      const joinOtp=otp.join("")
      RegisterDataTwo(email,joinOtp,setIsLoading, setErrorMessage, setCurrentStep)
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
        setErrorMessage("Incomplete OTP");
      } else {
        setErrorMessage(null);
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
      
      {showDate && <DateModal
        setBirthDate={(value) => setBirthDate(value)}
        birthDate={birthDate}
        closeModal={(value) => setShowDate(value)}
      />}
       {/* Success Modal Display */}
       {currentStep === 2 && showloginModal && ( 
        <>
        <View style={{backgroundColor:primarycolor}} className="h-full w-full absolute z-40 opacity-70 " />
        <Animated.View
      className="absolute z-50 bottom-0 justify-center items-center w-full"
      style={[animatedStylessucess]} // Spring animation applied here
    >
      <SuccessModal
        handlenavigate={() => {
          navigation.navigate("login");
        }}
      />
    </Animated.View>
    </>
    )}
           
      <View style={{ height: height }}>
        <StatusBar style="auto" />
        <View className="w-full h-full px-5 py-[88px] bg-white">
               {/* Numeric Keyboard */}
               {currentStep === 1 && (
            <View className="absolute -bottom-5 z-40   items-center">
              <Animated.View
                className="w-full h-[500px]"
                style={[animatedStyles]}
              >
                <NumericKeyboard onPress={(value) => handleOtpInput(value)} />
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
                  <Text style={[Textstyles.text_xsmall]} className="text-red-300">
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
                      value={firstName}
                      onChange={(text) => setFirstName(text)}
                    />
                    <View className="h-3" />
                    <CustomInputWithHeader
                      headerText="Last name"
                      placeholder="Enter your last name"
                      leftIconName="user"
                      value={lastName}
                      onChange={(text) => setLastName(text)}
                    />
                    <View className="h-3" />
                    <CustomInputWithHeader
                      headerText="Email address"
                      placeholder="Enter your email address"
                      leftIconName="envelope"
                      value={email}
                      onChange={(text) => setEmail(text)}
                      disable
                    />
                    <View className="h-3" />
                    <CustomInputWithHeader
                      headerText="Phone number"
                      placeholder="Enter your phone number"
                      leftIconName="phone"
                      value={`+234 ${phoneNumber}`}
                      onChange={(text) => setPhoneNumber(text)}
                    
                    />
                    <View className="h-3" />
                    <Text className="mb-2" style={[Textstyles.text_cmedium]}>
                      Date of birth
                    </Text>
                    <TouchableOpacity className="flex justify-center" onPress={() => setShowDate(true)}>
                      <View className="absolute left-4 z-50">
                        <FontAwesome
                          name="calendar"
                          size={20}
                          color={"#000"}
                        />
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
                          }
                        ]}
                        className="justify-center"
                      >
                        <Text>{birthDate ? birthDate : "Enter your date of birth"}</Text>
                      </View>
                    </TouchableOpacity>
                    <View className="h-3" />
                    <View className="w-3/4 mt-3">
                      <Text style={[Textstyles.text_cmedium]}>Gender</Text>
                      <View className="flex flex-row items-center mt-2">
                        <RadioButton
                          value="Male"
                          status={gender === 'male' ? 'checked' : 'unchecked'}
                          onPress={() => setGender('male')}
                          color={primarycolor}
                        />
                        {Platform.OS === 'ios' && <TouchableOpacity onPress={() => setGender('male')} style={{ marginRight: 10 }} className="bg-cyan-300 w-16 items-center h-5 justify-center rounded-xl"><Text>Male</Text></TouchableOpacity>}
                        {Platform.OS === 'android' && <Text style={{ marginRight: 10 }}>Male</Text>}
                        <RadioButton
                          value="Female"
                          status={gender === 'female' ? 'checked' : 'unchecked'}
                          onPress={() => setGender('female')}
                          color={primarycolor}
                        />
                        {Platform.OS === 'ios' && <TouchableOpacity onPress={() => setGender('Female')} style={{ marginRight: 10 }} className="bg-cyan-500 w-16 items-center h-5  justify-center rounded-xl px-2"><Text>Female</Text></TouchableOpacity>}
                        {Platform.OS === 'android' && <Text style={{ marginRight: 10 }}>Female</Text>}
                      </View>
                    </View>
                    <View className="h-3" />
                    <CustomInputpassword
                      headerText="Password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(text) => setPassword(text)}
                      secureTextEntry={true}
                      leftIconName="lock"
                      leftIconColor="#000"
                      leftIconSize={20}
                    />
                    <View className="h-3" />
                    <Text className="text-red-500">{errorMessage}</Text>
                    <CustomInputpassword
                      headerText="Confirm password"
                      placeholder="Enter your password again"
                      value={confirmPassword}
                      onChange={(text) => setConfirmPassword(text)}
                      secureTextEntry={true}
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

          <View className="relative z-50">
            <View className="h-8" />
            <Text className="text-red-500">{errorMessage}</Text>
            <CustomButton
              backgroundColor={primarycolor}
              Textname={
                isLoading ? "Loading..." :
                  currentStep === 2
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
