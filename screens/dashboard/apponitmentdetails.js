
import { StatusBar } from "expo-status-bar";
import { Image, View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CustomButton,StatsCard,DateComponent } from "../mycomponents/mycomponent";

import { primarycolor, whitecolor } from "../../constants/color";
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";


const AppointmentDetails = () => {
  const navigation = useNavigation();
  
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
    <View className="w-full h-full">
      <StatusBar style="auto" />
      
      {/* Slider Image Section */}
      <View className="h-[48vh] w-full relative">
        <View className="w-full h-full flex justify-center items-center">
          <Image
            source={require("../../assets/images/slide1.png")}
            className="w-full h-full"
            resizeMethod="contain"
          />
        </View>
      </View>

      {/* White View Section */}
      <View
        className="h-[70vh] bg-white w-full justify-center items-center -mt-20"
        style={{
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
        }}
      >
      <View className="w-full flex justify-center items-center h-[127px]">
      <View className="w-[290px]  h-[87px] flex-row justify-between ">
        <StatsCard
          icon={require('../../assets/images/user.png')}
          value="200"
          label="Patients"
        />
        <StatsCard
          icon={require('../../assets/images/check.png')}
          value="5+"
          label="Years"
        />
        <StatsCard
          icon={require('../../assets/images/star.png')}
          value="5.0"
          label="Rating"
        />
        <StatsCard
          icon={require('../../assets/images/heart.png')}
          value="200+"
          label="Reviews"
        />
      </View>
    </View>
    <View className=" flex px-3 justify-center items-center -mt-4 ">
          <View className="w-full mt-3 p-3 flex-row justify-between">
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
        <View className="w-full mb-4">
          <DateComponent/>

        </View>
        <View className="px-5 mt-3">
          <Text className="text-[22px] font-bold text-center mb-2">
            About Dr Micheal
          </Text>

          <Text className="text-[16px] leading-[24px] px-3 text-center text-gray-600 ">
            He is a top Senior Cardiologist and Surgeon at the United States
            Medical College & Hospital, with 20+ years of experience in heart
            treatments and surgeries. His expertise and compassionate care make
            him a trusted choice for cardiovascular health.
          </Text>
          
         
         
        </View>
        <View className="w-full mt-3 px-24">
          <CustomButton
            Textname={"Call Dr Micheal Brains"}
          
            backgroundColor={primarycolor}
            TextColor={whitecolor}
          />
        </View>
      </View>
    </View>
  );
};

export default AppointmentDetails;
