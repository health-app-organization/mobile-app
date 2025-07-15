// import { useState } from "react";
// import {
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Modal,
//   StyleSheet,
// } from "react-native";
// import DateTimePicker, { DateType } from "react-native-ui-datepicker";
// import { primarycolor } from "../../../constants/colors";
// import { Textstyles } from "../../../constants/fontsize";
// import CustomDropdownWithHeader from "../../../utilities/dropdowns";
// import { CustomInputWithHeader } from "../../../utilities/inputs";
// import { formatDate } from "../../../utils/utility"; // e.g. formatDate = (date) => date.toDateString()

// const MedicineReminderAdd: React.FC = () => {
//   const [medicineName, setMedicineName] = useState<string>("");
//   const [dosage, setDosage] = useState<string>("");
//   const [selectedDate, setSelectedDate] = useState<DateType>(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [formattedDate, setFormattedDate] = useState("");

//   const [time, setTime] = useState<string>("");
//   const [amPm, setAmPm] = useState<string>("am");
//   const [guideline, setGuideline] = useState<string>("");

//   const handleDatePick = (e: { date: DateType }) => {
//     setSelectedDate(e.date);
//     setFormattedDate(formatDate(e.date));
//     setShowDatePicker(false);
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : undefined}
//       style={styles.container}
//       keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
//     >
//       <ScrollView contentContainerStyle={styles.content}>
//         <CustomInputWithHeader
//           headerText="Medicine Name"
//           placeholder="Enter Medicine Name"
//           value={medicineName}
//           onChange={setMedicineName}
//         />

//         <CustomDropdownWithHeader
//           headerText="Dosage"
//           options={[{ value: "dos1", label: "dos1" }]}
//           placeholder="Select Dosage"
//           value={dosage}
//           onChange={setDosage}
//         />

//         {/* Date as Input */}
//         <Text style={[Textstyles.text_cmedium, styles.label]}>Select Date</Text>
//         <TouchableOpacity onPress={() => setShowDatePicker(true)}>
//           <TextInput
//             placeholder="Pick a date"
//             value={formattedDate}
//             editable={false}
//             style={styles.dateInput}
//             pointerEvents="none"
//           />
//         </TouchableOpacity>

//         {/* Time Input */}
//         <Text style={[Textstyles.text_cmedium, styles.label]}>Select Time</Text>
//         <View style={styles.timeRow}>
//           <TextInput
//             placeholder="12:12"
//             placeholderTextColor="grey"
//             style={styles.timeInput}
//             value={time}
//             onChangeText={setTime}
//             keyboardType="numbers-and-punctuation"
//           />
//           <View style={styles.amPmWrapper}>
//             <CustomDropdownWithHeader
//               options={[
//                 { value: "am", label: "AM" },
//                 { value: "pm", label: "PM" },
//               ]}
//               placeholder="AM/PM"
//               value={amPm}
//               onChange={setAmPm}
//             />
//           </View>
//         </View>

//         <CustomInputWithHeader
//           headerText="Guideline"
//           placeholder="Enter Guideline"
//           value={guideline}
//           onChange={setGuideline}
//         />

