// import { TouchableOpacity, View, Text, Image } from "react-native";

// interface ChatListProps {
//   profileImage: string | { uri: string };
//   name: string;
//   message: string;
//   time: string;
//   unreadCount?: number;
//   onPress?: () => void;
// }

// export const ChatList: React.FC<ChatListProps> = ({
//   profileImage,
//   name,
//   message,
//   time,
//   unreadCount,
//   onPress,
// }) => {
//   return (
//     <>
//       <TouchableOpacity
//         style={{
//           backgroundColor:
//             unreadCount! > 0 ? "rgba(0, 153, 184, 0.05)" : "white",
//         }}
//         className="flex-row items-center p-4 rounded-lg"
//         onPress={() => {
//           if (onPress) {
//             onPress();
//           } else {
//             // navigation.navigate("health-seeker", {
//             //     screen: "safe-area-view",
//             //     params: { screen: "chat", name: "Damilare" },
//             // })
//           }
//         }}
//       >
//         {/* Profile Image */}
//         <Image
//           source={
//             typeof profileImage === "string"
//               ? { uri: profileImage }
//               : profileImage
//           }
//           className="w-12 h-12 rounded-full"
//         />
//         {/* Name and Message */}
//         <View className="flex-1 ml-4">
//           <Text
//             style={{
//               fontSize: 16,
//               fontWeight: "600",
//               lineHeight: 24,
//               textAlign: "left",
//             }}
//             className=" font-bold"
//           >
//             {name}
//           </Text>
//           <Text
//             style={{
//               fontSize: 12,
//               fontWeight: "300",
//               lineHeight: 18,
//               textAlign: "left",
//             }}
//             className=" text-black"
//           >
//             {message}
//           </Text>
//         </View>
//         {/* Time and Unread Messages Badge */}
//         <View className="items-end">
//           <Text className="text-sm text-gray-500 mr-8">{time}</Text>
//           {unreadCount! > 0 && (
//             <View className="bg-[#0099B8] rounded-full w-4 justify-center items-center mt-1">
//               <Text className="text-white text-xs">{unreadCount}</Text>
//             </View>
//           )}
//         </View>
//       </TouchableOpacity>
//       <View className="h-1" />
//     </>
//   );
// };

import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native";

interface ChatListProps {
  profileImage: string | { uri: string };
  name: string;
  message: string;
  time: string;
  unreadCount?: number;
  onPress?: () => void;
}

export const ChatList: React.FC<ChatListProps> = ({
  profileImage,
  name,
  message,
  time,
  unreadCount,
  onPress,
}) => {
  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          unreadCount && unreadCount > 0
            ? styles.unreadContainer
            : styles.readContainer,
        ]}
        onPress={() => {
          onPress?.();
          // Alternative navigation if needed:
          // navigation.navigate("health-seeker", {
          //   screen: "safe-area-view",
          //   params: { screen: "chat", name: "Damilare" },
          // })
        }}
      >
        {/* Profile Image */}
        <Image
          source={
            typeof profileImage === "string"
              ? { uri: profileImage }
              : profileImage
          }
          style={styles.profileImage}
        />

        {/* Name and Message */}
        <View style={styles.messageContainer}>
          <Text style={styles.nameText}>{name}</Text>
          <Text style={styles.messageText}>{message}</Text>
        </View>

        {/* Time and Unread Messages Badge */}
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>{time}</Text>
          {unreadCount && unreadCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  unreadContainer: {
    backgroundColor: "rgba(0, 153, 184, 0.05)",
  },
  readContainer: {
    backgroundColor: "white",
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  messageContainer: {
    flex: 1,
    marginLeft: 16,
  },
  nameText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "left",
  },
  messageText: {
    fontSize: 12,
    fontWeight: "300",
    lineHeight: 18,
    textAlign: "left",
    color: "black",
  },
  timeContainer: {
    alignItems: "flex-end",
  },
  timeText: {
    fontSize: 14,
    color: "#6b7280", // gray-500 equivalent
    marginRight: 32,
  },
  badge: {
    backgroundColor: "#0099B8",
    borderRadius: 12,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
  },
});

export default ChatList;
