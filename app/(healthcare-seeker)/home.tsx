import { StyleSheet, View } from "react-native";
import React from "react";
import DashboardHeader from "../../components/health-seeker-flow/dashboard-header";

const Home = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 0.35,
    width: "100%",
  },
});
