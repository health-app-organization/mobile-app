import { Text, View } from "react-native";
import { primarycolor } from "../constants/colors";
import { customstyle } from "../constants/customstyle";
import { Textstyles } from "../constants/fontsize";

interface BoxProps {
  inputText: string;
}

export const Box: React.FC<BoxProps> = ({ inputText }) => {
  return (
    <View
      style={[
        customstyle.boxstyle,
        {
          borderColor: inputText ? primarycolor : "#D1D5DB",
        },
      ]}
      className="flex justify-center items-center"
    >
      <Text style={[Textstyles.text_medium]}>{inputText}</Text>
    </View>
  );
};
