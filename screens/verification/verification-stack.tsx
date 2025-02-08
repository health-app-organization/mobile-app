import { createStackNavigator } from "@react-navigation/stack";
import { Step1, Step2, Step3, Step4, Step5 } from "../mycomponents/doctor/extra-info/steps";
import { RootStackParamList } from "../../types/stack";

const VerificationFlowStack = () => {
    const Stack = createStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator
            initialRouteName="step-1"
            screenOptions={{
                headerTitle: undefined, // Remove the title for all screens
                headerShown: false,
                // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: undefined }}
                name="step-1"
                component={Step1}
            />
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: undefined, }}
                name="step-2"
                component={Step2}
            />
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: undefined, }}
                name="step-3"
                component={Step3}
            />
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: undefined, }}
                name="step-4"
                component={Step4}
            />
            <Stack.Screen
                options={{ gestureEnabled: false, gestureDirection: undefined }}
                name="step-5"
                component={Step5}
            />
        </Stack.Navigator>
    );
};
export default VerificationFlowStack;
