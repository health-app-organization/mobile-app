import { TouchableOpacity, Text, View } from "react-native";
import { customstyle, radioButtonStyles } from "../../constants/customstyle";
import { Textstyles } from "../../constants/fontsize";
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { greycolortwo } from "../../constants/color";
import { height, width } from "../../constants/mobileDimensions";

export const CustomButton = ({
  Textname,
  onPress,
  backgroundColor,
  TextColor,
  borderWidth,
  borderColor,
  leftIcon,
  rightIcon,
  props,
  width,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          {
            backgroundColor: backgroundColor,
            borderWidth: borderWidth || 0,
            borderColor: borderColor || null,
            width: width || "100%",
          },
          customstyle.buttonstyle,
        ]}
        onPress={onPress}
        {...props}
      >
        {leftIcon}
        <Text style={[Textstyles.text_button, { color: TextColor }]}>
          {Textname}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    </>
  );
};

export const CustomButtonsmall = ({
  Textname,
  onPress,
  backgroundColor,
  TextColor,
  borderWidth,
  borderColor,
  leftIcon,
  rightIcon,
  props,
  width, // Accept width prop
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          {
            backgroundColor: backgroundColor,
            borderWidth: borderWidth || 0,
            borderColor: borderColor || null,
            width: 142,
            borderRadius: 10, // Default to 142px if no width prop is passed
            height: 50, // Fixed height of 50px
            justifyContent: "center", // Center align items
            alignItems: "center",
          },
        ]}
        onPress={onPress}
        {...props}
      >
        {leftIcon}
        <Text style={[Textstyles.text_button, { color: TextColor }]}>
          {Textname}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    </>
  );
};

export const CustomButtonsmall2 = ({
  Textname,
  onPress,
  backgroundColor,
  TextColor,
  borderWidth,
  borderColor = "#0099b8", // Default borderColor is set to #0099b8
  leftIcon,
  rightIcon,
  props,
  width,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: backgroundColor,
          borderWidth: borderWidth || 1,
          borderColor: borderColor, // Use the default or passed borderColor
          width: 142,
          borderRadius: 10, // Default to 142px if no width prop is passed
          height: 50, // Fixed height of 50px
          justifyContent: "center", // Center align items
          alignItems: "center",
        },
      ]}
      onPress={onPress}
      {...props}
    >
      {leftIcon}
      <Text style={[Textstyles.text_button, { color: TextColor }]}>
        {Textname}
      </Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const CustomButton2 = ({
  Textname,
  onPress,
  backgroundColor,
  TextColor,
  borderWidth,
  borderColor = "#0099b8", // Default borderColor is set to #0099b8
  leftIcon,
  rightIcon,
  props,
  width,
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: backgroundColor,
          borderWidth: borderWidth || 1,
          borderColor: borderColor, // Use the default or passed borderColor
          width: width || "100%",
        },
        customstyle.buttonstyle,
      ]}
      onPress={onPress}
      {...props}
    >
      {leftIcon}
      <Text style={[Textstyles.text_button, { color: TextColor }]}>
        {Textname}
      </Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const CustomTextInput = ({
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  sideicon,
  rightIcon,
  onChange,
  secureTextEntry,
  disable,
  value,
}) => {
  const [showicon, seticon] = useState(true); // Initially, show the icon
  const [inputValue, setInputValue] = useState(value); // Track the input value
  return (
    <>
      <View className="w-full relative flex justify-center">
        {/* Show icon only when input is empty and not focused */}
        {showicon && inputValue === "" && (
          <View className="absolute left-2 z-50">{sideicon}</View>
        )}
        <TextInput
          onFocus={() => seticon(false)} // Hide icon when focused
          onBlur={() => inputValue === "" && seticon(true)} // Show icon on blur if input is empty
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoCapitalize={autoCapitalize || "none"}
          style={[customstyle.textinputstyle]}
          onChangeText={(text) => {
            setInputValue(text); // Update input value state
            onChange(text); // Call the parent onChange handler if provided
          }}
          secureTextEntry={secureTextEntry}
          value={inputValue}
          editable={disable}
        />
        {rightIcon && (
          <View className="absolute right-2 z-50">{rightIcon}</View>
        )}
      </View>
    </>
  );
};

