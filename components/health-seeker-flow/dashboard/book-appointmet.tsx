import { ScrollView, Text, View, StyleSheet } from "react-native";
import { DatePicker, HourPicker } from "../../../utilities/date-component";
import { Textstyles } from "../../../constants/fontsize";
import { CustomButton } from "../../../utilities/buttons";
import { router } from "expo-router";

const BookAppointmentDetails = () => {
  const payment = () => {
    router.push("/dashboard/payment");
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={[Textstyles.text_small, styles.sectionTitle]}>
          Select date
        </Text>
        <DatePicker
          setBirthDate={(value: string) =>
            console.log("Birth date set to:", value)
          }
          birthDate="1990-01-01"
          closeModal={(value: boolean) => console.log("Modal closed:", value)}
          style={styles.datePicker}
        />
        <Text style={[Textstyles.text_small, styles.sectionTitle]}>
          Select hour
        </Text>
        <HourPicker selectedHour={1} />
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton Textname="Next" onPress={() => payment()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  scrollContent: {
    gap: 16, // equivalent to gap-y-4
    padding: 24, // equivalent to p-6
  },
  sectionTitle: {
    fontWeight: "900",
  },
  datePicker: {
    backgroundColor: "white",
  },
  buttonContainer: {
    paddingBottom: 24,
    paddingHorizontal: 24,
  },
});

export default BookAppointmentDetails;
