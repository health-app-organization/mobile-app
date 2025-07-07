// import { Ionicons } from "@expo/vector-icons";
// import { useState } from "react";
// import { Modal, ScrollView, Text, TouchableOpacity, View } from "react-native";
// import { Textstyles } from "../constants/fontsize";

// export const CustomDropdownWithHeader: React.FC<CustomDropdownProps> = ({
//   headerText,
//   options = [],
//   placeholder,
//   onChange,
//   disabled,
//   value,
//   leftIcon,
//   label,
//   required,
// }) => {
//   const [selectedValue, setSelectedValue] = useState(value);
//   const [showOptions, setShowOptions] = useState(false); // State to show/hide options

//   return (
//     <View className="w-full">
//       {/* Input Header */}
//       {headerText && (
//         <Text
//           className="text-lg font-bold mb-2"
//           style={[Textstyles.text_cmedium]}
//         >
//           {headerText}
//         </Text>
//       )}
//       {label && (
//         <View className="flex-row">
//           <Text className="font-normal text-base">{label}</Text>
//           {required && <Text style={{ color: "#A30202" }}>*</Text>}
//         </View>
//       )}

//       {/* Dropdown Field */}
//       <TouchableOpacity
//         className="relative border border-primary rounded-lg p-4"
//         onPress={() => setShowOptions(!showOptions)} // Toggle options visibility
//         disabled={disabled}
//       >
//         {leftIcon && (
//           <View className="absolute left-4 top-3 z-10">{leftIcon}</View>
//         )}
//         <Text className="flex items-center justify-center">
//           {selectedValue ? (
//             options.find((option) => option.value === selectedValue)?.label
//           ) : (
//             <View className="flex-row items-center justify-between w-full">
//               <Text className="font-normal text-base text-greyText">
//                 {placeholder}
//               </Text>
//               <Ionicons name="chevron-down" size={20} color="black" />
//             </View>
//           )}
//         </Text>
//       </TouchableOpacity>

//       {/* Options Modal */}
//       {showOptions && (
//         <Modal
//           transparent={true}
//           animationType="slide"
//           visible={showOptions}
//           onRequestClose={() => setShowOptions(false)}
//           style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
//         >
//           <View className="flex-1 h-screen w-full bg-[#00000050]">
//             <View className="flex-1 justify-center items-center">
//               <View className="w-[350px] bg-white rounded-xl py-3 px-4 border border-primary">
//                 <TouchableOpacity
//                   className="p-4 bg-gray-200 rounded-lg flex-row justify-between"
//                   onPress={() => setShowOptions(false)}
//                 >
//                   <Text className="text-center font-normal text-base text-greyText">
//                     Select Option
//                   </Text>
//                   <Ionicons name="chevron-up" size={20} color="black" />
//                 </TouchableOpacity>
//                 <ScrollView
//                   showsVerticalScrollIndicator={false}
//                   style={{ maxHeight: 400 }}
//                 >
//                   {options.map((option) => (
//                     <TouchableOpacity
//                       key={option.value}
//                       className="p-4"
//                       onPress={() => {
//                         setSelectedValue(option.value);
//                         setShowOptions(false);
//                         if (onChange) {
//                           onChange(option.value);
//                         }
//                       }}
//                     >
//                       <Text className="font-normal text-base text-greyText">
//                         {option.label}
//                       </Text>
//                     </TouchableOpacity>
//                   ))}
//                 </ScrollView>
//               </View>
//             </View>
//           </View>
//         </Modal>
//       )}
//     </View>
//   );
// };

import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Textstyles } from "../constants/fontsize";

interface CustomDropdownProps {
  headerText?: string;
  options?: Array<{ label: string; value: string }>;
  placeholder?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  value?: string;
  leftIcon?: React.ReactNode;
  label?: string;
  required?: boolean;
}

export const CustomDropdownWithHeader: React.FC<CustomDropdownProps> = ({
  headerText,
  options = [],
  placeholder,
  onChange,
  disabled,
  value,
  leftIcon,
  label,
  required,
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <View style={styles.container}>
      {/* Input Header */}
      {headerText && (
        <Text style={[Textstyles.text_cmedium, styles.headerText]}>
          {headerText}
        </Text>
      )}
      {label && (
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
          {required && <Text style={styles.requiredIndicator}>*</Text>}
        </View>
      )}

      {/* Dropdown Field */}
      <TouchableOpacity
        style={[styles.dropdownField, disabled && styles.disabledField]}
        onPress={() => setShowOptions(!showOptions)}
        disabled={disabled}
      >
        {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
        <View style={styles.dropdownContent}>
          {selectedValue ? (
            <Text style={styles.selectedValue}>
              {options.find((option) => option.value === selectedValue)?.label}
            </Text>
          ) : (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderText}>{placeholder}</Text>
              <Ionicons name="chevron-down" size={20} color="black" />
            </View>
          )}
        </View>
      </TouchableOpacity>

      {/* Options Modal */}
      {showOptions && (
        <Modal
          transparent={true}
          animationType="slide"
          visible={showOptions}
          onRequestClose={() => setShowOptions(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.optionsContainer}>
                <TouchableOpacity
                  style={styles.modalHeader}
                  onPress={() => setShowOptions(false)}
                >
                  <Text style={styles.modalHeaderText}>Select Option</Text>
                  <Ionicons name="chevron-up" size={20} color="black" />
                </TouchableOpacity>
                <ScrollView
                  showsVerticalScrollIndicator={false}
                  style={styles.optionsScrollView}
                >
                  {options.map((option) => (
                    <TouchableOpacity
                      key={option.value}
                      style={styles.optionItem}
                      onPress={() => {
                        setSelectedValue(option.value);
                        setShowOptions(false);
                        onChange?.(option.value);
                      }}
                    >
                      <Text style={styles.optionText}>{option.label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  headerText: {
    marginBottom: 8,
    fontWeight: "bold",
    fontSize: 18,
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontFamily: "normal",
    fontSize: 16,
  },
  requiredIndicator: {
    color: "#A30202",
  },
  dropdownField: {
    position: "relative",
    borderWidth: 1,
    borderColor: "#0099B8", // primary color
    borderRadius: 8,
    padding: 16,
  },
  disabledField: {
    opacity: 0.5,
  },
  leftIconContainer: {
    position: "absolute",
    left: 16,
    top: 12,
    zIndex: 10,
  },
  dropdownContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedValue: {
    fontFamily: "normal",
    fontSize: 16,
  },
  placeholderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  placeholderText: {
    fontFamily: "normal",
    fontSize: 16,
    color: "#9E9E9E", // greyText
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsContainer: {
    width: 350,
    backgroundColor: "white",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#0099B8", // primary color
  },
  modalHeader: {
    padding: 16,
    backgroundColor: "#EEEEEE", // gray-200
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  modalHeaderText: {
    textAlign: "center",
    fontFamily: "normal",
    fontSize: 16,
    color: "#9E9E9E", // greyText
  },
  optionsScrollView: {
    maxHeight: 400,
  },
  optionItem: {
    padding: 16,
  },
  optionText: {
    fontFamily: "normal",
    fontSize: 16,
    color: "#9E9E9E", // greyText
  },
});

export default CustomDropdownWithHeader;
