import { TouchableOpacity, Text, View } from "react-native";
import { customstyle, radioButtonStyles } from "../../constants/customstyle";
import { Textstyles } from "../../constants/fontsize";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";
import { greycolortwo } from "../../constants/color";

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
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          {
            backgroundColor: backgroundColor,
            borderWidth: borderWidth || 0,
            borderColor: borderColor || null,
          },
          customstyle.buttonstyle,
        ]}
        onPress={onPress}
        {...props}
      >
        {leftIcon}
        <Text style={[Textstyles.text_button, { color: TextColor }]}>
          {" "}
          {Textname}{" "}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    </>
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
}) => {
  const [showicon, seticon] = useState(true); // Initially, show the icon
  const [inputValue, setInputValue] = useState(""); // Track the input value

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
        />
        {rightIcon && (
          <View className="absolute right-2 z-50">{rightIcon}</View>
        )}
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

export const MyDivider = ({ Color, width }) => {
  return <View style={{ backgroundColor: Color, height: 1, width: width }} />;
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
