import { Avatar } from "react-native-paper"
import { primarycolor, whitecolor } from "../../constants/color"
import {View,Text,TouchableOpacity} from 'react-native'
import { Textstyles } from "../../constants/fontsize"
import { AmbulanceIcon, BackgroundIcon, Calender, LabIcon, Notificationicon, SethIcon, ShoppingCartIcon } from "../../assets/iconsvg/Svgicon"
import { QRCodeScreen } from "../qrcodegen/Qrcode"
import { MenuButton } from "../mycomponents/mycomponent"
import Footer from "./footer"

const Dashboard=()=>{
    return(
        <>
        <View className="h-full w-full flex">
            <Dashheader/>
            <View>
            <DashboardMenu/>
            </View>
            <View className="flex-1 mt-10 items-center">
            <Appointment/>
            </View>
            
            <Footer/>
           
           
            
            
        </View>
        </>
    )
}
export default Dashboard
 
const Dashheader=()=>{
    return(
        <>
        <View style={{backgroundColor:primarycolor}} className="h-1/3 w-full rounded-b-2xl pt-[60px] px-3 relative">
        <View className="absolute -bottom-10 left-5 opacity-30">
            <BackgroundIcon
            width={200}
            height={200}
            />
        </View>
        <View className="flex-row justify-between items-center">
            <View className="flex-row items-center">
                <View>
                    <Avatar.Image 
                    source={require('../../assets/images/profileimage.png')}
                    size={60}
                    
                     />
                </View>
                <View className="w-4"/>
                <View>
                    <Text style={[Textstyles.text_xmedium,{color:whitecolor}]}>
                    Hi Praise
                    </Text>
                    <Text style={[Textstyles.text_xxmedium,{color:whitecolor}]}>
                    How’re you today?
                    </Text>
                </View>

            </View>
            <View className="flex-row">
                <TouchableOpacity style={{elevation:4}} className="w-10 h-10 rounded-xl bg-white flex justify-center items-center shadow-sm shadow-black">
                    <ShoppingCartIcon
                    width={28}
                    height={28}
                    />

                </TouchableOpacity>
                <View className="w-4"/>
                <TouchableOpacity style={{elevation:4}} className="w-10 h-10 rounded-xl bg-white flex justify-center items-center shadow-sm shadow-black">
                    <Notificationicon
                    width={28}
                    height={28}
                    />

                </TouchableOpacity>
                
            </View>

        </View>
        <View className="flex-row justify-between items-center mt-16">
            <View>
                <Text style={[Textstyles.text_cmedium,{color:whitecolor}]} >
                    Available Balance
                </Text>
                <View className="items-center flex-row">
                    <BackgroundIcon
                    width={50}
                    height={50}
                    />
                    <View className="w-4"/>

                    <Text style={[Textstyles.text_medium,{color:whitecolor}]} >
                        0.00
                    </Text>
                </View>
            </View>
            <View>
                <View className="h-20 w-20 flex justify-center items-center rounded-full border-white border-2">
                <View className="h-16 w-16 flex justify-center items-center rounded-full bg-white p-2">
                    <QRCodeScreen/>

                </View>

                </View>
        
            </View>


        </View>



        </View>
        </>
    )
}
const DashboardMenu=()=>{

    return(
        <>
        <View className="mt-3 px-3 flex-row justify-center">
           <MenuButton
              onPress={handletoHealth}
           icon={<SethIcon width={40} height={40}/>}
           text={<Text style={[Textstyles.text_xsmall]} className="text-center">Healthcare Provider</Text>}
           />
           <View className="w-4"/>
            <MenuButton
           icon={<AmbulanceIcon width={40} height={40}/>}
           text={<Text style={[Textstyles.text_xsmall]} className="text-center">Medicine</Text>}
           />
            <View className="w-4"/>
            <MenuButton
           icon={<LabIcon width={40} height={40}/>}
           text={<Text style={[Textstyles.text_xsmall]} className="text-center">Lab and Radiology</Text>}
           />
           
        </View>
        </>
    )
}
const Appointment=()=>{
    return(
        <>
        <View className=" flex items-center  w-full">
        <Calender/>
        <Text style={[Textstyles.text_xmedium]} className="mt-5">You have no Appointments yet</Text>
        </View>
        
        </>
    )
}

