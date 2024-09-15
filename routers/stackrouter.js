import { createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack";
import ScreenDisplay from "../screens/onboarding/splashScreen";
import Slider from "../screens/onboarding/slidersScreen";
import { ConfirmPassword, Forgotpass, Login, Otpverify } from "../screens/onboarding/loginandforgetpass";

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
      <Stack.Screen options={{gestureEnabled:true,gestureDirection: 'vertical',}} name="start" component={ScreenDisplay}/>   
      <Stack.Screen options={{gestureEnabled:true,gestureDirection: 'vertical',}} name="slider" component={Slider}/> 
      <Stack.Screen options={{gestureEnabled:true,gestureDirection: 'vertical',}} name="login" component={Login}/>   
      <Stack.Screen options={{gestureEnabled:true,gestureDirection: 'vertical',}} name="forgotpass" component={Forgotpass}/>  
      <Stack.Screen options={{gestureEnabled:true,gestureDirection: 'vertical',}} name="otpverify" component={Otpverify}/>  
      <Stack.Screen options={{gestureEnabled:true,gestureDirection: 'vertical',}} name="confirmpass" component={ConfirmPassword}/>  
      </Stack.Navigator>

    )

}
export default StackWrapper