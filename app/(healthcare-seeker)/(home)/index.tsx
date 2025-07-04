import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import DashboardHeader from "../../../components/health-seeker-flow/dashboard-header";
import DashboardMenu from "../../../components/health-seeker-flow/dashboard";

const Home = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <ScrollView style={{ marginTop: 30, flex: 1 }}>
        <DashboardMenu />
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
