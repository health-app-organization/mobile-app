import { View, Text, Switch } from "react-native";
import React, { useState } from "react";
import { Textstyles } from "../../../../constants/fontsize";
import { primarycolor, whitecolor } from "../../../../constants/color";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Header } from "components/utilities/headers";
import { CustomInputPassword } from "components/utilities/inputs";
import { CustomButton } from "components/utilities/buttons";

const Settings = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSelect = (action: string) => {
    if (action === "Save") {
      // Implement the save functionality here
      console.log("Save action triggered");
      // You can add more logic to handle the save action, such as form validation, API calls, etc.
    } else {
      console.log(`Unhandled action: ${action}`);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-primaryTwo">
      <StatusBar backgroundColor={primarycolor} />
      <Header title="Settings" />
      <View className="flex-row items-center justify-between px-3  py-4 ">
        <Text
          className="text-[28px] font-semibold mt-5 ml-4 mb-4"
          style={[Textstyles.text_medium]}
        >
          Notifications
        </Text>
        <Switch
          trackColor={{ false: "#767577", true: "#34D399" }}
          thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Divider className="mx-4" />
      <View className=" h-3" />
      <View className=" px-4">
        <Text className=" font-semibold ml-2" style={[Textstyles.text_cmedium]}>
          Change Password
        </Text>
        <CustomInputPassword
          placeholder="Old password"
          value={password}
          secureTextEntry={true}
          onChange={(text) => setPassword(text)}
          leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
        />

        <CustomInputPassword
          placeholder="New password"
          value={password}
          secureTextEntry={true}
          onChange={(text) => setPassword(text)}
          leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
        />

        <CustomInputPassword
          placeholder="Confirm Pasword"
          value={password}
          secureTextEntry={true}
          onChange={(text) => setPassword(text)}
          leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
        />
      </View>
      <View className=" mt-10 px-3">
        <CustomButton
          Textname={"Submit"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          onPress={() => handleSelect("Save")} // Trigger the save action
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