//         {/* Date Picker Modal */}
//         <Modal visible={showDatePicker} transparent animationType="slide">
//           <View style={styles.modalOverlay}>
//             <View style={styles.datePickerModal}>
//               <TouchableOpacity
//                 onPress={() => setShowDatePicker(false)}
//                 style={styles.closeBtn}
//               >
//                 <Text style={styles.closeText}>Close</Text>
//               </TouchableOpacity>
//               <DateTimePicker
//                 mode="single"
//                 date={selectedDate}
//                 onChange={handleDatePick}
//                 selectedTextStyle={{ color: "black" }}
//                 selectedItemColor={primarycolor}
//               />
//             </View>
//           </View>
//         </Modal>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default MedicineReminderAdd;

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
//   backgroundColor: "#fff",
// },
// content: {
//   paddingHorizontal: 16,
//   paddingBottom: 100,
//   paddingTop: 24,
// },
// label: {
//   marginBottom: 8,
//   marginTop: 16,
// },
// dateInput: {
//   borderWidth: 1,
//   borderColor: "#ccc",
//   borderRadius: 8,
//   paddingHorizontal: 12,
//   paddingVertical: 12,
//   fontSize: 16,
//   color: "#000",
// },
// timeRow: {
//   flexDirection: "row",
//   alignItems: "center",
//   gap: 12,
//   marginBottom: 16,
// },
// timeInput: {
//   flex: 1,
//   borderWidth: 1,
//   borderColor: "#ccc",
//   borderStyle: "dashed",
//   borderRadius: 8,
//   paddingHorizontal: 12,
//   paddingVertical: 10,
//   fontSize: 16,
//   color: "#000",
// },
// amPmWrapper: {
//   width: 100,
// },
// modalOverlay: {
//   flex: 1,
//   justifyContent: "center",
//   backgroundColor: "rgba(0,0,0,0.4)",
//   padding: 20,
// },
// datePickerModal: {
//   backgroundColor: "#fff",
//   borderRadius: 12,
//   padding: 16,
// },
// closeBtn: {
//   alignSelf: "flex-end",
//   marginBottom: 10,
// },
// closeText: {
//   fontSize: 16,
//   color: primarycolor,
//   fontWeight: "bold",
// },
// });

import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import DateTimePicker, { DateType } from "react-native-ui-datepicker";
import { primarycolor } from "../../../constants/colors";
import { Textstyles } from "../../../constants/fontsize";
import CustomDropdownWithHeader from "../../../utilities/dropdowns";
import { CustomInputWithHeader } from "../../../utilities/inputs";
import { formatDate } from "../../../utils/utility";
import { RootState, useAppDispatch } from "../../../redux/store";
import { medicalReminder } from "../../../redux/slices/medical-reminder";
import Toast from "react-native-toast-message";
import moment from "moment";
import { useSelector } from "react-redux";

