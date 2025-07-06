import React from "react";
import { StyleSheet, View } from "react-native";
// eslint-disable-next-line import/no-named-as-default
import LoginPage from "../../../components/health-seeker-flow/login";

const Login = () => {
  return (
    <View style={styles.container}>
      <LoginPage />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
