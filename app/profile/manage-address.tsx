import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ManageAddressPage from "../../components/health-seeker-flow/profile/manage-address";
import { Header } from "../../utilities/headers";

const ManageAddress = () => {
  return (
    <View style={styles.container}>
      <Header title="Manage Address" profileCompletion="" />

      <ManageAddressPage />
    </View>
  );
};

export default ManageAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
