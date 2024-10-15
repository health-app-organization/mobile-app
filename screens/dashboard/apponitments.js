import React, { useState } from "react";
import Imagepic from "../../assets/images/appo.png"
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import {
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import HeaderTitle, {
  CustomButton,
  CustomButton2,
  CustomButtonsmall,
  CustomButtonsmall2,
  CustomInputSearch,
  CustomTextInput,
  Providercard,
} from "../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { height, width } from "../../constants/mobileDimensions";

const Appointments = () => {
  const navigation = useNavigation();

  return (
    <View className=" py-[40px] h-screen">
      <StatusBar style="auto" />
      <View>
        <HeaderTitle title="My Appointment" />
      </View>

      <View className=" px-5 mt-10">
        <Providercard
          
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
          likes={250}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
      </View>
    </View>
  );
};

export default Appointments;
