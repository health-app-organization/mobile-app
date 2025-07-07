import React, { useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import { io } from "socket.io-client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import CustomInputSearch from "../../../utilities/inputs";
import chatData from "./chata-data";
import ChatList from "./chat-list";

const baseUrl = process.env.EXPO_PUBLIC_API_URL;

const ChatsScreen = () => {
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

export default ChatsScreen;
