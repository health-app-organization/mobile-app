import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Dashboard from "../screens/patients/dashboard/dashboard";
import Appointments from "../screens/patients/dashboard/appointments";
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
        name="Home"
        component={Dashboard}
      />
      <Stack.Screen
        name="lab"
        component={LabsScreen}
      />
      <Stack.Screen
        name="Appointments"
        component={Appointments}
      />

      <Stack.Screen
        name="apponitmentdetails"
        component={AppointmentDetails}
      />
      <Stack.Screen
        name="toplaboratories"
        component={Toplabs}
      />

      <Stack.Screen
        name="healthprovider"
        component={HealthcareProviderScreen}
      />
      <Stack.Screen
        name="listofhealthproviders"
        component={ListofHealthprovider}
      />

      <Stack.Screen
        name="Messages"
        component={Messages}
      />

      <Stack.Screen
        name="Appointment"
        component={Appointments}
      />

      <Stack.Screen
        name="cart"
        component={Cart}
      />
      <Stack.Screen
        name="userqrcode"
        component={Orcode}
      />
      <Stack.Screen
        name="payment"
        component={PaymentScreen}
      />
      <Stack.Screen
        name="notifications"
        component={Notification}
      />
      <Stack.Screen
        name="medicine"
        component={Medicine}
      />

      <Stack.Screen
        name="laborarories"
        component={Laboratories}
      />

      <Stack.Screen
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
