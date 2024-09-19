import { View,Text, TouchableOpacity, Alert } from "react-native"
import { height, width } from "../../constants/mobileDimensions"
import { Header } from "../mycomponents/verification"
import { Textstyles } from "../../constants/fontsize"
import { greycolorfive, greyColorSix,greycolortwo,primarycolortwo,primarycolor, whitecolor } from "../../constants/color"
import { CustomTextInput } from "../mycomponents/mycomponent"
import { useState } from "react"
import * as Clipboard from 'expo-clipboard'
import { FontAwesome5 } from "@expo/vector-icons"
import Footer from "../dashboard/footer"

const PaymentScreen=()=>{
    const [Email,setEmail]=useState('')
  
       
    
    return(
        <>
        <View style={{height:height,width:width}} className="px-5 py-[40px]">
            <Header
            title={'Add Funds'}
            />
            <View>
                <Text style={[Textstyles.text_small,{color:greyColorSix}]}>
                Use the details below to add money your Stulivery Wallet from any bank application.
                </Text>
            </View>
            <View className="h-3" />
            <View>
               <Text style={[Textstyles.text_small]}>Bank Name</Text>
               <CustomTextInput
                            placeholder={"Bank Name"}
                            placeholderTextColor={greycolortwo}
                            onChange={(text) => setEmail(text)}
                            value={'Zenith bank'}
                            disable={false}

            />
            </View>
            <View className="h-3" />
            <View>
               <Text style={[Textstyles.text_small]}>Account Number</Text>
               <CustomTextInput
                            placeholder={"Account Number"}
                            placeholderTextColor={greycolortwo}
                            onChange={(text) => setEmail(text)}
                            value={'123277482'}
                            disable={false}
                            rightIcon={<Copycomponent
                            value="123277482"
                            />}

            />
            </View>
            <View className="h-3" />
            <View>
               <Text style={[Textstyles.text_small]}>Account Name</Text>
               <CustomTextInput
                            placeholder={"Account Name"}
                            placeholderTextColor={greycolortwo}
                            onChange={(text) => setEmail(text)}
                            value={'Zenith bank'}
                            disable={false}

            />
            </View>
           

        </View>
        </>
    )
}
export const Copycomponent=({value})=>{
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(value);
        Alert.alert('Copied to clipboard!');
        
      };

    return(
        <TouchableOpacity className="bg-black py-1 px-3 rounded-2xl flex-row items-center" onPress={copyToClipboard }> 
        <FontAwesome5 color={whitecolor} name="copy" />
        <View className="w-1" />
        <Text style={[Textstyles.text_xsma,{color:whitecolor}]}>
            copy
        </Text>

        </TouchableOpacity>

    )
}
export default PaymentScreen