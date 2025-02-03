import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ScreenDisplay from "../screens/onboarding/splashScreen";
import Slider from "../screens/onboarding/slidersScreen";
import { ForgotPassword, Login, RequestOtp } from "../screens/onboarding/loginandforgetpass";
import Registration from "../screens/onboarding/registration";
import { Platform } from "react-native";

import VerificationFlowStack from "../screens/verification/verification-stack";
import Identity from "../screens/onboarding/identity";
import Healthcare from "../screens/health-provider-types/doctors/auth/healthsignup";
import DashboardScreen from "./dashboardScreen";
import HealthProviderRouter from "./healthProviderRouter";
import AuthProvider from "../providers/auth-provider";

const StackWrapper = () => {
  const Stack = createStackNavigator();
  return (
    <AuthProvider>
      <Stack.Navigator
        initialRouteName="start"
        screenOptions={{
          headerTitle: "", // Remove the title for all screens
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
          name="start"
          component={ScreenDisplay}
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
          name="slider"
          component={Slider}
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
          name="identity"
          component={Identity}
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
          name="login"
          component={Login}
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
          name="request-otp" //to request otp to reset password
          component={RequestOtp}
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
          name="forgot-password"
          component={ForgotPassword}
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
          name="signup"
          component={Registration}
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
          name="dashboard"
          component={DashboardScreen}
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
          name="healthsignup"
          component={Healthcare}
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
                : Platform.OS === "android"
                  ? "vertical"
                  : undefined,
          }}
          name="healthptype"
          component={HealthProviderRouter}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};
export default StackWrapper;
