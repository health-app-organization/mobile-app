import {
    createStackNavigator,
    CardStyleInterpolators,
  } from "@react-navigation/stack";
  import { Platform } from "react-native";
import Dashboard from "../screens/dashboard/dashboard";
import Lab from "../screens/dashboard/LAB/lab";
import Appointments from "../screens/dashboard/apponitments";
import AppointmentDetails from "../screens/dashboard/apponitmentdetails";
  
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
          component={Lab}
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
  