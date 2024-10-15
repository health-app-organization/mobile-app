import React from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from 'react-native';
import { Cartcard, Header } from '../mycomponents/mycomponent';
import { useNavigation } from '@react-navigation/native';
import { Providercard } from '../mycomponents/mycomponent';


const Cart = () => {
    const navigation = useNavigation();
    const handletocode = () => {
        navigation.navigate("notifications");
      };


  return (
    <View className="h-screen w-full  " style={{ flex: 1 }}>
        
      <StatusBar style="auto" />

      <Header 
  title="My Cart" 
  rightIcon="credit-card" // Example FontAwesome icon name
  onRightIconPress={() => console.log('Right icon pressed!')}
/>   
<View className=" flex justify-center w-full items-center mt-12">
<Cartcard
          name="Amartem Paracetermol"
          rating={5}
          likes={250}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
        </View>
    
    </View>
  );
};

export default Cart;
