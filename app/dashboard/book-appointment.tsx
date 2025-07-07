import { StyleSheet, View } from "react-native";
import React from "react";
import BookAppointmentDetails from "../../components/health-seeker-flow/dashboard/book-appointmet";
import HeaderWithTitleAndBackButton from "../../components/health-seeker-flow/notification/notification-header";

const BookAppointment = () => {
  return (
    <View style={styles.container}>
      <HeaderWithTitleAndBackButton
        title="Appointment Details"
        profileCompletion={""}
      />
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