const MedicineReminderAdd: React.FC<{ onSaveSuccess: () => void }> = ({
  onSaveSuccess,
}) => {
  const dispatch = useAppDispatch();
  const [medicineName, setMedicineName] = useState<string>("");
  const [dosage, setDosage] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<DateType>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [time, setTime] = useState<string>("");
  const [amPm, setAmPm] = useState<string>("am");
  const [guideline, setGuideline] = useState<string>("");

  const loading = useSelector(
    (state: RootState) => state.medicalReminder.loading
  );

  const recurrenceOptions = [
    { value: "daily", label: "Daily" },
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];
  const [recurrence, setRecurrence] = useState<string>("daily");

  const handleDatePick = (e: { date: DateType }) => {
    setSelectedDate(e.date);
    setFormattedDate(formatDate(e.date));
    setShowDatePicker(false);
  };

  // const handleAddReminder = async () => {
  //   if (!medicineName || !dosage || !selectedDate || !time) {
  //     Toast.show({
  //       type: "info",
  //       text1: "Please fill all required fields",
  //     });
  //     return;
  //   }

  //   // Combine date and time
  //   const datePart = moment(selectedDate as Date).format("YYYY-MM-DD");
  //   const timePart = time.includes(":") ? time : `${time}:00`;

  //   // Create combined datetime string
  //   const dateTimeString = `${datePart}T${timePart}:00.000Z`;

  //   // Dispatch the reminder action
  //   await dispatch(
  //     medicalReminder({
  //       medicine: medicineName,
  //       dosage,
  //       startDate: dateTimeString,
  //       recurrence,
  //       times: timePart,
  //     })
  //   ).unwrap();

  //   // Reset form
  //   setMedicineName("");
  //   setDosage("");
  //   setSelectedDate(new Date());
  //   setFormattedDate("");
  //   setTime("");
  //   setAmPm("am");
  //   setGuideline("");

  //   // Notify parent component
  //   onSaveSuccess();
  // };

  const handleAddReminder = async () => {
    if (!medicineName || !dosage || !selectedDate || !time) {
      Toast.show({
        type: "info",
        text1: "Please fill all required fields",
      });
      return;
    }

    const datePart = moment(selectedDate as Date).format("YYYY-MM-DD");
    const timePart = time.includes(":") ? time : `${time}:00`;

    try {
      await dispatch(
        medicalReminder({
          medicine: medicineName,
          dosage,
          startDate: datePart,
          recurrence,
          times: [timePart], // ✅ FIXED
        })
      ).unwrap();

      // Reset form
      setMedicineName("");
      setDosage("");
      setSelectedDate(new Date());
      setFormattedDate("");
      setTime("");
      setAmPm("am");
      setGuideline("");

      onSaveSuccess();
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Failed to add reminder",
        text2: error?.message || "Server error",
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <CustomInputWithHeader
          headerText="Medicine Name*"
          placeholder="Enter Medicine Name"
          value={medicineName}
          onChange={setMedicineName}
        />

        <CustomInputWithHeader
          headerText="Dosage*"
          placeholder="Enter dosage (e.g., 2 tablets)"
          value={dosage}
          onChange={setDosage}
        />

        {/* Recurrence */}
        <CustomDropdownWithHeader
          headerText="Recurrence*"
          options={recurrenceOptions}
          placeholder="Select recurrence"
          value={recurrence}
          onChange={setRecurrence}
        />

        {/* Date */}
        <Text style={[Textstyles.text_cmedium, styles.label]}>
          Select Date*
        </Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <TextInput
            placeholder="Pick a date"
            value={formattedDate}
            editable={false}
            style={styles.dateInput}
            pointerEvents="none"
          />
        </TouchableOpacity>

        {/* Time */}
        <Text style={[Textstyles.text_cmedium, styles.label]}>
          Select Time*
        </Text>
        <View style={styles.timeRow}>
          <TextInput
            placeholder="HH:MM (e.g., 08:30)"
            placeholderTextColor="grey"
            style={styles.timeInput}
            value={time}
            onChangeText={setTime}
            keyboardType="numbers-and-punctuation"
          />
          <View style={styles.amPmWrapper}>
            <CustomDropdownWithHeader
              options={[
                { value: "am", label: "AM" },
                { value: "pm", label: "PM" },
              ]}
              placeholder="AM/PM"
              value={amPm}
              onChange={setAmPm}
            />
          </View>
        </View>

        <CustomInputWithHeader
          headerText="Guideline"
          placeholder="Additional instructions"
          value={guideline}
          onChange={setGuideline}
        />

        {/* Save Button */}
        <View style={styles.saveButtonContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={handleAddReminder}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.saveButtonText}>Save Reminder</Text>
            )}
          </TouchableOpacity>
        </View>

        {/* Date Picker Modal */}
        <Modal visible={showDatePicker} transparent animationType="slide">
          <View style={styles.modalOverlay}>
            <View style={styles.datePickerModal}>
              <TouchableOpacity
                onPress={() => setShowDatePicker(false)}
                style={styles.closeBtn}
              >
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
              <DateTimePicker
                mode="single"
                date={selectedDate}
                onChange={handleDatePick}
                selectedTextStyle={{ color: "black" }}
                selectedItemColor={primarycolor}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MedicineReminderAdd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingHorizontal: 16,
    paddingBottom: 100,
    paddingTop: 24,
  },
  label: {
    marginBottom: 8,
    marginTop: 16,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
    color: "#000",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },
  timeInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
  },
  amPmWrapper: {
    width: 100,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 20,
  },
  datePickerModal: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
  },
  closeBtn: {
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  closeText: {
    fontSize: 16,
    color: primarycolor,
    fontWeight: "bold",
  },

  saveButtonContainer: {
    marginTop: 24,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: primarycolor,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
