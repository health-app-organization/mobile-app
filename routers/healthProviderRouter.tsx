import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import HealthProviderLogin from "../screens/health-provider-types/doctors/auth/healthProviderLogin";
import Healthcare from "../screens/health-provider-types/doctors/auth/healthsignup";
import Verification from "../screens/health-provider-types/doctors/auth/verification";
import DoctorHome from "../screens/health-provider-types/doctors/dashboard/doctor-home";
import ExtraInfo from "../screens/health-provider-types/doctors/dashboard/extra-info";
import Provider from "../screens/health-provider-types/doctors/auth/healthtype";
import { RootStackParamList } from "../types/stack";

const HealthProviderRouter = () => {
    const Stack = createStackNavigator<RootStackParamList>();
    return (
        <Stack.Navigator
            initialRouteName="select-health-provider"
            screenOptions={{
                headerTitle: undefined, // Remove the title for all screens
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
        >
            <Stack.Screen
                name="select-health-provider"
                component={Provider}
            />
            <Stack.Screen
                name="doctor-signup"
                component={Healthcare}
            />
            <Stack.Screen
                name="doctor-verification"
                component={Verification}
            />
            <Stack.Screen
                name="doctor-login"
                component={HealthProviderLogin}
            />
            <Stack.Screen
                name="doctor-home"
                component={DoctorHome}
            />
            <Stack.Screen
                name="doctor-extra-info"
                component={ExtraInfo}
            />
        </Stack.Navigator>
    );
};

export default HealthProviderRouter;
