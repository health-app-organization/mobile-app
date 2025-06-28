import React, { useState } from "react";

import {
  View,
  Text,
  StatusBar,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { StackNavigation } from "../../../types/stack";
import { CustomInputSearch } from "components/utilities/inputs";
import { ProviderCard, ProviderCard2 } from "components/utilities/provider-card";
import { healthProviderList } from "mock-data/mock-data";


const Medicine = () => {
  const navigation = useNavigation<StackNavigation>();
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View className="flex-1 p-4 gap-y-6">
      <CustomInputSearch
        placeholder="Search for chat"
        leftIcon={<FontAwesome name="search" color="#000" size={20} />}
        value={searchTerm}
        onChange={(text:any) => setSearchTerm(text)}
      />
      <Text className=" text-[27px] font-[600] leading-[30px]">
        Top Pharmacist
      </Text>
      {/* <View style={{ height: 120, width: "100%" }}>
        <ScrollView horizontal className="">
          <View className="gap-x-3 flex-row">
            {healthProviderList.map((provider, index) => (
              <ProviderCard2
                key={index}
                name={provider.name}
                title={provider.title}
                rating={provider.rating}
                reviews={50}
                likes={provider.likes}
                image={provider.image}
                onPress={() =>
                  navigation.navigate("health-seeker", {
                    screen: "appointment-details",
                    params: { providerId: 1234 },
                  })
                }
              />
            ))}
          </View>
        </ScrollView>
      </View> */}
      <View className="flex-1">
        <ScrollView className="">
          <View className="gap-y-3">
            {healthProviderList.map((provider, index) => (
              <ProviderCard
                key={index}
                name={provider.name}
                title={provider.title}
                rating={provider.rating}
                reviews={50}
                likes={provider.likes}
                image={provider.image}
                onPress={() =>
                  navigation.navigate("health-seeker", {
                    screen: "appointment-details",
                    params: { providerId: 1234 },
                  })
                }
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Medicine;
