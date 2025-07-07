import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import DashboardMenu from "../../../components/health-seeker-flow/dashboard";
import Appointment from "../../../components/health-seeker-flow/appointment";
import DashboardHeader from "../../../components/health-provider-flow/dashboard/dasboardHeader";
import Dashboard from "../../../components/health-provider-flow/dashboard/dashboard";

const Home = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <Dashboard/>
       
     
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
