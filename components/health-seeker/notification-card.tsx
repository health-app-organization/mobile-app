import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";
import { StackNavigation } from "types/stack";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Textstyles } from "constants/fontsize";

export const NotificationCard: React.FC<NotificationCardProps> = ({
    id,
    title,
    description,
    type,
    time,
}) => {
    const navigation = useNavigation<StackNavigation>();

    return (
        <View className="flex-row justify-between items-start p-4 border-b border-gray-300 w-full">
            <View className="flex-row items-start">
                <View className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                    {type === "order-details" ? (
                        <MaterialCommunityIcons
                            name="hospital-marker"
                            size={24}
                            color="#0099B8"
                        />
                    ) : type === "details" ? (
                        <FontAwesome5 name="hospital" size={16} color="#0099B8" />
                    ) : (
                        <FontAwesome5 name="ambulance" size={12} color="#0099B8" />
                    )}
                </View>
                <View className="w-4" />
                <View className="w-[85%]">
                    <View className="flex-row items-center justify-between">
                        <Text style={[Textstyles.text_x16small]}>{title}</Text>
                        <Text style={[Textstyles.text_xsma, { color: "black" }]}>
                            {time}
                        </Text>
                    </View>
                    <Text style={[Textstyles.text_xsma]}>{description}</Text>
                    {type === "order-details" ? (
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("health-seeker", {
                                    screen: "safe-area-view",
                                    id,
                                    params: { screen: "drug-referral-details" },
                                })
                            }
                            className=""
                        >
                            <Text
                                className="text-[#0099B8] font-extrabold"
                                style={{ textDecorationLine: "underline" }}
                            >
                                View order details
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        type === "details" && (
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("health-seeker", {
                                        screen: "safe-area-view",
                                        id,
                                        params: { screen: "referral-details" },
                                    })
                                }
                                className=""
                            >
                                <Text
                                    className="text-[#0099B8] font-extrabold"
                                    style={{ textDecorationLine: "underline" }}
                                >
                                    View details
                                </Text>
                            </TouchableOpacity>
                        )
                    )}
                </View>
            </View>
        </View>
    );
};
