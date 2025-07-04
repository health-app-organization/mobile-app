// import {
//   Platform,
//   TouchableOpacity,
//   TouchableOpacityProps,
// } from "react-native";

// export const MenuButton: React.FC<MenuButtonProps & TouchableOpacityProps> = ({
//   icon,
//   text,
//   onPress,
//   ...props
// }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         elevation: 4,
//         shadowColor: "black",
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: Platform.OS === "ios" ? 0.2 : 0.1,
//         shadowRadius: 1,
//       }}
//       className="w-28 h-28 rounded-lg bg-white flex justify-center items-center px-3 shadow-sm shadow-black"
//       onPress={onPress}
//       {...props}
//     >
//       {icon}
//       {text}
//     </TouchableOpacity>
//   );
// };

import {
  Platform,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

interface MenuButtonProps {
  icon: React.ReactNode;
  text: React.ReactNode;
}

export const MenuButton: React.FC<MenuButtonProps & TouchableOpacityProps> = ({
  icon,
  text,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles.shadow]}
      onPress={onPress}
      {...props}
    >
      {icon}
      {text}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 112, // equivalent to w-28 (28 * 4 = 112)
    height: 112, // equivalent to h-28
    borderRadius: 8, // equivalent to rounded-lg
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12, // equivalent to px-3 (3 * 4 = 12)
    elevation: 4, // for Android shadow
  },
  shadow: {
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: Platform.OS === "ios" ? 0.2 : 0.1,
    shadowRadius: 1,
  },
});
