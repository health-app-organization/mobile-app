import { View, Text, Switch, ScrollView } from "react-native";
import React, { useState } from "react";
import { Textstyles } from "../../../constants/fontsize";
import { FontAwesome } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import { primarycolor, whitecolor } from "../../../constants/colors";
import { CustomButton } from "../../../utilities/buttons";
import { CustomInputPassword } from "../../../utilities/inputs";

const SettingsPage = () => {
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
  };

  return (
    <View className="flex-1">
      <View className="flex-1">
        <ScrollView className="p-6 flex-1">
          <View className="flex-row items-center justify-between">
            <Text
              className="text-[28px] font-semibold"
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
          <Divider className="" />
          <View style={{ marginTop: 20 }}>
            <Text className="font-semibold" style={[Textstyles.text_cmedium]}>
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
        </ScrollView>
      </View>
      <View className="pb-6 px-6">
        <CustomButton
          Textname={"Submit"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          onPress={() => handleSelect("Save")} // Trigger the save action
        />
      </View>
    </View>
  );
};

export default SettingsPage;
