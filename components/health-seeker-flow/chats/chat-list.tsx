import { router } from "expo-router";
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
  const openChat = () => {
    router.push("/chat");
  };
  return (
    <>
      <TouchableOpacity
        style={[
          styles.container,
          unreadCount && unreadCount > 0
            ? styles.unreadContainer
            : styles.readContainer,
        ]}
        onPress={onPress || openChat}
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
