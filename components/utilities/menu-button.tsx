import { TouchableOpacity } from "react-native";

export const MenuButton: React.FC<MenuButtonProps> = ({
    icon,
    text,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={{ elevation: 4 }}
            className="w-28 h-28 rounded-2xl bg-white flex justify-center items-center px-3 shadow-sm shadow-black"
            onPress={onPress}
        >
            {icon}
            {text}
        </TouchableOpacity>
    );
};