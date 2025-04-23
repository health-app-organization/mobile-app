import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';

import {
    AnalyticsUpIcon,
    CalendarIcon,
    HomeIcon,
    UserIcon,
} from "assets/iconsvg/Svgicon";
import { linkcolor, primarycolor, primarycolortwo } from "constants/color";
import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Textstyles } from "constants/fontsize";
import DashboardHeader from "components/health-seeker/dashboard-header";
import HeaderTitle, { HeaderWithTitleAndBackButton } from "components/utilities/headers";
import Dashboard from "screens/health-provider-flow/dashboard";
import Appointments from "screens/health-provider-flow/appointments";
import Earnings from "screens/health-provider-flow/Earning/earnings";
import Account from "screens/health-provider-flow/Account";
import Login from "screens/health-provider-flow/auth/login";
import Signup from "screens/health-provider-flow/auth/sign-up";
import HealthProvider from "screens/health-provider-flow/auth/health-provider";
import Verification from "screens/health-provider-flow/auth/verification";
import ForgotPassword from "screens/health-provider-flow/auth/forgot-password";
import SetNewPassword from "screens/health-provider-flow/auth/set-new-password";
import CompleteRegistration from "screens/health-provider-flow/dashboard/complete-registration";
import Chats from "screens/health-provider-flow/dashboard/chats";
import Chat from "screens/health-provider-flow/dashboard/chat";
import Withdraw from "screens/health-provider-flow/Earning/Withdraw";
import ProfileScreen from "screens/health-provider-flow/My Account/ProfileScreen";
import UrgentCriteriaScreen from "screens/health-provider-flow/My Account/UrgentCriteriaScreen";
import PayoutHistoryScreen from "screens/health-provider-flow/My Account/PayoutHistoryScreen";
import BankingDetailsScreen from "screens/health-provider-flow/My Account/BankingDetailsScreen";
import SettingsScreen from "screens/health-provider-flow/My Account/SettingsScreen";
import SupportScreen from "screens/health-provider-flow/My Account/SupportScreen";
import Pharmappointment from "screens/health-provider-flow/Pharmacists/Pharmappointment";

const TabFlowRouter = () => {
    const Tab = createBottomTabNavigator();

    return (
        <View style={{ flex: 1, backgroundColor: primarycolortwo }}>
            <StatusBar  style="dark" />
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
                                        <CalendarIcon fill={color} className={`size-[${size}]`} />
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
                                        <AnalyticsUpIcon
                                            fill={color}
                                            className={`size-[${size}]`}
                                        />
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
                    options={{
                        animation: "fade",
                        header: () => <DashboardHeader />,
                    }}
                    name="home"
                    component={Dashboard}
                />
                <Tab.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderTitle title="My Appointment" />,
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
        </View>
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
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <HeaderWithTitleAndBackButton title="Chats" />
                        ),
                    }}
                    name="chats"
                    component={Chats}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: ({ route }) => <HeaderWithTitleAndBackButton title={"Semilore"} />,
                    }}
                    name="chat"
                    // initialParams={{ name: "Semi" }}
                    component={Chat}
                />
            </Stack.Navigator>
        </SafeAreaView>
    );
};

const HealthProviderRouter = () => {
    const Stack = createStackNavigator();
    const navigation = useNavigation();


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
                
                <Stack.Screen
                    name="Withdraw"
                    component={Withdraw}
                    options={{ animation: "fade", headerShown: false }}
                />
                 <Stack.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={{ animation: "fade", headerShown: false }}
                />
                <Stack.Screen
                    name="UrgentCriteria"
                    component={UrgentCriteriaScreen}
                    options={{ animation: "fade", headerShown: false }}
                />
                <Stack.Screen
                    name="PayoutHistory"
                    component={PayoutHistoryScreen}
                    options={{ animation: "fade", headerShown: false }}
                />
                <Stack.Screen
                    name="BankingDetails"
                    component={BankingDetailsScreen}
                    options={{ animation: "fade", headerShown: false }}
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{ animation: "fade", headerShown: false }}
                />
                <Stack.Screen
                    name="Support"
                    component={SupportScreen}
                    options={{ animation: "fade", headerShown: false }}
                />
                 <Stack.Screen
                    name="PharmAppointment"
                    component={Pharmappointment}
                    options={{ animation: "fade", headerShown: false }}
                />
            </Stack.Navigator>
        </View>
    );
};

export default HealthProviderRouter;
