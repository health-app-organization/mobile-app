import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SettingsPage from "../../components/health-seeker-flow/profile/settings";
import { Header } from "../../utilities/headers";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Header title="Settings" profileCompletion="" />

      <SettingsPage />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
