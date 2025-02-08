import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { height } from "../../../constants/mobileDimensions";
import { Textstyles } from "../../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { primarycolor, whitecolor } from "../../../constants/color";
import { FontAwesome } from "@expo/vector-icons";
import { CustomButton, CustomInputpassword, CustomInputWithHeader } from "../../../components/mycomponent";
import { StackNavigation } from "../../../types/stack";

export default function HealthProviderLogin() {
    const navigation = useNavigation<StackNavigation>();
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToSignup = () => {
        navigation.navigate("doctor-signup");
    };
    const handletodashboard = () => {
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
                                source={require("../../../assets/images/logo-2.png")}
                                resizeMode="contain"
                                className=" h-36 w-36"
                            />
                        </View>
                    </View>
                <CustomInputWithHeader
                    headerText="Phone Number"
                    placeholder="Enter your phone number"
                    leftIcon={<FontAwesome name="phone" color="#000" size={20} />}
                    value={phoneNumber}
                    onChange={(text) => setPhoneNumber(text)}
                />

                <View className="h-3" />
                <CustomInputpassword
                    headerText="Password"
                    placeholder="Enter your password"
                    value={password}
                    secureTextEntry={true} // Enable password mode with secureTextEntry
                    onChange={(text) => setPassword(text)} // Update password state on input change
                    leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
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
                onPress={handletodashboard}
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
    )
}