import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import ScreenDisplay from "../screens/onboarding/splashScreen";
import Slider from "../screens/onboarding/slidersScreen";
import Identity from "../screens/onboarding/identity";
import { RootStackParamList } from "../types/stack";
import HealthSeekerRouter from "./health-seeker-router";
import HealthProviderRouter from "./health-provider-router";

const StackWrapper = () => {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
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
      <Stack.Screen
        name="health-provider"
        component={HealthProviderRouter}
      />
    </Stack.Navigator>
  );
};
export default StackWrapper;
