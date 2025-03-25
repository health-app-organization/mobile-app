import { View, Text, ScrollView } from "react-native";
import { Textstyles } from "../../constants/fontsize";
import {
  AmbulanceIcon,
  Calender,
  LabIcon,
  SethIcon,
} from "../../assets/iconsvg/Svgicon";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { AppointmentComponent } from "./appointments";
import { StackNavigation } from "../../types/stack";
import { StatusBar } from "expo-status-bar";
import { primarycolor } from "constants/color";
import { MenuButton } from "components/utilities/menu-button";
import { ChatList } from "components/health-seeker/chats/chat-list";
import { DateComponent } from "components/utilities/date-component";

const Dashboard = () => {
  return (
    <>
      <StatusBar backgroundColor={primarycolor} style="light" />
      <View className="h-full w-full flex">
        <View className="flex-1 items-center pt-3 pb-1">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="gap-y-6">
              <DashboardMenu />
              <Appointment />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
export default Dashboard;

const DashboardMenu = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <>
      <View className="px-2 mx-auto">
        <ScrollView
          className="py-2"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <View className="gap-x-4 flex-row">
            <MenuButton
              onPress={() =>
                navigation.navigate("health-seeker", {
                  screen: "safe-area-view",
                  params: { screen: "healthcare-provider" },
                })
              }
              icon={<SethIcon width={40} height={40} />}
              text={
                <Text style={[Textstyles.text_xsmall]} className="text-center">
                  Healthcare Provider
                </Text>
              }
            />
            <MenuButton
              onPress={() =>
                navigation.navigate("health-seeker", {
                  screen: "safe-area-view",
                  params: { screen: "medicine" },
                })
              }
              icon={<AmbulanceIcon width={40} height={40} />}
              text={
                <Text style={[Textstyles.text_xsmall]} className="text-center">
                  Medicine
                </Text>
              }
            />
            <MenuButton
              onPress={() => navigation.navigate("health-seeker", { screen: "safe-area-view", params: { screen: "laboratories" } })}
              icon={<LabIcon width={40} height={40} />}
              text={
                <Text style={[Textstyles.text_xsmall]} className="text-center">
                  Lab and Radiology
                </Text>
              }
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
const Appointment = () => {
  const [checkapointment, setcheckappointment] = useState(false);
  return (
    <>
      {checkapointment && (
        <View className=" flex items-center  w-full">
          <Calender />
          <Text style={[Textstyles.text_xmedium]} className="mt-5">
            You have no Appointments yet
          </Text>
        </View>
      )}
      {!checkapointment && (
        <View className=" flex px-5 w-full">
          <View className="">
            <Text style={[Textstyles.text_xmedium]} className="">
              New Chats
            </Text>
          </View>
          <ChatList
            profileImage={require("../../assets/images/chat 1.png")}
            name="Dr. Sunmisola Olowofela"
            message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet.."
            time="18:52"
            unreadCount={4}
          />
          <View className="mt-3">
            <Text style={[Textstyles.text_xmedium]} className="">
              Upcoming Appointments
            </Text>
          </View>
          <View className="mt-3">
            <DateComponent />
          </View>
          <View className="mt-3">
            <AppointmentComponent />
          </View>
        </View>
      )}
    </>
  );
};
