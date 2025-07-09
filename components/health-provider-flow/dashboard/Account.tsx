import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Modal } from "react-native";
import { useRouter } from "expo-router";

interface LogoutProps{
  visible:boolean;
  onClose:()=>void;
  onConfirm:()=>void
}

const LogoutModal = ({ visible, onClose, onConfirm }:LogoutProps) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 justify-end bg-black/30">
        <View className="bg-white rounded-t-3xl px-6 py-8">
          <Text className="text-center text-[#009FB7] font-bold text-lg mb-3">
            WESTCARE
          </Text>
          <Text className="text-center text-black font-semibold text-base mb-6">
            Are you sure you want to logout ?
          </Text>

          <TouchableOpacity
            onPress={onClose}
            className="bg-red-600 py-6 rounded-xl mb-6"
          >
            <Text className="text-white text-center font-semibold">No</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onConfirm}
            className="bg-[#009FB7] py-6 rounded-xl"
          >
            <Text className="text-white text-center font-semibold">Yes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};


const AccountScreen = () => {
  const router=useRouter()

  const [showLogoutModal, setShowLogoutModal] = useState(false); // <--- state for modal

  const handleLogout = async () => {
    try {
      await AsyncStorage.clear();
      router.push('/(provider-auth)/(auth)')
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  return (
    <View className="flex-1">
      <View className="mt-14 px-6 space-y-2">
        <MenuItem icon="user" title="My Profile" route="ProfileScreen"  />
        <MenuItem icon="check-circle" title="Urgent Criteria" route="UrgentCriteria"  />
        <MenuItem icon="credit-card" title="Payout History" route="PayoutHistory"/>
        <MenuItem icon="dollar-sign" title="Banking Details" route="BankingDetails" />
        <MenuItem icon="settings" title="Settings" route="Settings"  />
        <MenuItem icon="headphones" title="Customer Support" route="Support" />
        <MenuItem icon="log-out" title="Logout" color="red" onPress={() => setShowLogoutModal(true)}  />
      </View>

      {/* Logout confirmation modal */}
      <LogoutModal
        visible={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </View>
  );
};

interface MenuItemProps{
  icon:any;
  title:string;
  route?:any
  onPress?:()=>void
  color?:string
}
const MenuItem = ({ icon, title, route, onPress, color = "teal" }:MenuItemProps) => {
  const router=useRouter()
  const textColor = color === "red" ? "text-red-500" : "text-gray-800";

  return (
    <View>
      <TouchableOpacity
        className="flex-row items-center justify-between bg-gray-100 p-6 rounded-xl"
        onPress={onPress || (() => route && router.push(route))}
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
