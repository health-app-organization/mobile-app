import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "screens/health-seeker-flow/auth/login";
import SignUp from "screens/health-seeker-flow/auth/signup";
import Appointments from "screens/health-seeker-flow/appointments";
import Dashboard from "screens/health-seeker-flow/dashboard";
import Messages from "screens/patients/dashboard/chats";
import Profile from "screens/patients/dashboard/profile/profile";
import { linkcolor, primarycolor, primarycolortwo } from "constants/color";
import {
    CalenderIcon,
    HomeIcon,
    MessageIcon,
    UserIcon,
} from "assets/iconsvg/Svgicon";
import { TouchableOpacity, View } from "react-native";
import { useState } from "react";
import {
    ForgotPassword,
    RequestOtp,
    SetNewPassword,
} from "screens/health-seeker-flow/auth/forgot-password";
import DashboardHeader from "components/health-seeker/dashboard-header";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Notifications from "screens/health-seeker-flow/dashboard/notifications";
import { HeaderWithTitleAndBackButton } from "components/utilities/headers";
import { Ionicons } from "@expo/vector-icons";
import ReferralDetails from "screens/health-seeker-flow/dashboard/notifications/referral-details";
import DrugReferralDetails from "screens/health-seeker-flow/dashboard/notifications/drug-referral-details";
import UserQrCode from "screens/health-seeker-flow/profile/user-qr-code";
import HealthcareProvider from "screens/health-seeker-flow/dashboard/healthcare-provider";

const TabFlowRouter = () => {
    const Tab = createBottomTabNavigator();
    const [unreadMessages, setUnreadMessages] = useState(5);

    return (
        <Tab.Navigator
            initialRouteName="home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    switch (route.name) {
                        case "home":
                            return (
                                <View
                                    style={{
                                        backgroundColor: focused ? linkcolor : "white",
                                        borderRadius: 10,
                                        padding: 10,
                                    }}
                                >
                                    <HomeIcon width={size} height={size} color={color} />
                                </View>
                            );
                        case "chats":
                            return (
                                <View
                                    style={{
                                        backgroundColor: focused ? linkcolor : "white",
                                        borderRadius: 10,
                                        padding: 10,
                                    }}
                                >
                                    <MessageIcon width={size} height={size} color={color} />
                                </View>
                            );
                        case "appointments":
                            return (
                                <View
                                    style={{
                                        backgroundColor: focused ? linkcolor : "white",
                                        borderRadius: 10,
                                        padding: 10,
                                    }}
                                >
                                    <CalenderIcon width={size} height={size} color={color} />
                                </View>
                            );
                        case "profile":
                            return (
                                <View
                                    style={{
                                        backgroundColor: focused ? linkcolor : "white",
                                        borderRadius: 10,
                                        padding: 10,
                                    }}
                                >
                                    <UserIcon width={size} height={size} color={color} />
                                </View>
                            );
                        default:
                            break;
                    }
                },
                tabBarActiveTintColor: primarycolor,
                tabBarInactiveTintColor: "black",
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 60,
                    paddingTop: 10,
                    paddingHorizontal: 20,
                },
                tabBarHideOnKeyboard: true,
            })}
        >
            <Tab.Screen
                options={{ animation: "fade", header: () => <DashboardHeader /> }}
                name="home"
                component={Dashboard}
            />
            <Tab.Screen
                options={{
                    animation: "fade",
                    tabBarBadge: unreadMessages > 0 ? unreadMessages : undefined,
                    tabBarBadgeStyle: {
                        backgroundColor: primarycolor,
                        fontSize: 12,
                        fontWeight: 600,
                        width: 18,
                        height: 18,
                    },
                }}
                name="chats"
                component={Messages}
            />
            <Tab.Screen
                options={{ animation: "fade" }}
                name="appointments"
                component={Appointments}
            />
            <Tab.Screen
                options={{ animation: "fade" }}
                name="profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
};

const HealthSeekerRouter = () => {
    const Stack = createStackNavigator();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: primarycolortwo }}>
            <StatusBar backgroundColor={primarycolor} style="light" />
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen
                    options={{ animation: "fade", headerShown: false }}
                    name="dashboard"
                    component={TabFlowRouter}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: ({ navigation }) => (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="pt-2 px-4"
                            >
                                <Ionicons name="chevron-back" size={30} color="black" />
                            </TouchableOpacity>
                        ),
                    }}
                    name="login"
                    component={Login}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: ({ navigation }) => (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="pt-2 px-4"
                            >
                                <Ionicons name="chevron-back" size={30} color="black" />
                            </TouchableOpacity>
                        ),
                    }}
                    name="signup"
                    component={SignUp}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: ({ navigation }) => (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="pt-2 px-4"
                            >
                                <Ionicons name="chevron-back" size={30} color="black" />
                            </TouchableOpacity>
                        ),
                    }}
                    name="request-otp"
                    component={RequestOtp}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: ({ navigation }) => (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="pt-2 px-4"
                            >
                                <Ionicons name="chevron-back" size={30} color="black" />
                            </TouchableOpacity>
                        ),
                    }}
                    name="forgot-password"
                    component={ForgotPassword}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: ({ navigation }) => (
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="pt-2 px-4"
                            >
                                <Ionicons name="chevron-back" size={30} color="black" />
                            </TouchableOpacity>
                        ),
                    }}
                    name="set-new-password"
                    component={SetNewPassword}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <HeaderWithTitleAndBackButton title="Notifications" />
                        ),
                    }}
                    name="notifications"
                    component={Notifications}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <HeaderWithTitleAndBackButton title="Referral Details" />
                        ),
                    }}
                    initialParams={{ id: 1234 }}
                    name="referral-details"
                    component={ReferralDetails}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <HeaderWithTitleAndBackButton title="Drug Referral Details" />
                        ),
                    }}
                    initialParams={{ id: 1234 }}
                    name="drug-referral-details"
                    component={DrugReferralDetails}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <HeaderWithTitleAndBackButton title="Patient QR Code" />
                        ),
                    }}
                    name="user-qr-code"
                    component={UserQrCode}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <HeaderWithTitleAndBackButton title="Healthcare Provider" />
                        ),
                    }}
                    name="healthcare-provider"
                    component={HealthcareProvider}
                />
            </Stack.Navigator>
        </SafeAreaView>
    );
};

export default HealthSeekerRouter;
