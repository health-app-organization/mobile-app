import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Platform } from "react-native";
import Dashboard from "../screens/patients/dashboard/dashboard";
import Appointments from "../screens/patients/dashboard/apponitments";
import AppointmentDetails from "../screens/patients/dashboard/apponitmentdetails";

import LabsScreen from "../screens/patients/dashboard/LAB/lab";
import Toplabs from "../screens/patients/dashboard/LAB/toplaboratories";
import Laboratories from "../screens/patients/dashboard/LAB/laboratories";
import Profile from "../screens/patients/dashboard/profile/profile";
import Wallet from "../screens/patients/dashboard/wallet";
import Medicine from "../screens/patients/dashboard/medicine";
import Notification from "../screens/patients/dashboard/notifications";
import { PaymentScreen } from "../screens/patients/dashboard/payment";
import Orcode from "../screens/patients/dashboard/userqrcode";
import Cart from "../screens/patients/dashboard/cart";
import Messages from "../screens/patients/dashboard/messages";
import HealthcareProviderScreen from "../screens/patients/dashboard/LAB/healthprovider";
import Healthcare from "../screens/health-provider-types/doctors/auth/healthsignup";
import ProfileScreen from "./profileScreen";
import ListofHealthprovider from "../screens/patients/dashboard/LAB/Listofhealthprovider";

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
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="Home"
        component={Dashboard}
      />
      <Stack.Screen
        options={{
          gestureEnabled: false,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
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
        name="Appointments"
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
      <Stack.Screen
        options={{
          gestureEnabled: false,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="toplaboratories"
        component={Toplabs}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="healthsignup"
        component={Healthcare}
      />

      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="healthprovider"
        component={HealthcareProviderScreen}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="listofhealthproviders"
        component={ListofHealthprovider}
      />

      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="Messages"
        component={Messages}
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
        name="cart"
        component={Cart}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="userqrcode"
        component={Orcode}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="payment"
        component={PaymentScreen}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="notifications"
        component={Notification}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="medicine"
        component={Medicine}
      />

      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="wallet"
        component={Wallet}
      />

      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="laborarories"
        component={Laboratories}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="profile"
        component={Profile}
      />

      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="profileScreen"
        component={ProfileScreen}
      />
      {/* <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="lab"
        component={Lab}
      /> */}
    </Stack.Navigator>
  );
};
export default DashboardScreen;
