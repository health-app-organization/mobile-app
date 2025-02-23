import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for arrow
import { CustomButton } from "../../../../components/mycomponent";
import { primarycolor } from "../../../../constants/color";
import { Textstyles } from "../../../../constants/fontsize";
import {
  AddressBookIcon,
  DocumentvalidationIcon,
  InvoiceIcon,
  LogIcon,
  ReminderIcon,
  SettingsIcon,
  ShipmenttrackIcon,
  ShopBagicon,
  UserIcon,
  WalletIcon,
} from "../../../../assets/iconsvg/Svgicon";
import useAuthStore from "../../../../store/auth-store";
import { StackNavigation } from "types/stack";
import PatientFooter from "components/patient-footer";
import { SelectMenuProps } from "types/general";
import AsyncStorage from "@react-native-async-storage/async-storage";

const data = [
  {
    id: 1,
    name: "My Profile",
    icon: <UserIcon />,
    routeName: "personal",
  },
  {
    id: 2,
    name: "My Wallet",
    icon: <WalletIcon />,
    routeName: "wallet",
  },
  {
    id: 3,
    name: "My Medical Records",
    icon: <DocumentvalidationIcon />,
    routeName: "profilecomplete",
  },
  {
    id: 4,
    name: "Order History",
    icon: <InvoiceIcon />,
    routeName: "orderhistory",
  },
  {
    id: 5,
    name: "Order Tracking",
    icon: <ShipmenttrackIcon />,
    routeName: "ordertracking",
  },
  {
    id: 6,
    name: "My Favourites",
    icon: <ShopBagicon />,
    routeName: "favourites",
  },
  {
    id: 7,
    name: "Manage Address",
    icon: <AddressBookIcon />,
    routeName: "manage-address",
  },
  {
    id: 8,
    name: "Medicine Reminder",
    icon: <ReminderIcon />,
    routeName: "medicine-reminder",
  },
  {
    id: 9,
    name: "Settings",
    icon: <SettingsIcon />,
    routeName: "settings",
  },
  {
    id: 10,
    name: "Customer Support",
    icon: <SettingsIcon />,
    routeName: "customer-support",
  },
];

const Profile = () => {
  const { getUser } = useAuthStore();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const slideAnim = useRef(new Animated.Value(300)).current; // Starting position off-screen
  const user = getUser();

  const handleShowModal = () => {
    setModalVisible(true);
    Animated.spring(slideAnim, {
      toValue: 0, // Slide into view
      friction: 8, // Adjust for a more springy effect
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <View className="flex w-full h-full bg-primaryTwo">
        <StatusBar style="auto" />
        <View className="w-full bg-primary h-[25vh] rounded-b-3xl pt-20">
          <Text
            className="text-white text-2xl font-bold ml-8"
            style={[Textstyles.text_medium]}
          >
            My Account
          </Text>
        </View>
        <View className=" h-[10vh] -mt-10 mb-12 ">
          <View className=" w-full flex justify-center   items-center">
            <View className="   flex justify-center items-center    ">
              {/* Profile Picture */}
              <View
                className="w-[80px]  h-[80px]  flex justify-center items-center  rounded-tl-lg overflow-hidden"
                style={{
                  opacity: 1,
                  borderWidth: 3, // Set the border width to 3
                  borderColor: "#FFFFFF", // Set the border color to white
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../../../../assets/images/pro.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-full h-full"
                />
              </View>

              {/* Camera Icon */}
              <TouchableOpacity
                className="w-8 h-8 bg-[#FFAA26] rounded-full -mt-6 ml-16"
                style={{
                  borderWidth: 3,
                  borderColor: "#FFFFFF", // Set the border color to white
                  opacity: 1,
                }}
              >
                <FontAwesome
                  name="camera"
                  size={15}
                  color="#000000"
                  style={{
                    alignSelf: "center",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }} // Center the icon
                />
              </TouchableOpacity>
              <Text
                className=" text-[24px] font-[700] leading-[36px] "
                style={[Textstyles.text_medium]}
              >
                {user?.firstName + " " + user?.lastName}
              </Text>
              <Text
                className=" text-[16px] leading-[24px] mb-1 "
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                {user?.email}
              </Text>
              <Text
                className=" text-[16px] leading-[24px] "
                style={{ color: "rgba(0, 0, 0, 0.5)" }}
              >
                {user?.phoneNumber}
              </Text>
            </View>
          </View>
        </View>

        <View className=" h-[55vh] ">
          <ScrollView className="flex-1  pt-6 ">
            {data.map((item) => (
              <SelectMenu
                key={item.id}
                label={item.name}
                icon={item.icon}
                routeName={item.routeName}
              />
            ))}
            <TouchableOpacity
              onPress={handleShowModal}
              className="h-[90px] flex justify-between items-center flex-row  border-b-1 pr-4"
              style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
                <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                  <LogIcon />
                </View>
                <View>
                  <Text style={[Textstyles.text_xmedium]} className=" -ml-32">
                    Log out
                  </Text>
                </View>
              </View>
              <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
                <Ionicons name="chevron-forward" size={32} color="#0099b8" />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <PatientFooter activeProps={"profile"} />
      {modalVisible && (
        <Modallogout
          slideAnim={slideAnim}
          setModalVisible={(value: boolean) => setModalVisible(value)}
        />
      )}
    </>
  );
};

export default Profile;

const SelectMenu: React.FC<SelectMenuProps> = ({ routeName, label, icon }) => {
  const navigation = useNavigation<StackNavigation>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(routeName as any)}
      className="h-[90px] flex justify-between items-center flex-row  border-b-1 pr-4"
      style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
    >
      <View className=" flex-row w-[185px]  items-center  ml-[24px]">
        <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
          {icon}
        </View>
        <View>
          <Text style={[Textstyles.text_xmedium]} className="ml-4">
            {label}
          </Text>
        </View>
      </View>
      <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
        <Ionicons name="chevron-forward" size={32} color="#0099b8" />
      </View>
    </TouchableOpacity>
  );
};

const Modallogout: React.FC<{
  slideAnim: Animated.Value;
  setModalVisible: (value: boolean) => void;
}> = ({ slideAnim, setModalVisible }) => {

  const navigation = useNavigation<StackNavigation>();

  const handlehideModal = () => {
    setModalVisible(false);
    Animated.timing(slideAnim, {
      toValue: 300, // Slide into view
      duration: 500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    setModalVisible(false);
    navigation.navigate("identity");
    Alert.alert("Logout", "You have successfully logged out");
  };

  return (
    <View className="h-full w-full absolute">
      <View
        style={{ backgroundColor: primarycolor }}
        className="absolute h-full w-full opacity-70"
      />
      <Animated.View
        style={[{ transform: [{ translateY: slideAnim }] }]}
        className="w-full h-[25vh] bg-white absolute z-50  bottom-0  rounded-t-2xl"
      >
        <View className="items-center mt-5">
          <Text style={[Textstyles.text_xmedium]}>Westacare</Text>
          <Text style={[Textstyles.text_x16small]}>
            Are you sure you want to logout ?
          </Text>
        </View>
        <View className="px-5 mt-3">
          <CustomButton
            TextColor={"white"}
            Textname={"Yes"}
            backgroundColor={"red"}
            onPress={handleLogout}
          />
          <View className="h-3" />
          <CustomButton
            onPress={handlehideModal}
            TextColor={"white"}
            Textname={"No"}
            backgroundColor={primarycolor}
          />
        </View>
      </Animated.View>
    </View>
  );
};
