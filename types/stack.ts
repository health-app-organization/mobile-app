import { NavigationProp } from "@react-navigation/native";

export type ScreenNames = [
    // stack router
    "start",
    "slider",
    "identity",
    "health-seeker",
    "health-provider",
    "hospitals",
    "appointment-details",
];
export type RootStackParamList = Record<
    ScreenNames[number],
    undefined | { screen?: string, params?: any } | { id?: string | number }
>;
export type StackNavigation = NavigationProp<RootStackParamList>;
