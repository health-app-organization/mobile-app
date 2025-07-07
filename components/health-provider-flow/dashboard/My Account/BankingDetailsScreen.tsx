
import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar
} from 'react-native';
import { Feather } from '@expo/vector-icons';


const BankingDetailsScreen = () => {
  return (
    <View className="flex-1 bg-gray-50">
      
      
      
      <View className="bg-[#009FB7]">
      
        <View className="px-4 pt-6 pb-2 flex-row justify-between items-center">
          
          <View className="flex-row items-center space-x-3">
        
          </View>
        </View>
        
       
        <View className="px-4 py-9 flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white text-2xl font-semibold ml-4">Account details</Text>
        </View>
      </View>
      
     
      <View className="flex-1 px-6 pt-6">
        <View className="mb-6">
          <Text className="text-gray-800 text-lg mb-2">Account name</Text>
          <TextInput
            className="w-full p-4 border border-[#009FB7] rounded-lg text-xl"
            defaultValue="Caleb"
          />
        </View>
        
        <View className="mb-6">
          <Text className="text-gray-800 text-lg mb-2">Account number</Text>
          <TextInput
            className="w-full p-4 border border-[#009FB7] rounded-lg text-xl"
            defaultValue="Omojuko"
          />
        </View>
        
        <View className="mb-6">
          <Text className="text-gray-800 text-lg mb-2">Bank</Text>
          <TouchableOpacity className="w-full p-4 border border-[#009FB7] rounded-lg flex-row justify-between items-center">
            <Text className="text-gray-400 text-lg">Select bank</Text>
            <Text className="text-gray-400">▼</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Save Button */}
      <View className="p-6">
        <TouchableOpacity className="w-full bg-[#009FB7] py-4 rounded-lg items-center">
          <Text className="text-white text-xl font-medium">Save</Text>
        </TouchableOpacity>
      </View>
      
     
      
   </View>
  );
};

export default BankingDetailsScreen;

