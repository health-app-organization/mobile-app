import { Image, Text, View } from "react-native";
import APP from "../../../assets/images/free.png";

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
    title,
    doctorName,
    dateTime,
}) => {
    return (
        <View className="flex-row items-center p-4 bg-white rounded-lg shadow-md max-w-sm">
            {/* Image Section */}
            <View className="p-4 bg-[#0099B833] rounded-lg mr-4 flex items-center justify-center">
                <Image
                    source={APP} // Replace with your actual image path
                    className="w-8 h-8"
                />
            </View>

            {/* Content Section */}
            <View className="flex-1">
                <Text className="text-lg font-semibold text-black capitalize">
                    {title}
                </Text>
                <Text className="text-gray-500 font-medium">{doctorName}</Text>
                <Text className="text-gray-400 text-sm">{dateTime}</Text>
            </View>
        </View>
    );
};