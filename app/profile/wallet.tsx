import { StyleSheet, Text, View } from "react-native";
import React from "react";
import WalletPage from "../../components/health-seeker-flow/profile/wallet";
import { Header } from "../../utilities/headers";

const Wallet = () => {
  return (
    <View style={styles.container}>
      <Header title="Wallet" profileCompletion="" />
      <WalletPage />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
