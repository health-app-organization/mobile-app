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
import Dashbaord from "../screens/dashboard/dashboard";
  
  const DashbaordScreen = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
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
            gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
          }}
          name="start"
          component={Dashbaord}
        />
       
      </Stack.Navigator>
    );
  };
  export default DashbaordScreen;
  