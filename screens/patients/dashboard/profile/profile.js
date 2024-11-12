import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Animated,
  Easing,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for arrow
import {
  CustomButton,
  CustomButtonno,
} from "../../../mycomponents/mycomponent";
import Footer from "../footer";
import { primarycolor, whitecolor } from "../../../../constants/color";
import { Textstyles } from "../../../../constants/fontsize";
import { useState } from "react";

const Profile = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(300)).current; // Starting position off-screen

  const openModal = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: 300, // Moves the modal off-screen
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View className="flex w-full h-full">
      <StatusBar style="auto" />

      <View className="w-full bg-[#0099B8] h-[25vh] rounded-b-3xl pt-20">
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
              Praise icon
            </Text>
            <Text
              className=" text-[16px] leading-[24px] mb-1 "
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              calebomojuko@gmail.com
            </Text>
            <Text
              className=" text-[16px] leading-[24px] "
              style={{ color: "rgba(0, 0, 0, 0.5)" }}
            >
              +234 8164724627
            </Text>
          </View>
        </View>
      </View>

      <View className=" h-[60vh] ">
        <ScrollView className=" flex-1  pt-6 ">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("profileScreen", { screen: "personal" })
            }
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[155px] justify-between items-center ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/iconwallet.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]}>My Profile</Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("profileScreen", { screen: "wallet" })
            }
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[155px] justify-between items-center ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/iconwallet.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]}>My Wallet</Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("profileScreen", {
                screen: "profilecomplete",
              })
            }
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[250px]  justify-between items-center  ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/records.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]}>My Medical Records</Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("profileScreen", { screen: "orderhistory" })
            }
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/history.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]}>Order History</Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate("profileScreen", { screen: "ordertracking" })
            }
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/history.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]} className=" ml-4">
                  Order Tracking
                </Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("profileScreen", { screen: "favourites" })
            }
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/history.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]}>My Favorites</Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("profileScreen", { screen: "manageaddress" })
            }
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/history.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]} className=" ml-4">
                  Manage Address
                </Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("favourites")}
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/history.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]} className=" ml-2">
                  Medicine Reminder
                </Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("profileScreen", { screen: "settings" })
            }
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/history.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]} className=" -ml-36">
                  Settings
                </Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/history.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]} className=" ml-2">
                  Customer Support
                </Text>
              </View>
            </View>
            <View className=" flex justify-center items-center w-8 h-8 mr-[8]">
              <Ionicons name="chevron-forward" size={32} color="#0099b8" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={openModal}
            className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
            style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <View className=" flex-row w-[185px]  justify-between items-center  ml-[24px]">
              <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                <Image
                  source={require("../../../../assets/images/history.png")} // Ensure the path is correct
                  resizeMode="contain"
                  className="w-[28px] h-[28px]"
                />
              </View>
              <View>
                <Text style={[Textstyles.text_medium]} className=" -ml-32">
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
      <Footer activepros={"profilecomplete"} />
    </View>
  );
};

export default Profile;
