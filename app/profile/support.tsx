import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomerSupport from "../../components/health-seeker-flow/profile/support";
import { Header } from "../../utilities/headers";

const Support = () => {
  return (
    <View style={styles.container}>
      <Header title="Customer Support" profileCompletion="" />
      <CustomerSupport />
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
