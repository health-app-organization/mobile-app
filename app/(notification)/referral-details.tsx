import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import ReferralDetails from "../../components/health-seeker-flow/notification/referral-screen";
import { StatusBar } from "expo-status-bar";

const Referral = () => {
  const { id } = useLocalSearchParams();
  console.log("ID: ", id);
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ReferralDetails id={id} />
    </View>
  );
};

export default Referral;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
});
