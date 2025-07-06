import { StyleSheet, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import DrugReferralDetails from "../../components/health-seeker-flow/notification/notification-deatails";
import { StatusBar } from "expo-status-bar";
const NotificationDetails = () => {
  const { id } = useLocalSearchParams();
  console.log("ID: ", id);
  return (
    <View style={styles.container}>
      <DrugReferralDetails id={id} />
      <StatusBar style="dark" />
    </View>
  );
};

export default NotificationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
});
