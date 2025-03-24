import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import appoImage from "../../assets/images/appo.png";
import { DateComponent } from "components/utilities/date-component";
import { DoctorCard } from "components/health-seeker/appointment/doctor-card";

const Appointments = () => {
  return (
    <View className="flex-1">
      <ScrollView className="">
        <View className="gap-y-6 pt-6 px-6">
          <DateComponent />
          <AppointmentComponent />
        </View>
      </ScrollView>
    </View>
  );
};

export const AppointmentComponent = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "completed">(
    "upcoming"
  );
  return (
    <View className="gap-y-4">
      <View className="flex-row justify-center">
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
        <View className="px-4 w-full gap-y-4">
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
          <View className="px-4 w-full gap-y-4">
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
    </View>
  );
};

export default Appointments;
