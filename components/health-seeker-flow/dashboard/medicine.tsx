// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const MedicinePage = () => {
//   return (
//     <View>
//       <Text>MedicinePage</Text>
//     </View>
//   );
// };

// export default MedicinePage;

// const styles = StyleSheet.create({});

import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import CustomInputSearch from "../../../utilities/inputs";
import { healthProviderList } from "../notification/notification-data";
import { ProviderCard } from "../../../utilities/provider-card";

const MedicinePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View style={styles.container}>
      <CustomInputSearch
        placeholder="Search for chat"
        leftIcon={<FontAwesome name="search" color="#000" size={20} />}
        value={searchTerm}
        onChange={(text: string) => setSearchTerm(text)}
      />

      <Text style={styles.title}>Top Pharmacist</Text>

      {/* Horizontal Scroll View (commented out) */}
      {/* <View style={styles.horizontalScrollContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontalCardContainer}>
            {healthProviderList.map((provider, index) => (
              <ProviderCard2
                key={index}
                {...provider}
                reviews={50}
                onPress={() => navigation.navigate("health-seeker", {
                  screen: "appointment-details",
                  params: { providerId: 1234 },
                })}
              />
            ))}
          </View>
        </ScrollView>
      </View> */}

      <View style={styles.verticalScrollContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.verticalCardContainer}>
            {healthProviderList.map((provider, index) => (
              <ProviderCard
                key={index}
                {...provider}
                reviews={50}
                onPress={() => {}}
                // onPress={() => navigation.navigate("health-seeker", {
                //   screen: "appointment-details",
                //   params: { providerId: 1234 },
                // })}
              />
            ))}
          </View>
          <View style={styles.verticalCardContainer}>
            {healthProviderList.map((provider, index) => (
              <ProviderCard
                key={index}
                {...provider}
                reviews={50}
                onPress={() => {}}
                // onPress={() => navigation.navigate("health-seeker", {
                //   screen: "appointment-details",
                //   params: { providerId: 1234 },
                // })}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 24,
  },
  title: {
    fontSize: 27,
    fontWeight: "600",
    lineHeight: 30,
  },
  horizontalScrollContainer: {
    height: 120,
    width: "100%",
  },
  horizontalCardContainer: {
    gap: 12,
    flexDirection: "row",
  },
  verticalScrollContainer: {
    flex: 1,
  },
  verticalCardContainer: {
    gap: 12,
  },
});

export default MedicinePage;
