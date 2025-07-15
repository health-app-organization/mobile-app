import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { useAppDispatch } from "../redux/store";
import { getDashboard } from "../redux/slices/get-dashboard";

export default async function Logout() {
  const dispatch = useAppDispatch();
  // Clear recovery email from storage
  await AsyncStorage.multiRemove([
    "email",
    "VerificationToken",
    "data",
    "user_id",
  ]);

  dispatch(getDashboard());
  router.replace("/(auth)");
  Toast.show({
    type: "success",
    text1: "Logout successful",
  });
}
