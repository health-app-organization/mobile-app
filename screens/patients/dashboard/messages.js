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

import HeaderTitle, {
  CustomInputSearch,
} from "../../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { Chatlist } from "../../mycomponents/mycomponent";

const Messages = () => {
  const navigation = useNavigation();
  const handletocheck = () => {
    navigation.navigate("apponitments");
  };

  return (
    <View className=" py-[40px]">
      <StatusBar style="auto" />
      <View>
        <HeaderTitle title="My Messages" />
      </View>

      <View className=" px-4 mt-8">
        <CustomInputSearch
          placeholder="Search for chat"
          leftIconName="search" // Use FontAwesome email icon
          onChange={(text) => console.log(text)}
        />
      </View>
      <ScrollView className=" mt-3 px-2 ">
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
  );
};

export default Messages;
