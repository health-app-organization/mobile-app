import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import StackWrapper from "./routers/stackrouter";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function App() {
  

  return (
    <PaperProvider>
      <GestureHandlerRootView>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen  name="start" component={Home} /> */}
            <Stack.Screen
              options={{ gestureEnabled: true, gestureDirection: "vertical" }}
              name="onboarding"
              component={StackWrapper}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
