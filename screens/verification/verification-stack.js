import { createStackNavigator } from "@react-navigation/stack";
import { Step1, Step2, Step3, Step4, Step5, Step6 } from "./steps";

const VerificationFlowStack = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="step-1"
            navigationOption=""
            screenOptions={{
                headerTitle: null, // Remove the title for all screens
                headerShown: false,
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: "vertical" }}
                name="step-1"
                component={Step1}
            />
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: "vertical" }}
                name="step-2"
                component={Step2}
            />
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: "vertical" }}
                name="step-3"
                component={Step3}
            />
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: "vertical" }}
                name="step-4"
                component={Step4}
            />
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: "vertical" }}
                name="step-5"
                component={Step5}
            />
        </Stack.Navigator>
    );
};
export default VerificationFlowStack;
