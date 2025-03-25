import { CustomButton } from "components/utilities/buttons";
import {
    CustomInputPassword,
    CustomTextInput,
} from "components/utilities/inputs";
import { primarycolor } from "constants/color";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

export default function Login({ navigation }: { navigation: any }) {
    return (
        <View className="flex-1 py-20">
            <View className="flex-col items-center flex-1">
                <View className="flex-col items-center">
                    <Text className=" font-bold text-2xl">Welcome Back!</Text>
                    <Image
                        source={require("../../../assets/png-icon/image-3.png")}
                        resizeMode="contain"
                        className="size-[140px]"
                    />
                </View>
                <View className="w-full px-4 gap-y-6">
                    <CustomTextInput
                        label="Email address"
                        value=""
                        onChange={() => { }}
                        placeholder="Enter your email address"
                        borderColor={primarycolor}
                        leftIcon={
                            <Image
                                source={require("../../../assets/png-icon/mail-01.png")}
                                className="size-6"
                                resizeMode="contain"
                            />
                        }
                    />
                    <View>
                        <CustomInputPassword
                            label="Password"
                            value=""
                            onChange={() => { }}
                            placeholder="Enter your password"
                            borderColor={primarycolor}
                            leftIcon={
                                <Image
                                    source={require("../../../assets/png-icon/lock-password.png")}
                                    className="size-6"
                                    resizeMode="contain"
                                />
                            }
                        />
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("health-provider", {
                                    screen: "safe-area-view",
                                    params: { screen: "forgot-password" },
                                })
                            }
                        >
                            <Text className="text-primary">Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <CustomButton
                        Textname="Login"
                        onPress={() =>
                            navigation.navigate("health-provider", { screen: "dashboard" })
                        }
                    />
                </View>
            </View>
            <View className="flex-row items-center justify-center gap-x-2">
                <Text>Don't have an account?</Text>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate("health-provider", {
                            screen: "safe-area-view",
                            params: { screen: "signup" },
                        })
                    }
                >
                    <Text className="text-primary">Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
