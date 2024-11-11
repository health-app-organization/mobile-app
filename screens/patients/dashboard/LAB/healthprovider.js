
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, Header3, Header4 } from '../../../mycomponents/mycomponent';
import { Textstyles } from '../../../../constants/fontsize';
import { primarycolor,whitecolor } from '../../../../constants/color';


const HealthcareProviderScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Handle selection
  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View className="flex-1 bg-white py-[40px]">
      <StatusBar style="auto" />
      <Header4 title="Healthcare Provider" />

      <Text className="text-[28px] font-semibold mt-14 ml-8 mb-1" style={[Textstyles.text_medium]}>
        Caleb Omojuko
      </Text>
      <Text className="text-[14px] font-semibold ml-8 mb-6" style={[Textstyles.text_small]}>
        What care would you like?
      </Text>

      <View className="flex-1 justify-between p-4">
        <View className="items-center">
          <TouchableOpacity
            onPress={() => handleSelect('Doctor')}
            className={`w-[345px] h-[50px] px-3 rounded-lg flex-row items-center justify-between ${
              selectedOption === 'Doctor' ? 'bg-[#0099b8]' : 'bg-white'
            }`}
          >
            <Text className={`text-lg font-semibold ${selectedOption === 'Doctor' ? 'text-white' : 'text-black'}`} style={[Textstyles.text_cmedium]}>
              Doctor
            </Text>
            {selectedOption === 'Doctor' && <Text className="text-white font-bold text-xl">✓</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSelect('Nurse')}
            className={`w-[345px] h-[50px] px-3 mt-4 rounded-lg flex-row items-center justify-between ${
              selectedOption === 'Nurse' ? 'bg-[#0099b8]' : 'bg-white'
            }`}
          >
            <Text className={`text-lg font-semibold ${selectedOption === 'Nurse' ? 'text-white' : 'text-black'}`} style={[Textstyles.text_cmedium]}>
              Nurse
            </Text>
            {selectedOption === 'Nurse' && <Text className="text-white font-bold text-xl">✓</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSelect('Massage Therapist')}
            className={`w-[345px] h-[50px] px-3 mt-4 rounded-lg flex-row items-center justify-between ${
              selectedOption === 'Massage Therapist' ? 'bg-[#0099b8]' : 'bg-white'
            }`}
          >
            <Text className={`text-lg font-semibold ${selectedOption === 'Massage Therapist' ? 'text-white' : 'text-black'}`} style={[Textstyles.text_cmedium]}>
              Massage Therapist
            </Text>
            {selectedOption === 'Massage Therapist' && <Text className="text-white font-bold text-xl">✓</Text>}
          </TouchableOpacity>
        </View>
      </View>
       {/* Save Button at the Bottom */}
       <View className="px-3">
          <CustomButton
            Textname={"Save"}
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            onPress={() => handleSelect('Save')} // Trigger the save action
          />
        </View>
    </View>
  );
};

export default HealthcareProviderScreen;
