import React, { useState } from "react";

import {
  View,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";

import {
  CustomInputSearch,
  Header,
  Providercard,
  Providercard2,
} from "../../../components/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { StackNavigation } from "../../../types/stack";


const Medicine = () => {
  const navigation = useNavigation<StackNavigation>();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View className="  h-screen">
      <StatusBar />

      <Header title="Medicine" />
      <View className=" px-4 mt-4">
        <CustomInputSearch
          placeholder="Search for chat"
          leftIcon={<FontAwesome name="search" color="#000" size={20} />}
          value={searchTerm}
          onChange={(text) => setSearchTerm(text)}
        />
      </View>
      <Text className=" text-[27px] font-[600] leading-[30px] mt-5 pl-6">
        Top Pharmacist
      </Text>
      <View style={{ height: 200, width: "100%" }}>
        <ScrollView horizontal={true} className=" px-5 mt-4  ">
          <Providercard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            likes={100}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            likes={100}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            likes={100}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            likes={100}
            image="image_url"
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
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <Providercard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Medicine;
