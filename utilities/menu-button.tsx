import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const MenuButton: React.FC<MenuButtonProps & TouchableOpacityProps> = ({
    icon,
    text,
    onPress,
    ...props
}) => {
    return (
        <TouchableOpacity
            style={{ elevation: 4 }}
            className="w-28 h-28 rounded-lg bg-white flex justify-center items-center px-3 shadow-sm shadow-black"
            onPress={onPress}
            {...props}
        >
            {icon}
            {text}
        </TouchableOpacity>
    );
};