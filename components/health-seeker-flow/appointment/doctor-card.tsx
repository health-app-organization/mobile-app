import { Image, Text, View, StyleSheet } from "react-native";
import { lightGreen, lightBlue } from "../../../constants/colors";
import { Textstyles } from "../../../constants/fontsize";
import { CustomButton } from "../../../utilities/buttons";

interface DoctorCardProps {
  name: string;
  session: string;
  time: string;
  imageSource: any;
  onPress: () => void;
  status?: "upcoming" | "completed" | "cancelled";
}

export const DoctorCard: React.FC<DoctorCardProps> = ({
  name,
  session,
  time,
  imageSource,
  onPress,
  status = "upcoming",
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={[Textstyles.text_medium, styles.nameText]}>{name}</Text>
        <View style={styles.sessionContainer}>
          <Text style={styles.sessionText}>{session}</Text>
          <Text style={styles.timeText}>{time}</Text>
        </View>
        <CustomButton
          Textname="View Details"
          backgroundColor={status === "upcoming" ? lightGreen : lightBlue}
          TextColor="black"
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default DoctorCard;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
  },
  imageContainer: {
    aspectRatio: 1,
    width: "50%",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 12,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  nameText: {
    textAlign: "center",
  },
  sessionContainer: {
    marginVertical: 8,
  },
  sessionText: {
    textAlign: "center",
  },
  timeText: {
    textAlign: "center",
  },
});
