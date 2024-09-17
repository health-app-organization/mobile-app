import { Image, Text, View } from "react-native"
import { height, width } from "../../constants/mobileDimensions"

const Dashboard=()=>{
    return(
        <>
        
        <View style={{height:height,width:width}} className="px-5 py-[88px]">
            <View className="flex-row">
            <Image
                            className="h-12 w-12"
                            source={require("../../assets/images/logo.png")}
                            resizeMode="contain"
                        />
            <View className="w-3"/>              
            <View className="items-start">
                <Text>Welcome back</Text>
                <Text>John</Text>

            </View>
            </View>


        </View>
        </>
    )

}
export default Dashboard