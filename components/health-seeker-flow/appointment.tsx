// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const Appointment = () => {
//   return (
//     <View>
//       <Text>Appointment</Text>
//     </View>
//   );
// };

// export default Appointment;

// const styles = StyleSheet.create({});

import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Textstyles } from "../../constants/fontsize";
import { Calender } from "../../assets/iconsvg/Svgicon";
import { ChatList } from "./chats/chat-list";
import { DateComponent } from "../../utilities/date-component";

const Appointment = () => {
  const [checkapointment, setcheckappointment] = useState(false);

  return (
    <>
      {checkapointment && (
        <View style={styles.noAppointmentsContainer}>
          <Calender />
          <Text style={[Textstyles.text_xmedium, styles.noAppointmentsText]}>
            You have no Appointments yet
          </Text>
        </View>
      )}

      {!checkapointment && (
        <View style={styles.appointmentsContainer}>
          <View>
            <Text style={Textstyles.text_xmedium}>New Chats</Text>
          </View>

          <ChatList
            profileImage={require("../../assets/images/chat 1.png")}
            name="Dr. Sunmisola Olowofela"
            message="Lorem ipsum dolor sit amet consectetur. Tellus potenti et sed in scelerisque imperdiet.."
            time="18:52"
            unreadCount={4}
          />

          <View style={styles.sectionHeader}>
            <Text style={Textstyles.text_xmedium}>Upcoming Appointments</Text>
          </View>

          <View style={styles.dateComponent}>
            <DateComponent />
          </View>

          <View style={styles.appointmentComponent}>
            {/* <AppointmentComponent /> */}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  noAppointmentsContainer: {
    alignItems: "center",
    width: "100%",
  },
  noAppointmentsText: {
    marginTop: 20, // equivalent to mt-5 (5 * 4 = 20)
  },
  appointmentsContainer: {
    paddingHorizontal: 20, // equivalent to px-5 (5 * 4 = 20)
    width: "100%",
  },
  sectionHeader: {
    marginTop: 12, // equivalent to mt-3 (3 * 4 = 12)
  },
  dateComponent: {
    marginTop: 12,
  },
  appointmentComponent: {
    marginTop: 12,
  },
});

export default Appointment;
