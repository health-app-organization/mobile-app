import "react-native-gesture-handler";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import StackWrapper from "./routers/stack-router";
import { createStackNavigator } from "@react-navigation/stack";
import { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import "./global.css";
import { enableScreens } from "react-native-screens"; // Import enableScreens
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "redux/store";
import Toast from "react-native-toast-message";
import { toastConfig } from "config/Toast";

// Enable screens
enableScreens();

export default function App() {
  const [fontsLoaded] = useFonts({
    TTFirsNeue: require("./assets/fonts/TTFirsNeueTrialVarRoman.ttf"),
    TTFirsNeueMedium: require("./assets/fonts/TTFirsNeueTrialMedium.ttf"),
  });

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    };
    prepare();
  }, [fontsLoaded]);

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
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PaperProvider>
          <Toast config={toastConfig} position="top" />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="onboarding" component={StackWrapper} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </GestureHandlerRootView>
    </Provider>
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
