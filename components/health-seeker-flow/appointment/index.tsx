// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const AppointmentPage = () => {
//   return (
//     <View>
//       <Text>AppointmentPage</Text>
//     </View>
//   );
// };

// export default AppointmentPage;

// const styles = StyleSheet.create({});

import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import appoImage from "../../assets/images/appo.png";
import { DateComponent } from "../../../utilities/date-component";
import AppointmentComponent from "../home/AppointmentComponent";
// import { DateComponent } from "components/utilities/date-component";
// import { DoctorCard } from "components/health-seeker/appointment/doctor-card";

const AppointmentPage = () => {
  return (
    <View className="flex-1">
      <ScrollView className="">
        <View className="gap-y-6 pt-6 px-6">
          <DateComponent />
          <AppointmentComponent />
        </View>
      </ScrollView>
    </View>
  );
};

export default AppointmentPage;
