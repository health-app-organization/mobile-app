import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for arrow
import { CustomButton } from "../mycomponents/mycomponent";
import Footer from "./footer";
import { primarycolor, whitecolor } from "../../constants/color";
import { Textstyles } from "../../constants/fontsize";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 w-full h-screen">
      <StatusBar style="auto" />

      <View className="w-full bg-[#0099B8] h-[24%] pt-20">
        <Text
          className="text-white text-2xl font-bold ml-8"
          style={[Textstyles.text_medium]}
        >
          My Account
        </Text>
        <View className=" w-[232px] h-[175px]  ml-8 mt-16">
          {/* Profile Picture */}
          <View
            className="w-[80px] h-[80px]  flex justify-center items-center  rounded-tl-lg overflow-hidden"
            style={{
              opacity: 1,
              borderWidth: 3, // Set the border width to 3
              borderColor: "#FFFFFF", // Set the border color to white
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/images/pro.png")} // Ensure the path is correct
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
            className=" text-[24px] font-[700] leading-[36px] mt-2"
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
        <View className=" w-full flex justify-center items-center pt-20">
          <View className="  w-[394px] h-[272px]">
            <TouchableOpacity
              className=" w-full h-[90px] flex justify-between items-center flex-row  border-b-1   "
              style={{ borderBottomColor: "rgba(0, 0, 0, 0.2)" }}
            >
              <View className=" flex-row w-[155px] justify-between items-center ml-[24px]">
                <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                  <Image
                    source={require("../../assets/images/iconwallet.png")} // Ensure the path is correct
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
                    source={require("../../assets/images/records.png")} // Ensure the path is correct
                    resizeMode="contain"
                    className="w-[28px] h-[28px]"
                  />
                </View>
                <View>
                  <Text style={[Textstyles.text_medium]}>
                    My Medical Records
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
                    source={require("../../assets/images/history.png")} // Ensure the path is correct
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
            <TouchableOpacity className=" w-full h-[90px] flex justify-between items-center flex-row    ">
              <View className=" flex-row w-[200px]  justify-between items-center  ml-[24px]">
                <View className=" w-[45px] h-[45px] bg-[#00D5FD80] flex justify-center items-center rounded-[10px]">
                  <Image
                    source={require("../../assets/images/tracking.png")} // Ensure the path is correct
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
          </View>
        </View>
      </View>
      <Footer activepros={"profile"} />
    </View>
  );
};

export default Profile;
