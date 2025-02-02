import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { height } from "../../../../constants/mobileDimensions";
import { Textstyles } from "../../../../constants/fontsize";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Box, CustomButton } from "../../../../components/mycomponent";
import { useState } from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import NumericKeyboard from "../../../modals/CustomKeyboard";
import { primarycolor, whitecolor } from "../../../../constants/color";

export default function Verification() {
    const [errorMsg, setErrorMsg] = useState(null);
    const [showKeyboard, setShowKeyboard] = useState(false); // State to toggle keyboard visibility
    const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP input array
    const translateY = useSharedValue(565); // Animation for the keyboard
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    };
    const handleToLogin = () => {
        navigation.navigate("doctor-login");
    };
    // Toggle keyboard visibility
    const handleShowKeys = () => {
        setShowKeyboard((prevState) => !prevState);
        translateY.value = showKeyboard ? withSpring(565) : withSpring(165);
    };
    // Function to handle OTP input
    const handleOtpInput = (value) => {
        if (value === "") {
            // Handle deletion of the last inputted digit
            setOtp((prevOtp) => {
                const lastFilledIndex = prevOtp.findLastIndex((digit) => digit !== "");
                if (lastFilledIndex > -1) {
                    const newOtp = [...prevOtp];
                    newOtp[lastFilledIndex] = "";
                    return newOtp;
                }
                return prevOtp;
            });
        } else if (value === "*") {
            // Handle OTP submission when "*" is pressed
            if (otp.some((digit) => digit === "")) {
                setErrorMsg("Incomplete OTP");
            } else {
                setErrorMsg(null);
                console.log("OTP Submitted:", otp.join(""));
                // Handle OTP submission logic here
            }
        } else {
            // Add new digit to the first empty slot
            setOtp((prevOtp) => {
                const nextEmptyIndex = prevOtp.indexOf("");
                if (nextEmptyIndex > -1) {
                    const newOtp = [...prevOtp];
                    newOtp[nextEmptyIndex] = value;
                    return newOtp;
                }
                return prevOtp;
            });
        }
    };

    return (
        <SafeAreaView style={{ height: height }} className="py-2 px-4">
            <TouchableOpacity onPress={handleGoBack}>
                <AntDesign name="left" size={30} color="black" />
            </TouchableOpacity>
            <View className="h-10" />
            <View>
                <Text style={[Textstyles.text_medium]} className="mb-4 text-center">
                    Verification
                </Text>
                <Text style={[Textstyles.text_small]} className="text-center">
                    Please enter the 6 digit code sent to your phone number below
                </Text>
            </View>
            <View style={{ alignItems: "center", marginTop: 40 }}>
                <Text style={[Textstyles.text_xsmall]} className="text-red-300">
                    {errorMsg}
                </Text>
                <Pressable
                    onPress={handleShowKeys}
                    className="flex-row justify-center items-center"
                >
                    {otp.map((digit, index) => (
                        <View
                            key={index}
                            style={{ flexDirection: "row", alignItems: "center" }}
                        >
                            <Box inputText={digit} />
                            {index < otp.length - 1 && <View className="w-4" />}
                        </View>
                    ))}
                </Pressable>
            </View>
            <View className="h-4" />
            <View className="flex-row items-center gap-x-2 mx-auto">
                <Text
                    style={[Textstyles.text_small]}
                // className="text-center mt-6"
                >
                    Didn't get a code?
                </Text>
                <TouchableOpacity>
                    <Text style={[Textstyles.text_small]} className="text-[#0099b8]">
                        Resend
                    </Text>
                </TouchableOpacity>
            </View>
            <View className="h-10" />
            <CustomButton
                Textname="Verify"
                backgroundColor={primarycolor}
                TextColor={whitecolor}
                onPress={handleToLogin}
            />
            {/* Numerical keyboard */}
            <View className="absolute -bottom-5 z-50 items-center">
                <Animated.View className="w-full h-[467px]" style={[animatedStyles]}>
                    <NumericKeyboard onPress={(value) => handleOtpInput(value)} />
                </Animated.View>
            </View>
        </SafeAreaView>
    );
}
