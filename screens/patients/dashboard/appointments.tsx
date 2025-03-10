import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import HeaderTitle from "../../../components/mycomponent";
import appoImage from "../../../assets/images/appo.png";
import { DoctorCard } from "../../../components/mycomponent";
import { DateComponent } from "../../../components/mycomponent";
import PatientFooter from "components/patient-footer";
import { SafeAreaView } from "react-native-safe-area-context";
import { primarycolor } from "constants/color";

const Appointments = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <StatusBar backgroundColor={primarycolor} />

      {/* Header Section */}
      <HeaderTitle title="My Appointment" />

      {/* Tabs Section */}

      {/* Date Component */}
      <ScrollView className="pt-4 px-4">
        <DateComponent />
        <AppointmentComponent />
      </ScrollView>

      {/* Footer */}
      <PatientFooter activeProps="Appointments" />
    </SafeAreaView>
  );
};

export const AppointmentComponent = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
    "upcoming"
  );
  return (
    <>
      <View className="flex-row justify-center mt-2 mb-6">
        {/* Upcoming Tab */}
        <TouchableOpacity
          className={`px-4 py-2 w-[162px] flex justify-center items-center h-[41px] rounded-xl mx-2 ${activeTab === "upcoming" ? "bg-[#0099B8]" : "bg-[#0099B833]"
            }`}
          onPress={() => setActiveTab("upcoming")}
        >
          <Text
            className={`font-semibold text-center ${activeTab === "upcoming" ? "text-white" : "text-black"
              }`}
          >
            Upcoming
          </Text>
        </TouchableOpacity>

        {/* Completed Tab */}
        <TouchableOpacity
          className={`px-4 py-2 w-[162px] h-[41px] flex justify-center items-center rounded-xl mx-2 ${activeTab === "completed" ? "bg-[#0099B8]" : "bg-[#0099B833]"
            }`}
          onPress={() => setActiveTab("completed")}
        >
          <Text
            className={`font-semibold  text-center${activeTab === "completed" ? "text-white" : "text-black"
              }`}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      {/* Tab Content */}
      {activeTab === "upcoming" ? (
        // Upcoming Tab Content
        <View className="px-4 w-full gap-y-2">
          <DoctorCard
            name="Dr Michael Brains"
            session="Morning Session"
            time="09:00AM Prompt"
            imageSource={appoImage}
            onPress={() => console.log("View Details Pressed")}
            status="upcoming"
          />
          <DoctorCard
            name="Dr Michael Brains"
            session="Morning Session"
            time="09:00AM Prompt"
            imageSource={appoImage}
            onPress={() => console.log("View Details Pressed")}
            status="upcoming"
          />
          <DoctorCard
            name="Dr Michael Brains"
            session="Morning Session"
            time="09:00AM Prompt"
            imageSource={appoImage}
            onPress={() => console.log("View Details Pressed")}
            status="upcoming"
          />
          <DoctorCard
            name="Dr Michael Brains"
            session="Morning Session"
            time="09:00AM Prompt"
            imageSource={appoImage}
            onPress={() => console.log("View Details Pressed")}
            status="upcoming"
          />
          <DoctorCard
            name="Dr Michael Brains"
            session="Morning Session"
            time="09:00AM Prompt"
            imageSource={appoImage}
            onPress={() => console.log("View Details Pressed")}
            status="upcoming"
          />
        </View>
      ) : (
        activeTab === "completed" && (
          // Completed Tab Content
          <View className="px-4 w-full gap-y-2">
            <DoctorCard
              name="Dr Sarah Williams"
              session="Afternoon Session"
              time="01:00PM Prompt"
              imageSource={appoImage}
              onPress={() => console.log("View Details Pressed")}
              status="completed"
            />
            <DoctorCard
              name="Dr John Doe"
              session="Evening Session"
              time="05:00PM Prompt"
              imageSource={appoImage}
              onPress={() => console.log("View Details Pressed")}
              status="completed"
            />
            <DoctorCard
              name="Dr John Doe"
              session="Evening Session"
              time="05:00PM Prompt"
              imageSource={appoImage}
              onPress={() => console.log("View Details Pressed")}
              status="completed"
            />
            <DoctorCard
              name="Dr John Doe"
              session="Evening Session"
              time="05:00PM Prompt"
              imageSource={appoImage}
              onPress={() => console.log("View Details Pressed")}
              status="completed"
            />
          </View>
        )
      )}
    </>
  );
};

export default Appointments;
