import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ScreenDisplay from "../screens/onboarding/splashScreen";
import Slider from "../screens/onboarding/slidersScreen";
import {
  ConfirmPassword,
  Forgotpass,
  Login,
  Otpverify,
} from "../screens/onboarding/loginandforgetpass";
import Registration from "../screens/onboarding/registration";
import { Platform } from "react-native";

import VerificationFlowStack from "../screens/verification/verification-stack";
import Identity from "../screens/onboarding/identity";
import Provider from "../screens/healthptype/healthtype";
import Healthcare from "../screens/healthptype/healthsignup";
import Messages from "../screens/patients/dashboard/messages";
import Appointments from "../screens/patients/dashboard/apponitments";

import Cart from "../screens/patients/dashboard/cart";
import Orcode from "../screens/patients/dashboard/userqrcode";
import { PaymentScreen } from "../screens/patients/dashboard/payment";
import Notification from "../screens/patients/dashboard/notifications";
import Medicine from "../screens/patients/dashboard/medicine";
import Lab from "../screens/patients/dashboard/LAB/lab";
import DashboardScreen from "./dashboardScreen";

import Wallet from "../screens/patients/dashboard/wallet";
import Profile from "../screens/patients/dashboard/profile/profile";
import Chat from "../screens/patients/dashboard/chat";
import HealthcareProviderScreen from "../screens/patients/dashboard/LAB/healthprovider";

import OrderHistory from "../screens/patients/dashboard/orderhistory";
import OrderTracking from "../screens/patients/dashboard/ordertracking";
import Favourites from "../screens/patients/dashboard/favourites";
import ProfileCompletion from "../screens/patients/dashboard/profile/profilecomplete";
import Personal from "../screens/patients/dashboard/profile/personal";
import Laboratories from "../screens//patients/dashboard/LAB/laboratories";
import Address from "../screens/patients/dashboard/profile/manageaddress";
import Settings from "../screens/patients/dashboard/profile/setings";
import AppointmentDetails from "../screens/patients/dashboard/apponitmentdetails";
import Toplabs from "../screens/patients/dashboard/LAB/toplaboratories";

const StackWrapper = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="start"
      navigationOption=""
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
        name="start"
        component={ScreenDisplay}
      />
      <Stack.Screen
        options={{
          gestureEnabled: false,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="slider"
        component={Slider}
      />
    
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="identity"
        component={Identity}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="login"
        component={Login}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="signup"
        component={Registration}
      />
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="dashboard"
        component={DashboardScreen}
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
        name="verification"
        component={VerificationFlowStack}
      />
      {/* for all the doctor flow */}
      <Stack.Screen
        options={{
          gestureEnabled: true,
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="healthptype"
        component={HealthProviderRouter}
      />
    </Stack.Navigator>
  );
};
export default StackWrapper;
