import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StackNavigation } from "types/stack";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Textstyles } from "constants/fontsize";
import { primarycolor, whitecolor } from "constants/color";
import { StatusBar } from "expo-status-bar";
import {
  CustomInputPassword,
  CustomInputWithHeader,
} from "components/utilities/inputs";
import { CustomButton } from "components/utilities/buttons";
import React from "react";
import { Utils } from "utilities/utils";
import Toast from "react-native-toast-message";
import { loginUser } from "redux/slices/login";
import { RootState, useAppDispatch } from "redux/store";
import { useSelector } from "react-redux";

export const Login = ({ navigation }: { navigation: StackNavigation }) => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const { loading, data } = useSelector((state: RootState) => state.auth);

  const handleToSignup = () => {
    navigation.navigate("health-seeker", {
      screen: "safe-area-view",
      params: { screen: "signup" },
    });
  };
  //   const handletodashboard = async () => {
  //     const data = { email, password };
  //     // const response = await loginfunction(data, setIsLoading, setErrorMessage);
  //     // if (response?.message === "ok") {
  //     //   login(response.userDetails, {});
  //     //   Alert.alert("Login Success");
  //     //   navigation.navigate("dashboard");
  //     // }

  //     navigation.navigate("health-seeker", { screen: "dashboard" });
  //   };

  const handletodashboard = () => {
    // Validate email
    if (!email || !Utils.validateEmail(email)) {
      Toast.show({
        type: "error",
        text1: "Please a valid email",
        visibilityTime: 5000,
        position: "bottom",
      });
      return;
    }
    // router.navigate('/(user)/(home)');
    if (!email || !password) {
      Toast.show({
        type: "info",
        text1: "Input all fields",
        visibilityTime: 5000,
      });
    } else {
      dispatch(
        loginUser({
          email: email,
          password: password,
        })
      );
      navigation.navigate("health-seeker", { screen: "dashboard" });
    }
  };

  // useEffect(() => {
  //   if (!loading ) {
  //     navigation.navigate("health-seeker", { screen: "dashboard" });
  //   }
  // }, [loading]);

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" color="black" />

  //     </View>

  //   );
  // }

  const handleForgotPassword = async () => {
    navigation.navigate("health-seeker", {
      screen: "safe-area-view",
      params: { screen: "request-otp" },
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      enabled
    >
      {loading && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="black" />
        </View>
      )}
      <ScrollView>
        <StatusBar style="auto" />
        <View className="h-screen w-full px-5 py-[44px] bg-primaryTwo">
          <>
            <Text
              style={[Textstyles.text_medium]}
              className="text-3xl text-center mt-4"
            >
              Welcome Back !!
            </Text>
            <View className="w-full h-44  flex mb-4 justify-center items-center">
              <View className=" w-[50%]  flex justify-center items-center h-36">
                <Image
                  source={require("../../../assets/images/logo.png")}
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
              onChange={(text: React.SetStateAction<string>) => setEmail(text)}
            />

            <View className="h-3" />
            <CustomInputPassword
              headerText="Password"
              placeholder="Enter your password"
              value={password}
              secureTextEntry={true} // Enable password mode with secureTextEntry
              onChange={(text: React.SetStateAction<string>) =>
                setPassword(text)
              } // Update password state on input change
              leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
            />
            <View className=" mt-3">
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text
                  style={[Textstyles.text_small]}
                  className=" text-[#0099b8]"
                >
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
            isLoading={loading}
            // disabled={email === "" || password === ""}
          />
          <View className="flex-row h-14 mt-36 gap-1 w-full justify-center items-center">
            <Text style={[Textstyles.text_small]} className="text-center">
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={handleToSignup}>
              <Text style={[Textstyles.text_small]} className="text-[#0099b8]">
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
