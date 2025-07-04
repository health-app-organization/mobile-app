// import { Tabs } from "expo-router";

// export default function SeekerTabs() {
//   return (
//     <Tabs screenOptions={{ headerShown: false }}>
//       <Tabs.Screen name="home" />
//       <Tabs.Screen name="appointment" />
//       <Tabs.Screen name="chat" />
//       <Tabs.Screen name="profile" />
//     </Tabs>
//   );
// }

import { Tabs } from "expo-router";
// import { linkcolor, primarycolor } from "constants/color";
import { StatusBar } from "expo-status-bar";
import {
  CalenderIcon,
  HomeIcon,
  MessageIcon,
  UserIcon,
} from "assets/iconsvg/Svgicon";
// import DashboardHeader from "components/health-seeker/dashboard-header";
// import HeaderTitle from "components/utilities/headers";
// import { Textstyles } from "constants/fontsize";
import { View, Text } from "react-native";
import { linkcolor, primarycolor } from "../../constants/colors";
import HeaderTitle from "../../utilities/headers";
import { Textstyles } from "../../constants/fontsize";
import DashboardHeader from "../../components/health-seeker-flow/dashboard-header";

export default function SeekerTabs() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
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
              case "chat":
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
              case "appointment":
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
          name="home"
          options={{
            header: () => <DashboardHeader />,
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            header: () => <HeaderTitle title="Chats" profileCompletion={""} />,
          }}
        />
        <Tabs.Screen
          name="appointment"
          options={{
            header: () => (
              <HeaderTitle title="Appointments" profileCompletion={""} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            header: () => (
              <View
                style={{
                  width: "100%",
                  backgroundColor: primarycolor,
                  borderEndEndRadius: 30,
                  borderBottomStartRadius: 30,
                  height: "25%",
                }}
              >
                <Text
                  style={{
                    color: "white",
                    ...Textstyles.text_medium,
                    marginLeft: 32,
                    marginTop: 80,
                  }}
                >
                  My Account
                </Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
