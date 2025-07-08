import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileDetailsPage from "../../components/health-seeker-flow/profile/profile-details";
import { Header } from "../../utilities/headers";

const ProfileDetails = () => {
  return (
    <View style={styles.container}>
      <Header title="Profile Details" profileCompletion="" />
      <ProfileDetailsPage />
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
