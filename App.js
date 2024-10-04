import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, StyleSheet, Text, View,Platform } from "react-native";
import { PaperProvider } from "react-native-paper";
import StackWrapper from "./routers/stackrouter";
import { createStackNavigator } from "@react-navigation/stack";
import { useCallback, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";


export default function App() {
  const [fontsLoaded] = useFonts({
    TTFirsNeue: require("./assets/fonts/TTFirsNeueTrialVarRoman.ttf"),
    TTFirsNeueMedium: require("./assets/fonts/TTFirsNeueTrialMedium.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }
  const Stack = createStackNavigator();

  return (
    <View className="h-full w-full" onLayout={onLayoutRootView}>
      <PaperProvider>
        <GestureHandlerRootView>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="onboarding"
                component={StackWrapper}
              />
              
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PaperProvider>
    </View>
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

