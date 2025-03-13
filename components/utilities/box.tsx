import { customstyle } from "constants/customstyle";
import { Textstyles } from "constants/fontsize";
import { Text } from "react-native";
import { View } from "react-native";

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