import { StatusBar } from "expo-status-bar";
import { Image, View, Text, TouchableOpacity } from "react-native";
import { CustomButton } from "../mycomponents/mycomponent";
import { primarycolor, whitecolor } from "../../constants/color";
import { Textstyles } from "../../constants/fontsize";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// Slider component
const Slider = () => {
  const navigation = useNavigation();
  const [currentindex, setcurrentindex] = useState(0);

  // Array with content for each slider
  const mapArray = [
    {
      component: <Sliderone />,
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
    {
      component: <Slidertwo />,
      description: (
        <>
          <Text className="text-center text-black  text-3xl mt-6 font-bold mb-5">
            Secure and Convenient Communication
          </Text>
          <Text className="text-center text-gray-500 leading-9 text-[22px] ">
            Communicate directly with your healthcare provider through our
            secure messaging platform for follow-ups or quick questions.
          </Text>
        </>
      ),
    },
    {
      component: <Sliderthree />,
      description: (
        <>
          <Text className="text-center text-black  text-3xl mt-10 font-bold mb-5">
            Effortless Appointment Booking
          </Text>
          <Text className="text-center text-gray-500 leading-9 text-[22px] ">
            Choose from a variety of appointment types, including in-person
            visits and telehealth consultations.
          </Text>
        </>
      ),
    },
  ];

  // Handle "Next" button click
  const handlenext = () => {
    if (currentindex < mapArray.length - 1) {
      setcurrentindex((next) => next + 1);
    } else if (currentindex === mapArray.length - 1) {
      navigation.navigate("login");
    }
  };

  // Handle "Get Started" button click
  const handletoiden = () => {
    navigation.navigate("identity");
  };

  // Handle "Skip" button click
  const handleSkip = () => {
    setcurrentindex(mapArray.length - 1); // Skip to the last slider
  };

  return (
    <View className="flex-1">
      <StatusBar style="auto" />

      {/* Slider Section */}
      <View className="flex-1 relative">
        {/* Conditionally render Skip button */}
        {currentindex < mapArray.length - 1 && (
          <TouchableOpacity
            onPress={handleSkip}
            style={{
              position: "absolute",
              top: 50, // Adjust as needed to move down from the top edge
              right: 30, // Position to the right
              zIndex: 1, // Ensure it stays above the image
            }}
          >
            <Text style={[Textstyles.text_small]} className="text-white">
              Skip
            </Text>
          </TouchableOpacity>
        )}

        {/* Render the current slider */}
        {mapArray[currentindex].component}
      </View>

      {/* White View Section */}
      <View
        className="h-[466px] bg-white w-full justify-center items-center"
        style={{
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
        }}
      >
        {/* Render the description text */}
        <View className="px-8">{mapArray[currentindex].description}</View>

        {/* Buttons */}
        {currentindex === mapArray.length - 1 ? (
          <View className="w-full mt-20 px-5">
            <CustomButton
              Textname={"Get started"}
              onPress={handletoiden}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
            />
          </View>
        ) : (
          <View className="w-full mt-20 px-5 mb-5">
            <CustomButton
              Textname={"Next"}
              onPress={handlenext}
              backgroundColor={primarycolor}
              TextColor={whitecolor}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default Slider;

// Sliderone component
const Sliderone = () => {
  return (
    <View className="w-full h-[872px] -mt-[190px] flex justify-center items-center">
      <Image
        source={require("../../assets/images/slide1.png")}
        className="w-full h-[990px]"
        resizeMode="contain"
      />
    </View>
  );
};

// Slidertwo component
const Slidertwo = () => {
  return (
    <View className="w-full  h-[760px] -mt-[140px] flex justify-center items-center">
      <Image
        source={require("../../assets/images/slide2.png")}
        className="w-full"
           resizeMode="contain"
      />
    </View>
  );
};

// Sliderthree component
const Sliderthree = () => {
  return (
    <View className="w-full h-[760px] -mt-[140px] flex justify-center items-center">
      <Image
        source={require("../../assets/images/slide3.png")}
        className="w-full"
           resizeMode="contain"
      />
    </View>
  );
};
