import { Image, View, Text, Pressable } from "react-native"
import Google from "../../assets/images/google.svg"
import Facebook from "../../assets/images/facebook.svg"
import Apple from "../../assets/images/apple.svg"
import { Box, CustomButton, CustomTextInput, MyDivider } from "../mycomponents/mycomponent"
import { greycolorthree, greycolortwo, primarycolor, primarycolortwo, whitecolor } from "../../constants/color"
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useState, Fragment } from "react";
import { Textstyles } from "../../constants/fontsize";
import { TouchableOpacity } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"
import EmailDisplay from "../../utilities/emailMask"
import NumericKeyboard from "../modals/CustomKeyboard"
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"


export const Login = () => {
    const navigation = useNavigation()
    const [email, setemail] = useState('')
    const handlesubmit = () => {

    }
    return (
        <>
            <View className="h-full w-full px-5">
                <View className="h-2/3 flex justify-center">
                    <Image className="h-12 w-12" source={require('../../assets/images/logo.png')} resizeMode="contain" />
                    <View className="h-8" />
                    <Text style={[Textstyles.text_medium]}>
                        Login to your account
                    </Text>

                    <Text style={[Textstyles.text_xsmall]}>
                        Enter your login details to have access to your account

                    </Text>
                    <View className="h-8" />
                    <CustomTextInput
                        placeholder={'Email'}
                        placeholderTextColor={greycolortwo}
                        sideicon={
                            <Feather name="mail" size={20} color={primarycolortwo} />
                        }
                        onChange={(text) => setemail(text)}

                    />
                    <View className="h-3" />
                    <CustomTextInput
                        placeholder={'Password'}
                        placeholderTextColor={greycolortwo}
                        sideicon={
                            <FontAwesome5 name="lock" size={20} color={primarycolortwo} />
                        }
                        onChange={(text) => setemail(text)}
                        secureTextEntry={true}

                    />
                    <TouchableOpacity onPress={() => navigation.navigate('forgotpass')}><Text style={[Textstyles.text_small, { color: primarycolor }]} className="text-right">forgot password?</Text></TouchableOpacity>
                    <View className="h-8" />
                    <CustomButton
                        backgroundColor={primarycolor}
                        Textname={'Login'}
                        TextColor={whitecolor}
                        onPress={handlesubmit}
                    />

                </View>

                <View className="items-center">
                    <View className="flex-row items-center justify-center">
                        <MyDivider
                            width={96}
                            Color={greycolorthree}
                        />
                        <View className="w-3" />
                        <Text style={[Textstyles.text_button]}>
                            Or sign in with
                        </Text>
                        <View className="w-3" />
                        <MyDivider
                            width={96}
                            Color={greycolorthree}
                        />

                    </View>
                    <View className="h-3" />
                    <View className="flex-row">
                        <TouchableOpacity style={{ height: 30, width: 30 }} className="rounded-full border flex justify-center items-center">
                            <Google
                                width={24} height={24}
                            />
                        </TouchableOpacity>
                        <View className="w-3" />
                        <TouchableOpacity style={{ height: 30, width: 30 }} className="rounded-full border flex justify-center items-center">
                            <Facebook
                                width={24} height={24}
                            />
                        </TouchableOpacity>
                        <View className="w-3" />
                        <TouchableOpacity style={{ height: 30, width: 30 }} className="rounded-full border flex justify-center items-center">
                            <Apple
                                width={24} height={24}
                            />
                        </TouchableOpacity>

                    </View>
                    <View className="h-8" />
                    <View>
                        <Text className="flex-row items-center justify-center" style={[Textstyles.text_small, { color: primarycolortwo }]}>
                            I don't have an account? <TouchableOpacity><Text style={[Textstyles.text_small, { color: primarycolor }]}>Sign Up</Text></TouchableOpacity>
                        </Text>
                    </View>



                </View>



            </View>
        </>
    )
}
export const Forgotpass = () => {
    const navigation = useNavigation()
    const [email, setemail] = useState('')
    const handlesubmit = () => {
        navigation.navigate('otpverify')

    }
    return (
        <>
            <View className="h-full w-full px-5">
                <View className="h-2/3 flex justify-center">
                    <Image className="h-12 w-12" source={require('../../assets/images/logo.png')} resizeMode="contain" />
                    <View className="h-8" />
                    <Text style={[Textstyles.text_medium]}>
                        Forgot password
                    </Text>

                    <Text style={[Textstyles.text_xsmall]}>
                        Enter your email address and we’ll send you confirmation code to reset your password
                    </Text>
                    <View className="h-8" />
                    <CustomTextInput
                        placeholder={'Email'}
                        placeholderTextColor={greycolortwo}
                        sideicon={
                            <Feather name="mail" size={20} color={primarycolortwo} />
                        }
                        onChange={(text) => setemail(text)}

                    />

                    <View className="h-8" />
                    <CustomButton
                        backgroundColor={primarycolor}
                        Textname={'Send'}
                        TextColor={whitecolor}
                        onPress={handlesubmit}
                    />

                </View>





            </View>
        </>
    )
}
export const Otpverify = () => {
    const [email, setemail] = useState('yomzeew@gmail.com');
    const [showkeyboard, setshowkeyboard] = useState(false);
    const [otpArray, setotpArray] = useState(["", "", "", ""]); // OTP array for 4 digits
    const [errorMsg, seterrorMsg] = useState('');
    const navigation=useNavigation()

    const handleshowkeys = () => {
        setshowkeyboard(prevState => !prevState);
        translateY.value = showkeyboard ? withSpring(0) : withSpring(300);
    };

    const translateY = useSharedValue(300);
    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateY: translateY.value }],
    }));

    // Function to update OTP values
    const handlepickvalue = (value) => {
        if (value === '') {
            // Handle delete action (remove the last filled digit)
            setotpArray((prevOtp) => {
                const lastFilledIndex = prevOtp.findLastIndex((digit) => digit !== ''); // Find the last filled index
                if (lastFilledIndex > -1) {
                    const newOtp = [...prevOtp];
                    newOtp[lastFilledIndex] = ''; // Remove the last filled digit
                    return newOtp;
                }
                return prevOtp; // Return unchanged if OTP is already empty
            });
        } else if (value === '*') {
            // Handle OTP submission when * is pressed
            if (otpArray.some((digit) => digit === "")) {
                seterrorMsg('Incomplete OTP'); // Show error if OTP is incomplete
            } else {
                seterrorMsg(''); // Clear the error message
                // Handle OTP submission logic here
                console.log('OTP Submitted:', otpArray.join('')); // Example submission action
            }
        } else {
            // Append digit to the first empty slot
            setotpArray((prevOtp) => {
                const nextEmptyIndex = prevOtp.indexOf(''); // Find the first empty index
                if (nextEmptyIndex > -1) {
                    const newOtp = [...prevOtp];
                    newOtp[nextEmptyIndex] = value; // Fill the empty slot
                    return newOtp;
                }
                return prevOtp; // Return unchanged if OTP is already filled
            });
        }
    };
    const handlesubmit=()=>{
        navigation.navigate('confirmpass')

    }



    return (
        <>
            <View className="absolute bottom-0 z-50 items-center">
                <Animated.View className="w-full" style={[animatedStyles]}>
                    <NumericKeyboard onPress={(value) => handlepickvalue(value)} />
                </Animated.View>
            </View>
            <View className="h-full w-full px-5">
                <View className="h-2/3 flex justify-center">
                    <Image className="h-12 w-12" source={require('../../assets/images/logo.png')} resizeMode="contain" />
                    <View className="h-8" />
                    <Text style={[Textstyles.text_medium]}>
                        Forgot password
                    </Text>
                    <Text style={[Textstyles.text_xsmall]}>
                        Enter the 4-digit confirmation code sent to your email <EmailDisplay email={email} />
                    </Text>
                    <View className="h-8" />
                    <Text style={[Textstyles.text_xsmall]} className="text-red-300">{errorMsg}</Text>
                    <Pressable onPress={handleshowkeys} className="flex-row justify-center items-center">
                        {otpArray.map((digit, index) => (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Box inputText={digit} />
                                {index < otpArray.length - 1 && <View className="w-2" />}
                            </View>
                        ))}
                    </Pressable>
                    <View className="h-8" />
                    <CustomButton
                        backgroundColor={primarycolor}
                        Textname={'Send'}
                        TextColor={whitecolor}
                        onPress={() => {
                            if (otpArray.some(digit => digit === '')) {
                                seterrorMsg('Incomplete OTP');
                            } else {
                                handlesubmit()
                                // Handle OTP submit logic here
                            }
                        }}
                    />
                </View>
            </View>
        </>
    );
};
export const ConfirmPassword=()=>{
    const [email,setemail]=useState('')
    const navigation=useNavigation('')
    const handlesubmit=()=>{
        
    }

    return(
        <>
        <View className="h-full w-full px-5">
                <View className="h-2/3 flex justify-center">
                    <Image className="h-12 w-12" source={require('../../assets/images/logo.png')} resizeMode="contain" />
                    <View className="h-8" />
                    <Text style={[Textstyles.text_medium]}>
                    Reset password
                    </Text>

                    <Text style={[Textstyles.text_xsmall]}>
                    Enter your new password. Note: your new password must be different from the old password

                    </Text>
                    <View className="h-8" />
                    <CustomTextInput
                        placeholder={'Password'}
                        placeholderTextColor={greycolortwo}
                        sideicon={
                            <FontAwesome5 name="lock" size={20} color={primarycolortwo} />
                        }
                        onChange={(text) => setemail(text)}
                        secureTextEntry={true}

                    />
                    <View className="h-3" />
                    <CustomTextInput
                        placeholder={'Confirm Password'}
                        placeholderTextColor={greycolortwo}
                        sideicon={
                            <FontAwesome5 name="lock" size={20} color={primarycolortwo} />
                        }
                        onChange={(text) => setemail(text)}
                        secureTextEntry={true}

                    />
                    <View className="h-8" />
                    <CustomButton
                        backgroundColor={primarycolor}
                        Textname={'Login'}
                        TextColor={whitecolor}
                        onPress={handlesubmit}
                    />

                </View>

                <View className="items-center">
                    <View className="flex-row items-center justify-center">
                        <MyDivider
                            width={96}
                            Color={greycolorthree}
                        />
                        <View className="w-3" />
                        <Text style={[Textstyles.text_button]}>
                            Or sign in with
                        </Text>
                        <View className="w-3" />
                        <MyDivider
                            width={96}
                            Color={greycolorthree}
                        />

                    </View>
                    <View className="h-3" />
                    <View className="flex-row">
                        <TouchableOpacity style={{ height: 30, width: 30 }} className="rounded-full border flex justify-center items-center">
                            <Google
                                width={24} height={24}
                            />
                        </TouchableOpacity>
                        <View className="w-3" />
                        <TouchableOpacity style={{ height: 30, width: 30 }} className="rounded-full border flex justify-center items-center">
                            <Facebook
                                width={24} height={24}
                            />
                        </TouchableOpacity>
                        <View className="w-3" />
                        <TouchableOpacity style={{ height: 30, width: 30 }} className="rounded-full border flex justify-center items-center">
                            <Apple
                                width={24} height={24}
                            />
                        </TouchableOpacity>

                    </View>
                    <View className="h-8" />
                    <View>
                        <Text className="flex-row items-center justify-center" style={[Textstyles.text_small, { color: primarycolortwo }]}>
                            I don't have an account? <TouchableOpacity><Text style={[Textstyles.text_small, { color: primarycolor }]}>Sign Up</Text></TouchableOpacity>
                        </Text>
                    </View>



                </View>



            </View>
        </>
    )
}

