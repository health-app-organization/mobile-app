import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import APP from "../assets/images/free.png";
import {
  customstyle,
  customstyle2,
  radioButtonStyles,
} from "../constants/customstyle";
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Textstyles } from "../constants/fontsize";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for arrow
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { greycolortwo, linkcolor, primarycolor, primarycolortwo } from "../constants/color";
import { ArrowDownIcon, ArrowUpIcon } from "../assets/iconsvg/Svgicon";

export const CustomButton: React.FC<CustomButtonProps> = ({
  Textname,
  onPress,
  backgroundColor = primarycolor,
  TextColor = "white",
  borderWidth,
  borderColor,
  leftIcon,
  rightIcon,
  props,
  width,
  isLoading,
  disabled
}) => {
  return (
    <>
      <TouchableOpacity
        disabled={isLoading || disabled}
        style={[
          {
            backgroundColor: backgroundColor,
            borderWidth: borderWidth || 0,
            borderColor: borderColor || null,
            width: width || "100%",
            opacity: isLoading || disabled ? 0.5 : 1,
          },
          customstyle.buttonstyle,
        ]}
        onPress={onPress}
        {...props}
      >
        {leftIcon}
        <Text style={[Textstyles.text_button, { color: TextColor }]}>
          {isLoading ? "Loading..." : Textname}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    </>
  );
};

