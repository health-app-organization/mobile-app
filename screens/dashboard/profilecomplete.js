import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Header, Header9 } from "../mycomponents/mycomponent";
import Personal from "./personal";
import Medical from "./medical";
import TestReport from "./testreport";

const Ace = () => {
  const [currentTab, setCurrentTab] = useState(0);

  // Tab content components (Personal, Medical, Test Report)
  const renderTabContent = () => {
    switch (currentTab) {
      case 0:
        return <Personal />;
      case 1:
        return <Medical />;
      case 2:
        return <TestReport />;
      default:
        return <Personal />;
    }
  };

  return (
    <View className="flex-1  bg-white">
     <Header9 profileName="Caleb Omojuko" profileCompletion={42} />

      
      {/* Tab Header */}
      <View className="flex-row justify-around mt-12 border-b border-gray-300">
        <TouchableOpacity onPress={() => setCurrentTab(0)}>
          <Text className={currentTab === 0 ? "text-black font-bold border-b-2 border-blue-500 pb-2" : "text-gray-500 pb-2"}>
            Personal
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentTab(1)}>
          <Text className={currentTab === 1 ? "text-black font-bold border-b-2 border-blue-500 pb-2" : "text-gray-500 pb-2"}>
            Medical
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentTab(2)}>
          <Text className={currentTab === 2 ? "text-black font-bold border-b-2 border-blue-500 pb-2" : "text-gray-500 pb-2"}>
            Test Report
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <View className="p-5">{renderTabContent()}</View>
    </View>
  );
};

export default Ace;
