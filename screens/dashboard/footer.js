import { View,TouchableOpacity} from "react-native"
import { linkcolor, primarycolor, whitecolor } from "../../constants/color"
import { CalenderIcon, HomeIcon, MessageIcon } from "../../assets/iconsvg/Svgicon"
import { width } from "../../constants/mobileDimensions"

const Footer=()=>{
    return(
        <>
        <View className="w-full h-24 bg-white absolute bottom-0 flex-row items-center justify-evenly z-50">
            <TouchableOpacity style={{backgroundColor:linkcolor}} className="w-12 h-12 flex justify-center items-center rounded-xl">
                <HomeIcon
                width={24}
                height={24}
                color={primarycolor}
                />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:whitecolor}} className="w-12 h-12 flex justify-center items-center rounded-xl">
                <MessageIcon
                width={24}
                height={24}
                color="black"
                />
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor:whitecolor}} className="w-12 h-12 flex justify-center items-center rounded-xl">
                <CalenderIcon
                width={24}
                height={24}
                color="black"
                />
            </TouchableOpacity>
             <TouchableOpacity style={{backgroundColor:whitecolor}} className="w-12 h-12 flex justify-center items-center rounded-xl">
                <HomeIcon
                width={24}
                height={24}
                color="black"
                />
            </TouchableOpacity>
    
        </View>
        </>

    )
  
}
export default Footer
