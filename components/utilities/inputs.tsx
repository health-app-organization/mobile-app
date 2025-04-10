import { primarycolor } from "constants/color";
import { customstyle } from "constants/customstyle";
import { Textstyles } from "constants/fontsize";
import { useState } from "react";
import { Text, TextInputProps, TouchableOpacity } from "react-native";
import { TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export const CustomTextInput: React.FC<CustomInputProps & TextInputProps> = ({
    autoCapitalize,
    placeholder,
    placeholderTextColor,
    leftIcon,
    rightIcon,
    onChange,
    secureTextEntry,
    borderColor,
    borderWidth,
    borderRadius,
    disabled,
    value,
    className,
    label,
    required,
    paddingLeft,
    ...props
}) => {
    const [showicon, seticon] = useState(true); // Initially, show the icon
    const [inputValue, setInputValue] = useState<string | undefined>(value); // Track the input value
    const [isFocused, setIsFocused] = useState(false); // Track focus state

    return (
        <View>
            {label && (
                <View className="flex-row">
                    <Text className="font-normal text-base">{label}</Text>
                    {required && <Text style={{ color: "#A30202" }}>*</Text>}
                </View>
            )}
            <View className={`w-full relative flex justify-center ${className}`}>
                {/* Show icon only when input is empty and not focused */}
                {showicon && <View className="absolute z-10 left-4">{leftIcon}</View>}
                <TextInput
                    {...props}
                    // onFocus={() => seticon(false)} // Hide icon when focused
                    onBlur={() => inputValue === "" && seticon(true)} // Show icon on blur if input is empty
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize={autoCapitalize || "none"}
                    style={[
                        customstyle.textinputstyle,
                        {
                            paddingLeft: leftIcon ? paddingLeft ?? 45 : 15,
                            borderColor: borderColor ?? isFocused ? "#0099b8" : "#ccc", // Change border color on focus
                            borderWidth: borderWidth ?? 1, // Add border width
                            borderRadius: borderRadius ?? 10,
                        },
                    ]}
                    onChangeText={(text) => {
                        setInputValue(text); // Update input value state
                        if (onChange) {
                            onChange(text); // Call the parent onChange handler if provided
                        }
                    }}
                    secureTextEntry={secureTextEntry}
                    value={inputValue}
                    editable={disabled}
                />
                {rightIcon && (
                    <View className="absolute right-2 z-50">{rightIcon}</View>
                )}
            </View>
        </View>
    );
};

export const CustomTextNumber: React.FC<CustomInputProps> = ({
    autoCapitalize,
    placeholder,
    placeholderTextColor,
    onChange,
    secureTextEntry,
    disabled,
    value,
    errorMessage,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState<string | undefined>(value);

    return (
        <>
            <View
                className={`w-full relative flex justify-center border ${isFocused ? "border-[#0099b8]" : "border-gray-300"
                    } rounded-lg`}
            >
                {/* +234 Country code on the left */}
                <View className="absolute left-2 z-50 flex flex-row items-center">
                    <Text className="text-lg text-gray-600 pl-3 font-medium">+234</Text>
                </View>
                <TextInput
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        setIsFocused(false);
                        inputValue === "" && setIsFocused(false);
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize={autoCapitalize || "none"}
                    style={[
                        customstyle.textinputstyle,
                        {
                            paddingLeft: 68, // Padding to account for the +234
                            fontSize: 14, // Increase the font size here
                            fontWeight: "medium",
                            backgroundColor: "#F3F3F3", // Optional: Add bold weight to make it stand out more
                        },
                    ]} // Padding to account for the +234
                    keyboardType="numeric" // Ensures numeric keyboard on mobile
                    onChangeText={(text) => {
                        // Ensure input only contains numeric values and is max 10 digits
                        const formattedText = text.replace(/[^0-9]/g, "").slice(0, 10);
                        setInputValue(formattedText);
                        onChange(formattedText);
                    }}
                    secureTextEntry={secureTextEntry}
                    value={inputValue}
                    editable={!disabled}
                />
            </View>
            <Text className="text-red-500">{errorMessage}</Text>
        </>
    );
};

export const CustomInputWithHeader: React.FC<CustomInputProps> = ({
    headerText,
    placeholder, // New placeholder prop
    autoCapitalize,
    onChange,
    secureTextEntry,
    disabled,
    value,
    leftIcon,
}) => {
    const [inputValue, setInputValue] = useState(value); // Track the input value

    return (
        <View className="w-full flex flex-col">
            {/* Input Header */}
            <Text className="mb-2" style={[Textstyles.text_cmedium]}>
                {headerText}
            </Text>

            {/* Input Field */}
            <View className="relative flex justify-center">
                {/* Show left FontAwesome icon if iconName is provided */}
                {leftIcon && <View className="absolute left-4 z-50">{leftIcon}</View>}
                <TextInput
                    style={[
                        customstyle.textinputstyle,
                        {
                            paddingLeft: leftIcon ? 45 : 15, // Adjust left padding based on icon presence
                            borderColor: primarycolor, // Change border color on focus
                            borderWidth: 1, // Add border width
                            borderRadius: 10, // Optional: add border radius
                        },
                    ]}
                    placeholder={placeholder} // Set placeholder text
                    value={inputValue} // Use inputValue for the actual value
                    editable={!disabled} // Allow editing based on disable prop
                    secureTextEntry={secureTextEntry}
                    autoCapitalize={autoCapitalize || "none"}
                    onChangeText={(text) => {
                        setInputValue(text); // Update input value state
                        if (onChange) {
                            onChange(text); // Call the parent onChange handler if provided
                        }
                    }}
                />
            </View>
        </View>
    );
};

export const CustomInputSearch: React.FC<CustomInputProps> = ({
    placeholder, // New placeholder prop
    autoCapitalize,
    onChange,
    secureTextEntry,
    disabled,
    value,
    leftIcon,
}) => {
    const [inputValue, setInputValue] = useState(value); // Track the input value
    const [isFocused, setIsFocused] = useState(false); // Track focus state

    return (
        <View className="w-full flex flex-col">
            {/* Input Field */}
            <View className="relative flex justify-center">
                {/* Show left FontAwesome icon if iconName is provided */}
                {leftIcon && <View className="absolute left-4 z-50">{leftIcon}</View>}
                <TextInput
                    style={[
                        customstyle.textinputstyle,
                        {
                            paddingLeft: leftIcon ? 45 : 15, // Adjust left padding based on icon presence
                            borderColor: isFocused ? "#0099b8" : "#ccc", // Change border color on focus
                            borderWidth: 1, // Add border width
                            borderRadius: 10, // Optional: add border radius
                            backgroundColor: "#F3F3F3",
                        },
                    ]}
                    placeholder={placeholder} // Set placeholder text
                    value={inputValue} // Use inputValue for the actual value
                    editable={!disabled} // Allow editing based on disable prop
                    secureTextEntry={secureTextEntry}
                    autoCapitalize={autoCapitalize || "none"}
                    onFocus={() => setIsFocused(true)} // Set focus state
                    onBlur={() => setIsFocused(false)} // Reset focus state
                    onChangeText={(text) => {
                        setInputValue(text); // Update input value state
                        if (onChange) {
                            onChange(text); // Call the parent onChange handler if provided
                        }
                    }}
                />
            </View>
        </View>
    );
};

export const CustomInputPassword: React.FC<CustomInputProps> = ({
    headerText,
    placeholder,
    autoCapitalize,
    onChange,
    secureTextEntry, // This will be initially passed as true for password fields
    disabled,
    value,
    leftIcon,
    label,
    className,
}) => {
    const [inputValue, setInputValue] = useState(value); // Track the input value
    const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Track password visibility

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <View className={`w-full flex flex-col ${className}`}>
            {/* Input Header */}
            {headerText && (
                <Text className="mb-2" style={[Textstyles.text_cmedium]}>
                    {headerText}
                </Text>
            )}
            {label && <Text className="font-normal text-base">{label}</Text>}
            {/* Input Field */}
            <View className="relative flex justify-center">
                {/* Show left FontAwesome icon if iconName is provided */}
                {leftIcon && <View className="absolute left-4 z-50">{leftIcon}</View>}

                <TextInput
                    style={[
                        customstyle.textinputstyle,
                        {
                            paddingLeft: leftIcon ? 45 : 15, // Adjust left padding based on icon presence
                            paddingRight: 45, // Add right padding for the eye icon
                            borderColor: primarycolor, // Change border color on focus
                            borderWidth: 1,
                            borderRadius: 10,
                        },
                    ]}
                    placeholder={placeholder}
                    value={inputValue}
                    editable={!disabled}
                    secureTextEntry={secureTextEntry && !isPasswordVisible} // Toggle secureTextEntry based on visibility
                    autoCapitalize={autoCapitalize || "none"}
                    onChangeText={(text) => {
                        setInputValue(text);
                        if (onChange) {
                            onChange(text);
                        }
                    }}
                />

                {/* Eye Icon to Toggle Password Visibility */}
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        style={{ position: "absolute", right: 15, zIndex: 50 }}
                    >
                        <FontAwesome
                            name={isPasswordVisible ? "eye" : "eye-slash"}
                            size={20}
                            color="#000"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export const CustomTextNumberLabel: React.FC<CustomTextNumberLabel> = ({
    label, // Add label prop
    autoCapitalize,
    placeholder,
    placeholderTextColor,
    onChange,
    secureTextEntry,
    disabled,
    value,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    return (
        <View className="w-full">
            {label && ( // Render label if provided
                <Text className="mb-2" style={[Textstyles.text_cmedium]}>
                    {label}
                </Text>
            )}
            <View
                className={`relative flex justify-center border ${isFocused ? "border-[#0099b8]" : "border-gray-300"
                    } rounded-lg`}
            >
                {/* +234 Country code on the left */}
                <View className="absolute left-2 z-50 flex flex-row items-center">
                    <Text className="text-lg text-gray-600 pl-3 font-medium">+234</Text>
                </View>
                <TextInput
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                        setIsFocused(false);
                        inputValue === "" && setIsFocused(false);
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize={autoCapitalize || "none"}
                    style={[
                        customstyle.textinputstyle,
                        {
                            paddingLeft: 68, // Padding to account for the +234
                            fontSize: 14, // Increase the font size here
                            fontWeight: "medium",
                            backgroundColor: "#F3F3F3", // Optional: Add bold weight to make it stand out more
                        },
                    ]}
                    keyboardType="numeric" // Ensures numeric keyboard on mobile
                    onChangeText={(text) => {
                        // Ensure input only contains numeric values and is max 10 digits
                        const formattedText = text.replace(/[^0-9]/g, "").slice(0, 10);
                        setInputValue(formattedText);
                        onChange(formattedText);
                    }}
                    secureTextEntry={secureTextEntry}
                    value={inputValue}
                    editable={!disabled}
                />
            </View>
        </View>
    );
};

export const CustomInputWithHeader2: React.FC<CustomInputProps> = ({
    headerText,
    placeholder,
    autoCapitalize,
    onChange,
    secureTextEntry,
    disabled,
    value,
    leftIcon,
}) => {
    const [inputValue, setInputValue] = useState(value);
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className="flex-1 flex flex-col">
            {/* Input Header */}
            <Text className="mb-2" style={[Textstyles.text_cmedium]}>
                {headerText}
            </Text>

            {/* Input Field */}
            <View className="relative flex justify-center">
                {leftIcon && <View className="absolute left-4 z-50">{leftIcon}</View>}
                <TextInput
                    style={[
                        customstyle.textinputstyle,
                        {
                            width: "90%",
                            paddingLeft: leftIcon ? 45 : 15,
                            borderColor: isFocused ? "#0099b8" : "#ccc",
                            borderWidth: 1,
                            borderRadius: 10,
                            backgroundColor: "#F3F3F3",
                        },
                    ]}
                    placeholder={placeholder}
                    value={inputValue}
                    editable={!disabled}
                    secureTextEntry={secureTextEntry}
                    autoCapitalize={autoCapitalize || "none"}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onChangeText={(text) => {
                        setInputValue(text);
                        if (onChange) {
                            onChange(text);
                        }
                    }}
                />
            </View>
        </View>
    );
};

export const CustomInputWithHeaders: React.FC<CustomInputProps> = ({
    headerText,
    placeholder, // New placeholder prop
    autoCapitalize,
    onChange,
    secureTextEntry,
    disabled,
    value,
    leftIcon,
}) => {
    const [inputValue, setInputValue] = useState(value); // Track the input value
    const [isFocused, setIsFocused] = useState(false); // Track focus state

    return (
        <View className="w-full flex flex-col">
            {/* Input Header */}
            <Text className="mb-2" style={[Textstyles.text_cmedium]}>
                {headerText}
            </Text>

            {/* Input Field */}
            <View className="relative flex justify-center">
                {/* Show left FontAwesome icon if iconName is provided */}
                {leftIcon && <View className="absolute left-4 z-50">{leftIcon}</View>}
                <TextInput
                    style={[
                        customstyle.textinputstyle,
                        {
                            height: 150,
                            paddingLeft: leftIcon ? 45 : 15, // Adjust left padding based on icon presence
                            borderColor: isFocused ? "#0099b8" : "#ccc", // Change border color on focus
                            borderWidth: 1, // Add border width
                            borderRadius: 10, // Optional: add border radius
                            backgroundColor: "#F3F3F3",
                            textAlignVertical: "top",
                            paddingTop: 3,
                        },
                    ]}
                    placeholder={placeholder} // Set placeholder text
                    value={inputValue} // Use inputValue for the actual value
                    editable={!disabled} // Allow editing based on disable prop
                    secureTextEntry={secureTextEntry}
                    autoCapitalize={autoCapitalize || "none"}
                    onFocus={() => setIsFocused(true)} // Set focus state
                    onBlur={() => setIsFocused(false)} // Reset focus state
                    onChangeText={(text) => {
                        setInputValue(text); // Update input value state
                        if (onChange) {
                            onChange(text); // Call the parent onChange handler if provided
                        }
                    }}
                />
            </View>
        </View>
    );
};
