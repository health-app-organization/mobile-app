import { StatusBar } from "expo-status-bar";
import { Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { primarycolor, whitecolor } from "../../../constants/color";
import { Textstyles } from "../../../constants/fontsize";
import { StatsCard } from "components/utilities/stats-card";
import { DateComponent } from "components/utilities/date-component";
import { CustomButton } from "components/utilities/buttons";

const DoctorDetails = () => {

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

        {/* White View Section */}
        <View
          className="h-[70vh] bg-white w-full justify-center items-center -mt-20 pb-40"
          style={{
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
          }}
        >
          <View className="w-[357px] h-[87px] rounded-[10px] bg-[#00d5fd] bg-opacity-30 relative -mt-[20px] flex justify-center items-center">
            <View className="w-[345px] h-[80px] bg-[#0099B8] rounded-lg justify-center items-center mx-auto  absolute top-1/2 transform -translate-y-1/2">
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
          <ScrollView>
            {/* Doctor's Info Card */}

            <View className="w-full flex justify-center items-center h-[127px]">
              <View className="w-[290px]  h-[87px] flex-row justify-between ">
                <StatsCard
                  icon={require("../../../assets/images/user.png")}
                  value="200"
                  label="Patients"
                />
                <StatsCard
                  icon={require("../../../assets/images/check.png")}
                  value="5+"
                  label="Years"
                />
                <StatsCard
                  icon={require("../../../assets/images/star.png")}
                  value="5.0"
                  label="Rating"
                />
                <StatsCard
                  icon={require("../../../assets/images/heart.png")}
                  value="200+"
                  label="Reviews"
                />
              </View>
            </View>

            <View className="px-5 mt-3">
              <Text className="text-[22px] font-bold text-center mb-2">
                About Dr Micheal
              </Text>

              <Text className="text-[16px] leading-[24px] px-3 text-center text-gray-600 ">
                He is a top Senior Cardiologist and Surgeon at the United States
                Medical College & Hospital, with 20+ years of experience in
                heart treatments and surgeries. His expertise and compassionate
                care make him a trusted choice for cardiovascular health.
              </Text>
            </View>
            <View className=" w-full flex justify-center items-center">
              <View className="h-96 mt-8 flex-row  w-full  ">
                <View className="pl-5 h-80 w-[50%]">
                  <View className="h-16 w-[95%]">
                    <Text style={[Textstyles.text_cmedium]}>
                      Consultations Only
                    </Text>
                  </View>
                  <View className="h-16 w-full">
                    <Text
                      style={[Textstyles.text_cmedium]}
                      className=" text-[#0099B8]"
                    >
                      Mondays{" "}
                    </Text>
                    <Text>10:00AM - 02:00PM</Text>
                  </View>
                  <View className="h-16 w-full">
                    <Text
                      style={[Textstyles.text_cmedium]}
                      className=" text-[#0099B8]"
                    >
                      Wednesdays{" "}
                    </Text>
                    <Text>09:00AM - 12:00PM</Text>
                  </View>
                  <View className="h-16 w-full">
                    <Text
                      style={[Textstyles.text_cmedium]}
                      className=" text-[#0099B8]"
                    >
                      Fridays{" "}
                    </Text>
                    <Text>12:00PM - 04:00PM</Text>
                  </View>
                </View>
                <View className="pl-5 h-80 w-[50%]">
                  <View className="h-16 w-[95%] ">
                    <Text style={[Textstyles.text_cmedium]}>Visitations</Text>
                  </View>
                  <View className="h-16 w-full">
                    <Text
                      style={[Textstyles.text_cmedium]}
                      className=" text-[#0099B8]"
                    >
                      Tuesdays{" "}
                    </Text>
                    <Text>09:00AM - 04:00PM</Text>
                  </View>
                  <View className="h-16 w-full">
                    <Text
                      style={[Textstyles.text_cmedium]}
                      className=" text-[#0099B8]"
                    >
                      Thursdays{" "}
                    </Text>
                    <Text>09:00AM - 04:00PM</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className=" flex px-3 justify-center items-center -mt-32 ">
              <View className="w-full mt-3 p-3 flex-row justify-between">
                <View>
                  <Text className="text-xl font-semibold leading-[24px]">
                    Availability Status
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
              <DateComponent />
            </View>
            <View className=" pl-8 mt-2">
              <View className="h-16 w-full">
                <Text style={[Textstyles.text_cmedium]}>
                  Charge per session
                </Text>
                <Text>10,000.00</Text>
              </View>
              <View className="h-16 w-full">
                <Text style={[Textstyles.text_cmedium]}>Certification</Text>
                <Text>Oyo state university</Text>
              </View>
            </View>
            <View className=" flex px-3 justify-center items-center -mt-1 ">
              <View className="w-full mt-3 p-3 flex-row justify-between">
                <View>
                  <Text className="text-xl font-semibold leading-[24px]">
                    Availability Status
                  </Text>
                </View>

                <View className="flex-row justify-between items-center -mt-2 space-x-3">
                  {/* Left Arrow */}
                  <Text className="text-xl font-semibold leading-[24px]">
                    6 years
                  </Text>
                </View>
              </View>
              <View className=" w-full h-16 mt-2 mb-1">
                <View>
                  <Text style={[Textstyles.text_cmedium]}>
                    Christ Bay Hospital
                  </Text>
                  <Text className=" font-bold text-[#00000080]">
                    {" "}
                    Medical Laboratory Scientist
                  </Text>
                </View>
              </View>
              <View className=" w-full h-16 mt-2 mb-1">
                <View>
                  <Text style={[Textstyles.text_cmedium]}>
                    Christ Bay Hospital
                  </Text>
                  <Text className=" font-bold text-[#00000080]">
                    {" "}
                    Medical Laboratory Scientist
                  </Text>
                </View>
              </View>
              <View className=" w-full h-16 mt-2 mb-1">
                <View>
                  <Text style={[Textstyles.text_cmedium]}>
                    Christ Bay Hospital
                  </Text>
                  <Text className=" font-bold text-[#00000080]">
                    {" "}
                    Medical Laboratory Scientist
                  </Text>
                </View>
              </View>
              <View className=" w-full h-16 mt-2 mb-1">
                <View>
                  <Text style={[Textstyles.text_cmedium]}>
                    Christ Bay Hospital
                  </Text>
                  <Text className=" font-bold text-[#00000080]">
                    {" "}
                    Medical Laboratory Scientist
                  </Text>
                </View>
              </View>
            </View>

            <View className="w-full mt-3 px-8">
              <CustomButton
                Textname={"Book appointment"}
                backgroundColor={primarycolor}
                TextColor={whitecolor}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default DoctorDetails;
