import { View } from "react-native";
import { height, width } from "../../constants/mobileDimensions";

export default function RootDoctorLayout() {
    return (
        <View
            style={{ height: height, width: width }}
            className="bg-white py-[40px]"
        >
            <StatusBar style="auto" />
        </View>
    )
}