import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import DashboardHeader from "../../../components/health-seeker-flow/dashboard-header";
import DashboardMenu from "../../../components/health-seeker-flow/dashboard";
import Appointment from "../../../components/health-seeker-flow/appointment";

const Home = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <ScrollView style={{ marginTop: 30, flex: 1 }}>
        <DashboardMenu />

        <Appointment />
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
