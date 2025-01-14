import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, {useState} from "react";
import { Header } from "../../mycomponents/mycomponent";
import Logo from "../../../assets/images/logo.png";
import { HelpContent } from "./helpcontent";

const supportCategories = [
  { id: 1, title: "Mental Health Support" },
  { id: 2, title: "Health Education" },
  { id: 3, title: "Fitness and Exercise" },
  { id: 4, title: "Women's Health" },
  { id: 5, title: "Integration and Customization" },
  { id: 6, title: "Nutrition" },
  { id: 7, title: "Telehealth and Online Consultations" },
  { id: 8, title: "Diet" },
  { id: 9, title: "Disease Management" },
  { id: 10, title: "Sleep Management" },
  { id: 11, title: "General Health Management" },
];

const CustomerSupport = () => {
    const [showHelp, setShowHelp] = useState(false);
  return (
    <View className="flex-1 bg-white">
      <Header title="Customer Support" />

      <ScrollView className="flex-1 px-4">
      {!showHelp ? (
          <>
        <View className="items-center mt-8 mb-6">
          <Image source={Logo} className="w-16 h-16" />
          <Text className="text-[#00A9C1] text-xl font-bold mt-2">
            WESTACRE
          </Text>
          <Text className="text-gray-600 mt-1">
            We typically reply in a few minutes
          </Text>
          <Text className="text-gray-400 text-sm">
            Ask us anything, or share your feedback
          </Text>
        </View>

        <View className="bg-[#E8F7F9] p-5 rounded-lg mb-6 w-[60%]">
          <Text className="text-[#00A9C1] text-lg ">Hi there,</Text>
          <Text className="text-[#00A9C1] text-lg">Welcome to Westacre.</Text>
          <Text className="text-[#00A9C1] text-lg">
            What can we do for you today?
          </Text>
        </View>

        <View className="flex-row justify-end mb-6">
          <TouchableOpacity  onPress={() => setShowHelp(true)} className="bg-[#00A9C1] py-5 w-[30%] rounded-lg">
            <Text className="text-white text-center font-semibold">
              Get help
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row flex-wrap justify-between gap-2 mb-8">
          {supportCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              className="bg-[#E8F7F9] py-5  px-4 rounded-lg mb-2"
              style={{ width: "48%" }}
            >
              <Text className="text-[#00A9C1] text-center ">
                {category.title}
              </Text>
              </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <HelpContent />
        )}
      </ScrollView>
    </View>
  );
};

export default CustomerSupport;
