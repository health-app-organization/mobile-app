import { CustomButton } from "components/utilities/buttons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Credentials() {
    return (
        <>
            <Tabs />
            <Tabs />
            <Tabs />
            <Tabs />
        </>
    )
}

function Tabs() {
    return (
        <View>
            <View className="flex-row">
                <Text className="font-normal text-base">Medical Certificate</Text>
                <Text style={{ color: "#A30202" }}>*</Text>
            </View>
            <View className="rounded-lg border border-greyText h-20 px-4 border-dashed flex-row items-center bg-white">
                <View className="flex-row flex-1">
                    <View className="w-8 h-8 items-center justify-center rounded-full bg-greyText">
                        <Image
                            source={require("../../../../assets/png-icon/upload-cloud-02.png")}
                            className="size-4"
                            resizeMode="contain"
                        />
                    </View>
                    <View>
                        <Text className="font-medium text-sm">Tap to Upload</Text>
                        <Text className="text-greyText font-normal text-xs">PNG, JPG | 10MB max.</Text>
                    </View>
                </View>
                <TouchableOpacity className="bg-primary rounded-lg p-4">
                    <Text className="text-white font-semibold text-sm">Upload</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}