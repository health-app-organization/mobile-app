import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { height } from "../../../constants/mobileDimensions";
import { FontAwesome } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import NumericKeyboard from "../../../components/modals/custom-keyboard"; // Your numeric keyboard component
import { handleKeyboardInput } from "../../../utilities/utility";
import { PaymentInput } from "components/utilities/payment-input";
import { CustomButton } from "components/utilities/buttons";
import { PaymentMethod } from "components/health-seeker/payment-method";

export const PaymentScreen = () => {
  const [amount, setAmount] = useState<string>("");
  const [selectedMethod, setSelectedMethod] = useState("");
  const [showKeyboard, setShowKeyboard] = useState(false); // State to toggle keyboard visibility

  const translateY = useSharedValue(600); // Animation value for keyboard

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  // Toggle the keyboard visibility and animation
  const handleShowKeyboard = () => {
    setShowKeyboard((prevState) => !prevState);
    translateY.value = showKeyboard ? withSpring(600) : withSpring(200);
  };

  const handleSave = () => {
    console.log(`Amount: ₦${amount}, Payment Method: ${selectedMethod}`);
  };

  return (
    <View style={{ height: height }} className="w-full px-5 py-[44px] bg-white">
      <View className=" mb-10 w-full  h-16 flex-row justify-between ">
        <View className=" w-44 h-16  flex-row">
          <View>
            <Image
              source={require("../../../assets/images/logo.png")}
              resizeMode="contain"
              className=" h-16 w-16"
            />
          </View>
          <View className=" -ml-3 flex justify-center items-center">
            <Text className=" text-black font-bold text-center text-2xl">HEALTHAPP</Text>
          </View>
        </View>
        <TouchableOpacity className=" justify-center items-center flex  w-10 h-10 ">

          <FontAwesome name="times" size={23} color="#0099B8" />
        </TouchableOpacity>
      </View>
      <View className="mt-5">
        <Text className="text-[16px] font-[600] text-gray-500 text-center">
          Caleb Omojuko
        </Text>
        <Text className="text-[20px] leading-[30px] font-[700] my-3 text-black text-center mb-6">
          ₦{amount || "0.00"}
        </Text>

        {/* Payment input with press handler to toggle keyboard */}
        <PaymentInput
          placeholder="Enter Amount"
          placeholderTextColor="gray"
          value={amount}
          onChange={setAmount}
          onFocusCustomKeyboard={handleShowKeyboard} // Pass handleShowKeyboard as the custom keyboard handler
        />

        <Text className="my-4 text-lg">Select Payment Method</Text>
        <PaymentMethod
          selectedMethod={selectedMethod}
          onSelect={setSelectedMethod}
        />

        <View className="mt-5" />
        <CustomButton
          Textname="Save"
          backgroundColor="#0099b8"
          TextColor="#fff"
          onPress={handleSave}
        />
      </View>

      {/* Numeric Keyboard */}
      {showKeyboard && (
        <View className="absolute -bottom-5 w-full z-50 items-center">
          <Animated.View className="w-full h-[467px]" style={[animatedStyles]}>
            <NumericKeyboard onPress={(value) => handleKeyboardInput(value, amount, setAmount)} />
          </Animated.View>
        </View>
      )}
    </View>
  );
};
