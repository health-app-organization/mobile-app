import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const ProfileEditScreen = () => {
  const navigation = useNavigation();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    bloodGroup: '',
  });

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-[#0099B8] pt-24 px-8 pb-10">
        <View className="flex-row items-center space-x-3">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <View>
            <Text className="text-white text-lg font-bold">Caleb Omojuko</Text>
            <Text className="text-white text-xs font-medium">42% profile completed</Text>
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 py-6">
        <Input
          label="First name"
          placeholder="Enter first name"
          value={form.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
        />
        <Input
          label="Last name"
          placeholder="Enter last name"
          value={form.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
        />
        <Input
          label="Email address"
          placeholder="Enter email"
          value={form.email}
          keyboardType="email-address"
          onChangeText={(text) => handleChange('email', text)}
        />
        <Input
          label="Phone number"
          placeholder="Enter phone number"
          value={form.phone}
          keyboardType="phone-pad"
          onChangeText={(text) => handleChange('phone', text)}
        />
        <Input
          label="Date of birth"
          placeholder="DD-MM-YYYY"
          value={form.dob}
          onChangeText={(text) => handleChange('dob', text)}
        />
        <Input
          label="Gender"
          placeholder="Enter gender"
          value={form.gender}
          onChangeText={(text) => handleChange('gender', text)}
        />
        <Input
          label="Blood group"
          placeholder="Enter blood group"
          value={form.bloodGroup}
          onChangeText={(text) => handleChange('bloodGroup', text)}
        />

        <TouchableOpacity className="bg-[#0099B8] rounded-xl py-4 mt-8">
          <Text className="text-white text-center text-base font-semibold">Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const Input = ({ label, placeholder, value, onChangeText, keyboardType = 'default' }) => (
  <View className="mb-5">
    <Text className="text-sm text-gray-800 font-black mb-1">{label}</Text>
    <TextInput
      className="border border-teal-300 rounded-xl px-8 py-6 text-gray-900 font-semibold"
      placeholder={placeholder}
      placeholderTextColor="#888"
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  </View>
);

export default ProfileEditScreen;
