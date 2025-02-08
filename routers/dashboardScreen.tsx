import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Platform } from "react-native";
import Dashboard from "../screens/patients/dashboard/dashboard";
import Appointments from "../screens/patients/dashboard/apponitments";
import AppointmentDetails from "../screens/patients/dashboard/apponitmentdetails";
import Toplabs from "../screens/patients/dashboard/LAB/toplaboratories";
import Laboratories from "../screens/patients/dashboard/LAB/laboratories";
import Medicine from "../screens/patients/dashboard/medicine";
import Notification from "../screens/patients/dashboard/notifications";
import { PaymentScreen } from "../screens/patients/dashboard/payment";
import Orcode from "../screens/patients/dashboard/userqrcode";
import Cart from "../screens/patients/dashboard/cart";
import Messages from "../screens/patients/dashboard/messages";
import HealthcareProviderScreen from "../screens/patients/dashboard/LAB/healthprovider";
import ProfileScreen from "./profileScreen";
import ListofHealthprovider from "../screens/patients/dashboard/LAB/Listofhealthprovider";
import LabsScreen from "../screens/patients/dashboard/LAB/lab";
import { RootStackParamList } from "../types/stack";

const DashboardScreen = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitle: undefined, // Remove the title for all screens
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
              : Platform.OS === "android"
                ? "vertical"
                : undefined,
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
                : Platform.OS === "android"
                  ? "vertical"
                  : undefined,
        }}
        name="lab"
        component={Lab}
      /> */}
    </Stack.Navigator>
  );
};
export default DashboardScreen;
