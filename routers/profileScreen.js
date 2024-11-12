import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { Platform } from "react-native";

import Personal from "../screens/patients/dashboard/profile/personal";

import ProfileCompletion from "../screens/patients/dashboard/profile/profilecomplete";
import OrderHistory from "../screens/patients/dashboard/orderhistory";
import OrderTracking from "../screens/patients/dashboard/ordertracking";
import Favourites from "../screens/patients/dashboard/favourites";
import Wallet from "../screens/patients/dashboard/wallet";

const ProfileScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      navigationOption=""
      initialRouteName="profileScreen"
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
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="personal"
        component={Personal}
      />
      <Stack.Screen
        options={{
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="profilecomplete"
        component={ProfileCompletion}
      />
      <Stack.Screen
        options={{
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="orderhistory"
        component={OrderHistory}
      />
      <Stack.Screen
        options={{
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="ordertracking"
        component={OrderTracking}
      />
      <Stack.Screen
        options={{
          gestureDirection:
            Platform.OS === "ios"
              ? "horizontal"
              : Platform.OS === "android" && "vertical",
        }}
        name="favourites"
        component={Favourites}
      />
    </Stack.Navigator>
  );
};
export default ProfileScreen;
