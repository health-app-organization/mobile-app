import NumericKeyboard from "components/modals/custom-keyboard";
import { Box } from "components/utilities/box";
import { CustomButton } from "components/utilities/buttons";
import { CustomInputPassword } from "components/utilities/inputs";
import { primarycolor } from "constants/color";
import { Textstyles } from "constants/fontsize";
import { useState } from "react";
import { Image } from "react-native";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { handleOtpInput } from "utilities/utility";

export default function SetNewPassword({ navigation }: { navigation: any }) {
    return (
        <>
            <View className="flex-1 px-4 py-10">
                <View className="gap-y-10">
                    <View className="gap-y-6">
                        <View className="gap-y-2">
                            <Text className="font-bold text-2xl text-center">Set New Password</Text>
                            <Text className="text-center font-normal text-base">
                                Enter the new password you want to use for your account
                            </Text>
                        </View>
                        <CustomInputPassword
                            label="New password"
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
                            label="Confirm new password"
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
                    </View>
                    <CustomButton
                        Textname="Verify"
                        onPress={() =>
                            navigation.navigate("health-provider", {
                                screen: "safe-area-view",
                                params: { screen: "login" },
                            })
                        }
                    />
                </View>
            </View>
        </>
    );
}
