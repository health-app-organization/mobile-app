import { useNavigation } from "@react-navigation/native";
import { greycolortwo, primarycolor, primarycolortwo, whitecolor } from "../../constants/color";
import { Image, Text, View } from "react-native";
import { Textstyles } from "../../constants/fontsize";
import { CustomButton } from "../mycomponents/mycomponent";

export const Drawer = ({ navigateTo, buttonText, text, title }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        console.log("to " + navigateTo);
        // navigation.navigate(navigateTo);
    }
    return (
        <>
            <View className="w-screen h-screen">
                <View style={{ backgroundColor: whitecolor }} className="absolute top-[14.5vh] w-full px-6 py-0 rounded-t-[24px] h-1/2 shadow-lg">
                    <View className="h-2" />
                    <View style={{ backgroundColor: greycolortwo }} className="h-1 w-[67px] rounded-[11px] mx-auto" />
                    <View className="h-10" />
                    <Image source={require("../../assets/images/success-svg.png")} resizeMode="contain" className="w-20 h-20 mx-auto" />
                    <View className="h-10" />
                    <View className="items-center">
                        <Text style={[Textstyles.text_medium, { color: primarycolortwo }]}>{title}</Text>
                        <View className="h-3" />
                        <Text style={[Textstyles.text_xsmall, { color: primarycolortwo }]} className="text-center">{text}</Text>
                    </View>
                    <View className="h-10" />
                    <CustomButton
                        backgroundColor={primarycolor}
                        Textname={buttonText}
                        TextColor={whitecolor}
                        onPress={handlePress}
                    />
                    <View className="h-11" />
                    <View className="w-screen absolute bottom-0">
                        <View className="w-[134px] h-[5px] rounded-[100px] bg-[#101010] mx-auto" />
                    </View>
                </View>
            </View>
        </>
    );
};