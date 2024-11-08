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
import Messages from "../screens/dashboard/messages";
import Appointments from "../screens/dashboard/apponitments";
import Details from "../screens/dashboard/apponitmentdetails";
import Cart from "../screens/dashboard/cart";
import Orcode from "../screens/dashboard/userqrcode";
import { PaymentScreen } from "../screens/dashboard/payment";
import Notification from "../screens/dashboard/notifications";
import Medicine from "../screens/dashboard/medicine";
import Lab from "../screens/dashboard/LAB/lab";
import DashboardScreen from "./dashboardScreen";

import Wallet from "../screens/dashboard/wallet";
import Profile from "../screens/dashboard/profile";
import Chat from "../screens/dashboard/chat";
import HealthcareProviderScreen from "../screens/dashboard/LAB/healthprovider";

import AppointmentDetails from "../screens/dashboard/apponitmentdetails";


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
        name="healthptype"
        component={Provider}
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
    </Stack.Navigator>
  );
};
export default StackWrapper;
