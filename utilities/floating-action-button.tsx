import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface FloatingActionButtonProps {
  onPress: () => void;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="w-16 h-16 bg-[#00A8CC] rounded-full items-center justify-center absolute bottom-20 right-5 shadow-lg"
      onPress={onPress}
    >
      <MaterialIcons name="add" size={40} color="white" />
    </TouchableOpacity>
  );
};
