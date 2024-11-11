import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import { Platform } from "react-native";
import HealthProviderLogin from "../screens/health-provider-types/doctors/auth/healthProviderLogin";
import Healthcare from "../screens/health-provider-types/doctors/auth/healthsignup";
import Verification from "../screens/health-provider-types/doctors/auth/verification";
import DoctorHome from "../screens/health-provider-types/doctors/dashboard/doctor-home";
import ExtraInfo from "../screens/health-provider-types/doctors/dashboard/extra-info";
import Provider from "../screens/health-provider-types/doctors/auth/healthtype";

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
