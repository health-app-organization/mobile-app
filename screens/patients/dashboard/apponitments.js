import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderTitle from "../../mycomponents/mycomponent";
import Footer from "./footer";
import appoImage from "../../../assets/images/appo.png";
import { DoctorCard } from "../../mycomponents/mycomponent";
import { DateComponent } from "../../mycomponents/mycomponent";

const Appointments = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar style="auto" />

      {/* Header Section */}
      <HeaderTitle title="My Appointment" />

      {/* Tabs Section */}

      {/* Date Component */}
      <View className="w-full mb-4">
        <DateComponent />
      </View>
      <View className="flex-row justify-center mt-2 mb-6">
        {/* Upcoming Tab */}
        <TouchableOpacity
          className={`px-4 py-2 w-[162px] flex justify-center items-center h-[41px] rounded-xl mx-2 ${
            activeTab === "Upcoming" ? "bg-[#0099B8]" : "bg-[#0099B833]"
          }`}
          onPress={() => setActiveTab("Upcoming")}
        >
          <Text
            className={`font-semibold text-center ${
              activeTab === "Upcoming" ? "text-white" : "text-black"
            }`}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        {/* Completed Tab */}
        <TouchableOpacity
          className={`px-4 py-2 w-[162px] h-[41px] flex justify-center items-center rounded-xl mx-2 ${
            activeTab === "Completed" ? "bg-[#0099B8]" : "bg-[#0099B833]"
          }`}
          onPress={() => setActiveTab("Completed")}
        >
          <Text
            className={`font-semibold  text-center${
              activeTab === "Completed" ? "text-white" : "text-black"
            }`}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      {/* Tab Content */}
      {activeTab === "Upcoming" ? (
        // Upcoming Tab Content
        <View className="px-4">
          <DoctorCard
            name="Dr Michael Brains"
            session="Morning Session"
            time="09:00AM Prompt"
            imageSource={appoImage}
            onPress={() => console.log("View Details Pressed")}
          />
        </View>
      ) : (
        // Completed Tab Content
        <View className="px-4">
          <DoctorCard
            name="Dr Sarah Williams"
            session="Afternoon Session"
            time="01:00PM Prompt"
            imageSource={appoImage}
            onPress={() => console.log("View Details Pressed")}
          />
          <View className=" h-3" />
          <DoctorCard
            name="Dr John Doe"
            session="Evening Session"
            time="05:00PM Prompt"
            imageSource={appoImage}
            onPress={() => console.log("View Details Pressed")}
          />
        </View>
      )}

      {/* Footer */}
      <Footer activepros="Appointment" />
    </View>
  );
};

export default Appointments;
