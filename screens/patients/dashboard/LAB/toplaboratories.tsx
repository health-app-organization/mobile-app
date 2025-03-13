import React, { useState } from "react";

import {
  View,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { StackNavigation } from "../../../../types/stack";
import { Header } from "components/utilities/headers";
import { CustomInputSearch } from "components/utilities/inputs";
import { ProviderCard, ProviderCard2 } from "components/utilities/provider-card";

const Toplabs = () => {
  const navigation = useNavigation<StackNavigation>();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View className="  h-screen">
      <StatusBar />

      <Header title="Laboratories" />
      <View className=" px-4 mt-4">
        <CustomInputSearch
          placeholder="Search for chat"
          leftIcon={<FontAwesome name="search" color="#000" size={20} />}
          value={searchTerm}
          onChange={(text) => setSearchTerm(text)}
        />
      </View>
      <Text className=" text-[27px] font-[600] leading-[30px] mt-5 pl-6">
        Top Laboratory Scientist
      </Text>
      <View style={{ height: 200, width: "100%" }}>
        <ScrollView horizontal={true} className=" px-5 mt-4  ">
          <ProviderCard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            likes={100}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <ProviderCard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            likes={100}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <ProviderCard2
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            reviews={50}
            likes={100}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <ProviderCard2
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
          <ProviderCard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <ProviderCard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <ProviderCard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <ProviderCard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <ProviderCard
            name="Dr Micheal Brains"
            title="Healthcare Provider"
            rating={5}
            likes={250}
            image="image_url"
            onPress={() => navigation.navigate("apponitmentdetails")}
          />
          <ProviderCard
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

export default Toplabs;
