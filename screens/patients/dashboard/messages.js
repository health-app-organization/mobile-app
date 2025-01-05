import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  ScrollView,
  FlatList,
} from "react-native";
import { Chatlist } from "../../mycomponents/mycomponent";
import Footer from "./footer";

import HeaderTitle, {
  CustomButton,
  CustomButton2,
  CustomButtonsmall,
  CustomButtonsmall2,
  CustomInputSearch,
  CustomTextInput,
} from "../../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { primarycolor } from "../../../constants/color";
import { SafeAreaView } from "react-native-safe-area-context";

const Messages = () => {
  const navigation = useNavigation();
  const handletocheck = () => {
    navigation.navigate("apponitments");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor={primarycolor} />
      <FlatList
        ListHeaderComponent={() => (
          <>
            <HeaderTitle title="Chats" />
            <View className="h-2" />
            <View className="px-4">
              <CustomInputSearch
                placeholder="Search for chat"
                leftIconName="search" // Use FontAwesome email icon
                onChange={(text) => console.log(text)}
              />
            </View>
          </>
        )}
        data={[
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 1,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
            unreadCount: 4
          },
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 2,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
          },
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 3,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
          },
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 4,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
            unreadCount: 3
          },
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 5,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
            unreadCount: 5
          },
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 6,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
            unreadCount: 4
          },
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 7,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
          },
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 8,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
          },
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 9,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
            unreadCount: 3
          },
          {
            profileImage: require("../../../assets/images/chat 1.png"),
            id: 10,
            name: "Dr. Sunmisola Olowofela",
            message:
              "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
            time: "18:52",
            unreadCount: 5
          },
        ]}
        renderItem={({ item }) => (
          <View className="px-4">
            <Chatlist
              profileImage={item.profileImage}
              name={item.name}
              message={item.message}
              time={item.time}
              unreadCount={item.unreadCount}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <View className="h-[5.2rem]">
        <Footer activepros={"Messages"} />
      </View>
    </SafeAreaView>
  );
};

export default Messages;
