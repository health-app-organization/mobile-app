import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ScreenDisplay from "../screens/onboarding/splashScreen";
import Slider from "../screens/onboarding/slidersScreen";
import {
  Login,
} from "../screens/onboarding/loginandforgetpass";
import Registration from "../screens/onboarding/registration";
import { Platform } from "react-native";

import VerificationFlowStack from "../screens/verification/verification-stack";
import Identity from "../screens/onboarding/identity";
import HealthProviderRouter from "./healthProviderRouter";
import Messages from "../screens/patients/dashboard/messages";
import HealthcareProviderScreen from "../screens/patients/dashboard/LAB/healthprovider";
import DashboardScreen from "./dashboardScreen";
import Orcode from "../screens/patients/dashboard/userqrcode";
import { PaymentScreen } from "../screens/patients/dashboard/payment";
import Medicine from "../screens/patients/dashboard/medicine";
import { LabIcon } from "../assets/iconsvg/Svgicon";
import Wallet from "../screens/patients/dashboard/wallet";
import Profile from "../screens/patients/dashboard/profile";
import Chat from "../screens/patients/dashboard/chat";
import Cart from "../screens/patients/dashboard/cart";
import Notification from "../screens/patients/dashboard/notifications";

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
        name="messages"
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
        name="lab"
        component={LabIcon}
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
        name="chat"
        component={Chat}
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
        name="health-provider-types"
        component={HealthProviderRouter}
      />
    </Stack.Navigator>
  );
};
export default StackWrapper;
