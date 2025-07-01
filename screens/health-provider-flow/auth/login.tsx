import { CustomButton } from "components/utilities/buttons";
import {
  CustomInputPassword,
  CustomTextInput,
} from "components/utilities/inputs";
import { primarycolor, whitecolor } from "constants/color";
import { useState } from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";
import { loginUser } from "redux/slices/login";
import { RootState, useAppDispatch } from "redux/store";
import { StackNavigation } from "types/stack";
import { Utils } from "utilities/utils";

export default function Login({ navigation }: { navigation: StackNavigation }) {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const { loading } = useSelector((state: RootState) => state.auth);

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
      navigation.navigate("health-provider", { screen: "dashboard" });
    }
    // navigation.navigate("health-seeker", { screen: "dashboard" });
  };

  return (
    <View className="flex-1 py-20">
      <View className="flex-col items-center flex-1">
        <View className="flex-col items-center">
          <Text className=" font-bold text-2xl">Welcome Back!</Text>
          <Image
            source={require("../../../assets/png-icon/image-3.png")}
            resizeMode="contain"
            className="size-[140px]"
          />
        </View>
        <View className="w-full px-4 gap-y-6">
          <CustomTextInput
            label="Email address"
            value={email}
            onChange={(text: React.SetStateAction<string>) => setEmail(text)}
            placeholder="Enter your email address"
            borderColor={primarycolor}
            leftIcon={
              <Image
                source={require("../../../assets/png-icon/mail-01.png")}
                className="size-6"
                resizeMode="contain"
              />
            }
          />
          <View>
            <CustomInputPassword
              label="Password"
              value={password}
              onChange={(text: React.SetStateAction<string>) =>
                setPassword(text)
              }
              placeholder="Enter your password"
              borderColor={primarycolor}
              leftIcon={
                <Image
                  source={require("../../../assets/png-icon/lock-password.png")}
                  className="size-6"
                  resizeMode="contain"
                />
              }
            />
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("health-provider", {
                  screen: "safe-area-view",
                  params: { screen: "forgot-password" },
                })
              }
            >
              <Text className="text-primary">Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            Textname="Login"
            onPress={handletodashboard}
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            isLoading={IsLoading}
            // onPress={() =>
            //   navigation.navigate("health-provider", { screen: "dashboard" })
            // }
          />
        </View>
      </View>
      <View className="flex-row items-center justify-center gap-x-2">
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("health-provider", {
              screen: "safe-area-view",
              params: { screen: "signup" },
            })
          }
        >
          <Text className="text-primary">Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
