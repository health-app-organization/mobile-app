import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Dashboard from "../screens/health-seeker-flow/dashboard";
import Appointments from "../screens/health-seeker-flow/appointments";
import AppointmentDetails from "../screens/health-seeker-flow/dashboard/appointment/appointment-details";
import Toplabs from "../screens/patients/dashboard/LAB/toplaboratories";
import Laboratories from "../screens/patients/dashboard/LAB/laboratories";
import Medicine from "../screens/health-seeker-flow/dashboard/medicine";
import Notification from "../screens/health-seeker-flow/dashboard/notifications";
import { PaymentScreen } from "../screens/patients/dashboard/payment";
import Orcode from "../screens/health-seeker-flow/profile/user-qr-code";
import Cart from "../screens/patients/dashboard/cart";
import Messages from "../screens/health-seeker-flow/chats";
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
        component={Appointm
          ents}
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
