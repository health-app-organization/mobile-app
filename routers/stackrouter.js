import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashScreen";

const StackWrapper=()=>{
    
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator 
        initialRouteName="start"
        navigationOption=""
        screenOptions={{
          headerTitle: null, // Remove the title for all screens
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        >
        {/* <Stack.Screen  name="start" component={Home} /> */}
      <Stack.Screen options={{gestureEnabled:true,gestureDirection: 'vertical',}} name="start" component={SplashScreen}/>     
      </Stack.Navigator>

    )

}
export default StackWrapper