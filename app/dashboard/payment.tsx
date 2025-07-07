import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PaymentPage from "../../components/health-seeker-flow/dashboard/payment";
import HeaderWithTitleAndBackButton from "../../components/health-seeker-flow/notification/notification-header";

const Payment = () => {
  return (
    <View style={styles.container}>
      <HeaderWithTitleAndBackButton title="Payment" profileCompletion={""} />
      <PaymentPage />
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
