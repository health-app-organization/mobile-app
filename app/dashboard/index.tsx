import { StyleSheet, View } from "react-native";
import React from "react";
import HealthcareProvider from "../../components/health-seeker-flow/dashboard/healthcare-provider";

const HealthCareProvider = () => {
  return (
    <View style={styles.container}>
      <HealthcareProvider />
    </View>
  );
};

export default HealthCareProvider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
