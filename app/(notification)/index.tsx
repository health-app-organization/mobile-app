import { StyleSheet, View } from "react-native";
import React from "react";
import NotificationPage from "../../components/health-seeker-flow/notification";
import HeaderWithTitleAndBackButton from "../../components/health-seeker-flow/notification/notification-header";
import { StatusBar } from "expo-status-bar";

const Notification = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <HeaderWithTitleAndBackButton
        title="Notifications"
        profileCompletion={""}
      />
      <NotificationPage />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 16,
  },
});
