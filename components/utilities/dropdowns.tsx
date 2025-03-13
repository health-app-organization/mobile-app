import { Textstyles } from "constants/fontsize";
import { useState } from "react";
import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const CustomDropdownWithHeader: React.FC<CustomDropdownProps> = ({
    headerText,
    options = [],
    placeholder,
    onChange,
    disable,
    value,
    leftIcon,
}) => {
    const [selectedValue, setSelectedValue] = useState(value);
    const [showOptions, setShowOptions] = useState(false); // State to show/hide options

    return (
        <View className="w-full">
            {/* Input Header */}
            {headerText && (
                <Text
                    className="text-lg font-bold mb-2"
                    style={[Textstyles.text_cmedium]}
                >
                    {headerText}
                </Text>
            )}

            {/* Dropdown Field */}
            <TouchableOpacity
                className="relative border border-primary rounded-lg p-4"
                onPress={() => setShowOptions(!showOptions)} // Toggle options visibility
                disabled={disable}
            >
                {leftIcon && (
                    <View className="absolute left-4 top-3 z-10">{leftIcon}</View>
                )}
                <Text className="flex items-center justify-center">
                    {selectedValue ? (
                        options.find((option) => option.value === selectedValue)?.label
                    ) : (
                        <View className="flex-row items-center justify-between w-full">
                            <Text>{placeholder}</Text>
                            <Ionicons name="chevron-down" size={20} color="black" />
                        </View>
                    )}
                </Text>
            </TouchableOpacity>

            {/* Options Modal */}
            {showOptions && (
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showOptions}
                    onRequestClose={() => setShowOptions(false)}
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                    <View className="flex-1 h-screen w-full bg-[#00000050]">
                        <View className="flex-1 justify-center items-center">
                            <View className="w-[350px] bg-white rounded-2xl py-3 px-4 border border-primary">
                                <TouchableOpacity
                                    className="p-4 bg-gray-200 rounded-lg flex-row justify-between"
                                    onPress={() => setShowOptions(false)}
                                >
                                    <Text className="text-center" style={[Textstyles.text_xsma]}>
                                        Select Option
                                    </Text>
                                    <Ionicons name="chevron-up" size={20} color="black" />
                                </TouchableOpacity>
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    style={{ maxHeight: 400 }}
                                >
                                    {options.map((option) => (
                                        <TouchableOpacity
                                            key={option.value}
                                            className="p-4"
                                            onPress={() => {
                                                setSelectedValue(option.value);
                                                setShowOptions(false);
                                                if (onChange) {
                                                    onChange(option.value);
                                                }
                                            }}
                                        >
                                            <Text style={[Textstyles.text_xsma]}>{option.label}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </View>
    );
};