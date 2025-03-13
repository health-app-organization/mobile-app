import { Image, Text, View } from "react-native";

export const StatsCard: React.FC<StatsCardProps> = ({ icon, value, label }) => {
    return (
        <View className="w-[50px] h-[87px]">
            <View className="w-[50px] h-[50px] flex justify-center items-center rounded-[25px] bg-[#D9D9D980] mb-2">
                <Image source={icon} className="w-6 h-6" resizeMode="cover" />
            </View>
            <View className="w-[46px] h-[32px]">
                <Text className="text-center font-[500] text-[12px] leading-4">
                    {value}
                </Text>
                <Text className="text-center font-[400] text-[11px] leading-4">
                    {label}
                </Text>
            </View>
        </View>
    );
};