import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppointmentPage from "../../../components/health-seeker-flow/appointment";

const Appointment = () => {
  return (
    <ScrollView style={styles.container}>
      <AppointmentPage />
    </ScrollView>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
