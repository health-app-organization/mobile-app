import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ScreenDisplay from "../screens/onboarding/splashScreen";
import Slider from "../screens/onboarding/slidersScreen";
import Identity from "../screens/onboarding/identity";
import AuthProvider from "../providers/auth-provider";
import { RootStackParamList } from "../types/stack";
import HealthSeekerRouter from "./health-seeker-router";

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
          name="health-seeker"
          component={HealthSeekerRouter}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};
export default StackWrapper;
