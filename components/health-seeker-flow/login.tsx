import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { router } from "expo-router";
import { primarycolor, whitecolor } from "../../constants/colors";
import { Textstyles } from "../../constants/fontsize";
import { CustomButton } from "../../utilities/buttons";
import {
  CustomInputPassword,
  CustomInputWithHeader,
} from "../../utilities/inputs";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");

  const handleToSignup = () => {
    router.push("/(seeker)/(auth)/signup");
  };

  const handletodashboard = () => {
    // Validate email
    // if (!email || !Utils.validateEmail(email)) {
    //   Toast.show({
    //     type: "error",
    //     text1: "Please a valid email",
    //     visibilityTime: 5000,
    //     position: "bottom",
    //   });
    //   return;
    // }
    // if (!email || !password) {
    //   Toast.show({
    //     type: "info",
    //     text1: "Input all fields",
    //     visibilityTime: 5000,
    //   });
    // } else {
    //   dispatch(
    //     loginUser({
    //       email: email,
    //       password: password,
    //     })
    //   );
    // }
    router.push("/(healthcare-seeker)/home");
  };

  const handleForgotPassword = async () => {};

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardAvoidingView}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      enabled
    >
      {/* {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      )} */}
      <ScrollView>
        <StatusBar backgroundColor="white" />
        <View style={styles.container}>
          <>
            <Text style={[Textstyles.text_medium, styles.welcomeText]}>
              Welcome Back !!
            </Text>
            <View style={styles.logoContainer}>
              <View style={styles.logoWrapper}>
                <Image
                  source={require("../../assets/images/logo.png")}
                  resizeMode="contain"
                  style={styles.logo}
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

            <View style={styles.inputSpacer} />
            <CustomInputPassword
              headerText="Password"
              placeholder="Enter your password"
              value={password}
              secureTextEntry={true}
              onChange={(text: React.SetStateAction<string>) =>
                setPassword(text)
              }
              leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
            />
            <View style={styles.forgotPasswordContainer}>
              <TouchableOpacity onPress={handleForgotPassword}>
                <Text
                  style={[Textstyles.text_small, styles.forgotPasswordText]}
                >
                  Forget Password ?
                </Text>
              </TouchableOpacity>
            </View>
          </>

          <View style={styles.buttonSpacer} />
          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
          <CustomButton
            Textname={"Login"}
            onPress={handletodashboard}
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            isLoading={IsLoading}
          />
          <View style={styles.signupContainer}>
            <Text style={[Textstyles.text_small, styles.signupText]}>
              {`Don't have an account?`}
            </Text>
            <TouchableOpacity onPress={handleToSignup}>
              <Text style={[Textstyles.text_small, styles.signupLink]}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: "100%",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 44,
    backgroundColor: "white",
  },
  welcomeText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 16,
  },
  logoContainer: {
    width: "100%",
    height: 176,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logoWrapper: {
    width: "50%",
    height: 144,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 96,
    width: 96,
  },
  inputSpacer: {
    height: 12,
  },
  forgotPasswordContainer: {
    marginTop: 12,
  },
  forgotPasswordText: {
    color: "#0099b8",
  },
  buttonSpacer: {
    height: 40,
  },
  errorText: {
    color: "red",
  },
  signupContainer: {
    flexDirection: "row",
    height: 56,
    marginTop: 144,
    gap: 4,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  signupText: {
    textAlign: "center",
  },
  signupLink: {
    color: "#0099b8",
  },
});

export default LoginPage;
