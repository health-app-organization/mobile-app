import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MedicineReminderPage from "../../components/health-seeker-flow/profile/medicine-reminder";
import { Header } from "../../utilities/headers";

const MedicineReminder = () => {
  return (
    <View style={styles.container}>
      <Header title="Medicine Reminder" profileCompletion="" />

      <MedicineReminderPage />
    </View>
  );
};

export default MedicineReminder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
