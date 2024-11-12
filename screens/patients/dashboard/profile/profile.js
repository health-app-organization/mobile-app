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
import { CustomButton, CustomButtonno } from "../../../mycomponents/mycomponent";
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
    <View className="flex-1 w-full h-screen">
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full bg-[#0099B8] h-[15.55%] rounded-b-3xl pt-20">
          <Text
            className="text-white text-2xl font-bold ml-8"
            style={[Textstyles.text_medium]}
          >
            My Account
          </Text>
          <View className=" w-full flex justify-center mb-20   items-center">
            <View className=" w-[232px] flex justify-center items-center h-[175px]   mt-16">
              {/* Profile Picture */}
              <View
                className="w-[80px] mt-[86px] h-[80px]  flex justify-center items-center  rounded-tl-lg overflow-hidden"
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

          <TouchableOpacity
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
                <Text style={[Textstyles.text_medium]}>Order Tracking</Text>
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
                <Text style={[Textstyles.text_medium]}>My Favorites</Text>
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
                <Text style={[Textstyles.text_medium]}>Order History</Text>
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
                <Text style={[Textstyles.text_medium]} className=" -ml-32">
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
        </View>
      </ScrollView>
      <Footer activepros={"profilecomplete"} />
      {/* Slide-up Modal */}
      <Modal visible={modalVisible} transparent animationType="none">
        <TouchableOpacity style={{ flex: 1 }} onPress={closeModal}>
          <Animated.View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 290,
              backgroundColor: "white",
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              padding: 20,
              transform: [{ translateY: slideAnim }],
            }}
            className="absolute bottom-0 left-0 right-0 h-50 bg-white rounded-t-lg p-5"
          >
            <Text className="text-2xl text-center font-bold mb-4  text-[#0099B8]">
              WESTACRE
            </Text>
            <Text className="text-base text-center font-[600] text-black mb-8">
              Are you sure you want to log out?
            </Text>
            <View className=" h-4 " />
            <CustomButtonno
              Textname={"No"}
              onPress={closeModal}
              backgroundColor="red"
              TextColor={whitecolor}
            />
            <View className=" h-5 " />
            <CustomButton
              Textname={"Yes"}
              onPress={closeModal}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
            />
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Profile;
