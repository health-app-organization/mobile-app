import { View, Text,  StatusBar, } from 'react-native'
import React from 'react'
import { CustomButton, Header3 } from '../mycomponents/mycomponent'
import { primarycolor, whitecolor } from '../../constants/color'

const Lab = () => {
  return (
    <View className=" py-[40px] h-screen">
    <StatusBar style="auto" />
    
    <Header3
title="                Labs & Radiology" 
/>   
<Text className=" text-[28px] font-semibold mt-7 ml-8 mb-1">Caleb Omojuko</Text>
<Text  className=" text-[14px] font-semibold ml-8">What care would you like ? </Text>
<View className=" px-3">
<CustomButton
  Textname={"Save"}
  
  backgroundColor={primarycolor}
  TextColor={whitecolor}
/>
</View>
</View>
  )
}

export default Lab