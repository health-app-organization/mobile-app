import { StyleSheet, Text, View } from "react-native";
import React from "react";
import OrderHistoryPage from "../../components/health-seeker-flow/profile/order-history";
import { Header } from "../../utilities/headers";

const OrderHistory = () => {
  return (
    <View style={styles.container}>
      <Header title="Order History" profileCompletion="" />
      <OrderHistoryPage />
    </View>
  );
};

export default OrderHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
