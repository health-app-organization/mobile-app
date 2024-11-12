import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View } from 'react-native';
import { Header5 } from '../../mycomponents/mycomponent';

const Favourites = () => {

  return (
    <View className="h-screen w-full">
      <StatusBar style="auto" />

      <Header5 
        title="My Favourites" 
      />   
      
      <View className=" w-full flex mt-52 justify-center items-center">
        <View className="w-[154px] h-[139px] ">
        <Image
                source={require("../../../assets/images/amico.png")}
                resizeMode="contain"
                className=" w-full"
              />
                   <Text     style={[Textstyles.text_xsma]} className=" text-center" >Your orders will appear here</Text>
        </View>
      </View>
    </View>
  );
};

export default Favourites;
