import React from "react";
import Imagepic from "../../assets/images/appo.png";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderTitle, { Providercard2 } from "../mycomponents/mycomponent";
import Footer from "./footer";

const Appointments = () => {
  const navigation = useNavigation();

  return (
    <>
      <View className="py-[40px] h-full">
        <StatusBar style="auto" />
        <View>
          <HeaderTitle title="My Appointment" />
        </View>

        <View className="px-5 mt-10">
       <Providercard2/>
        </View>
      </View>
      <Footer activepros="Appointment" />
    </>
  );
};

export default Appointments;


