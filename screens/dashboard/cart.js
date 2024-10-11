import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from '../mycomponents/mycomponent';
import { useNavigation } from '@react-navigation/native';


const Cart = () => {
    const navigation = useNavigation();
    const handletocode = () => {
        navigation.navigate("payment");
      };


  return (
    <View className="h-screen w-full  " style={{ flex: 1 }}>
        
      <StatusBar style="auto" />

      <Header title="My Cart" />    
      <View className=" mt-1 w-full flex justify-center items-center  h-[660px]">
        <TouchableOpacity
          onPress={handletocode}
          className=" w-52 h-52 bg-blue-800 -mt-12"
        ></TouchableOpacity>
      </View>  
    
    </View>
  );
};

export default Cart;
