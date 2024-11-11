import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { height } from "../../../../constants/mobileDimensions";
import { Textstyles } from "../../../../constants/fontsize";
import {
    CustomButton,
    CustomInputpassword,
    CustomInputWithHeader,
} from "../../../mycomponents/mycomponent";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { primarycolor, whitecolor } from "../../../../constants/color";

export default function HealthProviderLogin() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleToSignup = () => {
        navigation.navigate("doctor-signup");
    };
    const handleToDashboard = () => {
        navigation.navigate("doctor-home");
    };

    return (
        <SafeAreaView style={{ height: height }} className="px-5 py-[88px]">
            <>
                <Text
                    style={[Textstyles.text_medium]}
                    className="text-3xl text-center mt-4"
                >
                    Welcome Back !! provider...
                </Text>
                <View className="w-full h-44  flex mb-4 justify-center items-center">
                    <View className=" w-[50%]  flex justify-center items-center h-36">
                        <Image
                            source={require("../../../../assets/images/logo-2.png")}
                            resizeMode="contain"
                            className=" h-36 w-36"
                        />
                    </View>
                </View>
                <CustomInputWithHeader
                    headerText="Phone Number"
                    placeholder="Enter your phone number"
                    leftIconName="phone" // Use FontAwesome email icon
                    onChange={(text) => console.log(text)}
                />
                <View className="h-3" />
                <CustomInputpassword
                    headerText="Password"
                    placeholder="Enter your password"
                    value={password}
                    secureTextEntry={true} // Enable password mode with secureTextEntry
                    onChange={(text) => setPassword(text)} // Update password state on input change
                    leftIconName="lock" // Optional: Add a lock icon on the left
                    leftIconColor="#000"
                    leftIconSize={20}
                />
                <View className=" mt-3">
                    <TouchableOpacity>
                        <Text style={[Textstyles.text_small]} className=" text-[#0099b8]">
                            Forget Password ?
                        </Text>
                    </TouchableOpacity>
                </View>
            </>
            <View className="h-10" />
            <CustomButton
                Textname={"Login"}
                onPress={handleToDashboard}
                backgroundColor={primarycolor}
                TextColor={whitecolor}
            />
            <View className=" flex-row h-12 mt-36 w-full justify-center  ">
                <View>
                    <Text style={[Textstyles.text_small]} className="text-center mt-6">
                        Don't have an account?
                    </Text>
                </View>
                <TouchableOpacity className=" mt-6 ml-1" onPress={handleToSignup}>
                    <Text style={[Textstyles.text_small]} className=" text-[#0099b8]">
                        Sign up
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
