import { StyleSheet, View } from "react-native";
import React from "react";
import BookAppointmentDetails from "../../components/health-seeker-flow/dashboard/book-appointmet";

const BookAppointment = () => {
  return (
    <View style={styles.container}>
      <BookAppointmentDetails />
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // marginBottom: 20,
  },
});
