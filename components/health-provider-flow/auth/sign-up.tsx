import { Feather, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RadioButton } from "react-native-paper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import DateModal from "../../modals/date-modal";
import SuccessModal from "../../modals/success-modal";
import NumericKeyboard from "../../modals/custom-keyboard";
import { handleOtpInput } from "../../../utils/utility";
import { Textstyles } from "../../../constants/fontsize";
import { CustomInputPassword, CustomInputWithHeader, CustomTextInput } from "../../../utilities/inputs";
import { greycolortwo, primarycolor, whitecolor } from "../../../constants/colors";
import { CustomButton } from "../../../utilities/buttons";
import { height } from "../../../constants/mobileDimensions";
import { Box } from "../../../utilities/box";


export default function SignUpPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const translateY = useSharedValue(600);
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  const translateYsuccess = useSharedValue(600);
  const animatedStylessucess = useAnimatedStyle(() => ({
    transform: [{ translateY: translateYsuccess.value }],
  }));

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleContinue = async () => {
    // Implementation remains the same
    if (currentStep < 2) {
      setErrorMessage(null);
      setCurrentStep((prevStep) => prevStep + 1);
    }

    if (currentStep === 2) {
      setShowLoginModal(true);
      translateYsuccess.value = withSpring(0);
    }
  };

  const handleContinueBackwards = () => {
    if (currentStep > 0) {
      setErrorMessage(null);
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleShowKeys = () => {
    setShowKeyboard((prevState) => !prevState);
    translateY.value = showKeyboard ? withSpring(600) : withSpring(200);
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      setErrorMessage("Password does not match password");
    } else {
      setErrorMessage(null);
    }
  }, [password, confirmPassword]);

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

      {currentStep === 2 && showLoginModal && (
        <>
          <View style={styles.modalOverlay} />
          <Animated.View
            style={[styles.successModalContainer, animatedStylessucess]}
          >
            <SuccessModal
              handlenavigate={() => {
                router.push("/(provider-auth)/(auth)");
              }}
            />
          </Animated.View>
        </>
      )}

      <View style={styles.mainContainer}>
        <View style={styles.contentContainer}>
          {currentStep === 1 && (
            <View style={styles.keyboardContainer}>
              <Animated.View
                style={[styles.keyboardAnimatedView, animatedStyles]}
              >
                <NumericKeyboard
                  onPress={(value: string) =>
                    handleOtpInput({
                      value,
                      otp,
                      setOtp,
                      setErrorMessage,
                      onSubmitOtp: (otpValue:any) => {
                        // OTP submission logic
                        // ✅ Validate OTP before continuing if needed
                        if (otpValue.length === 6) {
                          handleContinue(); // Move to currentStep 2
                        } else {
                          setErrorMessage("Incomplete or invalid OTP");
                        }
                      },
                    })
                  }
                />
              </Animated.View>
            </View>
          )}

          {currentStep > 0 && (
            <TouchableOpacity
              onPress={handleContinueBackwards}
              style={styles.backButton}
            >
              <Feather name="arrow-left" size={24} color="black" />
            </TouchableOpacity>
          )}

          <View style={styles.headerContainer}>
            {currentStep === 0 && (
              <>
                <Text style={[Textstyles.text_medium, styles.titleText]}>
                  Create an account
                </Text>
                <Text style={[Textstyles.text_small, styles.subtitleText]}>
                  Please enter your email to receive a 6-digit code via SMS
                </Text>
              </>
            )}

            {currentStep === 1 && (
              <>
                <Text style={[Textstyles.text_medium, styles.titleText]}>
                  Verification
                </Text>
                <Text style={[Textstyles.text_small, styles.verificationText]}>
                  Enter the 6-digit code sent to your phone
                </Text>
                <View style={styles.otpContainer}>
                  <Text style={[Textstyles.text_xsmall, styles.errorText]}>
                    {errorMessage}
                  </Text>
                  <Pressable
                    onPress={handleShowKeys}
                    style={styles.otpPressable}
                  >
                    {otp.map((digit, index) => (
                      <View key={index} style={styles.otpBoxContainer}>
                        <Box inputText={digit} />
                        {index < otp.length - 1 && (
                          <View style={styles.otpSpacer} />
                        )}
                      </View>
                    ))}
                  </Pressable>
                </View>
                <View style={styles.resendContainer}>
                  <Text style={[Textstyles.text_small, styles.resendText]}>
                    Didn't get a code?
                  </Text>
                  <TouchableOpacity style={styles.resendButton}>
                    <Text style={[Textstyles.text_small, styles.resendLink]}>
                      Resend
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>

          <View style={styles.spacer} />

          {currentStep === 0 && (
            <View style={styles.emailInputContainer}>
              <CustomTextInput
                placeholder={"enter your email"}
                placeholderTextColor={greycolortwo}
                onChange={(val:any) => setEmail(val)}
                value={email}
                leftIcon={
                  <FontAwesome name="envelope" color="#ccc" size={20} />
                }
              />
            </View>
          )}

          {currentStep === 2 && (
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.flex1}
              keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
            >
              <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View>
                  <Text style={[Textstyles.text_medium, styles.welcomeText]}>
                    Welcome to HealthApp
                  </Text>
                  <View style={styles.logoContainer}>
                    <View style={styles.logoWrapper}>
                      <Image
                        source={require("../../assets/images/pro.png")}
                        resizeMode="contain"
                        style={styles.logoImage}
                      />
                    </View>
                  </View>
                </View>

                <CustomInputWithHeader
                  headerText="First name"
                  placeholder="Enter your first name"
                  leftIcon={<FontAwesome name="user" color="#000" size={20} />}
                  value={firstName}
                  onChange={(text) => setFirstName(text)}
                />
                <View style={styles.inputSpacer} />
                <CustomInputWithHeader
                  headerText="Last name"
                  placeholder="Enter your last name"
                  leftIcon={<FontAwesome name="user" color="#000" size={20} />}
                  value={lastName}
                  onChange={(text) => setLastName(text)}
                />
                <View style={styles.inputSpacer} />
                <CustomInputWithHeader
                  headerText="Email address"
                  placeholder="Enter your email address"
                  leftIcon={<FontAwesome name="envelope" color="#000" size={20} />}
                  value={email}
                  onChange={(text) => setEmail(text)}
                  disabled style={undefined}                />
                <View style={styles.inputSpacer} />
                <CustomInputWithHeader
                  headerText="Phone number"
                  placeholder="Enter your phone number"
                  leftIcon={<FontAwesome name="phone" color="#000" size={20} />}
                  value={`+234 ${phoneNumber}`}
                  onChange={(text) => setPhoneNumber(text)}
                />
                <View style={styles.inputSpacer} />
                <Text style={[Textstyles.text_cmedium, styles.dobLabel]}>
                  Date of birth
                </Text>
                <TouchableOpacity
                  style={styles.dobButton}
                  onPress={() => setShowDate(true)}
                >
                  <View style={styles.calendarIcon}>
                    <FontAwesome name="calendar" size={20} color={"#000"} />
                  </View>
                  <View style={styles.dobInput}>
                    <Text>
                      {birthDate ? birthDate : "Enter your date of birth"}
                    </Text>
                  </View>
                </TouchableOpacity>
                <View style={styles.inputSpacer} />
                <View style={styles.genderContainer}>
                  <Text style={[Textstyles.text_cmedium, styles.genderLabel]}>
                    Gender
                  </Text>
                  <View style={styles.radioButtonsContainer}>
                    <RadioButton
                      value="Male"
                      status={gender === "male" ? "checked" : "unchecked"}
                      onPress={() => setGender("male")}
                      color={primarycolor}
                    />
                    {Platform.OS === "ios" ? (
                      <TouchableOpacity
                        onPress={() => setGender("male")}
                        style={styles.iosRadioButton}
                      >
                        <Text>Male</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.androidRadioLabel}>Male</Text>
                    )}
                    <RadioButton
                      value="Female"
                      status={gender === "female" ? "checked" : "unchecked"}
                      onPress={() => setGender("female")}
                      color={primarycolor}
                    />
                    {Platform.OS === "ios" ? (
                      <TouchableOpacity
                        onPress={() => setGender("Female")}
                        style={styles.iosRadioButton}
                      >
                        <Text>Female</Text>
                      </TouchableOpacity>
                    ) : (
                      <Text style={styles.androidRadioLabel}>Female</Text>
                    )}
                  </View>
                </View>
                <View style={styles.inputSpacer} />
                <Text style={styles.errorText}>{errorMessage}</Text>
                <CustomInputPassword
                  headerText="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(text) => setPassword(text)}
                  secureTextEntry={true}
                  leftIcon={<FontAwesome name="lock" color="#000" size={20} />} style={undefined}                />
                <View style={styles.inputSpacer} />
                <CustomInputPassword
                  headerText="Confirm password"
                  placeholder="Enter your password again"
                  value={confirmPassword}
                  onChange={(text) => setConfirmPassword(text)}
                  secureTextEntry={true}
                  leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
                  style={styles.confirmPasswordInput}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          )}

          <View style={styles.buttonContainer}>
            <View style={styles.buttonSpacer} />
            <Text style={styles.errorText}>{errorMessage}</Text>
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

