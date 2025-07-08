import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCompletion from "../../components/health-seeker-flow/profile/medical-records";
import { Header } from "../../utilities/headers";

const MedicalRecords = () => {
  return (
    <View style={styles.container}>
      <Header title="Medical Records" profileCompletion="" />
      <ProfileCompletion />
    </View>
  );
};

export default MedicalRecords;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
