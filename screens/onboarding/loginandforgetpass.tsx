import {
  Image,
  View,
  Text,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";

import { Box, CustomButton } from "../../components/mycomponent";
import { CustomInputWithHeader } from "../../components/mycomponent";
import { CustomInputpassword } from "../../components/mycomponent";
import { primarycolor, whitecolor } from "../../constants/color";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import NumericKeyboard from "../modals/CustomKeyboard";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { loginfunction } from "../patients/fetchdata/fetchdata";
import useAuthStore from "../../store/auth-store";
import axios from "axios";
import { baseUrl } from "../../api/end-point";
import { handleOtpInput } from "../../utilities/utility";
import { StackNavigation } from "../../types/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = () => {
  const navigation = useNavigation<StackNavigation>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const handletosignup = () => {
    navigation.navigate("signup");
  };

  // const login = useAuthStore((state) => state.login);
  const { login } = useAuthStore();
  const handletodashboard = async () => {
    const data = { email, password };
    const response = await loginfunction(data, setIsLoading, setErrorMessage);
    if (response?.message === "ok") {
      login(response.userDetails, {});
      Alert.alert("Login Success");
      navigation.navigate("dashboard");
    }
  };

  const handleForgotPassword = async () => {
    navigation.navigate("request-otp");
  };

  return (
    <>
      <View className="h-screen w-full px-5 py-[44px] bg-primaryTwo">
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text
            style={[Textstyles.text_medium]}
            className="text-3xl text-center mt-4"
          >
            Welcome Back !!
          </Text>
          <View className="w-full h-44  flex mb-4 justify-center items-center">
            <View className=" w-[50%]  flex justify-center items-center h-36">
              <Image
                source={require("../../assets/images/logo.png")}
                resizeMode="contain"
                className=" h-24 w-24"
              />
            </View>
          </View>
          <CustomInputWithHeader
            headerText="Email"
            placeholder="Enter your email"
            leftIcon={<FontAwesome name="envelope" color="#000" size={20} />}
            value={email}
            onChange={(text) => setEmail(text)}
          />

          <View className="h-3" />
          <CustomInputpassword
            headerText="Password"
            placeholder="Enter your password"
            value={password}
            secureTextEntry={true} // Enable password mode with secureTextEntry
            onChange={(text) => setPassword(text)} // Update password state on input change
            leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
          />
          <View className=" mt-3">
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={[Textstyles.text_small]} className=" text-[#0099b8]">
                Forget Password ?
              </Text>
            </TouchableOpacity>
          </View>
        </>

        <View className="h-10" />
        {errorMessage && <Text className="text-error">{errorMessage}</Text>}
        <CustomButton
          Textname={"Login"}
          onPress={handletodashboard}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          isLoading={IsLoading}
          disabled={email === "" || password === ""}
        />
        <View className="flex-row h-14 mt-36 gap-1 w-full justify-center items-center">
          <Text style={[Textstyles.text_small]} className="text-center">
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={handletosignup}>
            <Text style={[Textstyles.text_small]} className="text-[#0099b8]">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export function RequestOtp() {
  const navigation = useNavigation<StackNavigation>();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const handleToVerify = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post(
        `${baseUrl}/auth/user/password/reset/request_otp`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.data;

      if (json.emailSendStatus === "success") {
        Alert.alert("OTP sent successfully. Check your mail for the OTP.");
        await AsyncStorage.setItem("token", json.token);
        await AsyncStorage.setItem("email", email);
        navigation.navigate("forgot-password");
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response.data);

        // Extract the error message or compose it
        const message =
          error.response.data.error?.message ||
          JSON.stringify(error.response.data.error) ||
          "An error occurred. Please try again.";

        setErrorMessage(message);
      } else if (axios.isAxiosError(error) && error.request) {
        console.error("Error request:", error.request);
        setErrorMessage(
          "No response from the server. Please check your network connection."
        );
      } else {
        setErrorMessage("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View className="h-screen w-full px-5 pt-[44px] bg-primaryTwo">
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

          <View className="h-10" />
          <View className="gap-y-2">
            <Text
              style={[Textstyles.text_medium]}
              className="text-3xl text-center"
            >
              Forgot Password
            </Text>
            <Text style={[Textstyles.text_small]} className="text-center">
              Please enter your email address below
            </Text>
          </View>

          <View className="h-10" />
          <CustomInputWithHeader
            headerText="Email"
            placeholder="Enter your email"
            leftIcon={<FontAwesome name="envelope" color="#000" size={20} />}
            value={email}
            onChange={(text) => setEmail(text)}
          />
        </>

        <View className="h-10" />
        {errorMessage && (
          <Text style={[Textstyles.text_xxmedium]} className="text-error">
            (errorMessage)
          </Text>
        )}
        <CustomButton
          Textname={"Request OTP"}
          onPress={handleToVerify}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          isLoading={loading}
          disabled={email === ""}
        />
      </View>
    </>
  );
}

export const ForgotPassword = () => {
  const navigation = useNavigation<StackNavigation>();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleToResetPassword = async () => {
    const token = await AsyncStorage.getItem("token");
    const email = await AsyncStorage.getItem("email");
    // navigation.navigate("set-new-password");
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post(
        `${baseUrl}/auth/user/password/reset/verify_otp`,
        { email, otp: otp.join("") },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      const json = await response.data;

      if (json.message === "Password reset approved") {
        Alert.alert("Verification Successful, proceed to set your new password!");
        await AsyncStorage.setItem("token", json.token);
        navigation.navigate("set-new-password");
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response.data);

        // Extract the error message or compose it
        const message =
          error.response.data.error?.message ||
          JSON.stringify(error.response.data.error) ||
          "An error occurred. Please try again.";

        setErrorMessage(message);
      } else if (axios.isAxiosError(error) && error.request) {
        console.error("Error request:", error.request);
        setErrorMessage(
          "No response from the server. Please check your network connection."
        );
      } else {
        setErrorMessage("An error occurred");
      }
    } finally {
      setLoading(false);
    };
  };

  const resendCode = async () => {
    const email = await AsyncStorage.getItem("email");
    setLoading(true);
    setErrorMessage(null);
    setOtp(["", "", "", "", "", ""]);

    try {
      const response = await axios.post(
        `${baseUrl}/auth/user/password/reset/request_otp`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.data;

      if (json.emailSendStatus === "success") {
        Alert.alert("OTP sent successfully. Check your mail for the OTP.");
        await AsyncStorage.setItem("token", json.token);
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response.data);

        // Extract the error message or compose it
        const message =
          error.response.data.error?.message ||
          JSON.stringify(error.response.data.error) ||
          "An error occurred. Please try again.";

        setErrorMessage(message);
      } else if (axios.isAxiosError(error) && error.request) {
        console.error("Error request:", error.request);
        setErrorMessage(
          "No response from the server. Please check your network connection."
        );
      } else {
        setErrorMessage("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  }

  const [showKeyboard, setShowKeyboard] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP input array
  const translateY = useSharedValue(565); // Animation for the keyboard
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  // Toggle keyboard visibility
  const handleShowKeys = () => {
    setShowKeyboard((prevState) => !prevState);
    translateY.value = showKeyboard ? withSpring(565) : withSpring(165);
  };

  return (
    <>
      <View className="h-screen w-full px-5 pt-[44px] bg-primaryTwo">
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

          <View className="h-10" />
          <View className="gap-y-2">
            <Text
              style={[Textstyles.text_medium]}
              className="text-3xl text-center"
            >
              Forgot Password
            </Text>
            <Text style={[Textstyles.text_small]} className="text-center">
              Please enter the 6 digit code sent to your email below
            </Text>
          </View>

          <View className="h-10" />
          <View style={{ alignItems: "center", marginTop: 40 }}>
            {errorMessage && (
              <Text style={[Textstyles.text_xsmall]} className="text-red-300">
                {errorMessage}
              </Text>
            )}
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
          <View className="flex-row items-center gap-x-2 mt-3">
            <Text style={[Textstyles.text_small]}>Didn’t get a code?</Text>
            <TouchableOpacity onPress={resendCode}>
              <Text style={[Textstyles.text_small]} className=" text-[#0099b8]">
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </>

        <View className="h-10" />
        <CustomButton
          Textname={"Verify"}
          onPress={handleToResetPassword}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          isLoading={loading}
          disabled={otp.includes("")}
        />
      </View>

      {/* Numerical keyboard */}
      <View className="absolute -bottom-5 z-50 items-center">
        <Animated.View className="w-full h-[467px]" style={[animatedStyles]}>
          <NumericKeyboard
            onPress={(value: string) =>
              handleOtpInput({ value, setOtp, otp, setErrorMessage })
            }
          />
        </Animated.View>
      </View>
    </>
  );
};

export const SetNewPassword = () => {
  const navigation = useNavigation<StackNavigation>();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleToLogin = async () => {
    const token = await AsyncStorage.getItem("token");
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post(
        `${baseUrl}/auth/user/password/reset/reset_password`,
        { password, confirmPassword },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      const json = await response.data;

      if (json.message === "Password reset successful") {
        Alert.alert("Password reset successful. Please login with your new password.");
        navigation.navigate("login");
      }
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        console.error("Error response:", error.response.data);

        // Extract the error message or compose it
        const message =
          error.response.data.error?.message ||
          JSON.stringify(error.response.data.error) ||
          "An error occurred. Please try again.";

        setErrorMessage(message);
      } else if (axios.isAxiosError(error) && error.request) {
        console.error("Error request:", error.request);
        setErrorMessage(
          "No response from the server. Please check your network connection."
        );
      } else {
        setErrorMessage("An error occurred");
      }
    } finally {
      setLoading(false);
    };
  };

  return (
    <>
      <View className="h-screen w-full px-5 pt-[44px] bg-primaryTwo">
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>

          <View className="h-10" />
          <View className="gap-y-2">
            <Text
              style={[Textstyles.text_medium]}
              className="text-3xl text-center"
            >
              Set New Password
            </Text>
            <Text style={[Textstyles.text_small]} className="text-center">
              Enter the new password you want to use for your account
            </Text>
          </View>

          <View className="h-10" />
          <CustomInputpassword
            headerText="Password"
            placeholder="New password"
            value={password}
            secureTextEntry={true} // Enable password mode with secureTextEntry
            onChange={(text) => setPassword(text)} // Update password state on input change
            leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
          />

          <View className="h-3" />
          <CustomInputpassword
            headerText="Confirm Password"
            placeholder="Confirm new password"
            value={confirmPassword}
            secureTextEntry={true} // Enable password mode with secureTextEntry
            onChange={(text) => setConfirmPassword(text)} // Update password state on input change
            leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
          />
        </>

        <View className="h-10" />
        <CustomButton
          Textname={"Set New Password"}
          onPress={handleToLogin}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          isLoading={loading}
          disabled={password === "" || confirmPassword === ""}
        />
      </View>
    </>
  );
};
