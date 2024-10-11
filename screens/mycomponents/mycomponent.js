import { TouchableOpacity, Text, View ,StyleSheet} from "react-native";
import { customstyle, radioButtonStyles } from "../../constants/customstyle";
import { Textstyles } from "../../constants/fontsize";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons for arrow
import { TextInput } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState,useEffect } from "react";
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
  const [isFocused, setIsFocused] = useState(false); // Track focus state

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
          style={[
            customstyle.textinputstyle,
            {
              borderColor: isFocused ? "#0099b8" : "#ccc", // Change border color on focus
              borderWidth: 1, // Add border width
            },
          ]}
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
              borderRadius: 10, // Optional: add border radius
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

export const CustomInputSearch = ({
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
              borderRadius: 10, // Optional: add border radius
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

const HeaderTitle = ({ title }) => {
  return (
    <View className="w-full h-8 flex justify-start pl-6 mt-5">
      <Text className="text-2xl font-bold">{title}</Text>
    </View>
  );
};

export default HeaderTitle;

export const Providercard = ({ name, title, rating, likes,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row bg-white rounded-xl shadow-md w-[359px] h-[120px]">
      {/* Left Section: Image */}
      <View className="bg-gray-600 w-[130px] h-[120px]  mr-4">
        {/* Placeholder for the image */}
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
              <FontAwesome key={index} name="star" size={16} color="#0099b8" />
            ))}
          </View>

          {/* Likes */}
          <View className=" flex-row space-x-1">
          <Text className="ml-3 text-gray-600">{likes}</Text>
          <FontAwesome name="heart" size={16} color="red" className="ml-1" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
              borderRadius: 10,
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



export const PaymentInput = ({
  placeholder,
  placeholderTextColor,
  onChange,
  value,
  sideIcon,
  disable,
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
          onFocusCustomKeyboard(); // Trigger the custom numeric keyboard
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
        editable={!disable} // Disable input if the 'disable' prop is true
        showSoftInputOnFocus={false} // Disable the default keyboard
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'absolute',
    left: 12,
    zIndex: 50,
  },
  input: {
    paddingLeft: 50,  // Padding to account for the side icon
    fontSize: 18,
    backgroundColor: "#F3F3F3",  // Input background color
    height: 50,  // Height of the input
    borderRadius: 8,  // Border radius to match the design
    borderWidth: 1,  // Border width
  },
});



export const PaymentMethod = ({ selectedMethod, onSelect }) => {
  const paymentOptions = [
    { id: "paystack", label: "PayStack" },
    { id: "interswitch", label: "Interswitch" },
  ];

  return (
    <View className="flex flex-col space-y-3"> 
      {paymentOptions.map((option) => (
        <TouchableOpacity
          key={option.id}
          className={`flex flex-row items-center border p-4 rounded-lg ${
            selectedMethod === option.id
              ? "border-[#0099b8]"  // Highlighted border for selected method
              : "border-gray-300"
          }`}
          onPress={() => onSelect(option.id)} // Set selected method on press
        >
          <View
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              selectedMethod === option.id ? "border-[#0099b8]" : "border-gray-300"
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
































export const Header = ({ title }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 30,
        height: 140,
        paddingTop: 30,
        backgroundColor: '#00A8CC', // The color for the header background
      }}
    >
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="white" />
      </TouchableOpacity>

      {/* Title */}
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          lineHeight: 30,
          fontWeight: '700',
        }}
      >
        {title}
      </Text>

    
      <View style={{ width: 24 }} /> 
    </View>
  );
};