const styles = StyleSheet.create({
  mainContainer: {
    height: height,
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 88,
  },
  modalOverlay: {
    backgroundColor: primarycolor,
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 40,
    opacity: 0.7,
  },
  successModalContainer: {
    position: "absolute",
    zIndex: 50,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  keyboardContainer: {
    position: "absolute",
    bottom: -20,
    zIndex: 40,
    alignItems: "center",
  },
  keyboardAnimatedView: {
    width: "100%",
    height: 500,
  },
  backButton: {
    position: "absolute",
    top: 64,
    left: 12,
  },
  headerContainer: {
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    marginBottom: 24,
  },
  subtitleText: {
    textAlign: "center",
    marginBottom: 24,
  },
  verificationText: {
    textAlign: "center",
  },
  otpContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  errorText: {
    color: "red",
  },
  otpPressable: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  otpBoxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  otpSpacer: {
    width: 16,
  },
  resendContainer: {
    flexDirection: "row",
  },
  resendText: {
    textAlign: "center",
    marginTop: 24,
  },
  resendButton: {
    marginTop: 24,
    marginLeft: 4,
  },
  resendLink: {
    color: "#0099b8",
  },
  spacer: {
    height: 16,
  },
  emailInputContainer: {
    marginBottom: 20,
  },
  flex1: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  welcomeText: {
    marginBottom: 16,
    textAlign: "center",
  },
  logoContainer: {
    width: "100%",
    height: 112,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    width: 117.91,
    justifyContent: "center",
    alignItems: "center",
    height: 109.36,
    borderRadius: 12,
  },
  logoImage: {
    width: "100%",
  },
  inputSpacer: {
    height: 12,
  },
  dobLabel: {
    marginBottom: 8,
  },
  dobButton: {
    justifyContent: "center",
  },
  calendarIcon: {
    position: "absolute",
    left: 16,
    zIndex: 50,
  },
  dobInput: {
    paddingLeft: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#F3F3F3",
    justifyContent: "center",
    height: 48,
  },
  genderContainer: {
    width: "75%",
    marginTop: 12,
  },
  genderLabel: {
    marginBottom: 8,
  },
  radioButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  iosRadioButton: {
    backgroundColor: "cyan",
    width: 64,
    alignItems: "center",
    height: 20,
    justifyContent: "center",
    borderRadius: 12,
    marginRight: 10,
    paddingHorizontal: 8,
  },
  androidRadioLabel: {
    marginRight: 10,
  },
  buttonContainer: {
    position: "relative",
  },
  buttonSpacer: {
    height: 32,
  },
  confirmPasswordInput: {
    marginBottom: 128,
  },
});
