import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ScreenDisplay from "../screens/onboarding/splashScreen";
import Slider from "../screens/onboarding/slidersScreen";
import { ForgotPassword, Login, RequestOtp, SetNewPassword } from "../screens/onboarding/loginandforgetpass";
import Registration from "../screens/onboarding/registration";
import { Platform } from "react-native";

import VerificationFlowStack from "../screens/verification/verification-stack";
import Identity from "../screens/onboarding/identity";
import Healthcare from "../screens/health-provider-types/doctors/auth/healthsignup";
import DashboardScreen from "./dashboardScreen";
import HealthProviderRouter from "./healthProviderRouter";
import AuthProvider from "../providers/auth-provider";
import { RootStackParamList } from "../types/stack";

const StackWrapper = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
    <AuthProvider>
      <Stack.Navigator
        initialRouteName="start"
        screenOptions={{
          headerTitle: "", // Remove the title for all screens
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        {/* <Stack.Screen  name="start" component={Home} /> */}
        <Stack.Screen
          name="start"
          component={ScreenDisplay}
        />
        <Stack.Screen
          name="slider"
          component={Slider}
        />

        <Stack.Screen
          name="identity"
          component={Identity}
        />
        <Stack.Screen
          name="login"
          component={Login}
        />
        <Stack.Screen
          name="request-otp" //to request otp to reset password
          component={RequestOtp}
        />
        <Stack.Screen
          name="forgot-password"
          component={ForgotPassword}
        />
        <Stack.Screen
          name="set-new-password"
          component={SetNewPassword}
        />
        <Stack.Screen
          name="signup"
          component={Registration}
        />
        <Stack.Screen
          name="dashboard"
          component={DashboardScreen}
        />
        <Stack.Screen
          name="healthsignup"
          component={Healthcare}
        />
        <Stack.Screen
          name="verification"
          component={VerificationFlowStack}
        />
        {/* for all the doctor flow */}
        <Stack.Screen
          name="healthptype"
          component={HealthProviderRouter}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};
export default StackWrapper;
