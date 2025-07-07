import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UrgentCriteriaScreen = () => {
  const navigation = useNavigation();

  const [home, setHome] = useState(true);
  const [video, setVideo] = useState(true);
  const [clinic, setClinic] = useState(true);

  return (
    <View className="flex-1 bg-gray-100">
     
     <View className="bg-[#009FB7] pt-12 pb-24 px-4">
  <View className="flex-row items-end">
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="chevron-back" size={24} color="#fff" />
    </TouchableOpacity>
    <Text className="text-white text-lg font-bold ml-2 pb-1">Urgent Criteria</Text>
  </View>
</View>

      
      <View className="mt-6">
        <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-300">
          <Text className="text-black font-bold text-base">Home Consultation</Text>
          <Switch
            value={home}
            onValueChange={setHome}
            trackColor={{ false: '#ccc', true: '#22c55e' }}
            thumbColor="#fff"
          />
        </View>
        <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-300">
          <Text className="text-black font-bold text-base">Video Consultation</Text>
          <Switch
            value={video}
            onValueChange={setVideo}
            trackColor={{ false: '#ccc', true: '#22c55e' }}
            thumbColor="#fff"
          />
        </View>
        <View className="flex-row items-center justify-between px-4 py-4 border-b border-gray-300">
          <Text className="text-black font-bold text-base">Clinic Consultation</Text>
          <Switch
            value={clinic}
            onValueChange={setClinic}
            trackColor={{ false: '#ccc', true: '#22c55e' }}
            thumbColor="#fff"
          />
        </View>
      </View>


      <TouchableOpacity className="mt-auto mb-6 mx-4 bg-[#009FB7] py-4 rounded-xl items-center">
        <Text className="text-white font-medium text-base">Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UrgentCriteriaScreen;
