import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import HeaderTitle from 'components/utilities/headers';
import { primarycolor } from 'constants/color';
import { Header } from '@react-navigation/stack';


const AppointmentDetail = () => {
  const [activeTab, setActiveTab] = useState('appointment');


  const InfoRow = ({ icon, label, value, color = 'text-gray-800' }) => (
    <View className="flex-row mb-4">
      <Feather name={icon} size={16} color="#333" className="mt-1" />
      <View className="ml-3">
        <Text className="text-xs text-gray-500">{label}</Text>
        <Text className={`text-sm font-medium ${color}`}>{value}</Text>
      </View>
    </View>
  );

  const AppointmentInfo = () => (
    <View className="px-4">
      <InfoRow icon="map-pin" label="Location" value="Online" />
      <InfoRow icon="calendar" label="Date" value="25 April, 2024" />
      <InfoRow icon="clock" label="Time" value="09:00AM - 10:00 AM" />
      <InfoRow
        icon="file-text"
        label="Consult details"
        value="Pain in the middle area of the stomach"
      />
      <InfoRow icon="user" label="Referral" value="Dr Olayemi" />
      <InfoRow icon="activity" label="Status" value="Ongoing" color="text-teal-600" />
    </View>
  );

  const MedicalHistory = () => (
    
    <ScrollView>
<View className='gap-2'>
    <View className="px-4">
     <View className='w-full h-28 rounded-xl bg-white'>
        <View className='flex-row justify-between p-2'>
          <Text className='text-x font-semibold'>12-07-2024</Text>
          <InfoRow icon="download"/>
        </View>
        <View className='flex-row justify-between p-1'>
          <Text className='font-thin'>Doctor in charge</Text>
          <Text className='font-thin'>Dr Abel Samuel</Text>
        </View>
        <View className='flex-row justify-between p-1'>
            <Text className='font-thin'>Hospital</Text>
            <Text className='font-thin'>Greenway Hospital</Text>
          </View>
     </View>
    </View>
  

    <View className="px-4">
<View className='w-full h-28 rounded-xl bg-white'>
   <View className='flex-row justify-between p-2'>
     <Text className='text-x font-semibold'>12-07-2024</Text>
     <InfoRow icon="download"/>
   </View>
   <View className='flex-row justify-between p-1'>
     <Text className='font-thin'>Test</Text>
     <Text className='font-thin'>Maleria Test</Text>
   </View>
   <View className='flex-row justify-between p-1'>
       <Text className='font-thin'>Laboratory</Text>
       <Text className='font-thin'>Greenway Lab</Text>
     </View>
    </View>
  </View>

  <View className="px-4">
<View className='w-full h-28 rounded-xl bg-white'>
   <View className='flex-row justify-between p-2'>
     <Text className='text-x font-semibold'>12-07-2024</Text>
     <InfoRow icon="download"/>
   </View>
   <View className='flex-row justify-between p-1'>
     <Text className='font-thin'>Doctor in charge</Text>
     <Text className='font-thin'>Dr Abel Samuel</Text>
   </View>
   <View className='flex-row justify-between p-1'>
       <Text className='font-thin'>Hospital</Text>
       <Text className='font-thin'>Greenway Hospital</Text>
     </View>
    </View>
  </View>

  <View className="px-4">
<View className='w-full h-28 rounded-xl bg-white'>
   <View className='flex-row justify-between p-2'>
     <Text className='text-x font-semibold'>12-07-2024</Text>
     <InfoRow icon="download"/>
   </View>
   <View className='flex-row justify-between p-1'>
     <Text className='font-thin'>Test</Text>
     <Text className='font-thin'>Maleria Test</Text>
   </View>
   <View className='flex-row justify-between p-1'>
       <Text className='font-thin'>Laboratory</Text>
       <Text className='font-thin'>Greenway Lab</Text>
     </View>
    </View>
  </View>

</View>
</ScrollView>
  );

  const Medicine = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedDrugs, setSelectedDrugs] = useState<
      { name: string; dosage: string; notes: string }[]
    >([]);
  
    const medicines = [
      'Paracetamol',
      'Ibuprofen',
      'Aspirin',
      'Amoxicillin',
      'Metformin',
      'Lisinopril',
    ];
  
    const filtered = medicines.filter(
      (med) =>
        med.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !selectedDrugs.some((item) => item.name === med)
    );
  
    const handleSelectDrug = (drug: string) => {
      setSelectedDrugs((prev) => [...prev, { name: drug, dosage: '', notes: '' }]);
      setSearchQuery('');
    };
  
    const handleDosageChange = (drugName: string, value: string) => {
      setSelectedDrugs((prev) =>
        prev.map((item) =>
          item.name === drugName ? { ...item, dosage: value } : item
        )
      );
    };
  
    const handleNotesChange = (drugName: string, value: string) => {
      setSelectedDrugs((prev) =>
        prev.map((item) =>
          item.name === drugName ? { ...item, notes: value } : item
        )
      );
    };
  
    const removeDrug = (drugName: string) => {
      setSelectedDrugs((prev) => prev.filter((item) => item.name !== drugName));
    };
  
    return (
      <ScrollView>
        <View className="px-4 mt-4">
          {/* Search Input */}
          <TextInput
            placeholder="Search medicine"
            value={searchQuery}
            onChangeText={setSearchQuery}
            className="bg-gray-200 p-2 rounded-lg mb-4"
          />
  
          {/* Filtered Search Results */}
          {searchQuery.length > 0 && filtered.length > 0 && (
            <View className="bg-white rounded-lg shadow p-2 mb-4">
              {filtered.map((med, index) => (
                <TouchableOpacity key={index} onPress={() => handleSelectDrug(med)}>
                  <Text className="text-base py-2 border-b border-gray-100">{med}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
  
          {/* Selected Medicines with Dosage & Notes */}
          {selectedDrugs.length > 0 && (
            <View className="mt-4">
              <Text className="text-base font-semibold mb-2">Selected Items:</Text>
              {selectedDrugs.map((item, index) => (
                <View
                  key={index}
                  className="flex-col bg-white p-3 mb-4 rounded-lg shadow-sm"
                >
                  <View className="flex-row justify-between items-center mb-2">
                    <Text className="text-base font-medium">{item.name}</Text>
                    <TouchableOpacity onPress={() => removeDrug(item.name)}>
                      <Feather name="x" size={18} color="red" />
                    </TouchableOpacity>
                  </View>
                  <Text
                    placeholder="Enter dosage (e.g. 500mg, 1 tablet)"
                    value={item.dosage}
                    onChangeText={(value) => handleDosageChange(item.name, value)}
                    className="border border-gray-300 p-2 rounded-lg mb-2"
                  />
                  <TextInput
                    placeholder="Notes or instructions (e.g. Take after food)"
                    value={item.notes}
                    onChangeText={(value) => handleNotesChange(item.name, value)}
                    className="border border-gray-300 p-2 rounded-lg"
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    );
  };
  
  
  const Referral = () => (
    <View className="px-4">
      <Text className="text-sm text-gray-600">Referred to Dr. Olayemi for further examination.</Text>
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'appointment':
        return <AppointmentInfo />;
      case 'history':
        return <MedicalHistory />;
      case 'medicine':
        return <Medicine />;
      case 'referral':
        return <Referral />;
      default:
        return null;
    }
  };

  return (
    
<View>
    <HeaderTitle/>
      <View className='mt- p-7'>
        <Text className='text-black font-bold'>
          Personal Info
        </Text>
      </View>
      {/* Personal Info Card */}
      <View className="bg-gray-100 rounded-xl shadow mx-4 mt-4 p-4">
        <View className="flex-row items-center justify-between">
          <Image
            source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
            className="w-12 h-12 rounded-full"
          />
          <View className="flex-1 mx-3">
            <Text className="font-semibold text-base">Praise Chanel</Text>
            <Text className="text-gray-500 text-sm">Female - 23yrs - 176cm - 50kg</Text>
          </View>
          <Feather name="message-circle" size={20} color="#00ACC1" />
        </View>
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4 mt-4">
        <View className="flex-row gap-x-4 mx-4 mb-2">
          <TouchableOpacity onPress={() => setActiveTab('appointment')}>
            <Text className={`font-semibold ${activeTab === 'appointment' ? 'text-primary' : 'text-black'}`}>
              Appointment info
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('history')}>
            <Text className={`font-semibold ${activeTab === 'history' ? 'text-primary' : 'text-black'}`}>
              Medical history
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('medicine')}>
            <Text className={`font-semibold ${activeTab === 'medicine' ? 'text-primary' : 'text-black'}`}>
              Medicine
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('referral')}>
            <Text className={`font-semibold ${activeTab === 'referral' ? 'text-primary' : 'text-black'}`}>
              Referral
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Dynamic Content */}
      {renderTabContent()}

      {/* Buttons */}
      <View className="px-4 mt-4 space-y-10 gap-y-4">
        <TouchableOpacity className="bg-primary py-3 rounded-lg items-center">
          <Text className="text-white font-semibold">Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-teal-600 py-3 rounded-lg items-center">
          <Text className="text-teal-600 font-semibold">Upload paitent's Record</Text>
        </TouchableOpacity>
      </View>
  </View>
  
  );
};

export default AppointmentDetail;
