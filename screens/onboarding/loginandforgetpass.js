import { Image, View, Text, Pressable } from "react-native";

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

export const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handletosignup = () => {
    navigation.navigate("signup");
  };
  const handletodashboard = () => {

    navigation.navigate("dashboard");

    navigation.navigate("");

  };

  return (
    <>
      <View className="h-screen w-full px-5 py-[88px]">
        <>
          <Text className=" text-4xl text-center mt-7 ">Welcome Back !!</Text>
          <View className=" w-full h-44  flex mb-4 justify-center items-center">
            <View className=" w-[50%]  flex justify-center items-center h-36">
              <Image
                source={require("../../assets/images/logo.png")}
                resizeMode="contain"
                className=" h-36 w-36"
              />
            </View>
          </View>
          <CustomInputWithHeader
            headerText="Phone Number"
            placeholder="Enter your phone number"
            leftIconName="phone" // Use FontAwesome email icon
            onChange={(text) => console.log(text)}
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
        />
        <View className=" flex-row h-12 mt-36 w-full justify-center  ">
          <View>
            <Text style={[Textstyles.text_small]} className="text-center mt-6">
              Don't have an account?
            </Text>
          </View>
          <TouchableOpacity className=" mt-6 ml-1" onPress={handletosignup}>
            <Text style={[Textstyles.text_small]} className=" text-[#0099b8]">
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
