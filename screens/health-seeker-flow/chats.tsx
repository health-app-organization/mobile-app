import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { io } from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { CustomInputSearch } from "components/utilities/inputs";
import { ChatList } from "components/health-seeker/chats/chat-list";
import { baseUrl } from "api/end-point";

const Chats = ({ navigation }: { navigation: any }) => {
  const [chatPeers, setChatPeers] = useState([]);
  const [requestCount, setRequestCount] = useState(0);

  const [searchTerm, setSearchTerm] = useState("");

  const getChatLists = async () => {
    setRequestCount((prev) => prev + 1);
    console.log("fetching chat peers..." + requestCount);
    try {
      const token = await AsyncStorage.getItem("token");
      const socket = io(baseUrl, {
        auth: {
          token,
        },
        autoConnect: false,
      });

      socket.connect();

      socket.on("user-connected", () => {
        console.log("successfully connected to server..." + requestCount);
      });

      socket.on("connect_error", (error) => {
        console.log(error + "..." + requestCount);
      });

      socket.emit("fetch-peers");
      socket.on("chat-peers", (peers) => {
        setChatPeers(peers);
        console.log("peers", peers);
        console.log("peers received!!!", chatPeers);
      });

      return () => {
        socket.disconnect();
      };
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // getChatLists();
  }, []);

  return (
    <View className="flex-1 gap-y-4 py-4">
      <View className="px-4">
        <CustomInputSearch
          placeholder="Search for chat"
          leftIcon={<FontAwesome name="search" color="#000" size={20} />}
          value={searchTerm}
          onChange={(text) => setSearchTerm(text)}
        />
      </View>
      <ScrollView className="flex-1">
        <View className="flex-1 gap-y-1 px-4">
          {chatData.map((item, index) => (
            <ChatList
              key={index}
              profileImage={item.profileImage}
              name={item.name}
              message={item.message}
              time={item.time}
              unreadCount={item.unreadCount}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Chats;

const chatData: {
  profileImage: string;
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  id: number;
}[] = [
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 1,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
      unreadCount: 4,
    },
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 2,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
    },
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 3,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
    },
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 4,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
      unreadCount: 3,
    },
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 5,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
      unreadCount: 5,
    },
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 6,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
      unreadCount: 4,
    },
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 7,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
    },
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 8,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
    },
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 9,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
      unreadCount: 3,
    },
    {
      profileImage: require("../../assets/images/chat 1.png"),
      id: 10,
      name: "Dr. Sunmisola Olowofela",
      message:
        "Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet..",
      time: "18:52",
      unreadCount: 5,
    },
  ];
