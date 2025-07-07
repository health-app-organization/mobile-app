// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const MedicalRecords = () => {
//   return (
//     <View style={styles.container}>
//       <Text>MedicalRecords</Text>
//     </View>
//   );
// };

// export default MedicalRecords;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Medical from "./medical";
import TestReport from "./testreport";

const ProfileCompletion = () => {
  const [currentTab, setCurrentTab] = useState(0);

  // Tab content components (Medical, Test Report)
  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <Medical />;
      case 1:
        return <TestReport />;
      default:
        return <Medical />;
    }
  };

  return (
    <View className="flex-1">
      {/* Tab Header */}
      <View className="flex-row justify-around border-b border-gray-300 pt-6">
        <TouchableOpacity onPress={() => setCurrentTab(0)}>
          <Text
            className={
              currentTab === 0
                ? "text-black text-[20px] font-bold border-b-2 border-primary pb-2"
                : "text-gray-400 font-bold text-[20px] pb-2"
            }
          >
            Medical
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentTab(1)}>
          <Text
            className={
              currentTab === 1
                ? "text-black text-[20px] font-bold border-b-2 border-primary pb-2"
                : "text-gray-400 font-bold text-[20px] pb-2"
            }
          >
            Test Report
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View className="flex-1">{renderTabContent()}</View>
    </View>
  );
};

export default ProfileCompletion;
