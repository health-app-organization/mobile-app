import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, Header3 } from '../mycomponents/mycomponent';
import { Textstyles } from '../../constants/fontsize';
import { primarycolor, whitecolor } from '../../constants/color';

const Lab = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentView, setCurrentView] = useState('labs'); // State to track current view ('labs' or 'healthcare')

  // Handle selection
  const handleSelect = (option) => {
    setSelectedOption(option);
    if (currentView === 'labs' && option === 'Save') {
      // Move to the Healthcare Provider view if Save is clicked in Labs & Radiology
      setCurrentView('healthcare');
      setSelectedOption(null); // Reset the selection for the new view
    }
  };

  return (
    <View className="flex-1 bg-white py-[40px]">
      <StatusBar style="auto" />

      <Header3 title={currentView === 'labs' ? '                Labs & Radiology' : '                Healthcare Provider'} />

      <Text className="text-[28px] font-semibold mt-7 ml-8 mb-1" style={[Textstyles.text_medium]}>
        Caleb Omojuko
      </Text>
      <Text className="text-[14px] font-semibold ml-8 mb-6" style={[Textstyles.text_small]}>
        What care would you like?
      </Text>

      <View className="flex-1 justify-between p-4">
        <View className="items-center">
          {currentView === 'labs' ? (
            // Options for Labs & Radiology
            <>
              <TouchableOpacity
                onPress={() => handleSelect('Laboratory Tests')}
                className={`w-[345px] h-[50px] px-3 rounded-lg flex-row items-center justify-between ${
                  selectedOption === 'Laboratory Tests' ? 'bg-[#0099b8]' : 'bg-white'
                }`}
              >
                <Text
                  className={`text-lg font-semibold ${
                    selectedOption === 'Laboratory Tests' ? 'text-white' : 'text-black'
                  }`}
                  style={[Textstyles.text_cmedium]}
                >
                  Laboratory Tests
                </Text>
                {selectedOption === 'Laboratory Tests' && (
                  <Text className="text-white font-bold text-xl">✓</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSelect('Radiology (Scans, X-Ray)')}
                className={`w-[345px] h-[50px] px-3 mt-4 rounded-lg flex-row items-center justify-between ${
                  selectedOption === 'Radiology (Scans, X-Ray)' ? 'bg-[#0099b8]' : 'bg-white'
                }`}
              >
                <Text
                  className={`text-lg font-semibold ${
                    selectedOption === 'Radiology (Scans, X-Ray)' ? 'text-white' : 'text-black'
                  }`}
                  style={[Textstyles.text_cmedium]}
                >
                  Radiology (Scans, X-Ray)
                </Text>
                {selectedOption === 'Radiology (Scans, X-Ray)' && (
                  <Text className="text-white font-bold text-xl">✓</Text>
                )}
              </TouchableOpacity>
            </>
          ) : (
            // Options for Healthcare Provider
            <>
              <TouchableOpacity
                onPress={() => handleSelect('Doctor')}
                className={`w-[345px] h-[50px] px-3 rounded-lg flex-row items-center justify-between ${
                  selectedOption === 'Doctor' ? 'bg-[#0099b8]' : 'bg-white'
                }`}
              >
                <Text
                  className={`text-lg font-semibold ${
                    selectedOption === 'Doctor' ? 'text-white' : 'text-black'
                  }`}
                  style={[Textstyles.text_cmedium]}
                >
                  Doctor
                </Text>
                {selectedOption === 'Doctor' && (
                  <Text className="text-white font-bold text-xl">✓</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSelect('Nurse')}
                className={`w-[345px] h-[50px] px-3 mt-4 rounded-lg flex-row items-center justify-between ${
                  selectedOption === 'Nurse' ? 'bg-[#0099b8]' : 'bg-white'
                }`}
              >
                <Text
                  className={`text-lg font-semibold ${
                    selectedOption === 'Nurse' ? 'text-white' : 'text-black'
                  }`}
                  style={[Textstyles.text_cmedium]}
                >
                  Nurse
                </Text>
                {selectedOption === 'Nurse' && (
                  <Text className="text-white font-bold text-xl">✓</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSelect('Massage Therapist')}
                className={`w-[345px] h-[50px] px-3 mt-4 rounded-lg flex-row items-center justify-between ${
                  selectedOption === 'Massage Therapist' ? 'bg-[#0099b8]' : 'bg-white'
                }`}
              >
                <Text
                  className={`text-lg font-semibold ${
                    selectedOption === 'Massage Therapist' ? 'text-white' : 'text-black'
                  }`}
                  style={[Textstyles.text_cmedium]}
                >
                  Massage Therapist
                </Text>
                {selectedOption === 'Massage Therapist' && (
                  <Text className="text-white font-bold text-xl">✓</Text>
                )}
              </TouchableOpacity>
             
            </>
          )}
        </View>

        {/* Save Button at the Bottom */}
        <View className="px-3 mb-5">
          <CustomButton
            Textname={"Save"}
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            onPress={() => handleSelect('Save')} // Trigger navigation on Save
          />
        </View>
      </View>
    </View>
  );
};

export default Lab;
