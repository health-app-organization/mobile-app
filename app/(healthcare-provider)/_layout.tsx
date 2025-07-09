import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { linkcolor, primarycolor } from "../../constants/colors";
import HeaderTitle from "../../utilities/headers";
import { Textstyles } from "../../constants/fontsize";
import {
  AnalyticsUpIcon,
  CalendarIcon,
  CalenderIcon,
  HomeIcon,
  MessageIcon,
  UserIcon,
} from "../../assets/iconsvg/Svgicon";

export default function ProviderTabs() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const style = {
              backgroundColor: focused ? linkcolor : "white",
              borderRadius: 10,
              padding: 10,
            };
            switch (route.name) {
              case "(homeprovider)":
                return (
                  <View style={style}>
                    <HomeIcon width={size} height={size} color={color} />
                  </View>
                );
              case "appointments":
                return (
                  <View style={style}>
                    <CalendarIcon fill={color} className={`size-[${size}]`} />
                  </View>
                );
              case "earnings":
                return (
                  <View style={style}>
                    <AnalyticsUpIcon
                      fill={color}
                      className={`size-[${size}]`}
                    />
                  </View>
                );
              case "account":
                return (
                  <View style={style}>
                    <UserIcon width={size} height={size} color={color} />
                  </View>
                );
              default:
                return null;
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
        <Tabs.Screen
          name="(homeprovider)"
          options={{
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="appointments"
          options={{
            header: () => <HeaderTitle title="My Appointment" />,
          }}
        />
        <Tabs.Screen
          name="earnings"
          options={{
            header: () => <HeaderTitle title="Earnings" />,
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            header: () => <HeaderTitle title="My Account" />,
          }}
        />
      </Tabs>
    </>
  );
}
