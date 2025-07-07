import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatsScreen from "../../../components/health-seeker-flow/chats";

const Chat = () => {
  return (
    <View style={styles.container}>
      <ChatsScreen />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
