import { ArrowDownIcon } from "assets/iconsvg/Svgicon";
import { greycolortwo, primarycolor } from "constants/color";
import { customstyle, radioButtonStyles } from "constants/customstyle";
import { Textstyles } from "constants/fontsize";
import { Text, TouchableOpacity, View } from "react-native";

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

export const CustomSelectRadioBox: React.FC<CustomSelectRadioProps> = ({
    options,
    selected,
    setSelected,
}) => {
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

export const CustomRadioSingleOption: React.FC<
    CustomRadioSingleOptionProps
> = ({ value, onPress, selected }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="border border-primary bg-[#f3f3f3] rounded-lg py-4 px-2 flex-row items-center"
        >
            <View style={radioButtonStyles.radioButton}>
                {selected && <View style={radioButtonStyles.radioButtonSelected} />}
            </View>
            <Text style={[Textstyles.text_small]} className="ml-4">
                {value}
            </Text>
        </TouchableOpacity>
    );
};

interface SelectionPickerProps {
    Title: string;
    onPress: () => void;
}
export const SelectionPicker: React.FC<SelectionPickerProps> = ({
    Title,
    onPress,
}) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => onPress()}
                className="justify-between px-3 flex-row items-center"
                style={{
                    borderColor: primarycolor,
                    borderWidth: 1,
                    height: 50,
                    borderRadius: 10,
                }}
            >
                <Text style={[Textstyles.text_xmedium]}>{Title}</Text>
                <ArrowDownIcon />
            </TouchableOpacity>
        </>
    );
};