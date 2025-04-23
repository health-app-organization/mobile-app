import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountScreen = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      // Clear stored auth tokens or session
      await AsyncStorage.clear(); // or remove specific keys

      // Navigate to Login or Welcome screen
      navigation.reset({
        index: 0,
        routes: [{ name: "LoginScreen" }],
      });
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <View className="flex-1">
      <View className="mt-14 px-6 space-y-2">
        <MenuItem icon="user" title="My Profile" route="ProfileScreen" />
        <MenuItem icon="check-circle" title="Urgent Criteria" route="UrgentCriteria" />
        <MenuItem icon="credit-card" title="Payout History" route="PayoutHistory" />
        <MenuItem icon="dollar-sign" title="Banking Details" route="BankingDetails" />
        <MenuItem icon="settings" title="Settings" route="Settings" />
        <MenuItem icon="headphones" title="Customer Support" route="Support" />
        <MenuItem icon="log-out" title="Logout" color="red" onPress={handleLogout} />
      </View>
    </View>
  );
};


const MenuItem = ({ icon, title, route, onPress, color = "teal" }) => {
  const navigation = useNavigation();
  const textColor = color === "red" ? "text-red-500" : "text-gray-800";

  return (
    <View>
      <TouchableOpacity
        className="flex-row items-center justify-between bg-gray-100 p-6 rounded-xl"
        onPress={onPress || (() => route && navigation.navigate(route))}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Feather name={icon} size={24} color={color} />
          <Text className={`font-semibold ${textColor}`}>{title}</Text>
        </View>
        <Feather name="chevron-right" size={20} color="gray" />
      </TouchableOpacity>
      <View className="h-px bg-slate-200 ml-14 mr-10" />
    </View>
  );
};


export default AccountScreen;
