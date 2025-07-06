// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const AppointmentComponent = () => {
//   return (
//     <View>
//       <Text>AppointmentComponent</Text>
//     </View>
//   );
// };

// export default AppointmentComponent;

// const styles = StyleSheet.create({});

import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { DoctorCard } from "../appointment/doctor-card";

import appoImage from "../../../assets/images/appo.png";

export const AppointmentComponent = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
    "upcoming"
  );

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {/* Upcoming Tab */}
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "upcoming" ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setActiveTab("upcoming")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "upcoming"
                ? styles.activeText
                : styles.inactiveText,
            ]}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        {/* Completed Tab */}
        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === "completed" ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setActiveTab("completed")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "completed"
                ? styles.activeText
                : styles.inactiveText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      {activeTab === "upcoming" ? (
        <View style={styles.tabContent}>
          {[...Array(5)].map((_, index) => (
            <DoctorCard
              key={`upcoming-${index}`}
              name="Dr Michael Brains"
              session="Morning Session"
              time="09:00AM Prompt"
              imageSource={appoImage}
              onPress={() => console.log("View Details Pressed")}
              status="upcoming"
            />
          ))}
        </View>
      ) : (
        <View style={styles.tabContent}>
          <DoctorCard
            name="Dr Sarah Williams"
            session="Afternoon Session"
            time="01:00PM Prompt"
            imageSource={appoImage}
            onPress={() => console.log("View Details Pressed")}
            status="completed"
          />
          {[...Array(3)].map((_, index) => (
            <DoctorCard
              key={`completed-${index}`}
              name="Dr John Doe"
              session="Evening Session"
              time="05:00PM Prompt"
              imageSource={appoImage}
              onPress={() => console.log("View Details Pressed")}
              status="completed"
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16, // equivalent to gap-y-4
    paddingVertical: 16, // py-4
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  tabButton: {
    paddingHorizontal: 16, // px-4
    paddingVertical: 8, // py-2
    width: 162,
    height: 41,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12, // rounded-xl
    marginHorizontal: 8, // mx-2
  },
  activeTab: {
    backgroundColor: "#0099B8",
  },
  inactiveTab: {
    backgroundColor: "#0099B833", // 33 = 20% opacity
  },
  tabText: {
    fontWeight: "600", // font-semibold
    textAlign: "center",
  },
  activeText: {
    color: "white",
  },
  inactiveText: {
    color: "black",
  },
  tabContent: {
    paddingHorizontal: 16, // px-4
    width: "100%",
    gap: 16, // gap-y-4
  },
});

export default AppointmentComponent;
