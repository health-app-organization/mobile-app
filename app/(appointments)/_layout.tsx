import React from "react";
import { Stack } from "expo-router";
import HeaderTitle from "../../utilities/headers";


const AppointmentLayoutProvider = () => {
  return (
    <Stack>
  
      <Stack.Screen
        name="appointmentdetails"
        options={{
          header: () => <HeaderTitle title="Appointments Details" />,
      }}
      />
    </Stack>
  );
};

export default AppointmentLayoutProvider;
