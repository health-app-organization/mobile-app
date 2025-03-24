import { StatusBar } from "expo-status-bar";
import { Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { Textstyles } from "../../../../constants/fontsize";
import { DateComponent } from "components/utilities/date-component";
import { CustomButton, CustomButtonCall } from "components/utilities/buttons";
import { StackNavigation } from "types/stack";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const AppointmentDetails = () => {
  const navigation = useNavigation<StackNavigation>();

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
    <View className="h-full w-full flex-1">
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute top-12 left-5 z-50"
        >
          <Ionicons name="chevron-back" size={30} color="white" />
        </TouchableOpacity>
        <StatusBar style="auto" />
        <Image
          source={require("../../../../assets/images/slide1.png")}
          className="w-full h-[60vh]"
        />
        <View className="bg-white pt-16 rounded-t-3xl -mt-5">
          <View className="w-[90%] h-[100px] bg-primary left-[5%] absolute z-10 -top-16 rounded-md shadow-md shadow-[#0099B840] p-3 flex-col justify-evenly">
            <Text
              className="text-white text-center"
              style={[Textstyles.text_medium]}
            >
              Prof. Dr. Micheal Brains
            </Text>
            <Text className="text-white text-center">
              Senior cardiologist and surgeon
            </Text>
            <Text className="text-white text-center">
              United state medical college & hospital
            </Text>
          </View>
          <View className="px-[5%] pb-4 gap-y-4">
            <View className="flex-row justify-between items-center">
              {data.map((item, index) => (
                <View key={index} className="flex-col items-center gap-y-3 p-3">
                  <FontAwesome
                    name={item.iconName}
                    size={24}
                    color={item.color}
                  />
                  <View className="flex-col items-center gap-y-1">
                    <Text className="text-base font-semibold">
                      {item.text1}
                    </Text>
                    <Text className="text-sm">{item.text2}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View className="gap-y-2">
              <Text className="text-center" style={[Textstyles.text_medium]}>
                About Doctor Micheal
              </Text>
              <Text className="text-center">
                He is a top Senior Cardiologist and Surgeon at the United States
                Medical College & Hospital, with 20+ years of experience in
                heart treatments and surgeries. His expertise and compassionate
                care make him a trusted choice for cardiovascular health.
              </Text>
            </View>
            <View className="flex-row justify-between items-start">
              <View className="w-[48%] gap-y-3">
                <Text style={[Textstyles.text_small, { fontWeight: "700" }]}>
                  Consultations Only
                </Text>
                <View>
                  <Text className="text-primary">Mondays</Text>
                  <Text style={[Textstyles.text_small, { fontWeight: "700" }]}>
                    10:00AM - 02:00PM
                  </Text>
                </View>
                <View>
                  <Text className="text-primary">Wednesdays</Text>
                  <Text style={[Textstyles.text_small, { fontWeight: "700" }]}>
                    09:00AM - 12:00PM
                  </Text>
                </View>
                <View>
                  <Text className="text-primary">Fridays</Text>
                  <Text style={[Textstyles.text_small, { fontWeight: "700" }]}>
                    12:00PM - 04:00PM
                  </Text>
                </View>
              </View>
              <View className="w-[1px] h-full bg-primary" />
              <View className="w-[48%] gap-y-3">
                <Text style={[Textstyles.text_small, { fontWeight: "700" }]}>
                  Visitations
                </Text>
                <View>
                  <Text className="text-primary">Wednesdays</Text>
                  <Text style={[Textstyles.text_small, { fontWeight: "700" }]}>
                    09:00AM - 12:00PM
                  </Text>
                </View>
                <View>
                  <Text className="text-primary">Fridays</Text>
                  <Text style={[Textstyles.text_small, { fontWeight: "700" }]}>
                    12:00PM - 04:00PM
                  </Text>
                </View>
              </View>
            </View>
            <View className="pt-4 gap-y-4">
              <View className="flex-row justify-between items-center">
                <Text style={[Textstyles.text_medium]}>
                  Availability Status
                </Text>
                <View className="flex-row items-center gap-x-2">
                  <TouchableOpacity className="" onPress={handlePreviousMonth}>
                    <Ionicons name="chevron-back" size={30} color="#00000080" />
                  </TouchableOpacity>
                  <Text className="text-[#00000080] text-base">
                    {months[currentMonthIndex]}
                  </Text>
                  <TouchableOpacity className="" onPress={handleNextMonth}>
                    <Ionicons
                      name="chevron-forward"
                      size={30}
                      color="#00000080"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <DateComponent />
            </View>
            <View className="gap-y-2">
              <View className="flex-row justify-between items-center">
                <Text style={[Textstyles.text_medium]} className="text-base">
                  Experience
                </Text>
                <Text style={[Textstyles.text_medium]} className="text-base">
                  6 years
                </Text>
              </View>
              <View className="flex-row justify-start items-center gap-x-4">
                <FontAwesome name="hospital-o" size={24} color="black" />
                <View className="">
                  <Text style={[Textstyles.text_small]} className="">
                    Christ Bay Hospital
                  </Text>
                  <Text
                    style={[Textstyles.text_small]}
                    className="text-greyText"
                  >
                    Medical Laboratory Scientist
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-start items-center gap-x-4">
                <FontAwesome name="hospital-o" size={24} color="black" />
                <View className="">
                  <Text style={[Textstyles.text_small]} className="">
                    Christ Bay Hospital
                  </Text>
                  <Text
                    style={[Textstyles.text_small]}
                    className="text-greyText"
                  >
                    Medical Laboratory Scientist
                  </Text>
                </View>
              </View>
              <View className="flex-row justify-start items-center gap-x-4">
                <FontAwesome name="hospital-o" size={24} color="black" />
                <View className="">
                  <Text style={[Textstyles.text_small]} className="">
                    Christ Bay Hospital
                  </Text>
                  <Text
                    style={[Textstyles.text_small]}
                    className="text-greyText"
                  >
                    Medical Laboratory Scientist
                  </Text>
                </View>
              </View>
            </View>
            <CustomButton
              Textname="Book Appointment"
              onPress={() =>
                navigation.navigate("health-seeker", {
                  screen: "safe-area-view",
                  params: { screen: "book-appointment" },
                })
              }
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AppointmentDetails;

const data: {
  iconName: "user-o" | "check-circle-o" | "star-o" | "heart-o";
  text1: string;
  text2: string;
  color: string;
}[] = [
    {
      iconName: "user-o",
      text1: "200",
      text2: "Patients",
      color: "#00D707",
    },
    {
      iconName: "check-circle-o",
      text1: "5+",
      text2: "Years",
      color: "#0038FF",
    },
    {
      iconName: "star-o",
      text1: "5.0",
      text2: "star-o",
      color: "#0099B8",
    },
    {
      iconName: "heart-o",
      text1: "200+",
      text2: "Reviews",
      color: "#FF0000",
    },
  ];
