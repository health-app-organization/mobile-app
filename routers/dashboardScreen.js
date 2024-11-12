import {
    createStackNavigator,
    CardStyleInterpolators,
  } from "@react-navigation/stack";
  import { Platform } from "react-native";
import Dashboard from "../screens/patients/dashboard/dashboard";
import Appointments from "../screens/patients/dashboard/apponitments";
import AppointmentDetails from "../screens/patients/dashboard/apponitmentdetails";
import LabsScreen from "../screens/patients/dashboard/LAB/lab";
  
  const DashboardScreen = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        navigationOption=""
        initialRouteName="Home"
        screenOptions={{
          headerTitle: null, // Remove the title for all screens
          headerShown: false,
          // gestureEnabled: true,
          // gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {/* <Stack.Screen  name="start" component={Home} /> */}
        <Stack.Screen
          options={{
            gestureEnabled: false,
            gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
          }}
          name="Home"
          component={Dashboard}
        />
         <Stack.Screen
          options={{
            gestureEnabled: false,
            gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
          }}
          name="lab"
          component={LabsScreen}
        />
         <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="Appointment"
        component={Appointments}
      />
           <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="apponitmentdetails"
        component={AppointmentDetails}
      />
       
      </Stack.Navigator>
    );
  };
  export default DashboardScreen;
  