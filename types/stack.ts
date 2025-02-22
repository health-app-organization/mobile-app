import { NavigationProp } from "@react-navigation/native";

export type ScreenNames = [
    // dashboardScreen
    "Home",
    "lab",
    "Appointments",
    "apponitmentdetails",
    "toplaboratories",
    "healthprovider",
    "listofhealthproviders",
    "Messages",
    "Appointment",
    "cart",
    "userqrcode",
    "payment",
    "notifications",
    "medicine",
    "laborarories",
    "profileScreen",
    // healthProvider
    "select-health-provider",
    "doctor-signup",
    "doctor-verification",
    "doctor-login",
    "doctor-home",
    "doctor-extra-info",
    // profileScreen
    "profile",
    "wallet",
    "settings",
    "personal",
    "profilecomplete",
    "orderhistory",
    "ordertracking",
    "favourites",
    "manage-address",
    "medicine-reminder",
    "medicine-reminder-add",
    "customer-support",
    // stackRouter
    "start",
    "slider",
    "identity",
    "login",
    "request-otp",
    "forgot-password",
    "set-new-password",
    "signup",
    "dashboard",
    "healthsignup",
    "verification",
    "healthptype",
    // verification stack
    "step-1",
    "step-2",
    "step-3",
    "step-4",
    "step-5",
];
export type RootStackParamList = Record<
    ScreenNames[number],
    undefined | { screen?: string, params?: any }
>;
export type StackNavigation = NavigationProp<RootStackParamList>;
