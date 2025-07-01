import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { StackNavigation } from "types/stack";

export default async function Logout() {
  const navigation = useNavigation<StackNavigation>();

  // Clear recovery email from storage
  await AsyncStorage.multiRemove(["email", "VerificationToken", "data"]);
  navigation.navigate("health-seeker", { screen: "login" });
}
