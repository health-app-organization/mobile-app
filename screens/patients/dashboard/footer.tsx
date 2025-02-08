import { View, TouchableOpacity } from "react-native";
import { linkcolor, primarycolor, whitecolor } from "../../../constants/color";
import {
  CalenderIcon,
  HomeIcon,
  MessageIcon,
  UserIcon,
} from "../../../assets/iconsvg/Svgicon";

import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../../types/stack";

const Footer = ({ activepros }: { activepros: string }) => {
  const [active, setactive] = useState(activepros);
  const navigation = useNavigation<StackNavigation>();
  useEffect(() => {
    setactive(activepros);
  }, [active]);
  const handlenavigate = (value: string) => {
    setactive(value);
    navigation.navigate(value as any);
  };
  return (
    <>
      <View className="w-full h-20 bg-white absolute bottom-0 flex-row items-center justify-evenly z-50">
        <TouchableOpacity
          onPress={() => handlenavigate("Home")}
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
          onPress={() => handlenavigate("Messages")}
          style={
            active === "Messages"
              ? { backgroundColor: linkcolor }
              : { backgroundColor: whitecolor }
          }
          className="w-12 h-12 flex justify-center items-center rounded-xl"
        >
          <MessageIcon
            width={24}
            height={24}
            color={active === "Messages" ? primarycolor : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handlenavigate("Appointments")}
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
          onPress={() => handlenavigate("profile")}
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
export default Footer;
