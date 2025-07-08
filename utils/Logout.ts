import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default async function Logout() {
  // Clear recovery email from storage
  await AsyncStorage.multiRemove(["email", "VerificationToken", "data"]);
  router.replace("/(auth)");
}
