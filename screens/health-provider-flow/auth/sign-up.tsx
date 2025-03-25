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
        <View className="flex-1 px-4 py-20">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="gap-y-6">
                    <View className="gap-y-2">
                        <Text className="font-bold text-2xl text-center">
                            Welcome to WESTACARE
                        </Text>
                        <Text className="text-center font-normal text-base">
                            Please enter your personal information to create your account
                        </Text>
                    </View>
                    <CustomTextInput
                        label="Phone number"
                        value=""
                        onChange={() => { }}
                        placeholder="Enter your phone number"
                        borderColor={primarycolor}
                        leftIcon={
                            <Image
                                source={require("../../../assets/png-icon/smart-phone-01.png")}
                                className="size-6"
                                resizeMode="contain"
                            />
                        }
                    />
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
                    <CustomInputPassword
                        label="Confirm password"
                        value=""
                        onChange={() => { }}
                        placeholder="Enter your password again"
                        borderColor={primarycolor}
                        leftIcon={
                            <Image
                                source={require("../../../assets/png-icon/lock-password.png")}
                                className="size-6"
                                resizeMode="contain"
                            />
                        }
                    />
                    <CustomButton
                        Textname="Continue"
                        onPress={() =>
                            navigation.navigate("health-provider", {
                                screen: "safe-area-view",
                                params: { screen: "verification" },
                            })
                        }
                    />
                    <View>
                        <Text className="text-center">
                            By clicking continue, you are agreeing to the
                        </Text>
                        <View className="flex-row items-center justify-center">
                            <TouchableOpacity>
                                <Text className="text-primary">Terms of Use</Text>
                            </TouchableOpacity>
                            <Text> and the </Text>
                            <TouchableOpacity>
                                <Text className="text-primary">Privacy Policy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
