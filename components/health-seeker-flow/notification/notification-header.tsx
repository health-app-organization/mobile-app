import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { primarycolor } from "../../../constants/colors";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

interface CustomHeaderProps {
  title?: string;
  onBackPress?: () => void;
  rightIcon?: any;
  onRightIconPress?: () => void;
  profileName?: string;
  profileCompletion?: string;
}

const HeaderWithTitleAndBackButton: React.FC<CustomHeaderProps> = ({
  title,
  onBackPress,
}) => {
  //   const navigation = useNavigation();

  const goBack = () => {
    router.back();
  };

  return (
    <View style={styles.headerContainer}>
      <StatusBar style="dark" />

      <View style={styles.headerContent}>
        <TouchableOpacity
          //   onPress={() => (onBackPress ? onBackPress() : navigation.goBack())}
          onPress={goBack}
          style={styles.backButton}
        >
          <Ionicons name="chevron-back" size={28} color="white" />
        </TouchableOpacity>
        <Text style={styles.titleText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: primarycolor,
    paddingTop: 40, // Adjust based on your status bar height
    paddingBottom: 16, // Adjust for bottom padding if needed
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 8, // Adds spacing between icon and title
  },
  titleText: {
    color: "white",
    fontSize: 24, // text-2xl equivalent
    fontWeight: "bold",
  },
});

export default HeaderWithTitleAndBackButton;
