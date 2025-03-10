import { Avatar } from "react-native-paper";
import { primarycolor, whitecolor } from "../../../constants/color";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Textstyles } from "../../../constants/fontsize";
import {
  AmbulanceIcon,
  BackgroundIcon,
  Calender,
  LabIcon,
  Notificationicon,
  SethIcon,
  ShoppingCartIcon,
} from "../../../assets/iconsvg/Svgicon";
import { useNavigation } from "@react-navigation/native";
import { QRCodeScreen } from "../../qrcodegen/Qrcode";
import { ChatList, DateComponent, MenuButton } from "../../../components/mycomponent";
import { useState } from "react";
import { AppointmentComponent } from "./appointments";
import useAuthStore from "../../../store/auth-store";
import { StackNavigation } from "../../../types/stack";
import PatientFooter from "components/patient-footer";
import { UserProps } from "types/general";

const Dashboard = () => {
  return (
    <>
      <View className="h-full w-full flex">
        <Dashheader />
        <View className="flex-1 items-center pt-3 pb-1">
          <ScrollView showsVerticalScrollIndicator={false}>
            <DashboardMenu />
            <View className="h-6" />
            <Appointment />
          </ScrollView>
        </View>

        <PatientFooter activeProps={"Home"} />
      </View>
    </>
  );
};
export default Dashboard;

const Dashheader = () => {
  const navigation = useNavigation<StackNavigation>();
  const { getUser } = useAuthStore();
  const user: UserProps | null = getUser();
  return (
    <>
      <View
        style={{ backgroundColor: primarycolor }}
        className="h-1/3 w-full rounded-b-2xl pt-[60px] px-3 relative"
      >
        <View className="absolute -bottom-10 left-5 opacity-30">
          <BackgroundIcon width={200} height={200} />
        </View>
        <View className="flex-row justify-between items-center">
          <View className="flex-row items-center">
            <View>
              <Avatar.Image
                source={require("../../../assets/images/profileimage.png")}
                size={60}
              />
            </View>
            <View className="w-4" />
            <View>
              <Text style={[Textstyles.text_xmedium, { color: whitecolor }]}>
                {"Hi " + user?.firstName}
              </Text>
              <Text style={[Textstyles.text_xxmedium, { color: whitecolor }]}>
                How’re you today?
              </Text>
            </View>
          </View>
          <View className="flex-row">
            <TouchableOpacity
              onPress={() => navigation.navigate("cart")}
              style={{ elevation: 4 }}
              className="w-10 h-10 rounded-xl bg-white flex justify-center items-center shadow-sm shadow-black"
            >
              <ShoppingCartIcon width={28} height={28} />
            </TouchableOpacity>
            <View className="w-4" />
            <TouchableOpacity
              onPress={() => navigation.navigate("notifications")}
              style={{ elevation: 4 }}
              className="w-10 h-10 rounded-xl bg-white flex justify-center items-center shadow-sm shadow-black"
            >
              <Notificationicon width={28} height={28} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row justify-between items-center mt-16">
          <View>
            <Text style={[Textstyles.text_cmedium, { color: whitecolor }]}>
              Available Balance
            </Text>
            <View className="items-center flex-row">
              <BackgroundIcon width={50} height={50} />
              <View className="w-4" />

              <Text style={[Textstyles.text_medium, { color: whitecolor }]}>
                0.00
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("userqrcode")}
              className="h-20 w-20 flex justify-center items-center rounded-full border-white border-2"
            >
              <View className="h-16 w-16 flex justify-center items-center rounded-full bg-white p-2">
                <QRCodeScreen />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};
const DashboardMenu = () => {
  const navigation = useNavigation<StackNavigation>();
  return (
    <>
      <View className="px-2 mx-auto">
        <ScrollView className="py-2" horizontal showsHorizontalScrollIndicator={false}>
          <MenuButton
            onPress={() => navigation.navigate("healthprovider")}
            icon={<SethIcon width={40} height={40} />}
            text={
              <Text style={[Textstyles.text_xsmall]} className="text-center">
                Healthcare Provider
              </Text>
            }
          />
          <View className="w-4" />
          <MenuButton
            onPress={() => navigation.navigate("medicine")}
            icon={<AmbulanceIcon width={40} height={40} />}
            text={
              <Text style={[Textstyles.text_xsmall]} className="text-center">
                Medicine
              </Text>
            }
          />
          <View className="w-4" />
          <MenuButton
            onPress={() => navigation.navigate("laborarories")}
            icon={<LabIcon width={40} height={40} />}
            text={
              <Text style={[Textstyles.text_xsmall]} className="text-center">
                Lab and Radiology
              </Text>
            }
          />
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
            profileImage={require("../../../assets/images/chat 1.png")}
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
