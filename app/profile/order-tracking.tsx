import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderTrackingPage from "../../components/health-seeker-flow/profile/order-tracking";
import { Header } from "../../utilities/headers";

const OrderTracking = () => {
  return (
    <View style={styles.container}>
      <Header title="Order Tracking" profileCompletion="" />
      <OrderTrackingPage />
    </View>
  );
};

export default OrderTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
