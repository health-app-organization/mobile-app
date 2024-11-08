import React, { useState } from "react";
import Imagepic from "../../assets/images/appo.png"
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Modal,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import {
  greycolortwo,
  primarycolor,
  primarycolortwo,
  whitecolor,
} from "../../constants/color";
import HeaderTitle, {
  CustomButton,
  CustomButton2,
  CustomButtonsmall,
  CustomButtonsmall2,
  CustomInputSearch,
  CustomTextInput,
  Providercard,
  Providercard2,
} from "../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { height, width } from "../../constants/mobileDimensions";
import { Header3 } from "../mycomponents/mycomponent";

const Medicine = () => {
  const navigation = useNavigation();

  return (
    <View className=" py-[40px] h-screen">
      <StatusBar style="auto" />
      
      <Header3
  title="Medicine" 
/>   
<View className=" px-4 mt-4">
        <CustomInputSearch
          placeholder="Search for chat"
          leftIconName="search" // Use FontAwesome email icon
          onChange={(text) => console.log(text)}
        />
      </View>
<Text className=" text-[27px] font-[600] leading-[30px] mt-5 pl-6">Top Pharmacist</Text>
<View style={{ height: 200, width: '100%' }}>
      <ScrollView 
      horizontal={true} 
      className=" px-5 mt-4  "
      
      >

        <Providercard2
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
       reviews={50}
      
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
        <Providercard2
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
       reviews={50}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
        <Providercard2
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
       reviews={50}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
        <Providercard2
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
       reviews={50}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
      </ScrollView>
      </View>
      <View className=" mt-2 pl-6">
      <ScrollView className=" mb-8">
      <Providercard
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
          likes={250}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
        <Providercard
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
          likes={250}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
        <Providercard
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
          likes={250}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
         <Providercard
          
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
          likes={250}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
         <Providercard
          
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
          likes={250}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
         <Providercard
          
          name="Dr Micheal Brains"
          title="Healthcare Provider"
          rating={5}
          likes={250}
          onPress={() => navigation.navigate('apponitmentdetails')} 
        />
       
      </ScrollView>
      </View>


    </View>
  );
};

export default Medicine;
