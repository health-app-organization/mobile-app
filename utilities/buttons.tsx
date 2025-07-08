import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { primarycolor } from "../constants/colors";
import { customstyle, customstyle2 } from "../constants/customstyle";
import { Textstyles } from "../constants/fontsize";

interface CustomButtonProps {
  Textname: string;
  onPress: () => void;
  backgroundColor?: string;
  TextColor?: string;
  borderWidth?: number;
  borderColor?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  width?: string;
  height?: string;
  isLoading?: boolean;
  disabled?: boolean;
  props?: any;
}

export const CustomButton: React.FC<
  CustomButtonProps & TouchableOpacityProps
> = ({
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
  disabled,
  ...extraProps
}) => {
  return (
    <>
      <TouchableOpacity
        {...extraProps}
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

export const CustomButtonMedium: React.FC<CustomButtonProps> = ({
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

export const CustomButtonSmall: React.FC<CustomButtonProps> = ({
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

export const CustomButtonSmall2: React.FC<CustomButtonProps> = ({
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

export const CustomButtonCall: React.FC<CustomButtonProps> = ({
  Textname,
  onPress,
  backgroundColor,
  TextColor,
  borderWidth,
  borderColor,
  leftIcon,
  rightIcon,
  props,
  width = 20, // Default width set to 50
  height = 20, // Default height set to 50
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: backgroundColor,
          borderWidth: borderWidth || 0,
          borderColor: borderColor || null,
          width: width, // Set the width (default 50)
          height: height, // Set the height (default 50)
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
          borderRadius: typeof width === "number" ? width / 2 : 0, // Make the button circular based on width/height
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
