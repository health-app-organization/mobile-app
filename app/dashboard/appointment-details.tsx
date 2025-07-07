import { StyleSheet, View } from "react-native";
import React from "react";
import AppointmentDetails from "../../components/health-seeker-flow/dashboard/appointmental-details";
import { useLocalSearchParams } from "expo-router";

const AppointmentDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={styles.container}>
      <AppointmentDetails appointmentId={id} />
    </View>
  );
};

export default AppointmentDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // marginBottom: 20,
  },
});
