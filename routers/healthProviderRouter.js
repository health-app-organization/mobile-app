import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { Platform } from "react-native";
import Healthcare from "../screens/healthptype/auth/healthsignup";
import Provider from "../screens/healthptype/auth/healthtype";
import HealthProviderLogin from "../screens/healthptype/auth/healthProviderLogin";
import Verification from "../screens/healthptype/auth/verification";
import DoctorHome from "../screens/healthptype/dashboard/doctor-home";
import ExtraInfo from "../screens/healthptype/dashboard/extra-info";

const HealthProviderRouter = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName="select-health-provider"
            navigationOption=""
            screenOptions={{
                headerTitle: null, // Remove the title for all screens
                headerShown: false,
                // gestureEnabled: true,
                // gestureDirection: Platform.OS === "ios" ? "horizontal" : Platform.OS === "android" && "vertical",
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                options={{
                    gestureEnabled: true,
                    gestureDirection:
                        Platform.OS === "ios"
                            ? "horizontal"
                            : Platform.OS === "android" && "vertical",
                }}
                name="select-health-provider"
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
                name="health-provider-signup"
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
                name="health-provider-verification"
                component={Verification}
            />
            <Stack.Screen
                options={{
                    gestureEnabled: true,
                    gestureDirection:
                        Platform.OS === "ios"
                            ? "horizontal"
                            : Platform.OS === "android" && "vertical",
                }}
                name="health-provider-login"
                component={HealthProviderLogin}
            />
            <Stack.Screen
                options={{
                    gestureEnabled: true,
                    gestureDirection:
                        Platform.OS === "ios"
                            ? "horizontal"
                            : Platform.OS === "android" && "vertical",
                }}
                name="doctor-home"
                component={DoctorHome}
            />
            <Stack.Screen
                options={{
                    gestureEnabled: true,
                    gestureDirection:
                        Platform.OS === "ios"
                            ? "horizontal"
                            : Platform.OS === "android" && "vertical",
                }}
                name="extra-info"
                component={ExtraInfo}
            />
        </Stack.Navigator>
    );
};

export default HealthProviderRouter;
