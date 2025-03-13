import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { baseUrl } from "api/end-point";
import axios from "axios";
import { useState } from "react";
import { Alert, Pressable, Text, TouchableOpacity, View } from "react-native";
import { StackNavigation } from "types/stack";
import { FontAwesome } from "@expo/vector-icons";
import { Textstyles } from "constants/fontsize";
import { primarycolor, whitecolor } from "constants/color";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import NumericKeyboard from "components/modals/custom-keyboard";
import { handleOtpInput } from "utilities/utility";
import { CustomInputPassword, CustomInputWithHeader } from "components/utilities/inputs";
import { CustomButton } from "components/utilities/buttons";
import { Box } from "components/utilities/box";

export function RequestOtp() {
    const navigation = useNavigation<StackNavigation>();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>("");

    const handleToVerify = async () => {
        setLoading(true);
        setErrorMessage(null);

        try {
            const response = await axios.post(
                `${baseUrl}/auth/user/password/reset/request_otp`,
                { email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const json = await response.data;

            if (json.emailSendStatus === "success") {
                Alert.alert("OTP sent successfully. Check your mail for the OTP.");
                await AsyncStorage.setItem("token", json.token);
                await AsyncStorage.setItem("email", email);
                navigation.navigate("health-seeker", { screen: "forgot-password" });
            }
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error) && error.response) {
                console.error("Error response:", error.response.data);

                // Extract the error message or compose it
                const message =
                    error.response.data.error?.message ||
                    JSON.stringify(error.response.data.error) ||
                    "An error occurred. Please try again.";

                setErrorMessage(message);
            } else if (axios.isAxiosError(error) && error.request) {
                console.error("Error request:", error.request);
                setErrorMessage(
                    "No response from the server. Please check your network connection."
                );
            } else {
                setErrorMessage("An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <View className="h-screen w-full px-5 pt-[44px]">
                <>
                    <View className="h-10" />
                    <View className="gap-y-2">
                        <Text
                            style={[Textstyles.text_medium]}
                            className="text-3xl text-center"
                        >
                            Forgot Password
                        </Text>
                        <Text style={[Textstyles.text_small]} className="text-center">
                            Please enter your email address below
                        </Text>
                    </View>

                    <View className="h-10" />
                    <CustomInputWithHeader
                        headerText="Email"
                        placeholder="Enter your email"
                        leftIcon={<FontAwesome name="envelope" color="#000" size={20} />}
                        value={email}
                        onChange={(text) => setEmail(text)}
                    />
                </>

                <View className="h-10" />
                {errorMessage && (
                    <Text style={[Textstyles.text_xxmedium]} className="text-error">
                        (errorMessage)
                    </Text>
                )}
                <CustomButton
                    Textname={"Request OTP"}
                    onPress={handleToVerify}
                    backgroundColor={primarycolor}
                    TextColor={whitecolor}
                    isLoading={loading}
                    disabled={email === ""}
                />
            </View>
        </>
    );
}

export const ForgotPassword = () => {
    const navigation = useNavigation<StackNavigation>();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleToResetPassword = async () => {
        const token = await AsyncStorage.getItem("token");
        const email = await AsyncStorage.getItem("email");
        // navigation.navigate("set-new-password");
        setLoading(true);
        setErrorMessage(null);

        try {
            const response = await axios.post(
                `${baseUrl}/auth/user/password/reset/verify_otp`,
                { email, otp: otp.join("") },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const json = await response.data;

            if (json.message === "Password reset approved") {
                Alert.alert(
                    "Verification Successful, proceed to set your new password!"
                );
                await AsyncStorage.setItem("token", json.token);
                navigation.navigate("health-seeker", { screen: "set-new-password" });
            }
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error) && error.response) {
                console.error("Error response:", error.response.data);

                // Extract the error message or compose it
                const message =
                    error.response.data.error?.message ||
                    JSON.stringify(error.response.data.error) ||
                    "An error occurred. Please try again.";

                setErrorMessage(message);
            } else if (axios.isAxiosError(error) && error.request) {
                console.error("Error request:", error.request);
                setErrorMessage(
                    "No response from the server. Please check your network connection."
                );
            } else {
                setErrorMessage("An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    const resendCode = async () => {
        const email = await AsyncStorage.getItem("email");
        setLoading(true);
        setErrorMessage(null);
        setOtp(["", "", "", "", "", ""]);

        try {
            const response = await axios.post(
                `${baseUrl}/auth/user/password/reset/request_otp`,
                { email },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const json = await response.data;

            if (json.emailSendStatus === "success") {
                Alert.alert("OTP sent successfully. Check your mail for the OTP.");
                await AsyncStorage.setItem("token", json.token);
            }
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error) && error.response) {
                console.error("Error response:", error.response.data);

                // Extract the error message or compose it
                const message =
                    error.response.data.error?.message ||
                    JSON.stringify(error.response.data.error) ||
                    "An error occurred. Please try again.";

                setErrorMessage(message);
            } else if (axios.isAxiosError(error) && error.request) {
                console.error("Error request:", error.request);
                setErrorMessage(
                    "No response from the server. Please check your network connection."
                );
            } else {
                setErrorMessage("An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    const [showKeyboard, setShowKeyboard] = useState(false);
    const [otp, setOtp] = useState(["", "", "", "", "", ""]); // OTP input array
    const translateY = useSharedValue(565); // Animation for the keyboard
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));
    // Toggle keyboard visibility
    const handleShowKeys = () => {
        setShowKeyboard((prevState) => !prevState);
        translateY.value = showKeyboard ? withSpring(565) : withSpring(165);
    };

    return (
        <>
            <View className="h-full w-full px-5 pt-[44px]">
                <>

                    <View className="h-10" />
                    <View className="gap-y-2">
                        <Text
                            style={[Textstyles.text_medium]}
                            className="text-3xl text-center"
                        >
                            Forgot Password
                        </Text>
                        <Text style={[Textstyles.text_small]} className="text-center">
                            Please enter the 6 digit code sent to your email below
                        </Text>
                    </View>

                    <View className="h-10" />
                    <View style={{ alignItems: "center", marginTop: 40 }}>
                        {errorMessage && (
                            <Text style={[Textstyles.text_xsmall]} className="text-red-300">
                                {errorMessage}
                            </Text>
                        )}
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
                    <View className="flex-row items-center gap-x-2 mt-3">
                        <Text style={[Textstyles.text_small]}>Didn’t get a code?</Text>
                        <TouchableOpacity onPress={resendCode}>
                            <Text style={[Textstyles.text_small]} className=" text-[#0099b8]">
                                Resend code
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>

                <View className="h-10" />
                <CustomButton
                    Textname={"Verify"}
                    onPress={handleToResetPassword}
                    backgroundColor={primarycolor}
                    TextColor={whitecolor}
                    isLoading={loading}
                    disabled={otp.includes("")}
                />
            </View>

            {/* Numerical keyboard */}
            <View className="absolute -bottom-5 z-50 items-center">
                <Animated.View className="w-full h-[467px]" style={[animatedStyles]}>
                    <NumericKeyboard
                        onPress={(value: string) =>
                            handleOtpInput({ value, setOtp, otp, setErrorMessage })
                        }
                    />
                </Animated.View>
            </View>
        </>
    );
};

export const SetNewPassword = () => {
    const navigation = useNavigation<StackNavigation>();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleToLogin = async () => {
        const token = await AsyncStorage.getItem("token");
        setLoading(true);
        setErrorMessage(null);

        try {
            const response = await axios.post(
                `${baseUrl}/auth/user/password/reset/reset_password`,
                { password, confirmPassword },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const json = await response.data;

            if (json.message === "Password reset successful") {
                Alert.alert(
                    "Password reset successful. Please login with your new password."
                );
                navigation.navigate("health-seeker", { screen: "login" });
            }
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error) && error.response) {
                console.error("Error response:", error.response.data);

                // Extract the error message or compose it
                const message =
                    error.response.data.error?.message ||
                    JSON.stringify(error.response.data.error) ||
                    "An error occurred. Please try again.";

                setErrorMessage(message);
            } else if (axios.isAxiosError(error) && error.request) {
                console.error("Error request:", error.request);
                setErrorMessage(
                    "No response from the server. Please check your network connection."
                );
            } else {
                setErrorMessage("An error occurred");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <View className="h-screen w-full px-5 pt-[44px]">
                <>

                    <View className="h-10" />
                    <View className="gap-y-2">
                        <Text
                            style={[Textstyles.text_medium]}
                            className="text-3xl text-center"
                        >
                            Set New Password
                        </Text>
                        <Text style={[Textstyles.text_small]} className="text-center">
                            Enter the new password you want to use for your account
                        </Text>
                    </View>

                    <View className="h-10" />
                    <CustomInputPassword
                        headerText="Password"
                        placeholder="New password"
                        value={password}
                        secureTextEntry={true} // Enable password mode with secureTextEntry
                        onChange={(text) => setPassword(text)} // Update password state on input change
                        leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
                    />

                    <View className="h-3" />
                    <CustomInputPassword
                        headerText="Confirm Password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        secureTextEntry={true} // Enable password mode with secureTextEntry
                        onChange={(text) => setConfirmPassword(text)} // Update password state on input change
                        leftIcon={<FontAwesome name="lock" color="#000" size={20} />}
                    />
                </>

                <View className="h-10" />
                <CustomButton
                    Textname={"Set New Password"}
                    onPress={handleToLogin}
                    backgroundColor={primarycolor}
                    TextColor={whitecolor}
                    isLoading={loading}
                    disabled={password === "" || confirmPassword === ""}
                />
            </View>
        </>
    );
};
