import { StatusBar } from "expo-status-bar";
import { Image, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  CustomButton,
  CustomButtoncall,
  DateComponent,
} from "../../../components/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { Textstyles } from "../../../constants/fontsize";

const AppointmentDetails = () => {

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

  // Array with content for each slider step
  const mapArray = [
    {
      description: (
        <>
          <Text className="text-center text-black  text-3xl mt-10 font-bold mb-5">
            Select Your Healthcare Provider
          </Text>
          <Text className="text-center text-gray-500 leading-9 text-[22px]">
            Search for healthcare providers by specialty, or location. Need a
            general check-up or specialist consultation, we’ve got you covered.
          </Text>
        </>
      ),
    },
  ];

  return (
    <>
      <View className="w-full h-full">
        <StatusBar style="auto" />

        {/* Slider Image Section */}
        <View className="h-[48vh] w-full relative">
          <View className="w-full h-full flex justify-center items-center">
            <Image
              source={require("../../../assets/images/slide1.png")}
              className="w-full h-full"
            />
          </View>
        </View>

        {/* White View Section with Border Radius */}
        <View
          className="h-[70vh] bg-white  w-full justify-center items-center -mt-20"
          style={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
        >
          {/* Doctor's Info Card */}
          <View className="w-[357px] h-[87px] rounded-[10px] bg-[#00d5fd] bg-opacity-30 relative -mt-14  flex justify-center items-center">
            <View className="w-[345px] h-[80px] bg-[#0099B8] rounded-lg justify-center items-center mx-auto absolute top-1/2 transform -translate-y-1/2">
              <Text className="text-[18px] font-semibold text-white mb-1 leading-[21px] text-center">
                Prof. Dr. Micheal Brains
              </Text>
              <Text className="text-[13px] text-white text-center leading-[18px]">
                Senior Cardiologist & Surgeon
              </Text>
              <Text className="text-[13px] text-white text-center leading-[18px]">
                United States Medical College & Hospital
              </Text>
            </View>
          </View>

          {/* Appointments and Month Navigation */}
          <View className="flex px-3 justify-center  items-center ">
            <View className="w-full mt-3 p-3 px-8 flex-row justify-between">
              <View>
                <Text className="text-xl font-semibold leading-[24px]">
                  Appointments
                </Text>
              </View>

              <View className="flex-row justify-between items-center -mt-2 space-x-3">
                {/* Left Arrow */}
                <TouchableOpacity onPress={handlePreviousMonth}>
                  <Text className="text-2xl text-gray-400">{"<"}</Text>
                </TouchableOpacity>

                {/* Display Current Month */}
                <Text className="text-base text-gray-400 font-semibold">
                  {months[currentMonthIndex]}
                </Text>

                {/* Right Arrow */}
                <TouchableOpacity onPress={handleNextMonth}>
                  <Text className="text-2xl text-gray-400">{">"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Date Component */}
          <View className="w-full mb-4 ml-3">
            <DateComponent />
          </View>

          {/* Appointment Details */}
          <View className="h-96 mt-2 flex  justify-start items-center">
            <View className="pl-5 h-80 w-full">
              <View className="h-16 w-[95%] mb-2">
                <Text style={[Textstyles.text_cmedium]}>Morning session</Text>
                <Text className="">
                  Please keep in mind that your appointment with Dr Micheal is
                  scheduled for 09:00AM
                </Text>
              </View>
              <View className="h-16 w-full">
                <Text style={[Textstyles.text_cmedium]}>Duration</Text>
                <Text>1Hour</Text>
              </View>
              <View className="h-16 w-full">
                <Text style={[Textstyles.text_cmedium]}>Consultation</Text>
                <Text>In-app video consultation</Text>
              </View>
              <View className="h-16 w-full">
                <Text style={[Textstyles.text_cmedium]}>
                  Appointment status
                </Text>
                <Text>Upcoming</Text>
              </View>
            </View>
          </View>
        </View>
        <View className=" w-full  ">
          <View className="  -mt-[114px] gap-3 w-[80%] flex-row pl-5">
            <CustomButton
              Textname={"Call Dr Micheal Brains"}
              backgroundColor="#00D70733"
              TextColor="black"
            />
            <View className=" w-[20%]">
              <CustomButtoncall backgroundColor="#00D70733" TextColor="black" />
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </>
  );
};

export default AppointmentDetails;
