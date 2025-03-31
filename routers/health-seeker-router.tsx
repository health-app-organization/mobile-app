import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "screens/health-seeker-flow/auth/login";
import SignUp from "screens/health-seeker-flow/auth/signup";
import Appointments from "screens/health-seeker-flow/appointments";
import Dashboard from "screens/health-seeker-flow/dashboard";
import Messages from "screens/health-seeker-flow/chats";
import Profile from "screens/health-seeker-flow/profile";
import { linkcolor, primarycolor, primarycolortwo } from "constants/color";
import {
    CalenderIcon,
    HomeIcon,
    MessageIcon,
    UserIcon,
} from "assets/iconsvg/Svgicon";
import { Image, Text, TouchableOpacity, View } from "react-native";
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
import HeaderTitle, {
    Header,
    Header9,
    HeaderWithTitleAndBackButton,
} from "components/utilities/headers";
import { Ionicons } from "@expo/vector-icons";
import ReferralDetails from "screens/health-seeker-flow/dashboard/notifications/referral-details";
import DrugReferralDetails from "screens/health-seeker-flow/dashboard/notifications/drug-referral-details";
import UserQrCode from "screens/health-seeker-flow/profile/user-qr-code";
import HealthcareProvider from "screens/health-seeker-flow/dashboard/healthcare-provider";
import AppointmentDetails from "screens/health-seeker-flow/dashboard/appointment/appointment-details";
import BookAppointment from "screens/health-seeker-flow/dashboard/appointment/book-appointment";
import Payment from "screens/health-seeker-flow/dashboard/appointment/payment";
import Medicine from "screens/health-seeker-flow/dashboard/medicine";
import Chat from "screens/health-seeker-flow/chats/chat";
import { Textstyles } from "constants/fontsize";
import Personal from "screens/health-seeker-flow/profile/personal";
import Wallet from "screens/health-seeker-flow/profile/wallet";
import ProfileCompletion from "screens/health-seeker-flow/profile/profilecomplete";
import OrderHistory from "screens/health-seeker-flow/profile/orderhistory";
import OrderTracking from "screens/health-seeker-flow/profile/ordertracking";
import Favorites from "screens/health-seeker-flow/profile/favorites";
import ManageAddress from "screens/health-seeker-flow/profile/manage-address";
import MedicineReminder from "screens/health-seeker-flow/profile/medicine-reminder";
import Settings from "screens/health-seeker-flow/profile/settings";
import CustomerSupport from "screens/health-seeker-flow/profile/customer-support";

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
                        header: () => <HeaderTitle title="Chats" />,
                    }}
                    name="chats"
                    component={Messages}
                />
                <Tab.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderTitle title="Appointments" />,
                    }}
                    name="appointments"
                    component={Appointments}
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
                    name="profile"
                    component={Profile}
                />
            </Tab.Navigator>
        </SafeAreaView>
    );
};

const HealthSeekerRouterSafeAreaView = () => {
    const Stack = createStackNavigator();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: primarycolortwo }}>
            <StatusBar backgroundColor={primarycolor} style="light" />
            <Stack.Navigator initialRouteName="login">
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
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <HeaderWithTitleAndBackButton title="Appointment Details" />
                        ),
                    }}
                    name="book-appointment"
                    component={BookAppointment}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderWithTitleAndBackButton title="Payment" />,
                    }}
                    name="pay-for-appointment"
                    component={Payment}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderWithTitleAndBackButton title="Medicine" />,
                    }}
                    name="medicine"
                    component={Medicine}
                />
                {/* <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderWithTitleAndBackButton title="Laboratories" />,
                    }}
                    name="laboratories"
                    component={Laboratories}
                /> */}
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: ({ route }) => <HeaderWithTitleAndBackButton title={route.name} />,
                    }}
                    name="chat"
                    // initialParams={{ name: "Semi" }}
                    component={Chat}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <>
                                <Header9
                                    profileName={"Jacob Daniels"}
                                    profileCompletion="50.00"
                                />
                            </>
                        ),
                    }}
                    name="personal"
                    initialParams={{ name: "Semi" }}
                    component={Personal}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: ({ navigation }) => (
                            <>
                                <View className="bg-primary">
                                    <View className="flex-row items-center px-8 h-[90px] pt-16">
                                        {/* Back Button */}
                                        <TouchableOpacity onPress={() => navigation.goBack()}>
                                            <Ionicons name="chevron-back" size={32} color="white" />
                                        </TouchableOpacity>

                                        {/* Title */}
                                        <Text className="text-white text-2xl font-bold ml-4">
                                            My Wallet
                                        </Text>
                                    </View>
                                    <View className=" w-full  mt-14 flex-row justify-between px-5 h-[119px] ">
                                        <View className="   w-[170px] h-[130px]">
                                            <Text className=" text-2xl text-white mt-7 mb-2">
                                                Available Balance
                                            </Text>
                                            <Text className="  text-2xl text-white font-bold "> ₦0.00</Text>
                                            <Image
                                                source={require("../assets/images/wallet2.png")}
                                                className="w-full -z-10 -mt-[75px]"
                                                resizeMode="contain"
                                            />
                                        </View>
                                        <View className="  flex justify-center items-center w-[104px] mt-3 h-[104px]">
                                            <Image
                                                source={require("../assets/images/wallet.png")}
                                                className="w-full"
                                                resizeMode="contain"
                                            />
                                        </View>
                                    </View>
                                </View>
                            </>
                        ),
                    }}
                    name="wallet"
                    component={Wallet}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => (
                            <>
                                <Header9
                                    profileName={"Caleb Omojuko"}
                                    profileCompletion="42"
                                />
                            </>
                        ),
                    }}
                    name="profile-completion"
                    component={ProfileCompletion}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderWithTitleAndBackButton title="Order History" />,
                    }}
                    name="order-history"
                    component={OrderHistory}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderWithTitleAndBackButton title="Order Tracking" />,
                    }}
                    name="order-tracking"
                    component={OrderTracking}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderWithTitleAndBackButton title="Favorites" />,
                    }}
                    name="favorites"
                    component={Favorites}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderWithTitleAndBackButton title="Manage Address" />,
                    }}
                    name="manage-address"
                    component={ManageAddress}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <HeaderWithTitleAndBackButton title="Medicine Reminder" />,
                    }}
                    name="medicine-reminder"
                    component={MedicineReminder}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <Header title="Settings" />,
                    }}
                    name="settings"
                    component={Settings}
                />
                <Stack.Screen
                    options={{
                        animation: "fade",
                        header: () => <Header title="Customer Support" />,
                    }}
                    name="customer-support"
                    component={CustomerSupport}
                />
            </Stack.Navigator>
        </SafeAreaView>
    );
};

const HealthSeekerRouter = () => {
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
                    component={HealthSeekerRouterSafeAreaView}
                />
                <Stack.Screen
                    options={{
                        animation: "slide_from_bottom",
                        headerShown: false,
                    }}
                    name="appointment-details"
                    component={AppointmentDetails}
                />
            </Stack.Navigator>
        </View>
    );
};

export default HealthSeekerRouter;