export const CustomButtonmedium: React.FC<CustomButtonProps> = ({
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
            width: 20,
          },
          customstyle2.buttonstyle,
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

export const CustomButtonsmall: React.FC<CustomButtonProps> = ({
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

export const CustomButtonsmall2: React.FC<CustomButtonProps> = ({
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

export const CustomButton2: React.FC<CustomButtonProps> = ({
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

export const CustomTextInput: React.FC<CustomInputProps> = ({
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  leftIcon,
  rightIcon,
  onChange,
  secureTextEntry,
  disabled,
  value,
  className,
}) => {
  const [showicon, seticon] = useState(true); // Initially, show the icon
  const [inputValue, setInputValue] = useState<string | undefined>(value); // Track the input value
  const [isFocused, setIsFocused] = useState(false); // Track focus state

  return (
    <>
      <View className={`w-full relative flex justify-center p-1 ${className}`}>
        {/* Show icon only when input is empty and not focused */}
        {showicon && inputValue === "" && (
          <View className="absolute z-10 left-4">{leftIcon}</View>
        )}
        <TextInput
          onFocus={() => seticon(false)} // Hide icon when focused
          onBlur={() => inputValue === "" && seticon(true)} // Show icon on blur if input is empty
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          autoCapitalize={autoCapitalize || "none"}
          style={[
            customstyle.textinputstyle,
            {
              borderColor: isFocused ? "#0099b8" : "#ccc", // Change border color on focus
              borderWidth: 1, // Add border width
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
    </>
  );
};

export const CustomTextnumber: React.FC<CustomInputProps> = ({
  autoCapitalize,
  placeholder,
  placeholderTextColor,
  onChange,
  secureTextEntry,
  disabled,
  value,
  errorMessage
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

export const CustomSelect: React.FC<CustomSelectProps> = ({
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

export const CustomSelectRadioBox: React.FC<CustomSelectRadioProps> = ({ options, selected, setSelected }) => {
  const handleSelectedOption = (selectedValue: string) => {
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

export const CustomRadioSingleOption: React.FC<CustomRadioSingleOptionProps> = ({ value, onPress, selected }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="border border-primary bg-[#f3f3f3] rounded-lg py-4 px-2 flex-row items-center"
    >
      <View style={radioButtonStyles.radioButton}>
        {selected && (
          <View style={radioButtonStyles.radioButtonSelected} />
        )}
      </View>
      <Text style={[Textstyles.text_small]} className="ml-4">{value}</Text>
    </TouchableOpacity>
  );
}

export const Box: React.FC<BoxProps> = ({ inputText }) => {
  return (
    <View
      style={[customstyle.boxstyle]}
      className="flex justify-center items-center"
    >
      <Text style={[Textstyles.text_medium]}>{inputText}</Text>
    </View>
  );
};

export const Iconplaceholder: React.FC<IconplaceholderProps> = ({ backgroundColor, width, height, Icon }) => {
  return (
    <View
      style={{ backgroundColor: backgroundColor, width: width, height: height }}
      className="flex justify-center items-center rounded-full"
    >
      {Icon}
    </View>
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
        {leftIcon && (
          <View className="absolute left-4 z-50">
            {leftIcon}
          </View>
        )}
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
        {leftIcon && (
          <View className="absolute left-4 z-50">
            {leftIcon}
          </View>
        )}
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

const HeaderTitle: React.FC<CustomHeaderProps> = ({ title }) => {
  return (
    <View className="w-full pt-12 pb-4 bg-[#0099B8] pl-8">
      <Text className="text-2xl text-white font-bold">{title}</Text>
    </View>
  );
};

export default HeaderTitle;

export const Providercard: React.FC<ProviderCardProps> = ({
  name,
  title,
  rating,
  likes,
  onPress,
  image,
}) => {
  return (
    <TouchableOpacity
      style={{ elevation: 4 }}
      onPress={onPress}
      className="flex-row bg-white rounded-xl mb-4 shadow-sm shadow-cyan-300 w-[359px] h-[120px]"
    >
      <TouchableOpacity
        onPress={onPress}
        className="flex-row bg-white rounded-xl mb-4 shadow-md w-[359px] h-[120px]"
      >
        <View className="bg-gray-600 rounded-l-xl w-[130px] h-[120px] flex justify-center items-center mr-4">
          <Image
            source={require("../assets/images/appo.png")}
            className="w-full h-full" // Set height to full
            resizeMode="contain"
          />
        </View>

        <View className="flex-1 mb-auto mt-auto">
          <Text className="text-[18px] font-[500] leading-[27px] mb-1">
            {name}
          </Text>
          <Text className="text-gray-500 text-[14px] font-[500] leading-[21px] mb-1">
            {title}
          </Text>

          {/* Ratings and Likes */}
          <View className="flex-row items-center mt-2">
            {/* Stars */}
            <View className="flex-row w-[60p] space-x-1">
              {[...Array(rating)].map((_, index) => (
                <FontAwesome
                  key={index}
                  name="star"
                  size={16}
                  color="#0099b8"
                />
              ))}
            </View>

            {/* Likes */}
            <View className=" flex-row space-x-1">
              <Text className="ml-3 text-gray-600">{likes}</Text>
              <FontAwesome
                name="heart"
                size={16}
                color="red"
                className="ml-1"
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export const Cartcard: React.FC<CartCardProps> = ({ name, title, rating, likes, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row bg-white rounded-2xl shadow-md w-[359px] h-[113px]"
    >
      <View className="bg-gray-600 w-[91px] h-[113px] rounded-l-2xl  mr-4">
        {/* Placeholder for the image */}
      </View>

      <View className="flex-1 mb-auto mt-auto">
        <Text className="text-[18px] font-[500] leading-[27px] mb-1">
          {name}
        </Text>
        <Text className="text-gray-500 text-[14px] font-[500] leading-[21px] mb-1">
          View details
        </Text>

        {/* Ratings and Likes */}
        <View className="flex-row items-center mt-2"></View>
      </View>
    </TouchableOpacity>
  );
};

export const CustomInputpassword: React.FC<CustomInputProps> = ({
  headerText,
  placeholder,
  autoCapitalize,
  onChange,
  secureTextEntry, // This will be initially passed as true for password fields
  disabled,
  value,
  leftIcon,
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
      <Text className="mb-2" style={[Textstyles.text_cmedium]}>
        {headerText}
      </Text>

      {/* Input Field */}
      <View className="relative flex justify-center">
        {/* Show left FontAwesome icon if iconName is provided */}
        {leftIcon && (
          <View className="absolute left-4 z-50">
            {leftIcon}
          </View>
        )}

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

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ selectedMethod, onSelect }) => {
  const paymentOptions = [
    { id: "paystack", label: "PayStack" },
    { id: "interswitch", label: "Interswitch" },
  ];

  return (
    <View className="flex flex-col space-y-3">
      {paymentOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          className={`flex flex-row items-center border p-4 rounded-lg ${selectedMethod === option.id
            ? "border-[#0099b8]" // Highlighted border for selected method
            : "border-gray-300"
            }`}
          onPress={() => onSelect(option.id)} // Set selected method on press
        >
          <View
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === option.id
              ? "border-[#0099b8]"
              : "border-gray-300"
              }`}
          >
            {selectedMethod === option.id && (
              <View className="w-3 h-3 bg-[#0099b8] rounded-full" /> // Filled circle for selected method
            )}
          </View>
          <Text className="ml-3 text-lg">{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export const Header: React.FC<CustomHeaderProps> = ({ title, rightIcon, onRightIconPress }) => {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: primarycolor, }} className="p-5 flex-row items-center justify-center w-full px-5"
    >
      {/* Back Button */}
      <TouchableOpacity className="justify-center" onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={32} color="white" />
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={{
          color: "white",
          fontSize: 24,
          lineHeight: 30,
          fontWeight: "700",
          flex: 1, // Allow title to take available space
        }}
      >
        {title}
      </Text>
      {/* Right Icon (if provided) */}
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export const Header2: React.FC<CustomHeaderProps> = ({ title, rightIcon, onRightIconPress }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 30,
        height: 140,
        paddingTop: 10,
        // The color for the header background
      }}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={26} color="#0099B8" />
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={{
          color: "#0099B8",
          fontSize: 24,
          lineHeight: 30,
          fontWeight: "700",
          flex: 1, // Allow title to take available space
          textAlign: "center", // Center the title
          marginLeft: -190, // Consider adjusting this value for better alignment
        }}
      >
        {title}
      </Text>

      {/* Right Icon (if provided) */}
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export const Header6: React.FC<CustomHeaderProps> = ({ title, rightIcon, onRightIconPress }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 30,
        height: 140,
        paddingTop: 10,
        // The color for the header background
      }}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={26} color="#0099B8" />
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={{
          color: "black",
          fontSize: 24,
          lineHeight: 30,
          fontWeight: "700",
          flex: 1, // Allow title to take available space
          textAlign: "center", // Center the title
          marginLeft: -190, // Consider adjusting this value for better alignment
        }}
      >
        {title}
      </Text>

      {/* Right Icon (if provided) */}
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export const Header5: React.FC<CustomHeaderProps> = ({ title, rightIcon, onRightIconPress }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 30,
        height: 140,

        // The color for the header background
      }}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={26} color="#0099B8" />
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={{
          color: "black",
          fontSize: 24,
          lineHeight: 30,
          fontWeight: "700",
          flex: 1, // Allow title to take available space
          textAlign: "center", // Center the title
          marginLeft: -190, // Consider adjusting this value for better alignment
        }}
      >
        {title}
      </Text>

      {/* Right Icon (if provided) */}
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export const Header3: React.FC<CustomHeaderProps> = ({ title, rightIcon, onRightIconPress }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 30,
        paddingTop: 10,

        // The color for the header background
      }}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={{
          color: "black",
          fontSize: 24,
          lineHeight: 30,
          fontWeight: "700",
          flex: 1, // Allow title to take available space
          textAlign: "center", // Center the title
          marginLeft: -203, // Consider adjusting this value for better alignment
        }}
      >
        {title}
      </Text>

      {/* Right Icon (if provided) */}
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export const Header4: React.FC<CustomHeaderProps> = ({ title, rightIcon, onRightIconPress }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 30,
        paddingTop: 10,

        // The color for the header background
      }}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={30} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={[Textstyles.text_cfmedium]} className=" ml-5">
        {title}
      </Text>

      {/* Right Icon (if provided) */}
      {rightIcon && (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export const Chatlist: React.FC<ChatListProps> = ({
  profileImage,
  name,
  message,
  time,
  unreadCount,
}) => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: "rgba(0, 153, 184, 0.05)" }}
      className="flex-row items-center p-4 rounded-lg my-2 -mb-1 "
    >
      {/* Profile Image */}
      <Image
        source={
          typeof profileImage === "string"
            ? { uri: profileImage }
            : profileImage
        }
        className="w-12 h-12 rounded-full"
      />
      {/* Name and Message */}
      <View className="flex-1 ml-4">
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            lineHeight: 24,
            textAlign: "left",
          }}
          className=" font-bold"
        >
          {name}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "300",
            lineHeight: 18,
            textAlign: "left",
          }}
          className=" text-black"
        >
          {message}
        </Text>
      </View>
      {/* Time and Unread Messages Badge */}
      <View className="items-end">
        <Text className="text-sm text-gray-500 mr-8">{time}</Text>
        {unreadCount > 0 && (
          <View className="bg-[#0099B8] rounded-full w-6 h-6 justify-center items-center mt-1">
            <Text className="text-white text-xs">{unreadCount}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  description,
  type,
  time
}) => {
  return (
    <View className="flex-row justify-between items-start p-4 border-b border-gray-300">
      <View className="flex-row items-start">
        <View className="">
          {type === "order-details" ? (
            <MaterialCommunityIcons
              name="hospital-marker"
              size={24}
              color="#0099B8"
            />
          ) : type === "details" ? (
            <FontAwesome5 name="hospital" size={24} color="#0099B8" />
          ) : (
            <FontAwesome5 name="ambulance" size={24} color="#0099B8" />
          )}
        </View>
        <View className="ml-4">
          <View className="flex-row items-center justify-between">
            <Text className="font-bold">{title}</Text>
            <Text className="text-xs text-[#888]">{time}</Text>
          </View>
          <Text className="text-[#888]">{description}</Text>
          {type === "order-details" ? (
            <TouchableOpacity
              // onPress={() => navigation.navigate("OrderDetails")}
              className=""
            >
              <Text className="text-[#0099B8] underline font-extrabold">View order details</Text>
            </TouchableOpacity>
          ) : type === "details" && (
            <TouchableOpacity
              // onPress={() => navigation.navigate("ReferralDetails")}
              className=""
            >
              <Text className="text-[#0099B8] underline font-extrabold">View details</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export const Providercard2: React.FC<ProviderCardProps> = ({
  name,
  title,
  rating,
  reviews,
  onPress,
  image,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className=" bg-white rounded-xl shadow-md w-[200px] h-[170px] mr-4"
    >
      {/* Left Section: Image */}
      <View className="bg-gray-600 w-[200px] h-[97px] flex justify-center  rounded-t-xl items-center mr-4">
        <Image
          source={require("../assets/images/appo.png")}
          className="w-full h-full" // Set height to full
          resizeMode="contain"
        />
      </View>

      <View className="flex-row justify-between px-3 mb-auto mt-auto">
        <View>
          <Text className="text-[1Opx] font-[500] leading-[27px] ">{name}</Text>
          <Text className="text-gray-500 text-[10px] font-[500] leading-[21px] mb-1">
            {title}
          </Text>
        </View>

        {/* Ratings and Likes */}
        <View className=" items-center fl justify-center  bg-[#0099b8] w-[68px] rounded-[10px]">
          {/* Stars */}
          <Text className=" text-white font-[8px] -mt-3 mb-1 ">
            Reviews {reviews}
          </Text>
          <View className=" flex-row w-[60px]  space-x-1 justify-center items-center ">
            {[...Array(rating)].map((_, index) => (
              <FontAwesome key={index} name="star" size={6} color="white" />
            ))}
          </View>

          {/* Likes */}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const MenuButton: React.FC<MenuButtonProps> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity
      style={{ elevation: 4 }}
      className="w-28 h-28 rounded-2xl bg-white flex justify-center items-center px-3 shadow-sm shadow-black"
      onPress={onPress}
    >
      {icon}
      {text}
    </TouchableOpacity>
  );
};

export const DateComponent = () => {
  const [getdayArray, setdayArray] = useState<number[]>([]);
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const currentDate = new Date();
  function getWeekDates() {
    // Get today's date
    const weekDates = [];

    // Calculate the difference from the current day to the previous Sunday
    const firstDayOfWeek = new Date(
      currentDate.setDate(currentDate.getDate() - currentDate.getDay())
    );

    // Loop through the week and add only the day of the month (date)
    for (let i = 0; i < 7; i++) {
      const weekDate = new Date(firstDayOfWeek); // Copy the date
      weekDate.setDate(firstDayOfWeek.getDate() + i); // Set date to Sunday + i days
      weekDates.push(weekDate.getDate()); // Add only the date to the array
    }

    return weekDates; // Return the dates as a comma-separated string
  }
  useEffect(() => {
    setdayArray(getWeekDates());
  }, []);

  return (
    <>
      <View className="px-3">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View className="w-full flex-row gap-3 items-center justify-evenly  px-2">
            {getdayArray.map((item, index) => (
              <TouchableOpacity
                style={{
                  borderColor: linkcolor,
                  borderWidth: 1,
                  borderRadius: 30,
                  height: 100,
                  width: 60,
                }}
                key={index}
                className="flex justify-center items-center"
              >
                <Text style={[Textstyles.text_cmedium]}>{days[index]}</Text>
                <Text style={[Textstyles.text_cmedium]}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label }) => {
  return (
    <View className="w-[50px] h-[87px]">
      <View className="w-[50px] h-[50px] flex justify-center items-center rounded-[25px] bg-[#D9D9D980] mb-2">
        <Image source={icon} className="w-6 h-6" resizeMode="cover" />
      </View>
      <View className="w-[46px] h-[32px]">
        <Text className="text-center font-[500] text-[12px] leading-4">
          {value}
        </Text>
        <Text className="text-center font-[400] text-[11px] leading-4">
          {label}
        </Text>
      </View>
    </View>
  );
};

export const OptionButton: React.FC<OptionButtonProps> = ({ optionName, isSelected, onSelect, width }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{ width: typeof width === 'number' ? width : undefined }} // Ensure width is a number or undefined
      className={`m-2 p-4 rounded-lg border-2 ${isSelected
        ? "bg-[#0099B8] border-0"
        : "bg-white border-1 border-[#0099B8]"
        }`}
    >
      <Text
        className={`text-lg font-semibold ${isSelected ? "text-white text-center" : "text-black text-center"
          }`}
      >
        {optionName}
      </Text>
    </TouchableOpacity>
  );
};

export const CustomTextnumberlabel: React.FC<CustomTextNumberLabel> = ({
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

export const Header9: React.FC<CustomHeaderProps> = ({ profileName, profileCompletion }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "#00A8CC",
      }}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={28} color="white" />
      </TouchableOpacity>

      {/* Profile Info */}
      <View style={{ marginLeft: 25 }}>
        <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
          {profileName}
        </Text>
        <Text style={{ color: "white", fontSize: 16, marginTop: 4 }}>
          {profileCompletion}% profile completed
        </Text>
      </View>
    </View>
  );
};

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
          <View className="absolute left-4 top-3 z-10">
            {leftIcon}
          </View>
        )}
        <Text
          className="flex items-center justify-center"
        >
          {selectedValue ? options.find(option => option.value === selectedValue)?.label : placeholder}
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
              <View className="w-[80%] bg-white rounded-lg p-4">
                <TouchableOpacity
                  className="p-4 bg-gray-200 rounded-lg flex-row justify-between"
                  onPress={() => setShowOptions(false)}
                >
                  <Text className="text-center text-gray-700">Select Option</Text>
                  <FontAwesome name="arrow-down" size={16} color={primarycolor} />
                </TouchableOpacity>
                <ScrollView>
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
                      <Text className="text-gray-700">{option.label}</Text>
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

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      className="w-16 h-16 bg-[#00A8CC] rounded-full items-center justify-center absolute bottom-5 right-5 shadow-lg"
      onPress={onPress}
    >
      <MaterialIcons name="add" size={40} color="white" />
    </TouchableOpacity>
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
        {leftIcon && (
          <View className="absolute left-4 z-50">
            {leftIcon}
          </View>
        )}
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

export const CustomInputWithHeaderdes: React.FC<CustomInputProps> = ({
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
        {leftIcon && (
          <View className="absolute left-4 z-50">
            {leftIcon}
          </View>
        )}
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

export const AppointmentCard: React.FC<AppointmentCardProps> = ({ title, doctorName, dateTime }) => {
  return (
    <View className="flex-row items-center p-4 bg-white rounded-lg shadow-md max-w-sm">
      {/* Image Section */}
      <View className="p-4 bg-[#0099B833] rounded-lg mr-4 flex items-center justify-center">
        <Image
          source={APP} // Replace with your actual image path
          className="w-8 h-8"
        />
      </View>

      {/* Content Section */}
      <View className="flex-1">
        <Text className="text-lg font-semibold text-black capitalize">
          {title}
        </Text>
        <Text className="text-gray-500 font-medium">{doctorName}</Text>
        <Text className="text-gray-400 text-sm">{dateTime}</Text>
      </View>
    </View>
  );
};

export const DoctorCard: React.FC<DoctorCardProps> = ({ name, session, time, imageSource, onPress }) => {
  return (
    <View className="bg-white h-[160px] rounded-2xl shadow-md flex-row space-x-4">
      <View className=" flex justify-center items-center rounded-2xl">
        <Image
          source={imageSource}
          className="w-[163px] h-[160px] object-bottom  rounded-2xl " // Set image dimensions and vertically center it
          resizeMode="cover"
        />
      </View>
      <View className="flex-1  justify-center items-center">
        <Text className="text-xl text-center mb-5 font-semibold">{name}</Text>
        <Text className="text-gray-500 text-center">{session}</Text>
        <Text className="text-gray-500 text-center">{time}</Text>
        <TouchableOpacity
          onPress={onPress}
          className="mt-4 bg-[#00D70733] w-[160px] rounded-lg py-3 px-4"
        >
          <Text className="text-black text-lg font-semibold text-center">
            View Details
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const CustomButtoncall: React.FC<CustomButtonProps> = ({
  Textname,
  onPress,
  backgroundColor,
  TextColor,
  borderWidth,
  borderColor,
  leftIcon,
  rightIcon,
  props,
  width = 20,  // Default width set to 50
  height = 20, // Default height set to 50
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: backgroundColor,
          borderWidth: borderWidth || 0,
          borderColor: borderColor || null,
          width: width,  // Set the width (default 50)
          height: height, // Set the height (default 50)
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
          borderRadius: typeof width === 'number' ? width / 2 : 0, // Make the button circular based on width/height
        },
        customstyle.buttonstyle, // Keep your existing custom styles if needed
      ]}
      onPress={onPress}
      {...props}
    >
      {/* If no left or right icon is passed, show the phone icon */}
      {!leftIcon && !rightIcon && (
        <Ionicons name="call" size={24} color={TextColor || "white"} />
      )}

      {/* Display left icon if passed */}
      {leftIcon}

      {/* Display the text in the button */}
      <Text style={[Textstyles.text_button, { color: TextColor }]}>
        {Textname}
      </Text>

      {/* Display right icon if passed */}
      {rightIcon}
    </TouchableOpacity>
  );
};
interface SelectionpickerProps {
  Title: string;
  onPress: () => void;
}

export const Selectionpicker: React.FC<SelectionpickerProps> = ({ Title, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={() => onPress()} className="justify-between px-3 flex-row items-center" style={{ borderColor: primarycolor, borderWidth: 1, height: 50, borderRadius: 10 }}>
        <Text style={[Textstyles.text_xmedium]}>
          {Title}
        </Text>
        <ArrowDownIcon />
      </TouchableOpacity>
    </>
  )
}
interface DataItem {
  value: string;
  label: string;
}

interface DataDisplayModayProps {
  data: DataItem[];
  setshowmodal: (show: boolean) => void;
  setSelectedValue: (value: string) => void;
  title: string;
}

export const DataDisplayModay: React.FC<DataDisplayModayProps> = ({ data, setshowmodal, setSelectedValue, title }) => {

  return (
    <>
      <View style={{ backgroundColor: primarycolor }} className="opacity-70 h-full w-full absolute" />
      <View className="h-[30vh] w-[80vw] relative z-50 rounded-2xl bg-white px-3 py-3">
        <View className="justify-between flex-row">
          <Text style={[Textstyles.text_xmedium]}>{title}</Text>
          <TouchableOpacity onPress={() => setshowmodal(false)}>
            <ArrowUpIcon />
          </TouchableOpacity>

        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View className="py-4">
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="h-12 border-b border-slate-100 flex justify-center"
                onPress={() => { setSelectedValue(item.value); setshowmodal(false) }}
              >
                <Text >{item.label}</Text>
              </TouchableOpacity>
            ))}

          </View>
        </ScrollView>

      </View>
    </>
  )
}

export const HeaderWithTitleAndBackButton: React.FC<CustomHeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#0099b8]">
      <View className="flex flex-row items-center p-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>
        <Text className="text-white text-2xl font-bold">{title}</Text>
      </View>
    </View>
  )
}
