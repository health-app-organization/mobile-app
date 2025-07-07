import { StyleSheet, View } from "react-native";
import React from "react";
import MedicinePage from "../../components/health-seeker-flow/dashboard/medicine";
import HeaderWithTitleAndBackButton from "../../components/health-seeker-flow/notification/notification-header";

const Medicine = () => {
  return (
    <View style={styles.container}>
      <HeaderWithTitleAndBackButton title="Medicine" profileCompletion={""} />
      <MedicinePage />
    </View>
  );
};

export default Medicine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
