import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from 'react-native';
import { CustomButton, Header,CustomButton2 } from '../mycomponents/mycomponent';
import { Textstyles } from "../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import { primarycolortwo,primarycolor,whitecolor } from "../../constants/color";



const Disease = () => {
    const navigation = useNavigation();
    const handletocode = () => {
        navigation.navigate("notifications");
      };


  return (
    <View className="h-screen w-full  " style={{ flex: 1 }}>
        
      <StatusBar style="auto" />

      <Header 
  title="Medical" 
 
/>   
<View className=" flex justify-center w-full items-center mt-8">

        </View>
        <Text className="text-[14px] font-semibold ml-8 mb-6" style={[Textstyles.text_medium]}>
        Do you have any chronic illness ?
      </Text>
      <View className="flex-grow" />
      <View className="px-5 mb-8"> 
      <CustomButton2
            Textname={"No"}
            onPress={handletonewacc}
            backgroundColor={primarycolortwo}
            TextColor={primarycolor}
          />
        <CustomButton
          Textname={"Add Disease"}
          backgroundColor={primarycolor}
          TextColor={whitecolor}
        />
        </View>
    </View>
  );
};

export default Disease;
