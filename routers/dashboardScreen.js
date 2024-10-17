import {
    createStackNavigator,
    CardStyleInterpolators,
  } from "@react-navigation/stack";
  import { Platform } from "react-native";
import Dashboard from "../screens/dashboard/dashboard";
  
  const DashboardScreen = () => {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        navigationOption=""
        initialRouteName="dashboardhome"
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
          name="dashboardhome"
          component={Dashboard}
        />
       
      </Stack.Navigator>
    );
  };
  export default DashboardScreen;
  