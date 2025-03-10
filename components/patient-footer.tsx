import { View, TouchableOpacity, Text } from "react-native";
import { linkcolor, primarycolor, whitecolor } from "../constants/color";
import {
  CalenderIcon,
  HomeIcon,
  MessageIcon,
  UserIcon,
} from "../assets/iconsvg/Svgicon";

import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../types/stack";

const PatientFooter = ({
  activeProps,
}: {
  activeProps: "Home" | "Messages" | "Appointments" | "profile";
}) => {
  const [active, setActive] = useState(activeProps);
  const navigation = useNavigation<StackNavigation>();
  useEffect(() => {
    setActive(activeProps);
  }, [active]);
  const handleNavigate = (
    value: "Home" | "Messages" | "Appointments" | "profile"
  ) => {
    if (value === active) {
      return;
    }
    if (value === "profile") {
      navigation.navigate("profileScreen", { screen: "profile" });
      return;
    }
    setActive(value);
    navigation.navigate(value as any);
  };
  return (
    <>
      <View className="w-full h-20 bg-white flex-row items-center justify-evenly mt-1">
        <TouchableOpacity
          onPress={() => handleNavigate("Home")}
          style={
            active === "Home"
              ? { backgroundColor: linkcolor }
              : { backgroundColor: whitecolor }
          }
          className="w-12 h-12 flex justify-center items-center rounded-xl"
        >
          <HomeIcon
            width={24}
            height={24}
            color={active === "Home" ? primarycolor : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigate("Messages")}
          style={
            active === "Messages"
              ? { backgroundColor: linkcolor }
              : { backgroundColor: whitecolor }
          }
          className="w-12 h-12 flex justify-center items-center rounded-xl"
        >
          <View className="p-2">
            <MessageIcon
              width={24}
              height={24}
              color={active === "Messages" ? primarycolor : "black"}
            />
            {true && (
              <View className="bg-primary absolute top-0 right-0 rounded-full h-4 w-4 flex justify-center items-center">
                <Text className="text-xs">6</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigate("Appointments")}
          style={
            active === "Appointments"
              ? { backgroundColor: linkcolor }
              : { backgroundColor: whitecolor }
          }
          className="w-12 h-12 flex justify-center items-center rounded-xl"
        >
          <CalenderIcon
            width={24}
            height={24}
            color={active === "Appointments" ? primarycolor : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigate("profile")}
          style={
            active === "profile"
              ? { backgroundColor: linkcolor }
              : { backgroundColor: whitecolor }
          }
          className="w-12 h-12 flex justify-center items-center rounded-xl"
        >
          <UserIcon
            width={24}
            height={24}
            color={active === "profile" ? primarycolor : "black"}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default PatientFooter;
