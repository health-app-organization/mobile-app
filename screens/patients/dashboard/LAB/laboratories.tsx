import { View, Text, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Textstyles } from "../../../../constants/fontsize";
import { primarycolor, whitecolor } from "../../../../constants/color";
import { Header } from "components/utilities/headers";
import { CustomDropdownWithHeader } from "components/utilities/dropdowns";
import { CustomButton } from "components/utilities/buttons";
import { ProviderCard, ProviderCard2 } from "components/utilities/provider-card";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "types/stack";
import { CustomInputSearch } from "components/utilities/inputs";
import { FontAwesome } from "@expo/vector-icons";
import { healthProviderList } from "mock-data/mock-data";

const Laboratories = () => {
  const navigation = useNavigation<StackNavigation>();
  const [sector, setSector] = useState("Laboratory test");
  const test = [
    { label: "Laboratory test", value: "Laboratory test" },
    { label: "Radiology (Scans,X-ray)", value: "Home Consultation" },
  ];
  const [location, setLocation] = useState("Laboratory Visit");
  const vist = [
    { label: "Laboratory Visit", value: "Laboratory Visit" },
    { label: "Home Visit", value: "Home Visit" },
  ];

  const [chooseSectorModal, setChooseSectorModal] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View className="flex-1 p-4">
      <View className="flex-1 gap-y-6">
        {chooseSectorModal ? (
          <>
            <Text
              className="text-[28px] font-semibold"
              style={[Textstyles.text_cmedium]}
            >
              What sector will you like to book
            </Text>
            <View className="">
              <CustomDropdownWithHeader
                headerText="Choose sector"
                options={test}
                placeholder="Choose sector"
                value={sector}
                onChange={(val) => setSector(val)}
              />
              <CustomDropdownWithHeader
                options={vist}
                headerText="Location"
                placeholder="Where do you want care?"
                value={location}
                onChange={(val) => setLocation(val)}
              />
            </View>
          </>
        ) : (
          <>
            <CustomInputSearch
              placeholder="Search for chat"
              leftIcon={<FontAwesome name="search" color="#000" size={20} />}
              value={searchTerm}
              onChange={(text) => setSearchTerm(text)}
            />
            <Text className=" text-[27px] font-[600] leading-[30px]">
              Top Laboratory Scientist
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
          </>
        )}
      </View>
      {chooseSectorModal && (
        <CustomButton
          Textname={"Save"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
          className=""
          onPress={() => setChooseSectorModal(false)}
        />
      )}
    </View>
  );
};

export default Laboratories;
