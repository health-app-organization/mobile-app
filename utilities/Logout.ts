import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { StackNavigation } from "types/stack";

export default async function Logout() {
  const navigation = useNavigation<StackNavigation>();
  const login = () => {
    navigation.navigate("start", { screen: "Login" });
  };

  // Clear recovery email from storage
  await AsyncStorage.multiRemove([
    "email",
    "VerificationToken",
    "data",
    "company_id",
    "recoveryEmail",
  ]);
  login;
}
