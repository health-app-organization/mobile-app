import { Image, View, Text, Pressable, Alert } from "react-native";

import { Box, CustomButton } from "../../components/mycomponent";
import { CustomInputWithHeader } from "../../components/mycomponent";
import { CustomInputpassword } from "../../components/mycomponent";
import { primarycolor, whitecolor } from "../../constants/color";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Textstyles } from "../../constants/fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
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

export const Login = () => {
  const navigation = useNavigation<StackNavigation>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      <View className="h-screen w-full px-5 py-[44px]">
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
        <CustomButton
          Textname={"Login"}
          onPress={handletodashboard}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          isLoading={IsLoading}
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

  const handletoverify = async () => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post(
        `${baseUrl}/user/password/reset/request-otp`,
        JSON.stringify({ email })
      );
      const json = await response.data;
      console.log(json);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        setErrorMessage(error.response.data?.message || "An error occurred");
      } else {
        setErrorMessage("An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <View className="h-screen w-full px-5 pt-[44px]">
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
          onPress={handletoverify}
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
  const [code, setCode] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handletoverify = () => {
    navigation.navigate("verification");
  };

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
      <View className="h-screen w-full px-5 pt-[44px]">
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
            <TouchableOpacity>
              <Text style={[Textstyles.text_small]} className=" text-[#0099b8]">
                Resend code
              </Text>
            </TouchableOpacity>
          </View>
        </>

        <View className="h-10" />
        <CustomButton
          Textname={"Verify"}
          onPress={handletoverify}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          isLoading={IsLoading}
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
