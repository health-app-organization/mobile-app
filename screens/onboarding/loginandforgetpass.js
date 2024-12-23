import { Image, View, Text, Pressable, Alert } from "react-native";

import {
  Box,
  CustomButton,
  CustomTextInput,
  MyDivider,
} from "../mycomponents/mycomponent";
import { CustomInputWithHeader } from "../mycomponents/mycomponent";
import { CustomInputpassword } from "../mycomponents/mycomponent";
import {
  greycolorfive,
  greycolorthree,
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useState, Fragment } from "react";
import { Textstyles } from "../../constants/fontsize";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import EmailDisplay from "../../utilities/emailMask";
import NumericKeyboard from "../modals/CustomKeyboard";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { height } from "../../constants/mobileDimensions";
import { Drawer } from "../modals/drawer";
import { loginfunction } from "../patients/fetchdata/fetchdata";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthStore from "../../store/auth-store";

export const Login = () => {
  const navigation = useNavigation();
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
    if (response.message === 'ok') {
      login(response.userDetails);
      Alert.alert("Login Success");
      navigation.navigate("dashboard");
    }
  };

  return (
    <>
      <View className="h-screen w-full px-5 py-[88px]">
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
                source={require("../../assets/images/logo.png")}
                resizeMode="contain"
                className=" h-24 w-24"
              />
            </View>
          </View>
          <CustomInputWithHeader
            headerText="Email"
            placeholder="Enter your email"
            leftIconName="envelope" // Use FontAwesome email icon
            onChange={(text) => setEmail(text)}
          />

          <View className="h-3" />
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
          <View className=" mt-3">
            <TouchableOpacity>
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
