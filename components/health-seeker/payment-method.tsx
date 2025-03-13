import { Text, TouchableOpacity, View } from "react-native";

export const PaymentMethod: React.FC<PaymentMethodProps> = ({
    selectedMethod,
    onSelect,
}) => {
    const paymentOptions = [
        { id: "paystack", label: "PayStack" },
        { id: "interswitch", label: "Interswitch" },
    ];

    return (
        <View className="flex flex-col space-y-3">
            {paymentOptions.map((option) => (
                <TouchableOpacity
                    key={option.id}
                    className={`flex flex-row items-center border p-4 rounded-lg ${selectedMethod === option.id
                        ? "border-[#0099b8]" // Highlighted border for selected method
                        : "border-gray-300"
                        }`}
                    onPress={() => onSelect(option.id)} // Set selected method on press
                >
                    <View
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === option.id
                            ? "border-[#0099b8]"
                            : "border-gray-300"
                            }`}
                    >
                        {selectedMethod === option.id && (
                            <View className="w-3 h-3 bg-[#0099b8] rounded-full" /> // Filled circle for selected method
                        )}
                    </View>
                    <Text className="ml-3 text-lg">{option.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};