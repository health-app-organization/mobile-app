import { primarycolor } from "constants/color";
import { customstyle } from "constants/customstyle";
import { Textstyles } from "constants/fontsize";
import { Text } from "react-native";
import { View } from "react-native";

export const Box: React.FC<BoxProps> = ({ inputText }) => {
    return (
        <View
            style={[customstyle.boxstyle, { borderColor: inputText ? primarycolor : "#D1D5DB" }]}
            className="flex justify-center items-center"
        >
            <Text style={[Textstyles.text_medium]}>{inputText}</Text>
        </View>
    );
};