import { StyleSheet, View } from "react-native";
import React from "react";
import NotificationPage from "../../components/health-seeker-flow/notification";

const Notification = () => {
  return (
    <View style={styles.container}>
      <NotificationPage />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
