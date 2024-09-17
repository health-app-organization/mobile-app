import { Image, Text, TouchableOpacity, View } from "react-native";
import Google from "../../assets/images/google.svg";
import Facebook from "../../assets/images/facebook.svg";
import Apple from "../../assets/images/apple.svg";
import { Textstyles } from "../../constants/fontsize";
import {
    greycolorfive,
    greycolorthree,
    greycolortwo,
    primarycolor,
    primarycolortwo,
    whitecolor,
} from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
import {
    CustomButton,
    CustomSelect,
    CustomSelectRadioBox,
    CustomTextInput,
    MyDivider,
} from "../mycomponents/mycomponent";
import {
    Feather,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import { useState } from "react";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from "react-native-reanimated";
import { height } from "../../constants/mobileDimensions";
import { Drawer } from "../modals/drawer";

export default function Registration() {
    const navigation = useNavigation();
    const [currentStep, setCurrentStep] = useState(0); //0 and 1 and 2
    const [email, setEmail] = useState("");
    const [studentSelectOption, setStudentSelectOption] = useState("");
    const handleStudentSelectOption = (value) => {
        setStudentSelectOption(value);
    };
    const [roleSelectOption, setRoleSelectOption] = useState("");
    const handleRoleSelectOption = (value) => {
        setRoleSelectOption(value);
    };
    const [showStudentOption, setShowStudentOption] = useState(false);
    const handleShowStudentOption = () => {
        setShowStudentOption(!showStudentOption);
        if (showStudentOption) {
            setStudentSelectOption("");
            setRoleSelectOption("");
            setShowRoleSelectOption(false);
        }
    }
    const [showRoleSelectOption, setShowRoleSelectOption] = useState(false);
    const handleShowRoleSelectOption = () => {
        setShowRoleSelectOption(!showRoleSelectOption);
        if (showRoleSelectOption) {
            setRoleSelectOption("");
        }
    }
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
    const handleToLogin = () => {
        navigation.navigate("login");
    };
    const [showDrawer, setShowDrawer] = useState(false);
    const handleContinue = () => {
        if (currentStep < 2) {
            setCurrentStep((prevStep) => prevStep + 1);
        }
        if (currentStep === 2) {
            setShowDrawer(true);
            translateY.value = setShowDrawer ? withSpring(300) : withSpring(600);
        }
    };
    const handleContinueBackwards = () => {
        if (currentStep > 0) {
            setCurrentStep((prevStep) => prevStep - 1);
        }
    };
    const translateY = useSharedValue(600);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));
    return (
        <>
            {showDrawer && (
                <>
                    <View
                        style={{ height: height, backgroundColor: greycolorfive }}
                        className="w-full absolute z-50 opacity-70"
                    />
                    <View style={{ zIndex: 12000 }} className="bottom-0 absolute">
                        <Animated.View style={[animatedStyles]}>
                            <Drawer
                                title="Successful"
                                text={
                                    <Text>
                                        Your <Text style={{ color: primarycolor }}>stulivery</Text>{" "}
                                        account has been registered successfully
                                    </Text>
                                }
                                buttonText="Go to dashboard"
                                navigateTo="dashboard"
                            />
                        </Animated.View>
                    </View>
                </>
            )}
            <View style={{ height: height }} className={`w-full px-5 py-[88px]`}>
                <View>
                    <View>
                        <Image
                            className="h-12 w-12"
                            source={require("../../assets/images/logo.png")}
                            resizeMode="contain"
                        />
                        <View className="h-8" />
                        <Text style={[Textstyles.text_medium]}>Create an account</Text>
                        <Text style={[Textstyles.text_xsmall]}>
                            Enter your details to create your{" "}
                            <Text style={{ color: primarycolor }}>Stulvilery</Text> account
                        </Text>
                        <View className="h-4" />
                        {currentStep > 0 && (
                            <TouchableOpacity
                                onPress={handleContinueBackwards}
                                className="flex flex-row items-center"
                            >
                                <MaterialIcons
                                    name="keyboard-backspace"
                                    size={24}
                                    color={primarycolortwo}
                                />
                                <Text
                                    style={[Textstyles.text_xsmall, { color: primarycolortwo }]}
                                >
                                    Previous
                                </Text>
                            </TouchableOpacity>
                        )}
                        <View className="h-4" />
                        {currentStep === 0 && (
                            <>
                                <CustomTextInput
                                    placeholder={"Name"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <Ionicons
                                            name="person-outline"
                                            size={20}
                                            color={primarycolortwo}
                                        />
                                    }
                                    onChange={(text) => setEmail(text)}
                                />
                                <View className="h-3" />
                                <CustomTextInput
                                    placeholder={"Email"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <Feather name="mail" size={20} color={primarycolortwo} />
                                    }
                                    onChange={(text) => setEmail(text)}
                                />
                                <View className="h-3" />
                                <CustomTextInput
                                    placeholder={"Phone number"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <MaterialIcons
                                            name="phone-android"
                                            size={20}
                                            color={primarycolortwo}
                                        />
                                    }
                                    onChange={(text) => setEmail(text)}
                                />
                            </>
                        )}
                        {currentStep === 1 && (
                            <>
                                <CustomTextInput
                                    placeholder={"Password"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <FontAwesome5
                                            name="lock"
                                            size={20}
                                            color={primarycolortwo}
                                        />
                                    }
                                    rightIcon={
                                        <TouchableOpacity onPress={handleShowPassword}>
                                            <MaterialCommunityIcons
                                                name={showPassword ? "eye-outline" : "eye-off-outline"}
                                                size={20}
                                                color={primarycolortwo}
                                            />
                                        </TouchableOpacity>
                                    }
                                    onChange={(text) => setEmail(text)}
                                    secureTextEntry={!showPassword}
                                />
                                <View className="h-3" />
                                <CustomTextInput
                                    placeholder={"Confirm password"}
                                    placeholderTextColor={greycolortwo}
                                    sideicon={
                                        <FontAwesome5
                                            name="lock"
                                            size={20}
                                            color={primarycolortwo}
                                        />
                                    }
                                    rightIcon={
                                        <TouchableOpacity onPress={handleShowConfirmPassword}>
                                            <MaterialCommunityIcons
                                                name={
                                                    showConfirmPassword
                                                        ? "eye-outline"
                                                        : "eye-off-outline"
                                                }
                                                size={20}
                                                color={primarycolortwo}
                                            />
                                        </TouchableOpacity>
                                    }
                                    onChange={(text) => setEmail(text)}
                                    secureTextEntry={!showConfirmPassword}
                                />
                            </>
                        )}
                        {currentStep === 2 && (
                            <>
                                <TouchableOpacity
                                    onPress={handleShowStudentOption}
                                >
                                    <CustomSelect
                                        placeHolder="Are you a student"
                                        placeholderTextColor={greycolortwo}
                                        leftIcon={
                                            <MaterialCommunityIcons
                                                name="chat-question-outline"
                                                size={20}
                                                color={greycolortwo}
                                            />
                                        }
                                        rightIcon={
                                            <MaterialIcons
                                                name={showStudentOption ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                                                size={20}
                                                color={greycolortwo}
                                            />
                                        }
                                    />
                                </TouchableOpacity>
                                <View className="h-3" />
                                {showStudentOption && (
                                    <CustomSelectRadioBox
                                        selected={studentSelectOption}
                                        setSelected={handleStudentSelectOption}
                                        options={["Yes", "No"]}
                                    />
                                )}
                                <View className="h-8" />
                                {studentSelectOption === "Yes" ? (
                                    <>
                                        <CustomTextInput
                                            placeholder="Student ID/ Matric number"
                                            placeholderTextColor={greycolortwo}
                                            sideicon={
                                                <MaterialIcons
                                                    name="account-box"
                                                    size={20}
                                                    color={greycolortwo}
                                                />
                                            }
                                            onChange={(text) => setEmail(text)}
                                        />
                                    </>
                                ) : (
                                    studentSelectOption === "No" && (
                                        <>
                                            <TouchableOpacity
                                                onPress={handleShowRoleSelectOption}
                                            >
                                                <CustomSelect
                                                    placeHolder="Choose role"
                                                    placeholderTextColor={greycolortwo}
                                                    leftIcon={
                                                        <MaterialCommunityIcons
                                                            name="chat-question-outline"
                                                            size={20}
                                                            color={greycolortwo}
                                                        />
                                                    }
                                                    rightIcon={
                                                        <MaterialIcons
                                                            name={showRoleSelectOption ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                                                            size={20}
                                                            color={greycolortwo}
                                                        />
                                                    }
                                                />
                                            </TouchableOpacity>
                                            <View className="h-8" />
                                            {showRoleSelectOption && (
                                                <CustomSelectRadioBox
                                                    selected={roleSelectOption}
                                                    setSelected={handleRoleSelectOption}
                                                    options={["University Teaching Staff", "Non-teaching staff", "Resident"]}
                                                />
                                            )}
                                        </>
                                    )
                                )}
                            </>
                        )}
                    </View>
                    <View>
                        <View className="h-8" />
                        <CustomButton
                            backgroundColor={primarycolor}
                            Textname={currentStep === 2 ? "Create Account" : "Continue"}
                            TextColor={whitecolor}
                            onPress={handleContinue}
                        />
                    </View>
                </View>

                <View className="h-10" />

                {currentStep === 0 && (
                    <View className="items-center">
                        <View className="flex-row items-center justify-center">
                            <MyDivider width={96} Color={greycolorthree} />
                            <View className="w-3" />
                            <Text style={[Textstyles.text_button]}>Or sign up with</Text>
                            <View className="w-3" />
                            <MyDivider width={96} Color={greycolorthree} />
                        </View>
                        <View className="h-3" />
                        <View className="flex-row">
                            <TouchableOpacity
                                style={{ height: 30, width: 30 }}
                                className="rounded-full border flex justify-center items-center"
                            >
                                <Google width={24} height={24} />
                            </TouchableOpacity>
                            <View className="w-3" />
                            <TouchableOpacity
                                style={{ height: 30, width: 30 }}
                                className="rounded-full border flex justify-center items-center"
                            >
                                <Facebook width={24} height={24} />
                            </TouchableOpacity>
                            <View className="w-3" />
                            <TouchableOpacity
                                style={{ height: 30, width: 30 }}
                                className="rounded-full border flex justify-center items-center"
                            >
                                <Apple width={24} height={24} />
                            </TouchableOpacity>
                        </View>
                        <View className="h-8" />
                        <View>
                            <View className="flex-row items-center justify-center">
                                <Text style={[Textstyles.text_small, { color: primarycolortwo }]}>
                                    Have an account?{" "}
                                </Text>
                                <TouchableOpacity onPress={handleToLogin}>
                                    <Text style={[Textstyles.text_small, { color: primarycolor }]}>
                                        Login
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        </>
    );
}
