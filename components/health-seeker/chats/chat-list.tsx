import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";

export const ChatList: React.FC<ChatListProps> = ({
    profileImage,
    name,
    message,
    time,
    unreadCount,
}) => {
    return (
        <>
            <View className="h-1" />
            <TouchableOpacity
                style={{
                    backgroundColor:
                        unreadCount! > 0 ? "rgba(0, 153, 184, 0.05)" : "white",
                }}
                className="flex-row items-center p-4 rounded-lg"
                onPress={() => console.log("Open chat")}
            >
                {/* Profile Image */}
                <Image
                    source={
                        typeof profileImage === "string"
                            ? { uri: profileImage }
                            : profileImage
                    }
                    className="w-12 h-12 rounded-full"
                />
                {/* Name and Message */}
                <View className="flex-1 ml-4">
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "600",
                            lineHeight: 24,
                            textAlign: "left",
                        }}
                        className=" font-bold"
                    >
                        {name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "300",
                            lineHeight: 18,
                            textAlign: "left",
                        }}
                        className=" text-black"
                    >
                        {message}
                    </Text>
                </View>
                {/* Time and Unread Messages Badge */}
                <View className="items-end">
                    <Text className="text-sm text-gray-500 mr-8">{time}</Text>
                    {unreadCount! > 0 && (
                        <View className="bg-[#0099B8] rounded-full w-4 justify-center items-center mt-1">
                            <Text className="text-white text-xs">{unreadCount}</Text>
                        </View>
                    )}
                </View>
            </TouchableOpacity>
            <View className="h-1" />
        </>
    );
};