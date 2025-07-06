import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { Textstyles } from "../../../constants/fontsize";
import { router } from "expo-router";

interface NotificationCardProps {
  id: string | number;
  title: string;
  description: string;
  type: "order-details" | "details" | string;
  time: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  id,
  title,
  description,
  type,
  time,
}) => {
  const handlePress = () => {
    // Implement navigation logic here if needed
    console.log(`Navigating to details for notification ID: ${id}`);
    if (type === "order-details") {
      router.push(
        `/(notification)/notification-details?type=order-details&id=${id}`
      );
    } else if (type === "details") {
      router.push(`/(notification)/referral-details?type=details&id=${id}`);
    } else if (type === "emergency") {
      router.push(
        `/(notification)/notification-details?type=emergency&id=${id}`
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.iconContainer}>
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
        <View style={styles.spacer} />
        <View style={styles.textContainer}>
          <View style={styles.header}>
            <Text style={[Textstyles.text_x16small]}>{title}</Text>
            <Text style={[Textstyles.text_xsma, styles.timeText]}>{time}</Text>
          </View>
          <Text style={[Textstyles.text_xsma, styles.description]}>
            {description}
          </Text>
          {type === "order-details" ? (
            <TouchableOpacity onPress={handlePress}>
              <Text style={styles.linkText}>View order details</Text>
            </TouchableOpacity>
          ) : (
            type === "details" && (
              <TouchableOpacity onPress={handlePress}>
                <Text style={styles.linkText}>View details</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#D1D5DB", // gray-300 equivalent
    width: "100%",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  spacer: {
    width: 16,
  },
  textContainer: {
    width: "85%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  timeText: {
    color: "black",
  },
  description: {
    marginBottom: 8,
  },
  linkText: {
    color: "#0099B8",
    fontWeight: "800", // font-extrabold equivalent
    textDecorationLine: "underline",
  },
});

export default NotificationCard;
