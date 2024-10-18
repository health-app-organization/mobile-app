import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons"; // Import Ionicons for arrow
import { CustomButton, CustomButtonmedium, CustomButtonsmall, CustomButtonsmall2, DateComponent } from "../mycomponents/mycomponent";
import {
  greycolorfive,
  greycolorthree,
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";

const Details = () => {
  const navigation = useNavigation();
  const handletocart = () => {
    navigation.navigate("cart");
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(8); // Index for September (0-based)

  const handleNextMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === months.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousMonth = () => {
    setCurrentMonthIndex((prevIndex) =>
      prevIndex === 0 ? months.length - 1 : prevIndex - 1
    );
  };

  return (
    <View className="flex-1">
      <StatusBar style="auto" />

      {/* Top Image with Back Arrow */}
      <View>
        {/* Back Arrow Icon */}
        <TouchableOpacity
          onPress={() => navigation.goBack()} // Navigates to the previous screen
          style={{
            position: "absolute",
            top: 40,
            left: 20,
            zIndex: 1, // Ensures it's on top of the image
          }}
        >
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>

        {/* Image */}
        <Image
          source={require("../../assets/images/appo.png")} // replace with your actual image path
          className="w-full h-[700px]"
          resizeMode="cover"
        />
      </View>

      {/* Overlay Section */}
      <View
        className="h-[700px] absolute mt-[340px] bg-white w-full "
        style={{
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        {/* Doctor's Info Card */}
        <View className="w-[345px] mx-auto -mt-10 h-[80px] bg-[#0099B8] rounded-lg justify-center">
          <Text className=" text-[18px] font-[600] text-white mb-2 leading-[21px] text-center">
            Prof. Dr. Micheal Brains
          </Text>
          <Text className="text-[13px] text-white text-center">
            Senior Cardiologist & Surgeon
          </Text>
          <Text className="text-[13px] text-white text-center">
            United States Medical College & Hospital
          </Text>
        </View>

        {/* Stats Section */}
        <View className="w-full flex justify-center items-center h-[127px]">
          <View className="w-[290px] h-[87px] flex-row justify-center gap-[20px]">
            <View className="w-[50px] h-[87px]">
              <View className="w-[50px] h-[50px] flex justify-center items-center rounded-[25px] bg-[#D9D9D980] mb-2">
              <Image
          source={require("../../assets/images/user.png")} // replace with your actual image path
          className=" w-6 h-6"
          resizeMode="cover"
        />
              </View>
              <View className="w-[46px] h-[32px]">
                <Text className="text-center font-[500] text-[12px] leading-4">
                  200
                </Text>
                <Text className="text-center font-[400] text-[11px] leading-4">
                  Patients
                </Text>
              </View>
            </View>
            <View className="w-[50px] h-[87px]">
              <View className="w-[50px] h-[50px] flex justify-center items-center rounded-[25px] bg-[#D9D9D980] mb-2">
              <Image
          source={require("../../assets/images/check.png")} // replace with your actual image path
          className=" w-6 h-6"
          resizeMode="cover"
        />
              </View>
              <View className="w-[46px] h-[32px]">
                <Text className="text-center font-[500] text-[12px] leading-4">
                  5+
                </Text>
                <Text className="text-center font-[400] text-[11px] leading-4">
                  Years
                </Text>
              </View>
            </View>
            <View className="w-[50px] h-[87px]">
              <View className="w-[50px] h-[50px] rounded-[25px] flex justify-center items-center bg-[#D9D9D980] mb-2">
              <Image
          source={require("../../assets/images/star.png")} // replace with your actual image path
          className=" w-6 h-6"
          resizeMode="cover"
        />
              </View>
              <View className="w-[46px] h-[32px]">
                <Text className="text-center font-[500] text-[12px] leading-4">
                  5.0
                </Text>
                <Text className="text-center font-[400] text-[11px] leading-4">
                  Rating
                </Text>
              </View>
            </View>
            <View className="w-[50px] h-[87px]">
              <View className="w-[50px] h-[50px] flex justify-center items-center rounded-[25px] bg-[#D9D9D980] mb-2">
              <Image
          source={require("../../assets/images/heart.png")} // replace with your actual image path
          className=" w-6 h-6"
          resizeMode="cover"
        />
              </View>
              <View className="w-[46px] h-[32px]">
                <Text className="text-center font-[500] text-[12px] leading-4">
                  200+
                </Text>
                <Text className="text-center font-[400] text-[11px] leading-4">
                  Reviews
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Appointments Section */}
        <View className=" flex justify-center items-center">
          <View className="w-[388px] h-[119px] mt-3 p-3 flex-row justify-between">
            <View>
              <Text className="text-xl font-semibold leading-[24px]">
                Appointments
              </Text>
            </View>

            <View className="flex-row justify-between -mt-2 space-x-3">
              {/* Left Arrow */}
              <TouchableOpacity onPress={handlePreviousMonth}>
                <Text className="text-2xl">{"<"}</Text>
              </TouchableOpacity>

              {/* Display Current Month */}
              <Text className="text-xl font-semibold">
                {months[currentMonthIndex]}
              </Text>

              {/* Right Arrow */}
              <TouchableOpacity onPress={handleNextMonth}>
                <Text className="text-2xl">{">"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="w-full">
          <DateComponent/>

        </View>

        {/* About Dr Micheal Section */}
        <View className="px-5 mt-[20px]">
          <Text className="text-[22px] font-bold text-center mb-2">
            About Dr Micheal
          </Text>

          <Text className="text-[16px] leading-[24px] text-center text-gray-600 ">
            He is a top Senior Cardiologist and Surgeon at the United States
            Medical College & Hospital, with 20+ years of experience in heart
            treatments and surgeries. His expertise and compassionate care make
            him a trusted choice for cardiovascular health.
          </Text>

          {/* Call Dr Micheal Button */}
          <View className="mt-4 w-full justify-center items-center">
            <CustomButtonmedium
              Textname={"Call Dr Micheal Brains"} // Button text as per design
              onPress={handletocart}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
        
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
