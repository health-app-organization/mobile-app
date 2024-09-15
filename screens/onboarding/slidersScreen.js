import { StatusBar } from "expo-status-bar"
import {Image,Pressable,View,Text, TouchableOpacity} from 'react-native'
import { CustomButton } from "../mycomponents/mycomponent"
import { primarycolor, whitecolor,primarycolortwo } from "../../constants/color"
import { Textstyles } from "../../constants/fontsize"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"


const Slider=()=>{
    const navigation=useNavigation('')
    const [currentindex,setcurrentindex]=useState(0)
    const mapArray=[<Sliderone/>,<Slidertwo/>,<Sliderthree/>]
    const handlenext=()=>{
        if (currentindex < mapArray.length - 1) {
            setcurrentindex((next) => next + 1);
          }
          if(currentindex===mapArray.length - 1){
            navigation.navigate('')
          }
        
    }
    const handletosignup=()=>{

    }
    const handletologin=()=>{
        navigation.navigate('login')

    }

    return(
        <>
        <View style={{backgroundColor:whitecolor}} className="h-full w-full px-5 flex">
            <StatusBar style="auto" />
            <View className="h-4/5">
            {mapArray.map((item,index)=>{
                if(index===currentindex){
                    return(
                        <View key={index}>
                            {item}
                        </View>
                       
                    )
                }

            })

            }
          
            </View>
            {currentindex===(mapArray.length-1)?
            <>
               <CustomButton
             Textname={'Sign up'}
             onPress={()=>handletosignup()}
             backgroundColor={primarycolor}
             TextColor={whitecolor}
             
             />
             <View className="h-3"/>
             <CustomButton
             Textname={'Sign in'}
             onPress={()=>handletologin()}
             backgroundColor={whitecolor}
             TextColor={primarycolortwo}
             borderWidth={2}
             borderColor={primarycolortwo}
             />
            </>:
               <>
               <CustomButton
             Textname={'Next'}
             onPress={()=>handlenext()}
             backgroundColor={primarycolor}
             TextColor={whitecolor}
             />
             <View className="h-3"/>
             <TouchableOpacity>
                 <Text style={[Textstyles.text_button]} className="text-center">Skip</Text>
             </TouchableOpacity>
            </>
            }
           
            
            

        </View>
        </>
    )
}
export default Slider

const Sliderone=()=>{
    return(
        <>
        <View className="h-full w-full flex">
            <View className="flex-1 flex justify-center items-center">
                <Image className="h-64 w-64" resizeMode="contain" source={require('../../assets/images/sliderone.png')} />
                <View className="h-3"/>
                <Text style={[Textstyles.text_medium,{color:primarycolortwo}]} className="text-center">
             Welcome to Stulivery
            </Text>
            <View className="h-3"/>
            <Text style={[Textstyles.text_small]} className="text-center">
            Earn money by delivering items while 
            you move around campus. It’s easy, 
            flexible, and fits into your busy student life

            </Text>
            <View className="h-5"/>
            <View className="flex-row justify-start h-2 rounded-xl w-20 bg-slate-200">
                <View style={{backgroundColor:primarycolor}} className="h-2 rounded-xl w-7"/>
            </View>

            </View>
           
            <View className="h-3"/>

        </View>

        </>
    )
}
const Slidertwo=()=>{
    return(
        <>
        <View className="h-full w-full flex">
            <View className="flex-1 flex justify-center items-center">
                <Image className="h-64 w-64" resizeMode="contain" source={require('../../assets/images/slidertwo.png')} />
                <View className="h-3"/>
                <Text style={[Textstyles.text_medium,{color:primarycolortwo}]} className="text-center">
                Flexibility and Convenience
            </Text>
            <View className="h-3"/>
            <Text style={[Textstyles.text_small]} className="text-center">
            Work around your schedule. 
            Deliver on your own time—whether 
            you're heading to class, or 
            just taking a walk across campus.

            </Text>
            <View className="h-5"/>
            <View className="flex-row justify-center h-2 rounded-xl w-20 bg-slate-200">
                <View style={{backgroundColor:primarycolor}} className="h-2 rounded-xl w-7"/>
            </View>

            </View>
           
            <View className="h-3"/>

        </View>

        </>
    )
}
const Sliderthree=()=>{
    return(
        <>
        <View className="h-full w-full flex">
            <View className="flex-1 flex justify-center items-center">
                <Image className="h-64 w-64" resizeMode="contain" source={require('../../assets/images/slidertwo.png')} />
                <View className="h-3"/>
                <Text style={[Textstyles.text_medium,{color:primarycolortwo}]} className="text-center">
                Ready to start delivering?
            </Text>
            <View className="h-3"/>
            <Text style={[Textstyles.text_small]} className="text-center">
            Register on <Text style={[{color:primarycolor},Textstyles.text_medium]}>Stulvilery</Text> and turn your next 
            campus walk into an earning opportunity.
             Sign up now!

            </Text>
            <View className="h-5"/>
            <View className="flex-row justify-end h-2 rounded-xl w-20 bg-slate-200">
                <View style={{backgroundColor:primarycolor}} className="h-2 rounded-xl w-7"/>
            </View>

            </View>
           
            <View className="h-3"/>

        </View>

        </>
    )
}