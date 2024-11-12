import React, { useState } from "react";

import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import HeaderTitle, {
  CustomButton,
  CustomButton2,
  CustomButtonsmall,
  CustomButtonsmall2,
  CustomInputSearch,
  CustomTextInput,
  Header,
  Providercard,
  Providercard2,
} from "../../../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";

const Toplabs = () => {
  const navigation = useNavigation();

  return (
    <View className="  h-screen">
      <StatusBar style="auto" />

      <Header title="Laboratories" />
      <View className=" px-4 mt-4">
        <CustomInputSearch
          placeholder="Search for chat"
          leftIconName="search" // Use FontAwesome email icon
          onChange={(text) => console.log(text)}
        />
      </View>
      <Text className=" text-[27px] font-[600] leading-[30px] mt-5 pl-6">
        Top Laboratory Scientist
      </Text>
      <View style={{ height: 200, width: "100%" }}>
        <ScrollView horizontal={true} className=" px-5 mt-4  ">
          <Providercard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
        </ScrollView>
      </View>
      <View className=" mt-2 pl-6">
        <ScrollView className=" mb-[420px]">
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Toplabs;
