import { Text, TouchableOpacity } from "react-native";

export const OptionButton: React.FC<OptionButtonProps> = ({
    optionName,
    isSelected,
    onSelect,
    width,
}) => {
    return (
        <TouchableOpacity
            onPress={onSelect}
            style={{ width: typeof width === "number" ? width : undefined }} // Ensure width is a number or undefined
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