import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { CalenderIcon, HomeIcon, MessageIcon, UserIcon } from "assets/iconsvg/Svgicon";
import { linkcolor, primarycolor, primarycolortwo } from "constants/color";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Textstyles } from "constants/fontsize";
import DashboardHeader from "components/health-seeker/dashboard-header";
import HeaderTitle from "components/utilities/headers";
import Dashboard from "screens/health-provider-flow/dashboard";
import Appointments from "screens/health-provider-flow/appointments";
import Earnings from "screens/health-provider-flow/earnings";
import Account from "screens/health-provider-flow/Account";
import Login from "screens/health-provider-flow/auth/login";
import Signup from "screens/health-provider-flow/auth/sign-up";
import HealthProvider from "screens/health-provider-flow/auth/health-provider";
import Verification from "screens/health-provider-flow/auth/verification";
import ForgotPassword from "screens/health-provider-flow/auth/forgot-password";
import SetNewPassword from "screens/health-provider-flow/auth/set-new-password";
import CompleteRegistration from "screens/health-provider-flow/dashboard/complete-registration";

const TabFlowRouter = () => {
    const Tab = createBottomTabNavigator();
    const [unreadMessages, setUnreadMessages] = useState(5);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: primarycolortwo }}>
            <StatusBar backgroundColor={primarycolor} style="light" />
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
                            case "appointments":
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
                            case "earnings":
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
                            case "account":
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
                        header: () => <HeaderTitle title="Chats" />,
                    }}
                    name="appointments"
                    component={Appointments}
                />
                <Tab.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderTitle title="Appointments" />,
                    }}
                    name="earnings"
                    component={Earnings}
                />
                <Tab.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <View
                                style={{
                                    width: "100%",
                                    backgroundColor: primarycolor,
                                    borderEndEndRadius: 30,
                                    borderBottomStartRadius: 30,
                                }}
                                className="h-[25vh]"
                            >
                                <Text
                                    style={{
                                        color: "white",
                                        ...Textstyles.text_medium,
                                    }}
                                    className="ml-8 mt-20"
                                >
                                    My Account
                                </Text>
                            </View>
                        ),
                    }}
                    name="account"
                    component={Account}
                />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const HealthProviderRouterSafeAreaView = () => {
    const Stack = createStackNavigator();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: primarycolortwo }}>
            <StatusBar backgroundColor={primarycolor} style="light" />
            <Stack.Navigator initialRouteName="login">
                <Stack.Screen
                    options={{
                        animation: "fade",
                        headerShown: false,
                    }}
                    name="health-provider-list"
                    component={HealthProvider}
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
                        headerShown: false,
                    }}
                    name="signup"
                    component={Signup}
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
                    name="verification"
                    component={Verification}
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
                    // options={{
                    //     animation: "fade",
                    //     header: ({ navigation }) => (
                    //         <TouchableOpacity
                    //             onPress={() => navigation.goBack()}
                    //             className="pt-2 px-4"
                    //         >
                    //             <Ionicons name="chevron-back" size={30} color="black" />
                    //         </TouchableOpacity>
                    //     ),
                    // }}
                    name="complete-registration"
                    component={CompleteRegistration}
                />
            </Stack.Navigator>
        </SafeAreaView>
    );
};

const HealthProviderRouter = () => {
    const Stack = createStackNavigator();

    return (
        <View className="h-full w-full flex-1 bg-primaryTwo">
            <Stack.Navigator initialRouteName="dashboard">
                <Stack.Screen
                    options={{ animation: "fade", headerShown: false }}
                    name="dashboard"
                    component={TabFlowRouter}
                />
                <Stack.Screen
                    options={{ animation: "fade", headerShown: false }}
                    name="safe-area-view"
                    component={HealthProviderRouterSafeAreaView}
                />
            </Stack.Navigator>
        </View>
    );
};

export default HealthProviderRouter;
