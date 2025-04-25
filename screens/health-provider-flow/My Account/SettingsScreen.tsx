import { View, Text, TextInput, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();

  const [notifications, setNotifications] = useState(true);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="bg-[#009FB7] pt-12 pb-12 px-4 flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text className="text-white text-lg font-bold ml-2">Settings</Text>
      </View>

      {/* Notifications Toggle */}
      <View className="flex-row justify-between items-center px-4 py-4 border-b border-gray-300">
        <Text className="text-black font-bold text-base">Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: '#ccc', true: '#22c55e' }}
          thumbColor="#fff"
        />
      </View>

      {/* Change Password */}
      <View className="px-6 mt-14 space-y-4">
        <Text className="text-black font-normal">Change Password</Text>

        <View className="flex-row items-center mt-4 border border-[#009FB7] rounded-xl px-3 py-3 bg-white">
          <Ionicons name="lock-closed-outline" size={18} color="#999" />
          <TextInput
            className="ml-4 flex-1 text-gray-700"
            placeholder="Old password"
            secureTextEntry
            value={oldPassword}
            onChangeText={setOldPassword}
          />
        </View>

        <View className="flex-row items-center border mt-6 border-[#009FB7] rounded-xl px-3 py-3 bg-white">
          <Ionicons name="lock-closed-outline" size={18} color="#999" />
          <TextInput
            className="ml-4 flex-1 text-gray-700"
            placeholder="New password"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
        </View>

        <View className="flex-row items-center mt-6 border border-[#009FB7] rounded-xl px-3 py-3 bg-white">
          <Ionicons name="lock-closed-outline" size={18} color="#999" />
          <TextInput
            className="ml-4 flex-1 text-gray-700"
            placeholder="Confirm password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity className="mt-8 mx-4 bg-[#009FB7] py-4 rounded-xl items-center">
        <Text className="text-white font-medium text-base">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
