import NumericKeyboard from "components/modals/custom-keyboard";
import { Box } from "components/utilities/box";
import { CustomButton } from "components/utilities/buttons";
import { Textstyles } from "constants/fontsize";
import React from "react";
import { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { handleOtpInput } from "utilities/utility";

export default function ForgotPassword({ navigation }: { navigation: any }) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const translateY = useSharedValue(565); // Animation for the keyboard
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const handleShowKeys = () => {
    setShowKeyboard((prevState) => !prevState);
    translateY.value = showKeyboard ? withSpring(565) : withSpring(165);
  };
  return (
    <>
      <View className="flex-1 px-4 py-10">
        <View className="gap-y-6">
          <View className="gap-y-2">
            <Text className="font-bold text-2xl text-center">
              Forgot Password
            </Text>
            <Text className="text-center font-normal text-base">
              Please enter the 6 digit code sent to your email address below
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={[Textstyles.text_xsmall]} className="text-red-300">
              {errorMessage}
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
          <View className="flex-row items-center justify-center gap-x-2">
            <Text>Didn't get a code?</Text>
            <TouchableOpacity onPress={() => console.log("resend code")}>
              <Text className="text-primary">Resend</Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            Textname="Verify"
            onPress={() =>
              navigation.navigate("health-provider", {
                screen: "safe-area-view",
                params: { screen: "set-new-password" },
              })
            }
          />
        </View>
      </View>
      {showKeyboard && (
        <View className="absolute -bottom-5 z-50 items-center">
          <Animated.View className="w-full h-[467px]" style={[animatedStyles]}>
            <NumericKeyboard
              onPress={(value: string) =>
                handleOtpInput({ value, setOtp, otp, setErrorMessage })
              }
            />
          </Animated.View>
        </View>
      )}
    </>
  );
}
