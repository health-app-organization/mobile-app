import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  ScrollView,
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

const Messages = () => {
  const navigation = useNavigation();
  const handletocheck = () => {
    navigation.navigate("apponitments");
  };

  return (
    <>
      <View className="  ">
        <StatusBar style="auto" />

        <HeaderTitle title="Chats" />

        <View className=" px-4 ">
          <CustomInputSearch
            placeholder="Search for chat"
            leftIconName="search" // Use FontAwesome email icon
            onChange={(text) => console.log(text)}
          />
        </View>
        <View className=" pb-36">
          <ScrollView className=" mt-3 px-2 mb-[330px] ">
            <Chatlist
              profileImage={require("../../../assets/images/chat 1.png")}
              name="Dr. Sunmisola Olowofela"
              message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet.."
              time="18:52"
              unreadCount={4}
            />
            <Chatlist
              profileImage={require("../../../assets/images/chat 2.png")}
              name="Dr. Sunmisola Olowofela"
              message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet.."
              time="18:52"
              unreadCount={4}
            />
            <Chatlist
              profileImage={require("../../../assets/images/appo.png")}
              name="Dr. Sunmisola Olowofela"
              message="Lorem ipsum dolor sit amet consectetur."
              time="18:52"
            />
            <Chatlist
              profileImage={require("../../../assets/images/appo.png")}
              name="Dr. Sunmisola Olowofela"
              message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet."
              time="18:52"
            />
            <Chatlist
              profileImage={require("../../../assets/images/appo.png")}
              name="Dr. Sunmisola Olowofela"
              message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet."
              time="18:52"
            />
            <Chatlist
              profileImage={require("../../../assets/images/appo.png")}
              name="Dr. Sunmisola Olowofela"
              message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet."
              time="18:52"
            />
            <Chatlist
              profileImage={require("../../../assets/images/appo.png")}
              name="Dr. Sunmisola Olowofela"
              message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet."
              time="18:52"
            />
            <Chatlist
              profileImage={require("../../../assets/images/appo.png")}
              name="Dr. Sunmisola Olowofela"
              message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet."
              time="18:52"
            />
          </ScrollView>
        </View>
      </View>
      <Footer activepros={"Messages"} />
    </>
  );
};

export default Messages;
