import { Text, TouchableOpacity, View } from "react-native";
import { height, width } from "../../constants/mobileDimensions";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Textstyles } from "../../constants/fontsize";

export const Step1 = () => {
    return (
        <>
            <View style={{ height: height, width: width }} className="py-[40px]">
                <View className="w-full h-16 justify-center">
                    <View className="w-[75%] flex-row justify-between">
                        <TouchableOpacity className="bg-gray-200 w-[50px] h-[50px] rounded-full mt-auto mb-auto ml-4 flex justify-center items-center">
                            <MaterialCommunityIcons
                                name="arrow-left"
                                size={20}
                                color="black"
                            />
                        </TouchableOpacity>
                        <View className="w-40 h-16 flex justify-center items-center">
                            <Text style={[Textstyles.text_small]} className="font-bold">ID Verification</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export const Step2 = () => {
    return (
        <Text>step 2</Text>
    )
}

export const Step3 = () => {
    return (
        <Text>step 3</Text>
    )
}

export const Step4 = () => {
    return (
        <Text>step 4</Text>
    )
}

export const Step5 = () => {
    return (
        <Text>step 5</Text>
    )
}

export const Step6 = () => {
    return (
        <Text>step 6</Text>
    )
}