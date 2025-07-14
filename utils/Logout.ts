import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import Toast from "react-native-toast-message";

export default async function Logout() {
  // Clear recovery email from storage
  await AsyncStorage.multiRemove([
    "email",
    "VerificationToken",
    "data",
    "user_id",
  ]);
  router.replace("/(auth)");
  Toast.show({
    type: "success",
    text1: "Logout successful",
  });
}
