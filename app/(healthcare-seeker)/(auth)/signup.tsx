import React from "react";
import { StyleSheet, View } from "react-native";
import SignUpPage from "../../../components/health-seeker-flow/signup";

const Signup = () => {
  return (
    <View style={styles.container}>
      <SignUpPage />
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
