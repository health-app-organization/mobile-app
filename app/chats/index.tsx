import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Chat from "../../components/health-provider-flow/dashboard/chat";

const ChatsScreen = () => {
  return (
    <View style={styles.container}>
      <Chat />
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
