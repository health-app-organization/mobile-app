import { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { StyleSheet } from "react-native";

export const PaymentInput: React.FC<PaymentInputProps> = ({
    placeholder,
    placeholderTextColor,
    onChange,
    value,
    sideIcon,
    disabled,
    onFocusCustomKeyboard,
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);
    const [showIcon, setShowIcon] = useState(true); // Track the visibility of the icon

    useEffect(() => {
        // Sync input value with the external value prop
        setInputValue(value);
    }, [value]);

    return (
        <View style={styles.container}>
            {/* Show the currency icon if input is empty and not focused */}
            {showIcon && inputValue === "" && (
                <View style={styles.iconContainer}>{sideIcon}</View>
            )}

            <TextInput
                onFocus={() => {
                    setIsFocused(true);
                    setShowIcon(false); // Hide the icon when focused
                    if (onFocusCustomKeyboard) {
                        onFocusCustomKeyboard(); // Trigger the custom numeric keyboard
                    }
                }}
                onBlur={() => {
                    setIsFocused(false);
                    inputValue === "" && setShowIcon(true); // Show the icon when blurred and input is empty
                }}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.input, { borderColor: isFocused ? "#0099b8" : "#ccc" }]} // Dynamic border color
                onChangeText={(text) => {
                    const formattedText = text.replace(/[^0-9]/g, ""); // Allow only numeric input
                    setInputValue(formattedText); // Update input field value
                    onChange(formattedText); // Call parent component's onChange to sync state
                }}
                value={inputValue}
                editable={!disabled} // Disable input if the 'disable' prop is true
                showSoftInputOnFocus={false} // Disable the default keyboard
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "relative",
        justifyContent: "center",
    },
    iconContainer: {
        position: "absolute",
        left: 12,
        zIndex: 50,
    },
    input: {
        paddingLeft: 50, // Padding to account for the side icon
        fontSize: 18,
        backgroundColor: "#F3F3F3", // Input background color
        height: 50, // Height of the input
        borderRadius: 8, // Border radius to match the design
        borderWidth: 1, // Border width
    },
});