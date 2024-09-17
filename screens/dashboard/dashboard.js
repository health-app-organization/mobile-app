import { Image, Text, View } from "react-native"
import { height, width } from "../../constants/mobileDimensions"

const Dashbaord=()=>{
    return(
        <>
        
        <View style={{height:height,width:width}} className="px-5 py-[88px]">
            <View>
            <Image
                            className="h-12 w-12"
                            source={require("../../assets/images/logo.png")}
                            resizeMode="contain"
                        />
            </View>


        </View>
        </>
    )

}
export default Dashbaord