export const CustomTextnumber = ({
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  onChange,
  secureTextEntry,
  disable,
  value,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value);

  return (
    <>
      <View
        className={`w-full relative flex justify-center border ${
          isFocused ? "border-[#0099b8]" : "border-gray-300"
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
              fontSize: 18, // Increase the font size here
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
          editable={!disable}
        />
      </View>
    </>
  );
};

export const CustomSelect = ({
  leftIcon,
  rightIcon,
  placeHolder,
  placeholderTextColor,
}) => {
  return (
    <>
      <View
        className="w-full relative flex justify-center"
        style={[customstyle.textinputstyle]}
      >
        {leftIcon && <View className="absolute left-2 z-50">{leftIcon}</View>}
        <Text style={{ color: placeholderTextColor }}>{placeHolder}</Text>
        {rightIcon && (
          <View className="absolute right-2 z-50">{rightIcon}</View>
        )}
      </View>
    </>
  );
};

export const CustomSelectRadioBox = ({ options, selected, setSelected }) => {
  const handleSelectedOption = (selectedValue) => {
    setSelected(selectedValue);
  };
  return (
    <View
      className="w-full relative flex justify-center"
      style={[customstyle.selectRadioBox]}
    >
      {options?.map((row, index) => (
        <TouchableOpacity
          key={index}
          className="flex flex-row justify-between py-2"
          onPress={() => handleSelectedOption(row)}
        >
          <Text style={{ color: greycolortwo }}>{row}</Text>
          <View style={radioButtonStyles.radioButton}>
            {selected === row && (
              <View style={radioButtonStyles.radioButtonSelected} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const Box = ({ inputText }) => {
  return (
    <View
      style={[customstyle.boxstyle]}
      className="flex justify-center items-center"
    >
      <Text style={[Textstyles.text_medium]}>{inputText}</Text>
    </View>
  );
};
export const Iconplaceholder = ({ backgroundColor, width, height, Icon }) => {
  return (
    <View
      style={{ backgroundColor: backgroundColor, width: width, height: height }}
      className="flex justify-center items-center rounded-full"
    >
      {Icon}
    </View>
  );
};

export const CustomInputWithHeader = ({
  headerText,
  placeholder, // New placeholder prop
  autoCapitalize,
  onChange,
  secureTextEntry,
  disable,
  value,
  leftIconName, // Use icon name as a string
  leftIconSize, // Optional size for the icon
  leftIconColor, // Optional color for the icon
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
        {leftIconName && (
          <View className="absolute left-4 z-50">
            <FontAwesome
              name={leftIconName}
              size={leftIconSize || 20}
              color={leftIconColor || "#000"}
            />
          </View>
        )}
        <TextInput
          style={[
            customstyle.textinputstyle,
            {
              paddingLeft: leftIconName ? 45 : 15, // Adjust left padding based on icon presence
              borderColor: isFocused ? "#0099b8" : "#ccc", // Change border color on focus
              borderWidth: 1, // Add border width
              borderRadius: 5, // Optional: add border radius
              backgroundColor: "#F3F3F3",
            },
          ]}
          placeholder={placeholder} // Set placeholder text
          value={inputValue} // Use inputValue for the actual value
          editable={!disable} // Allow editing based on disable prop
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

export const CustomInputpassword = ({
  headerText,
  placeholder,
  autoCapitalize,
  onChange,
  secureTextEntry, // This will be initially passed as true for password fields
  disable,
  value,
  leftIconName,
  leftIconSize,
  leftIconColor,
}) => {
  const [inputValue, setInputValue] = useState(value); // Track the input value
  const [isFocused, setIsFocused] = useState(false); // Track focus state
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Track password visibility

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View className="w-full flex flex-col">
      {/* Input Header */}
      <Text className="mb-2" style={[Textstyles.text_cmedium]}>
        {headerText}
      </Text>

      {/* Input Field */}
      <View className="relative flex justify-center">
        {/* Show left FontAwesome icon if iconName is provided */}
        {leftIconName && (
          <View className="absolute left-4 z-50">
            <FontAwesome
              name={leftIconName}
              size={leftIconSize || 20}
              color={leftIconColor || "#000"}
            />
          </View>
        )}

        <TextInput
          style={[
            customstyle.textinputstyle,
            {
              paddingLeft: leftIconName ? 45 : 15, // Adjust left padding based on icon presence
              paddingRight: 45, // Add right padding for the eye icon
              borderColor: isFocused ? "blue" : "#ccc", // Change border color on focus
              borderWidth: 1,
              borderRadius: 5,
              backgroundColor: "#F3F3F3",
            },
          ]}
          placeholder={placeholder}
          value={inputValue}
          editable={!disable}
          secureTextEntry={secureTextEntry && !isPasswordVisible} // Toggle secureTextEntry based on visibility
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
