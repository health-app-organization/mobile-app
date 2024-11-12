import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import {
  Header,
  Header2,
  Notificationcard,
} from "../../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";

const Notification = () => {
  const navigation = useNavigation();

  return (
    <View
      className="h-screen w-full flex justify-center items-center "
      style={{ flex: 1 }}
    >
      <StatusBar style="auto" />

      <Header2 title="Notifications" />
      <ScrollView className=" -mt-5">
        <Notificationcard
          profileImage={require("../../../assets/images/appo.png")}
          name="Emergency? Relax, we got you covered!"
          message="Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida urna morbi fermentum. "
          time="1 mins ago"
        />
        <Notificationcard
          profileImage={require("../../../assets/images/appo.png")}
          name="Emergency? Relax, we got you covered!"
          message="Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida urna morbi fermentum. "
          time="1 mins ago"
        />
        <Notificationcard
          profileImage={require("../../../assets/images/appo.png")}
          name="Emergency? Relax, we got you covered!"
          message="Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida urna morbi fermentum. "
          time="1 mins ago"
        />
        <Notificationcard
          profileImage={require("../../../assets/images/appo.png")}
          name="Emergency? Relax, we got you covered!"
          message="Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida urna morbi fermentum. "
          time="1 mins ago"
        />
        <Notificationcard
          profileImage={require("../../../assets/images/appo.png")}
          name="Emergency? Relax, we got you covered!"
          message="Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida urna morbi fermentum. "
          time="1 mins ago"
        />
        <Notificationcard
          profileImage={require("../../../assets/images/appo.png")}
          name="Emergency? Relax, we got you covered!"
          message="Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida urna morbi fermentum. "
          time="1 mins ago"
        />
        <Notificationcard
          profileImage={require("../../../assets/images/appo.png")}
          name="Emergency? Relax, we got you covered!"
          message="Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida urna morbi fermentum. "
          time="1 mins ago"
        />
        <Notificationcard
          profileImage={require("../../../assets/images/appo.png")}
          name="Emergency? Relax, we got you covered!"
          message="Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida urna morbi fermentum. "
          time="1 mins ago"
        />
        <Notificationcard
          profileImage={require("../../../assets/images/appo.png")}
          name="Emergency? Relax, we got you covered!"
          message="Lorem ipsum dolor sit amet consectetur. Mauris at nec egestas elit at gravida urna morbi fermentum. "
          time="1 mins ago"
        />
      </ScrollView>
    </View>
  );
};

export default Notification;
