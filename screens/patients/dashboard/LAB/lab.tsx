// screens/LabsScreen.js
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CustomButton, Header3, Header4 } from '../../../../components/mycomponent';
import { Textstyles } from "../../../../constants/fontsize";
import { primarycolor, whitecolor } from '../../../../constants/color';

const LabsScreen: React.FC<{}> = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    // setSelectedOption(option);
    // if (option === 'Save') {
    //   onSave(); // Trigger the save action passed from the parent
    //   setSelectedOption(null); // Reset selection
    // }
    console.log("save!!!")
  };

  return (
    <View className="flex-1 bg-white py-[40px]">
      <StatusBar />
      <Header4 title="Labs & Radiology" />

      <Text className="text-[28px] font-semibold mt-7 ml-8 mb-1" style={[Textstyles.text_medium]}>
        Caleb Omojuko
      </Text>
      <Text className="text-[14px] font-semibold ml-8 mb-6" style={[Textstyles.text_small]}>
        What care would you like?
      </Text>

      <View className="flex-1 justify-between p-4">
        <View className="items-center">
          <TouchableOpacity
            onPress={() => handleSelect('Laboratory Tests')}
            className={`w-[345px] h-[50px] px-3 rounded-lg flex-row items-center justify-between ${selectedOption === 'Laboratory Tests' ? 'bg-[#0099b8]' : 'bg-white'
              }`}
          >
            <Text className={`text-lg font-semibold ${selectedOption === 'Laboratory Tests' ? 'text-white' : 'text-black'}`} style={[Textstyles.text_cmedium]}>
              Laboratory Tests
            </Text>
            {selectedOption === 'Laboratory Tests' && <Text className="text-white font-bold text-xl">✓</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleSelect('Radiology (Scans, X-Ray)')}
            className={`w-[345px] h-[50px] px-3 mt-4 rounded-lg flex-row items-center justify-between ${selectedOption === 'Radiology (Scans, X-Ray)' ? 'bg-[#0099b8]' : 'bg-white'
              }`}
          >
            <Text className={`text-lg font-semibold ${selectedOption === 'Radiology (Scans, X-Ray' ? 'text-white' : 'text-black'}`} style={[Textstyles.text_cmedium]}>
              Radiology (Scans, X-Ray)
            </Text>
            {selectedOption === 'Radiology (Scans, X-Ray)' && <Text className="text-white font-bold text-xl">✓</Text>}
          </TouchableOpacity>
        </View>

        {/* Save Button at the Bottom */}
        <View className="px-3 ">
          <CustomButton
            Textname={"Save"}
            backgroundColor={primarycolor}
            TextColor={whitecolor}
            onPress={() => handleSelect('Save')} // Trigger the save action
          />
        </View>
      </View>
    </View>
  );
};

export default LabsScreen;
