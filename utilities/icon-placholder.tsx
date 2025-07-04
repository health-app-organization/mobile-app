import { View } from "react-native";

export const IconPlaceholder: React.FC<IconPlaceholderProps> = ({
    backgroundColor,
    width,
    height,
    Icon,
}) => {
    return (
        <View
            style={{ backgroundColor: backgroundColor, width: width, height: height }}
            className="flex justify-center items-center rounded-full"
        >
            {Icon}
        </View>
    );
};